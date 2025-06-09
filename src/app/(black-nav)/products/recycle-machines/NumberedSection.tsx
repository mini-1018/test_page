interface NumberedSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}

export default function NumberedSection({
  number,
  title,
  children,
  bgColor = "bg-white",
}: NumberedSectionProps) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="py-[150px] px-4 max-w-7xl mx-auto">
        <img
          src={`https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big${number}.webp`}
          alt={`코다(CODA) ${number}번 설명`}
          className="mb-5"
        />
        <div className="text-[45px] font-bold text-[#141a46] leading-tight mb-8">
          {title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
