"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Landmark, Swords, BookOpen, UserPlus } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", icon: Home, color: "text-gray-700" },
  { label: "About", href: "/the-club", icon: Landmark, color: "text-emerald-500" },
  { label: "Racing", href: "/race-day", icon: Swords, color: "text-blue-500" },
  { label: "Betting", href: "/betting-guide", icon: BookOpen, color: "text-violet-500" },
  { label: "Join Us", href: "/join", icon: UserPlus, color: "text-amber-500" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <Image
              src="/rstc-logo.png"
              alt="RSTC"
              width={32}
              height={32}
              className="rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-gray-900 font-black text-base leading-tight tracking-wide">
                RSTC
              </span>
              <span className="text-gray-400 text-[8px] leading-tight uppercase tracking-[0.15em] hidden sm:block">
                Home of Bornean Racing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-md ${
                    active
                      ? `${item.color} bg-gray-100`
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-600 hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-white p-0">
              <SheetHeader className="p-4 pb-3 border-b border-gray-100">
                <SheetTitle className="text-gray-900 flex items-center gap-2">
                  <Image
                    src="/rstc-logo.png"
                    alt="RSTC"
                    width={28}
                    height={28}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-black">RSTC</span>
                    <span className="text-[9px] text-gray-400 font-medium tracking-wider uppercase">
                      Home of Bornean Racing
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col py-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors border-b border-gray-50 ${
                        active
                          ? `${item.color} bg-gray-50`
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
