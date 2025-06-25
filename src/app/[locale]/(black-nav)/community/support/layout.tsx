import { Toaster } from "sonner";

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="bottom-center" />
    </>
  );
}
