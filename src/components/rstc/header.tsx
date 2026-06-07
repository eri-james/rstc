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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Crown, Menu, ChevronDown } from "lucide-react";

/* ─── Navigation Data ─────────────────────────────────────────── */

interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
}

/**
 * Consolidated navigation:
 *   HOME | ABOUT | RACING | BETTING | [Join Us]
 *
 * ABOUT  ← merges old About Us + Visit Us + Photo Gallery + Apprentice Program
 * RACING ← merges old Racing + Race Analysis + Results + Breeding
 * BETTING← renamed from Commingling
 */
const navItems: NavItem[] = [
  { label: "HOME", href: "#" },
  {
    label: "ABOUT",
    href: "#",
    groups: [
      {
        label: "About RSTC",
        items: [
          { label: "History", href: "#" },
          { label: "Management Committee", href: "#" },
          { label: "Corporate Social Responsibility", href: "#" },
        ],
      },
      {
        label: "Visit Us",
        items: [
          { label: "Tambalang Racecourse", href: "#" },
          { label: "Function Room", href: "#" },
          { label: "Off-Course Betting Centres", href: "#" },
        ],
      },
      {
        label: "Programmes",
        items: [
          { label: "Apprentice Program", href: "#" },
          { label: "Photo Gallery", href: "#" },
        ],
      },
    ],
  },
  {
    label: "RACING",
    href: "#",
    groups: [
      {
        label: "Race Information",
        items: [
          { label: "Rules of Racing", href: "#" },
          { label: "How To Play", href: "#" },
          { label: "Horse Ownership", href: "#" },
          { label: "Prohibited Substances", href: "#" },
        ],
      },
      {
        label: "Race Analysis",
        items: [
          { label: "SLTC", href: "#" },
          { label: "PRTC", href: "#" },
        ],
      },
      {
        label: "Results",
        items: [
          { label: "RSTC", href: "#" },
          { label: "HKJC", href: "#" },
          { label: "STC", href: "#" },
          { label: "SLTC", href: "#" },
          { label: "PRTC", href: "#" },
        ],
      },
      {
        label: "Breeding",
        items: [
          { label: "Breeding Regulations", href: "#" },
          { label: "Stallions", href: "#" },
        ],
      },
    ],
  },
  {
    label: "BETTING",
    href: "#",
    groups: [
      {
        label: "Commingling",
        items: [
          { label: "Introduction", href: "#" },
          { label: "Betting Rules (HKJC)", href: "#" },
          { label: "Betting Rules (Australia/SRW)", href: "#" },
        ],
      },
    ],
  },
];

/* ─── Helpers ──────────────────────────────────────────────────── */

/** Flatten groups into a simple child list (used by mobile nav) */
function flattenGroups(groups: NavGroup[]): NavChild[] {
  return groups.flatMap((g) => g.items);
}

/** Total number of links inside all groups */
function totalGroupItems(groups: NavGroup[]): number {
  return groups.reduce((sum, g) => sum + g.items.length, 0);
}

/* ─── Component ────────────────────────────────────────────────── */

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
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.groups && item.groups.length > 0 ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-3.5 py-2 text-white/90 hover:text-white text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md hover:bg-white/10">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="bg-white border-gray-200 shadow-xl rounded-lg min-w-[240px] p-2"
                  >
                    {item.groups.map((group, gi) => (
                      <React.Fragment key={group.label}>
                        {gi > 0 && <DropdownMenuSeparator />}
                        <DropdownMenuGroup>
                          <DropdownMenuLabel className="text-[11px] font-bold uppercase tracking-wider text-[#0052CC]/70 px-2 pt-1.5 pb-1">
                            {group.label}
                          </DropdownMenuLabel>
                          {group.items.map((child) => (
                            <DropdownMenuItem key={child.label} asChild>
                              <Link
                                href={child.href}
                                className="text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 cursor-pointer rounded-sm"
                              >
                                {child.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </React.Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 text-white/90 hover:text-white text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md hover:bg-white/10"
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
              className="hidden sm:inline-flex bg-[#1E3A8A] hover:bg-[#162d6b] text-white rounded-lg font-semibold text-sm px-5 h-9 border border-white/10"
            >
              <Link href="#">Join Us</Link>
            </Button>

            {/* Mobile Hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[340px] bg-white p-0 overflow-y-auto"
              >
                <SheetHeader className="bg-[#0052CC] p-4 mb-0">
                  <SheetTitle className="text-white flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    RSTC
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col py-2 max-h-[calc(100vh-160px)] overflow-y-auto">
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

/* ─── Mobile Nav Item ──────────────────────────────────────────── */

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = React.useState(false);

  // Simple link (no groups)
  if (!item.groups || item.groups.length === 0) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="px-6 py-3 text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-gray-100"
      >
        {item.label}
      </Link>
    );
  }

  // Single-group item — render flat list (no section header needed)
  if (item.groups.length === 1) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-gray-100"
        >
          {item.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="bg-gray-50">
            {flattenGroups(item.groups).map((child) => (
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

  // Multi-group item — render with section headers
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:text-[#0052CC] hover:bg-blue-50 text-sm font-semibold uppercase tracking-wider transition-colors border-b border-gray-100"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="bg-gray-50">
          {item.groups.map((group, gi) => (
            <React.Fragment key={group.label}>
              {/* Section label */}
              <div className="px-8 pt-3 pb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0052CC]/60">
                  {group.label}
                </span>
              </div>
              {group.items.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={onClose}
                  className="block px-10 py-2 text-gray-600 hover:text-[#0052CC] hover:bg-blue-50 text-sm transition-colors"
                >
                  {child.label}
                </Link>
              ))}
              {gi < item.groups!.length - 1 && (
                <div className="mx-8 my-1.5 border-t border-gray-200/60" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
