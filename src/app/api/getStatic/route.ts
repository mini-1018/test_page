import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    const download = searchParams.get('download');
    
    console.log('PDF 다운로드 요청:', { filename, download });

    const ALLOWED_FILES = [
      '코다_환경제품_카다로그.pdf',
    ];

    if (!filename || !ALLOWED_FILES.includes(filename)) {
      return NextResponse.json({ message: 'File not allowed' }, { status: 403 });
    }
    
    if (!filename || typeof filename !== 'string') {
      console.error('파일명이 없습니다:', filename);
      return NextResponse.json({ message: 'Filename is required' }, { status: 400 });
    }

    // 파일명 디코딩
    const decodedFilename = decodeURIComponent(filename);
    console.log('디코딩된 파일명:', decodedFilename);

    // 보안 검증
    if (decodedFilename.includes('..') || 
        decodedFilename.includes('/') || 
        decodedFilename.includes('\\')) {
      console.error('잘못된 파일명:', decodedFilename);
      return NextResponse.json({ message: 'Invalid filename' }, { status: 400 });
    }

    // 파일 확장자 검증
    if (!decodedFilename.toLowerCase().endsWith('.pdf')) {
      console.error('PDF 파일이 아닙니다:', decodedFilename);
      return NextResponse.json({ message: 'Only PDF files are allowed' }, { status: 400 });
    }

    // 서버 URL 설정
    const serverUrl = process.env.PDF_SERVER_URL || 'http://112.217.212.251:5310';
    const fileUrl = `${serverUrl}/downloads/${encodeURIComponent(decodedFilename)}`;
    
    console.log('외부 서버 요청 URL:', fileUrl);

    // fetch 설정
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(fileUrl, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Next.js API)',
          'Accept': 'application/pdf,*/*',
          'Accept-Encoding': 'gzip, deflate',
        },
        // Next.js에서 외부 HTTP 요청 허용
        cache: 'no-store',
      });

      clearTimeout(timeoutId);

      console.log('외부 서버 응답:', {
        status: response.status,
        statusText: response.statusText,
        contentType: response.headers.get('content-type'),
        contentLength: response.headers.get('content-length'),
      });
      
      if (!response.ok) {
        console.error('외부 서버 오류:', {
          status: response.status,
          statusText: response.statusText,
          url: fileUrl
        });

        if (response.status === 404) {
          return NextResponse.json({ 
            message: 'File not found',
            filename: decodedFilename 
          }, { status: 404 });
        }
        
        return NextResponse.json({ 
          message: 'Failed to fetch file from server',
          serverStatus: response.status,
          serverUrl: fileUrl
        }, { status: 502 });
      }

      const fileBuffer = await response.arrayBuffer();
      console.log('파일 다운로드 완료. 크기:', fileBuffer.byteLength, 'bytes');
      
      // Content-Disposition 설정
      const contentDisposition = download === 'true' 
        ? `attachment; filename*=UTF-8''${encodeURIComponent(decodedFilename)}`
        : `inline; filename*=UTF-8''${encodeURIComponent(decodedFilename)}`;
      
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': contentDisposition,
          'Content-Length': fileBuffer.byteLength.toString(),
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Accept-Ranges': 'bytes',
        },
      });

    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error('요청 타임아웃:', fileUrl);
        return NextResponse.json({ 
          message: 'Request timeout - file server not responding',
          timeout: 30000
        }, { status: 504 });
      }
      
      console.error('Fetch 오류 상세:', {
        name: fetchError instanceof Error ? fetchError.name : 'Unknown',
        message: fetchError instanceof Error ? fetchError.message : String(fetchError),
        cause: fetchError instanceof Error ? fetchError.cause : undefined,
      });
      
      return NextResponse.json({ 
        message: 'Network error while fetching file',
        error: fetchError instanceof Error ? fetchError.message : 'Unknown error'
      }, { status: 502 });
    }
    
  } catch (error) {
    console.error('PDF API 전체 오류:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json({
      message: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && {
        error: error instanceof Error ? error.message : String(error),
      })
    }, { status: 500 });
  }
}

// OPTIONS 메서드 처리 (CORS preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}