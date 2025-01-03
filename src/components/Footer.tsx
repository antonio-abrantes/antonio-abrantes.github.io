export function Footer() {
  return (
    <footer className="h-[40px] w-full bg-transparent flex items-center justify-center">
      <div className="text-white text-[11px]">
        By Antônio Abrantes © {new Date().getFullYear()}
      </div>
    </footer>
  );
}