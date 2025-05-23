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
      <div className="py-[150px] px-4 max-w-7xl mx-auto">
        <div className="text-[45px] font-bold text-[#141a46] leading-tight mb-6">
          {title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {description && (
          <div className="text-[22px] font-light text-[#7f809b] mb-[100px]">
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
