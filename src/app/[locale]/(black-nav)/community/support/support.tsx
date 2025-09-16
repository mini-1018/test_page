"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@shared/components/ui/button";
import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import { Textarea } from "@shared/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@shared/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/components/ui/select";
import { Checkbox } from "@shared/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Phone, Upload, X } from "lucide-react";
import ResponsivePadding from "@shared/components/common/ResponsivePadding";
import { getSupportTranslations } from "@lib/translations/support.trans";
import type { Locale } from "@lib/translator";

interface SupportProps {
  locale: Locale;
}

const Support = ({ locale }: SupportProps) => {
  const { t } = getSupportTranslations(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
    phone: "",
    mobile: "",
    subject: "",
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const validTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        toast.error(`${file.name}은(는) 지원하지 않는 파일 형식입니다.`);
        return false;
      }

      if (file.size > maxSize) {
        toast.error(`${file.name}은(는) 파일 크기가 5MB를 초과합니다.`);
        return false;
      }

      return true;
    });

    const totalFiles = attachments.length + validFiles.length;
    if (totalFiles > 3) {
      toast.error("최대 3개 파일까지만 첨부할 수 있습니다.");
      return;
    }

    setAttachments((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAgreed) {
      toast.error(t("form.privacy.required"));
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("문의 데이터:", formData);
      console.log("첨부파일:", attachments);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(t("toast.success.title"), {
        description: t("toast.success.description"),
        className: "bg-green-50 text-green-800",
        action: {
          label: t("toast.confirm"),
          onClick: () => console.log("확인 버튼 클릭"),
        },
      });

      // 폼 리셋
      setFormData({
        name: "",
        email: "",
        category: "",
        message: "",
        phone: "",
        mobile: "",
        subject: "",
      });
      setAttachments([]);
      setPrivacyAgreed(false);
    } catch (error) {
      toast.error(t("toast.error.title"), {
        description: t("toast.error.description"),
        action: {
          label: t("toast.confirm"),
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
              <Image src={"/images/common/logo_whale.webp"} fill alt={t("header.logoAlt")} className="rounded-full" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{t("header.title")}</h1>
              <p className="text-gray-600 text-base md:text-lg">{t("header.description")}</p>
            </div>
          </div>
        </div>

        {/* 고객문의 폼 */}
        <Card className="border-none">
          <CardHeader className="space-y-1 pb-6">
            <p className="text-base text-gray-600">{t("form.subtitle")}</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 문의 유형 */}
              <div className="space-y-3">
                <Label htmlFor="category" className="text-base font-medium text-slate-700">
                  {t("form.fields.category")} <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder={t("form.placeholders.category")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">{t("form.categories.product")}</SelectItem>
                    <SelectItem value="technical">{t("form.categories.technical")}</SelectItem>
                    <SelectItem value="pricing">{t("form.categories.pricing")}</SelectItem>
                    <SelectItem value="partnership">{t("form.categories.partnership")}</SelectItem>
                    <SelectItem value="general">{t("form.categories.general")}</SelectItem>
                    <SelectItem value="complaint">{t("form.categories.complaint")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 이름과 이메일 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base font-medium text-slate-700">
                    {t("form.fields.name")} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" name="name" type="text" placeholder={t("form.placeholders.name")} value={formData.name} onChange={handleInputChange} required className="h-12 text-base" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-medium text-slate-700 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t("form.fields.email")} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" placeholder={t("form.placeholders.email")} value={formData.email} onChange={handleInputChange} required className="h-12 text-base" />
                </div>
              </div>

              {/* 전화번호와 휴대폰번호 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base font-medium text-slate-700 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t("form.fields.phone")}
                  </Label>
                  <Input id="phone" name="phone" type="tel" placeholder={t("form.placeholders.phone")} value={formData.phone} onChange={handleInputChange} className="h-12 text-base" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="mobile" className="text-base font-medium text-slate-700 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t("form.fields.mobile")}
                  </Label>
                  <Input id="mobile" name="mobile" type="tel" placeholder={t("form.placeholders.mobile")} value={formData.mobile} onChange={handleInputChange} className="h-12 text-base" />
                </div>
              </div>

              {/* 제목 */}
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-base font-medium text-slate-700">
                  {t("form.fields.subject")} <span className="text-red-500">*</span>
                </Label>
                <Input id="subject" name="subject" type="text" placeholder={t("form.placeholders.subject")} value={formData.subject} onChange={handleInputChange} required className="h-12 text-base" />
              </div>

              {/* 문의 내용 */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-base font-medium text-slate-700">
                  {t("form.fields.message")} <span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" name="message" placeholder={t("form.placeholders.message")} value={formData.message} onChange={handleInputChange} required rows={8} className="resize-none min-h-[300px] text-base leading-relaxed" />
                <p className="text-sm text-gray-500">{t("form.messageHint")}</p>
              </div>

              {/* 첨부파일 */}
              <div className="space-y-3">
                <Label className="text-base font-medium text-slate-700">{t("form.fields.attachments")}</Label>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()} className="h-12 px-6 text-base">
                      <Upload className="w-4 h-4 mr-2" />
                      {t("form.attachments.button")}
                    </Button>
                    <p className="text-sm text-gray-500">{t("form.attachments.description")}</p>
                  </div>

                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700 truncate flex-1">{file.name}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700 ml-2">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <p className="text-sm text-gray-500">
                        {attachments.length}
                        {t("form.attachments.selected")}
                      </p>
                    </div>
                  )}

                  <input ref={fileInputRef} type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" onChange={handleFileSelect} className="hidden" />
                </div>
              </div>

              {/* 개인정보 동의 */}
              <div className="bg-gray-50 p-6 rounded-lg border space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy" checked={privacyAgreed} onCheckedChange={(checked) => setPrivacyAgreed(checked as boolean)} className="mt-1" />
                  <Label htmlFor="privacy" className="text-base font-medium text-slate-700 cursor-pointer">
                    {t("form.privacy.text")} <span className="text-red-500">*</span>
                  </Label>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed ml-6">{t("form.privacy.details")}</p>
              </div>

              {/* 제출 버튼 */}
              <div className="flex justify-end pt-6">
                <Button type="submit" disabled={isSubmitting || !privacyAgreed} className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-10 py-4 h-auto text-base font-medium transition-colors duration-200">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {t("form.submitting")}
                    </>
                  ) : (
                    t("form.submit")
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 추가 연락처 정보 */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-800 text-base">{t("contact.phone.title")}</h3>
              </div>
              <p className="text-gray-700 font-medium text-lg">{t("contact.phone.number")}</p>
              <p className="text-sm text-gray-600 mt-1">{t("contact.phone.hours")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ResponsivePadding>
  );
};

export default Support;
