"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import { Textarea } from "@shared/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@shared/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone } from "lucide-react";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";

const Support = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("문의 데이터:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("문의가 성공적으로 전송되었습니다!", {
        description: "빠른 시일 내에 답변 드리겠습니다.",
        className: "bg-green-50 text-green-800",
        action: {
          label: "확인",
          onClick: () => console.log("확인 버튼 클릭"),
        },
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("문의 전송 중 오류가 발생했습니다.", {
        description: "다시 시도해주세요.",
        action: {
          label: "확인",
          onClick: () => {
            console.log("다시 시도");
          },
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResponsivePadding>
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative flex-shrink-0">
              <Image src={"/img/common/logo_whale.webp"} fill alt="코다(CODA) 고래 로고" className="rounded-full" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">고객문의</h1>
              <p className="text-gray-600 text-base md:text-lg">고객님이 보내주신 문의에 대한 답변은 기재하신 이메일로 발송됩니다.</p>
            </div>
          </div>
        </div>

        {/* 고객문의 폼 */}
        <Card className="border-none">
          <CardHeader className="space-y-1 pb-6">
            <p className="text-sm text-gray-600">아래 양식을 작성해주시면 빠른 시일 내에 답변 드리겠습니다.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름과 이메일 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                    이름 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" name="name" type="text" placeholder="이름을 입력해주세요" value={formData.name} onChange={handleInputChange} required className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    이메일 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="example@email.com" value={formData.email} onChange={handleInputChange} required className="h-11" />
                </div>
              </div>

              {/* 전화번호와 문의 카테고리 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-slate-700 flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    전화번호 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder="010-0000-0000" value={formData.phone} onChange={handleInputChange} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium text-slate-700">
                    문의 유형 <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="문의 유형을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">제품 문의</SelectItem>
                      <SelectItem value="technical">기술 지원</SelectItem>
                      <SelectItem value="pricing">견적 문의</SelectItem>
                      <SelectItem value="partnership">제휴 문의</SelectItem>
                      <SelectItem value="general">일반 문의</SelectItem>
                      <SelectItem value="complaint">불만/개선 제안</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* 제목 */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
                  문의 제목 <span className="text-red-500">*</span>
                </Label>
                <Input id="subject" name="subject" type="text" placeholder="문의 제목을 입력해주세요" value={formData.subject} onChange={handleInputChange} required className="h-11" />
              </div>

              {/* 문의 내용 */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                  문의 내용 <span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" name="message" placeholder="문의하실 내용을 자세히 입력해주세요..." value={formData.message} onChange={handleInputChange} required rows={6} className="resize-none min-h-[300px]" />
                <p className="text-xs text-gray-500">최소 10자 이상 입력해주세요.</p>
              </div>

              {/* 개인정보 동의 */}
              <div className="bg-gray-50 p-4 rounded-lg border">
                <p className="text-xs text-gray-600 leading-relaxed">개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변을 위해서만 사용되며, 답변 완료 후 안전하게 삭제됩니다.</p>
              </div>

              {/* 제출 버튼 */}
              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium transition-colors duration-200">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      전송 중...
                    </>
                  ) : (
                    <>문의하기</>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 추가 연락처 정보 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-800">전화 문의</h3>
              </div>
              <p className="text-gray-700 font-medium text-lg">1588-0000</p>
              <p className="text-sm text-gray-600 mt-1">평일 09:00 - 18:00</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 gray-green-600" />
                <h3 className="font-semibold text-gray-800">이메일 문의</h3>
              </div>
              <p className="text-gray-700 font-medium">support@coda.co.kr</p>
              <p className="text-sm text-gray-600 mt-1">24시간 접수 가능</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResponsivePadding>
  );
};

export default Support;
