
        "use client";

import Link from "next/link";
import HeroFull from "@/components/layout/HeroFull";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Heart,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

// FeatureCard component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-premium rounded-3xl p-8 border border-white/20 hover:shadow-xl transition">
      <div className="mb-4 text-pink-500 bg-pink-500/10 w-14 h-14 flex items-center justify-center rounded-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-black mb-2">{title}</h3>
      <p className="body opacity-70">{description}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-background">
      {/* Hero Section */}
      <HeroFull />

      {/* Features Grid */}
      <section className="section-horizontal section-vertical bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="h2 mb-4 text-pink-500">
              Why Choose Syeda Todo Pro?
            </h2>
            <p className="body opacity-70">
              Built for focus. Designed for performance. Loved for simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Layers className="w-7 h-7" />}
              title="Smart Task Management"
              description="Organize, prioritize, and track your tasks with a clean and intuitive workflow."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-7 h-7" />}
              title="Secure & Private"
              description="Modern authentication and encrypted data ensure your tasks stay yours."
            />
            <FeatureCard
              icon={<Sparkles className="w-7 h-7" />}
              title="Premium Experience"
              description="Glassmorphism UI, smooth animations, and a beautifully crafted interface."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-y border-ui-border/20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex -space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center font-bold text-xs ring-2 ring-primary/20"
              >
                U{i}
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-background bg-primary text-white flex items-center justify-center font-bold text-xs">
              +
            </div>
          </div>

          <h3 className="h3 mb-3 text-pink-500">
            Designed to help you focus on what truly matters
          </h3>
          <p className="body text-sm opacity-60">
            A productivity system crafted with care for modern workflows
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-pink-500/20 bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white shadow-lg shadow-pink-500/40">
                <CheckCircle2 className="w-5 h-5" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black tracking-tighter text-pink-500">
                Syeda Todo Pro
              </h3>
            </div>

            <p className="body max-w-sm text-pink-500/70">
              Beautifully designed. Intelligently built. The premium way to
              organize your life.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:syeda@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="p-3 rounded-xl bg-pink-500/10 text-pink-500
                    hover:bg-pink-500 hover:text-white
                    hover:shadow-lg hover:shadow-pink-500/40
                    transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-pink-500/60">
              Product
            </h4>
            <ul className="space-y-2 font-bold text-sm">
              {["Features", "Pricing", "Integrations"].map((item) => (
                <li key={item}>
                  <Link
                    href="/dashboard"
                    className="hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-pink-500/60">
              Company
            </h4>
            <ul className="space-y-2 font-bold text-sm">
              {["About Us", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-pink-500/20 text-center text-sm font-bold text-pink-500/70 flex flex-col md:flex-row items-center justify-center gap-2">
          <span className="flex items-center gap-1">
            Made with
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            by <span className="text-pink-500 font-black">Syeda</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
