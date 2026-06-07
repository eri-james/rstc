import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-5">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/rstc-logo.png"
              alt="RSTC"
              width={20}
              height={20}
              className="rounded opacity-60"
            />
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">
              RSTC Fan Community
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <Link
              href="https://www.facebook.com/royalsabahturfclub"
              target="_blank"
              className="text-white/35 hover:text-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/royalsabahturfclub"
              target="_blank"
              className="text-white/35 hover:text-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC8wxKCx9pQhilTlFaoSeJDg"
              target="_blank"
              className="text-white/35 hover:text-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              YouTube
            </Link>
          </div>

          {/* Disclaimer + Copyright */}
          <div className="text-center max-w-md">
            <p className="text-white/20 text-[10px] leading-relaxed">
              This is an unofficial fan-made community site and is not affiliated with the Royal Sabah Turf Club or Cygames.
            </p>
            <p className="text-white/15 text-[10px] mt-1.5">
              &copy;2026 RSTC Fan Community. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
