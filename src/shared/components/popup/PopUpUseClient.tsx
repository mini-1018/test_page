'use client';
import React, { useState, useEffect } from 'react';
import PopUp, { shouldShowPopup } from './PopUp';

interface PopUpPopUpUseClientProps {
  imageUrl: string;
  imageAlt?: string;
  popupId: string;
}

const PopUpUseClient: React.FC<PopUpPopUpUseClientProps> = ({
  imageUrl,
  imageAlt,
  popupId
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (shouldShowPopup(popupId)) {
      setIsPopupOpen(true);
    }
  }, [popupId]);

  return (
    <PopUp
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      popupId={popupId}
    />
  );
};

export default PopUpUseClient;