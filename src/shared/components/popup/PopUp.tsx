"use client";
import React from 'react';
import { X } from 'lucide-react';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt?: string;
  popupId: string;
}

const PopUp: React.FC<PopUpProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt = "팝업 이미지",
  popupId
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDontShowToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    localStorage.setItem(`popup_${popupId}_hidden`, tomorrow.getTime().toString());
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-start"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-lg w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out">
 
        {/* <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors duration-200"
          aria-label="팝업 닫기"
        >
          <X size={16} className="text-gray-700" strokeWidth={2} />
        </button> */}

        {/* 이미지 */}
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 하단 체크박스 영역 */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              onChange={handleDontShowToday}
            />
            <span className="ml-2 text-sm text-gray-700 select-none">
              하루동안 표시하지않음
            </span>
          </label>
          
          <button
            onClick={onClose}
            className="text-m font-bold text-gray-500 hover:text-gray-700 transition-colors duration-200 px-2"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export const shouldShowPopup = (popupId: string): boolean => {
  const hiddenUntil = localStorage.getItem(`popup_${popupId}_hidden`);
  if (!hiddenUntil) return true;
  
  const hiddenTime = parseInt(hiddenUntil);
  const now = new Date().getTime();
  
  if (now > hiddenTime) {
    localStorage.removeItem(`popup_${popupId}_hidden`);
    return true;
  }
  
  return false;
};

export default PopUp;