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
      <div className="text-[32px] font-bold text-[#0095d3] mb-[10px]">
        {title}
      </div>
      <div className="text-[26px] font-light text-[#656565]">{description}</div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt || "코다(CODA) 기능 이미지"}
          className="w-full h-auto pt-[30px]"
        />
      )}
    </div>
  );
}
