// lib/translations/support.ts
import { createTranslator, Locale } from "@lib/translator";

export const supportTranslations = {
  ko: {
    title: "코다(CODA) 고객문의",
    // 헤더 섹션
    header: {
      logoAlt: "코다(CODA) 고래 로고",
      title: "고객문의",
      description: "고객님이 보내주신 문의에 대한 답변은 기재하신 이메일로 발송됩니다.",
    },

    // 폼 섹션
    form: {
      subtitle: "아래 양식을 작성해주시면 빠른 시일 내에 답변 드리겠습니다.",

      // 필드 라벨
      fields: {
        name: "이름",
        email: "이메일",
        phone: "전화번호",
        mobile: "휴대폰번호",
        category: "문의 유형",
        subject: "문의 제목",
        message: "문의 내용",
        attachments: "첨부파일",
      },

      // 플레이스홀더
      placeholders: {
        name: "이름을 입력해주세요",
        email: "example@email.com",
        phone: "02-0000-0000",
        mobile: "010-0000-0000",
        category: "문의 유형을 선택해주세요",
        subject: "문의 제목을 입력해주세요",
        message: "문의하실 내용을 자세히 입력해주세요...",
      },

      // 카테고리 옵션
      categories: {
        product: "제품 문의",
        technical: "기술 지원",
        pricing: "견적 문의",
        partnership: "제휴 문의",
        general: "일반 문의",
        complaint: "불만/개선 제안",
      },

      // 첨부파일 관련
      attachments: {
        description: "최대 3개 파일, 각 파일당 최대 5MB (jpg, png, pdf, doc, docx)",
        button: "파일 선택",
        selected: "개 파일 선택됨",
      },

      // 메시지 힌트
      messageHint: "최소 10자 이상 입력해주세요.",

      // 개인정보 동의
      privacy: {
        text: "개인정보 수집 및 이용에 동의합니다.",
        details: "수집된 정보는 문의 답변을 위해서만 사용되며, 답변 완료 후 안전하게 삭제됩니다.",
        required: "개인정보 수집 및 이용에 동의해주세요.",
      },

      // 버튼
      submit: "문의하기",
      submitting: "전송 중...",
    },

    // 토스트 메시지
    toast: {
      success: {
        title: "문의가 성공적으로 전송되었습니다!",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      },
      error: {
        title: "문의 전송 중 오류가 발생했습니다.",
        description: "다시 시도해주세요.",
      },
      confirm: "확인",
    },

    // 연락처 정보
    contact: {
      phone: {
        title: "전화 문의",
        number: "031-852-4070",
        hours: "평일 09:00 - 18:00",
      },
      email: {
        title: "이메일 문의",
        address: "support@coda.ai.kr",
        availability: "24시간 접수 가능",
      },
    },
    metaData: {
      title: "코다(CODA) 고객문의 | 고객지원",
      description: "코다(CODA) 고객문의 페이지입니다. 제품 문의, 기술 지원, 견적 요청 등 다양한 문의를 접수할 수 있습니다.",
      keywords: "고객문의, 고객지원, 제품 문의, 기술 지원, 견적 요청, 코다, CODA",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "코다(CODA)",
        locale: "ko_KR",
      },
    },
  },
  en: {
    title: "CODA Customer Support",
    // 헤더 섹션
    header: {
      logoAlt: "CODA Whale Logo",
      title: "Customer Support",
      description: "Responses to your inquiries will be sent to the email address you provide.",
    },

    // 폼 섹션
    form: {
      subtitle: "Please fill out the form below and we will respond as soon as possible.",

      // 필드 라벨
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        mobile: "Mobile Number",
        category: "Inquiry Type",
        subject: "Subject",
        message: "Message",
        attachments: "Attachments",
      },

      // 플레이스홀더
      placeholders: {
        name: "Please enter your name",
        email: "example@email.com",
        phone: "02-0000-0000",
        mobile: "010-0000-0000",
        category: "Please select inquiry type",
        subject: "Please enter the subject",
        message: "Please enter your inquiry in detail...",
      },

      // 카테고리 옵션
      categories: {
        product: "Product Inquiry",
        technical: "Technical Support",
        pricing: "Quote Request",
        partnership: "Partnership Inquiry",
        general: "General Inquiry",
        complaint: "Complaint/Improvement Suggestion",
      },

      // 첨부파일 관련
      attachments: {
        description: "Max 3 files, up to 5MB each (jpg, png, pdf, doc, docx)",
        button: "Select Files",
        selected: "files selected",
      },

      // 메시지 힌트
      messageHint: "Please enter at least 10 characters.",

      // 개인정보 동의
      privacy: {
        text: "I agree to the collection and use of personal information.",
        details: "The collected information will only be used to respond to inquiries and will be safely deleted after the response is completed.",
        required: "Please agree to the collection and use of personal information.",
      },

      // 버튼
      submit: "Submit Inquiry",
      submitting: "Sending...",
    },

    // 토스트 메시지
    toast: {
      success: {
        title: "Your inquiry has been sent successfully!",
        description: "We will respond as soon as possible.",
      },
      error: {
        title: "An error occurred while sending your inquiry.",
        description: "Please try again.",
      },
      confirm: "Confirm",
    },

    // 연락처 정보
    contact: {
      phone: {
        title: "Phone Inquiry",
        number: "031-852-4070",
        hours: "Weekdays 09:00 - 18:00",
      },
      email: {
        title: "Email Inquiry",
        address: "support@coda.ai.kr",
        availability: "24/7 Available",
      },
    },

    metaData: {
      title: "CODA Customer Support | Customer Service",
      description: "CODA customer support page. You can submit various inquiries including product inquiries, technical support, quote requests, and more.",
      keywords: "customer support, customer service, product inquiry, technical support, quote request, CODA",
      image: "/images/favicon/facebook-thumbnail_CODA.webp",
      openGraph: {
        siteName: "CODA",
        locale: "en_US",
      },
    },
  },
} as const;

export function getSupportTranslations(locale: Locale = "ko") {
  return createTranslator(supportTranslations, locale);
}
