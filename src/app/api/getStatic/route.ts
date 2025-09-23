import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    const download = searchParams.get('download'); // 다운로드 여부 확인
    
    if (!filename || typeof filename !== 'string') {
      return NextResponse.json({ message: 'Filename is required' }, { status: 400 });
    }

    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json({ message: 'Invalid filename' }, { status: 400 });
    }

    // 파일 확장자 검증 (보안상 PDF만 허용)
    if (!filename.toLowerCase().endsWith('.pdf')) {
      return NextResponse.json({ message: 'Only PDF files are allowed' }, { status: 400 });
    }

    // 외부 서버에서 PDF 파일 fetch
    const serverUrl = 'http://112.217.212.251:5310';
    const fileUrl = `${serverUrl}/downloads/${filename}`;
    
    const response = await fetch(fileUrl);
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ message: 'File not found' }, { status: 404 });
      }
      return NextResponse.json({ message: 'Failed to fetch file' }, { status: 500 });
    }

    const fileBuffer = await response.arrayBuffer();
    
    // download 파라미터에 따라 Content-Disposition 설정
    const contentDisposition = download === 'true' 
      ? `attachment; filename="${encodeURIComponent(filename)}"` // 다운로드
      : 'inline'; // 미리보기 (브라우저에서 표시)
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': contentDisposition,
        'Content-Length': fileBuffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=3600', // 미리보기용으로 캐시 허용
      },
    });
    
  } catch (error) {
    console.error('PDF fetch error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}