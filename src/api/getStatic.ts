import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { filename } = req.query;
    
    if (!filename || typeof filename !== 'string') {
      return res.status(400).json({ message: 'Filename is required' });
    }

    // 경로 조작 방지 (../ 등)
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return res.status(400).json({ message: 'Invalid filename' });
    }

    // PDF 파일이 저장된 경로
    const filePath = path.join(process.cwd(), 'public', 'pdfs', filename);
    
    // 파일 존재 확인
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    // 파일 확장자 검증 (보안상 PDF만 허용)
    if (!filename.toLowerCase().endsWith('.pdf')) {
      return res.status(400).json({ message: 'Only PDF files are allowed' });
    }

    // 파일 읽기
    const fileBuffer = fs.readFileSync(filePath);
    
    // 응답 헤더 설정 (다운로드용)
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    res.setHeader('Content-Length', fileBuffer.length);
    res.setHeader('Cache-Control', 'no-cache');
    
    // 파일 전송
    res.status(200).send(fileBuffer);
    
  } catch (error) {
    console.error('PDF download error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}