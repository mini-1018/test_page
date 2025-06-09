export default function ResponsivePadding({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 lg:px-0 xl:px-0">
      {children}
    </div>
  );
}