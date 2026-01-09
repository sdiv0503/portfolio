import Link from "next/link";
import Image from "next/image";
import { getGithubStats } from "@/lib/github";
import { ContactFormCard } from "./contact-form-card";
// 1. Changed Twitter to Instagram in imports
import { Github, Linkedin, Instagram, MapPin, ArrowUpRight } from "lucide-react";

export async function ContactAndSocials() {
  const githubStats = await getGithubStats();

  return (
    <section id="contact" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Interested in my work? Check out my code activity or send me a direct message for freelance opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN: The Bento Social Grid (Spans 2 columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[160px]">
            
            {/* 1. GITHUB CARD (Wide) */}
            <Link 
              href={githubStats?.url || "https://github.com"} 
              target="_blank"
              aria-label="Visit my GitHub Profile"
              className="group relative md:col-span-2 row-span-1 overflow-hidden rounded-3xl border bg-zinc-900 p-6 text-white transition-all hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div className="flex h-full items-center gap-6 relative z-10">
                <div className="shrink-0 h-20 w-20 rounded-full border-2 border-white/20 bg-white/10 p-1">
                   {githubStats?.avatar && (
                     <Image src={githubStats.avatar} alt="GH" width={80} height={80} className="rounded-full" />
                   )}
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    GitHub <span className="text-xs font-normal text-zinc-400">@DivyanshSharma</span>
                  </h3>
                  <div className="mt-2 flex gap-4 text-sm">
                    <span className="font-mono bg-white/10 px-2 py-1 rounded">
                      {githubStats?.public_repos ?? "-"} Repos
                    </span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded">
                      {githubStats?.followers ?? "-"} Followers
                    </span>
                  </div>
                  {/* Status */}
                  <div className="mt-2 flex items-center text-xs text-green-400">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {githubStats?.isActive ? "Recently Active" : "Away"}
                  </div>
                </div>
              </div>
              <Github className="absolute -bottom-6 -right-6 h-40 w-40 text-white/5 rotate-12" />
            </Link>

            {/* 2. LINKEDIN */}
            <Link
              href="https://www.linkedin.com/in/divyanshhsharma/" 
              target="_blank"
              aria-label="Connect with me on LinkedIn"
              className="group relative overflow-hidden rounded-3xl border bg-[#0077b5] p-6 text-white transition-all hover:scale-[1.02]"
            >
              <div className="flex h-full flex-col justify-between">
                <Linkedin className="h-8 w-8" />
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <p className="text-xs text-white/80">Professional Network</p>
                </div>
              </div>
            </Link>

            {/* 3. INSTAGRAM (Replaces Twitter) */}
            <Link
              href="https://www.instagram.com/divyanshhh.s/" // Update this!
              target="_blank"
              aria-label="Follow me on Instagram"
              className="group relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-6 text-white transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex h-full flex-col justify-between">
                <Instagram className="h-8 w-8" />
                <div>
                  <h3 className="font-bold">Instagram</h3>
                  <p className="text-xs text-white/90">Life & Photography</p>
                </div>
              </div>
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>

            {/* 4. LOCATION (Wide) */}
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border bg-neutral-100 dark:bg-neutral-900 p-6 flex items-center justify-between">
               <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <MapPin className="h-5 w-5" />
                 </div>
                 <div>
                   <p className="font-bold text-neutral-900 dark:text-neutral-100">Vellore, India</p>
                   <p className="text-xs text-muted-foreground">VIT University Campus</p>
                 </div>
               </div>
               <div className="hidden md:block text-right">
                  <p className="text-xs text-muted-foreground font-mono">
                    {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })}
                  </p>
                  <p className="text-[10px] text-muted-foreground">IST (GMT+5:30)</p>
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Contact Form */}
          <div className="lg:col-span-1 h-full">
            <ContactFormCard />
          </div>

        </div>
      </div>
    </section>
  );
}