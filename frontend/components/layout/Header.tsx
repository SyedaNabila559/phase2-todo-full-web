"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { UserMenu } from "@/components/ui/UserMenu";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  if (isAuthPage) return null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 glass w-full",
        "border-b border-pink-500/20",
        "transition-all duration-500 ease-in-out",
        "backdrop-blur-xl bg-background/60"
      )}
    >
      <div className="section-horizontal py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500 text-white shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 group-hover:rotate-6 transition-all duration-500">
                <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
              </div>
              <h1 className="text-2xl font-black tracking-tighter text-pink-500 leading-none">
                Syeda <span className="italic">Todo Pro</span>
              </h1>
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300",
                  pathname === "/"
                    ? "bg-pink-500/10 text-pink-500"
                    : "text-pink-500 hover:bg-pink-500/10"
                )}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={cn(
                  "px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300",
                  pathname === "/dashboard"
                    ? "bg-pink-500/10 text-pink-500"
                    : "text-pink-500 hover:bg-pink-500/10"
                )}
              >
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Right Side: Theme & UserMenu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-1.5 rounded-[1.25rem] bg-pink-500/10 border border-pink-500/20 shadow-inner">
              <ThemeToggle
                position="header"
                className="text-pink-500 hover:text-white hover:bg-pink-500 transition-colors"
              />
              <div className="w-px h-5 bg-pink-500/30 mx-1" />
              <UserMenu
                className="text-pink-500 hover:text-white hover:bg-pink-500/10 transition-colors"
              />
            </div>

            {/* Go to Workspace Button */}
            {!pathname?.includes("/dashboard") && (
              <Link href="/dashboard" className="hidden sm:block">
                <button className="px-5 py-2.5 bg-pink-500 text-white text-sm font-black rounded-xl hover:bg-pink-600 hover:opacity-95 transition-all active:scale-95 shadow-lg shadow-pink-500/30">
                  Go to Workspace
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
