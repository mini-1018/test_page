import Image from "next/image";

interface FeatureItemProps {
  title: string;
  description: string;
  imageSrc?: string;
  alt?: string;
  mb?: string;
}

export default function FeatureItem({
  title,
  description,
  imageSrc,
  alt,
  mb = "mb-[120px]",
}: FeatureItemProps) {
  return (
    <div className={mb}>
      <div className="text-[18px] md:text-[26px] font-bold text-secondary mb-[10px]">
        {title}
      </div>
      <div className="text-[14px] md:text-[20px] font-light text-[#656565]">{description}</div>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt || "코다(CODA) 기능 이미지"}
          className="pt-[30px] m-auto"
          width={450}
          height={200}
        />
      )}
    </div>
  );
}
