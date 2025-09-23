import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // FormData에서 데이터 추출
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      category: formData.get('category') as string,
      message: formData.get('message') as string,
      phone: formData.get('phone') as string,
      mobile: formData.get('mobile') as string,
      subject: formData.get('subject') as string,
      privacyAgreed: formData.get('privacyAgreed') === 'true',
      locale: formData.get('locale') as string,
      submittedAt: formData.get('submittedAt') as string,
    };

    // 첨부파일 추출
    const attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
    
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('attachment_') && value instanceof File) {
        const fileBuffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: fileBuffer,
          contentType: value.type,
        });
      }
    }

    console.log(`Found ${attachments.length} attachments`);
    
    // 환경변수에서 이메일 설정 가져오기
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.gtech21.net',
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 첨부파일 정보 HTML
    const attachmentInfo = attachments.length > 0 
      ? `
        <div style="margin: 24px 0;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <div style="width: 20px; height: 20px; background: #f1f3f4; border-radius: 4px; display: flex; align-items: center; justify-content: center;">📎</div>
            <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #374151;">첨부파일</h3>
          </div>
          ${attachments.map(att => `
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 8px;">
              <div style="width: 32px; height: 32px; background: #3b82f6; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: 600;">
                ${att.filename.split('.').pop()?.toUpperCase() || 'FILE'}
              </div>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 500; color: #1f2937; margin-bottom: 2px;">${att.filename}</div>
                <div style="font-size: 12px; color: #6b7280;">${(att.content.length / 1024).toFixed(1)}KB</div>
              </div>
            </div>
          `).join('')}
        </div>
      `
      : '';

    // 이메일 내용 구성
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>고객 문의 접수</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f9fafb;">
        <div style="max-width: 680px; margin: 0 auto; background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="background: #008cff; padding: 32px 40px; text-align: center;">
            <div style="width: 64px; height: 64px; background: white; border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
              <div style="font-size: 28px;">📩</div>
            </div>
            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: white; letter-spacing: -0.025em;">새로운 고객 문의</h1>
            <p style="margin: 8px 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.9);">문의가 접수되었습니다</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px;">
            
            <!-- 문의자 정보 -->
            <div style="margin-bottom: 32px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
                <div style="width: 6px; height: 24px; background: #3b82f6; border-radius: 3px;"></div>
                <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">문의자 정보</h2>
              </div>
              <div style="background: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 40px; height: 40px; background: #dbeafe; border-radius: 10px; display: flex; align-items: center; justify-content: center;">👤</div>
                    <div>
                      <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; margin-bottom: 2px;">이름</div>
                      <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${data.name}</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 40px; height: 40px; background: #fef3c7; border-radius: 10px; display: flex; align-items: center; justify-content: center;">📧</div>
                    <div>
                      <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; margin-bottom: 2px;">이메일</div>
                      <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${data.email}</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 40px; height: 40px; background: #dcfce7; border-radius: 10px; display: flex; align-items: center; justify-content: center;">📱</div>
                    <div>
                      <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; margin-bottom: 2px;">휴대폰</div>
                      <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${data.mobile}</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 40px; height: 40px; background: #fce7f3; border-radius: 10px; display: flex; align-items: center; justify-content: center;">☎️</div>
                    <div>
                      <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em; margin-bottom: 2px;">전화번호</div>
                      <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${data.phone || '미입력'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 문의 내용 -->
            <div style="margin-bottom: 32px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
                <div style="width: 6px; height: 24px; background: #10b981; border-radius: 3px;"></div>
                <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">문의 내용</h2>
              </div>
              
              <div style="margin-bottom: 16px;">
                <div style="display: inline-block; background: #ede9fe; color: #7c3aed; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 16px;">
                  ${data.category}
                </div>
              </div>
              
              <div style="background: white; border: 2px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
                <div style="background: #f9fafb; padding: 16px 20px; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">${data.subject}</h3>
                </div>
                <div style="padding: 24px 20px;">
                  <div style="font-size: 16px; line-height: 1.7; color: #374151; white-space: pre-wrap;">${data.message}</div>
                </div>
              </div>
            </div>
            
            ${attachmentInfo}
            
            <!-- 개인정보 동의 -->
            <div style="margin-bottom: 32px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                <div style="width: 6px; height: 24px; background: #f59e0b; border-radius: 3px;"></div>
                <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">개인정보 처리 동의</h2>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: ${data.privacyAgreed ? '#ecfdf5' : '#fef2f2'}; border-radius: 10px; border: 1px solid ${data.privacyAgreed ? '#d1fae5' : '#fecaca'};">
                <div style="width: 20px; height: 20px; background: ${data.privacyAgreed ? '#10b981' : '#ef4444'}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold;">
                  ${data.privacyAgreed ? '✓' : '✕'}
                </div>
                <span style="font-size: 16px; font-weight: 500; color: ${data.privacyAgreed ? '#065f46' : '#991b1b'};">
                  개인정보 수집 및 이용 ${data.privacyAgreed ? '동의함' : '동의하지 않음'}
                </span>
              </div>
            </div>
            
            <!-- 접수 정보 -->
            <div style="background: #f1f5f9; border-radius: 12px; padding: 20px; border-left: 4px solid #0ea5e9;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <div style="font-size: 16px;">ℹ️</div>
                <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #0f172a;">접수 정보</h3>
              </div>
              <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.5;">
                접수일시: ${new Date().toLocaleString('ko-KR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZone: 'Asia/Seoul'
                })}
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              이 이메일은 고객 문의 시스템에서 자동으로 발송되었습니다.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 관리자에게 보낼 이메일 (첨부파일 포함)
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `[고객문의] ${data.subject}`,
      html: emailContent,
      attachments: attachments.map(att => ({
        filename: att.filename,
        content: att.content,
        contentType: att.contentType,
      })),
    };

    // 고객에게 보낼 자동 응답 이메일
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: '✅ 문의가 정상적으로 접수되었습니다',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>문의 접수 확인</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #374151; background-color: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px; text-align: center;">
              <div style="width: 80px; height: 80px; background: white; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                <div style="font-size: 36px;">✅</div>
              </div>
              <h1 style="margin: 0 0 8px; font-size: 28px; font-weight: 700; color: white;">문의 접수 완료</h1>
              <p style="margin: 0; font-size: 18px; color: rgba(255, 255, 255, 0.9);">${data.name}님의 문의가 정상적으로 접수되었습니다</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px;">
              <div style="text-align: center; margin-bottom: 32px;">
                <p style="font-size: 18px; color: #374151; margin: 0 0 8px;">안녕하세요, <strong style="color: #1f2937;">${data.name}</strong>님!</p>
                <p style="font-size: 16px; color: #6b7280; margin: 0;">고객님의 소중한 문의를 정상적으로 접수하였습니다.</p>
              </div>
              
              <!-- 접수 내용 -->
              <div style="background: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <h3 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: #1f2937; display: flex; align-items: center; gap: 8px;">
                  📋 접수된 문의 내용
                </h3>
                <div style="space-y: 12px;">
                  <div style="margin-bottom: 12px;">
                    <span style="display: inline-block; background: #ede9fe; color: #7c3aed; padding: 4px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; margin-bottom: 8px;">
                      ${data.category}
                    </span>
                  </div>
                  <div style="margin-bottom: 12px;">
                    <div style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">제목</div>
                    <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${data.subject}</div>
                  </div>
                  <div style="margin-bottom: 12px;">
                    <div style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">접수일시</div>
                    <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${new Date().toLocaleString('ko-KR')}</div>
                  </div>
                  ${attachments.length > 0 ? `
                  <div>
                    <div style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">첨부파일</div>
                    <div style="font-size: 16px; font-weight: 600; color: #1f2937;">${attachments.length}개 파일</div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              <!-- 처리 안내 -->
              <div style="background: #fff7ed; border-radius: 12px; padding: 24px; border: 1px solid #fed7aa; margin-bottom: 24px;">
                <div style="display: flex; align-items: start; gap: 12px;">
                  <div style="font-size: 20px; margin-top: 2px;">⏰</div>
                  <div>
                    <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600; color: #9a3412;">처리 예정 안내</h3>
                    <p style="margin: 0; font-size: 16px; color: #c2410c; line-height: 1.6;">
                      접수된 문의는 <strong>영업일 기준 1-2일 내</strong>에 답변드리겠습니다.<br>
                      긴급한 사항의 경우 고객센터로 직접 연락 부탁드립니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div style="text-align: center;">
                <p style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 8px;">감사합니다! 🙏</p>
                <p style="font-size: 16px; color: #6b7280; margin: 0;">더 나은 서비스로 보답하겠습니다.</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #6b7280;">
                본 메일은 발신전용입니다. 추가 문의사항이 있으시면 고객센터를 이용해 주세요.
              </p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                이 이메일은 자동으로 발송되었습니다.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 관리자에게 이메일 전송
    await transporter.sendMail(mailOptions);
    
    // 고객에게 자동 응답 이메일 전송
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ 
      success: true, 
      message: '문의가 성공적으로 전송되었습니다.' 
    });

  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: '이메일 전송 중 오류가 발생했습니다.' 
      },
      { status: 500 }
    );
  }
}
