import Support from "./support";
import { Translation } from "@src/types/translation.type";

export default async function SupportPage({ params }: { params: Promise<Translation> }) {
  const { locale } = await params;

  return (
    <div className="max-w-6xl mx-auto pb-32 pt-32">
      <Support locale={locale} />
    </div>
  );
}
