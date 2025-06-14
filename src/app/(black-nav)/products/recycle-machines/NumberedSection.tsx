import FadeUpOnView from "@shared/components/common/FadeUpOnView";
import Image from "next/image";

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
      <div className="py-[75px] md:py-[150px] px-4 max-w-7xl mx-auto">
        <FadeUpOnView>
        <Image
          src={`https://do40f6yw4fd7i.cloudfront.net/img13/common/num_big${number}.webp`}
          alt={`코다(CODA) ${number}번 설명`}
          width={100}
          height={100}
          className="mb-5 mx-auto w-[50px] md:w-[100px]"
        />
        <div className="text-[24px] md:text-[32px] xl:text-[40px] font-bold text-third leading-tight mb-8">
          {title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        </FadeUpOnView>
        {children}
      </div>
    </div>
  );
}
