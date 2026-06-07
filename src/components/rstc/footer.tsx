import React from "react";
import Link from "next/link";
import { Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <Crown className="w-4 h-4 text-white/70" />
            </div>
            <span className="text-white/50 text-sm font-medium">
              Royal Sabah Turf Club
            </span>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm text-center">
            &copy;2024-2026 Royal Sabah Turf Club. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
            >
              Disclaimer
            </Link>
            <Link
              href="#"
              className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
