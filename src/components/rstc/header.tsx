"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Race Day", href: "/#race-day", color: "bg-blue-500" },
  { label: "The Club", href: "/#the-club", color: "bg-emerald-500" },
  { label: "Own & Breed", href: "/#own-breed", color: "bg-amber-500" },
  { label: "Bet Guide", href: "/#bet-guide", color: "bg-violet-500" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/rstc-logo.png"
              alt="RSTC"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-gray-900 font-black text-lg leading-tight tracking-wide">
                RSTC
              </span>
              <span className="text-gray-400 text-[9px] leading-tight uppercase tracking-widest hidden sm:block">
                Home of Bornean Racing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 hover:text-gray-900 text-sm font-bold uppercase tracking-wider transition-colors duration-200 rounded-md hover:bg-gray-100"
              >
                <span className={`w-2 h-2 rounded-full ${item.color}`} />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Profile + Mobile */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-sm px-4 h-8"
            >
              <Link href="/#profile">Sign In</Link>
            </Button>

            {/* Mobile Hamburger */}
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
              <SheetContent side="left" className="w-[300px] bg-white p-0">
                <SheetHeader className="p-4 pb-2">
                  <SheetTitle className="text-gray-900 flex items-center gap-2">
                    <Image
                      src="/rstc-logo.png"
                      alt="RSTC"
                      width={28}
                      height={28}
                      className="rounded-lg"
                    />
                    RSTC
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 text-sm font-bold uppercase tracking-wider transition-colors border-b border-gray-100"
                    >
                      <span className={`w-3 h-3 rounded-full ${item.color}`} />
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold"
                  >
                    <Link href="/#profile" onClick={() => setMobileOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
