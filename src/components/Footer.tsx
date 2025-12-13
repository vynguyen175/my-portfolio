export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#3D2C24] border-t border-[#C9A54D]/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#E8D5A8]">
            © {currentYear} Vy Nguyen
          </p>
          <p className="text-sm text-[#C9A54D]/60">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
