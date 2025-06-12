interface FeatureSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  bgColor?: string;
}

export default function FeatureSection({
  title,
  description,
  children,
  bgColor = "bg-[#f5f6f9]",
}: FeatureSectionProps) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-[24px] md:text-[32px] xl:text-[40px] font-bold tracking-tight text-[#141a46] leading-tight mb-6">
          {title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {description && (
          <div className="text-[14px] md:text-[20px] text-[#818181] mb-[100px]">
            {description.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
