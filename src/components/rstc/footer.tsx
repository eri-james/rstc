import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/rstc-logo.png"
              alt="RSTC"
              width={24}
              height={24}
              className="rounded opacity-70"
            />
            <span className="text-white/40 text-sm font-medium">
              RSTC Fan Community
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/royalsabahturfclub"
              target="_blank"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/royalsabahturfclub"
              target="_blank"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC8wxKCx9pQhilTlFaoSeJDg"
              target="_blank"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              YouTube
            </Link>
          </div>

          {/* Disclaimer + Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-white/25 text-xs">
              This is an unofficial fan-made community site and is not affiliated with the Royal Sabah Turf Club.
            </p>
            <p className="text-white/20 text-xs mt-1">
              &copy;2026 RSTC Fan Community. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
