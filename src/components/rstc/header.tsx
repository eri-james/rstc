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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Crown, Menu, ChevronDown } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#" },
  {
    label: "VISIT US",
    href: "#",
    children: [
      { label: "Tambalang Racecourse", href: "#" },
      { label: "Function Room", href: "#" },
      { label: "Off-Course Betting Centres", href: "#" },
    ],
  },
  {
    label: "RACING",
    href: "#",
    children: [
      { label: "Rules of Racing", href: "#" },
      { label: "Game - How To Play", href: "#" },
      { label: "Horse Ownership", href: "#" },
      { label: "Prohibited Substances", href: "#" },
    ],
  },
  {
    label: "RACE ANALYSIS",
    href: "#",
    children: [
      { label: "SLTC", href: "#" },
      { label: "PRTC", href: "#" },
    ],
  },
  {
    label: "RESULTS",
    href: "#",
    children: [
      { label: "RSTC", href: "#" },
      { label: "HKJC", href: "#" },
      { label: "STC", href: "#" },
      { label: "SLTC", href: "#" },
      { label: "PRTC", href: "#" },
    ],
  },
  {
    label: "BREEDING",
    href: "#",
    children: [
      { label: "Breeding Regulations", href: "#" },
      { label: "Stallions", href: "#" },
    ],
  },
  {
    label: "APPRENTICE PROGRAM",
    href: "#",
    children: [{ label: "Apprentice Program", href: "#" }],
  },
  {
    label: "ABOUT US",
    href: "#",
    children: [
      { label: "History", href: "#" },
      { label: "Management Committee", href: "#" },
      { label: "Corporate Social Responsibility", href: "#" },
    ],
  },
  {
    label: "PHOTO GALLERY",
    href: "#",
    children: [{ label: "Image Gallery", href: "#" }],
  },
  {
    label: "COMMINGLING",
    href: "#",
    children: [
      { label: "Introduction", href: "#" },
      { label: "Betting Rules (HKJC)", href: "#" },
      { label: "Betting Rules (Australia/SRW)", href: "#" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0052CC] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg border border-white/10">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-wide">
                RSTC
              </span>
              <span className="text-white/60 text-[10px] leading-tight uppercase tracking-widest hidden sm:block">
                Royal Sabah Turf Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-0.5 px-2 py-1.5 text-white/85 hover:text-white text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 rounded hover:bg-white/10">
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="bg-white border-gray-200 shadow-lg rounded-lg min-w-[200px]"
                  >
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link
                          href={child.href}
                          className="text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-2 py-1.5 text-white/85 hover:text-white text-[12px] font-medium uppercase tracking-wider transition-colors duration-200 rounded hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Join Us Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-[#1E3A8A] hover:bg-[#162d6b] text-white rounded-lg font-medium text-sm px-5 h-9 border border-white/10"
            >
              <Link href="#">Join Us</Link>
            </Button>

            {/* Mobile Hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="xl:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[320px] bg-white p-0 overflow-y-auto"
              >
                <SheetHeader className="bg-[#0052CC] p-4 mb-0">
                  <SheetTitle className="text-white flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    RSTC
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col py-2 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>
                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-[#1E3A8A] hover:bg-[#162d6b] text-white rounded-lg"
                  >
                    <Link href="#" onClick={() => setMobileOpen(false)}>
                      Join Us
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

function MobileNavItem({
  item,
  onClose,
}: {
  item: (typeof navItems)[number];
  onClose: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="px-6 py-3 text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 text-sm font-medium uppercase tracking-wider transition-colors border-b border-gray-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 text-sm font-medium uppercase tracking-wider transition-colors border-b border-gray-100"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="bg-gray-50">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onClose}
              className="block px-10 py-2.5 text-gray-600 hover:text-[#0052CC] hover:bg-blue-50 text-sm transition-colors border-b border-gray-100/50"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
