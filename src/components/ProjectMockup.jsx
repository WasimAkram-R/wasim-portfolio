import React from 'react';
import { 
  Users, 
  BarChart3, 
  ShieldCheck, 
  ShoppingBag, 
  Gem, 
  MessageSquare, 
  Heart, 
  Repeat, 
  Share2, 
  Send, 
  Circle,
  Wifi,
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';

export default function ProjectMockup({ type, title }) {
  if (type === 'crm') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-xl bg-dark-900 border border-slate-800/90 overflow-hidden p-3 font-sans select-none flex flex-col justify-between">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="text-[10px] font-mono text-slate-400 pl-1">CRM Suite // Keycloak Auth</span>
          </div>
          <span className="text-[9px] font-semibold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 flex items-center gap-1">
            <Lock className="w-2.5 h-2.5" /> RBAC Protected
          </span>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Total Leads</div>
            <div className="text-sm font-bold text-white font-heading">1,420</div>
            <div className="text-[9px] text-emerald-400">+12% this mo</div>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Active Deals</div>
            <div className="text-sm font-bold text-brand-cyan font-heading">88</div>
            <div className="text-[9px] text-cyan-400">In Pipeline</div>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] text-slate-400">Closed Won</div>
            <div className="text-sm font-bold text-brand-violet font-heading">32</div>
            <div className="text-[9px] text-violet-400">Stage: Complete</div>
          </div>
        </div>

        {/* Mock Mini Data Table / Pipeline */}
        <div className="space-y-1.5 bg-slate-950/50 p-2 rounded-lg border border-slate-800/40">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="font-medium truncate max-w-[120px]">Acme Enterprise Lead</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] bg-blue-500/20 text-blue-300">Contract Negotiation</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="font-medium truncate max-w-[120px]">Nexus Tech Solution</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] bg-emerald-500/20 text-emerald-300">Closed &amp; Invoiced</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1">
          <span>Illustrative Mockup: React + Keycloak Dashboard</span>
          <span className="text-brand-cyan font-mono">REST CRUD API</span>
        </div>
      </div>
    );
  }

  if (type === 'jewellery') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-xl bg-gradient-to-b from-dark-900 via-slate-900 to-dark-950 border border-slate-800/90 overflow-hidden p-3 font-sans select-none flex flex-col justify-between">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-1.5">
            <Gem className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-heading font-bold text-amber-200 tracking-wider">LUMIÈRE JEWELLERY</span>
          </div>
          <span className="text-[9px] font-medium text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Luxury Catalog
          </span>
        </div>

        {/* Product Grid Mockup */}
        <div className="grid grid-cols-2 gap-2 my-2">
          {/* Item 1 */}
          <div className="bg-slate-950/80 p-2 rounded-lg border border-amber-500/20 flex flex-col justify-between">
            <div className="h-14 rounded bg-gradient-to-tr from-amber-950/40 to-slate-800 flex items-center justify-center relative">
              <div className="w-8 h-8 rounded-full border border-amber-400/50 flex items-center justify-center shadow-inner">
                <Gem className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
              <span className="absolute top-1 right-1 text-[8px] bg-amber-500/20 text-amber-300 px-1 rounded">18K Gold</span>
            </div>
            <div className="mt-1.5">
              <div className="text-[10px] font-semibold text-slate-200 truncate">Solitaire Diamond Band</div>
              <div className="text-[9px] text-amber-400 font-mono">Enquire Catalog</div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div className="h-14 rounded bg-gradient-to-tr from-rose-950/40 to-slate-800 flex items-center justify-center relative">
              <div className="w-8 h-8 rounded-full border border-rose-400/50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-rose-300" />
              </div>
              <span className="absolute top-1 right-1 text-[8px] bg-rose-500/20 text-rose-300 px-1 rounded">Platinum</span>
            </div>
            <div className="mt-1.5">
              <div className="text-[10px] font-semibold text-slate-200 truncate">Royal Heritage Necklace</div>
              <div className="text-[9px] text-rose-400 font-mono">Tailwind UI</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-800/40">
          <span>Illustrative Mockup: Responsive E-Commerce</span>
          <span className="text-amber-400 font-mono">Mobile-First Layout</span>
        </div>
      </div>
    );
  }

  if (type === 'twitter') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-xl bg-dark-900 border border-slate-800/90 overflow-hidden p-3 font-sans select-none flex flex-col justify-between">
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-sky-500 flex items-center justify-center text-[10px] font-bold text-white">
              𝕏
            </div>
            <span className="text-[10px] font-mono text-slate-300">Feed // React Query Cache</span>
          </div>
          <span className="text-[9px] font-medium text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
            JWT Auth Active
          </span>
        </div>

        {/* Post Card */}
        <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 my-1.5 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-electric to-brand-cyan flex items-center justify-center text-[10px] font-bold text-white">
              W
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-white">Wasim Akram</span>
                <span className="text-[9px] text-sky-400 font-bold">✓</span>
                <span className="text-[10px] text-slate-500">@wasimakram · 2h</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-300 leading-snug">
            Just deployed the MERN social architecture with Cloudinary media optimization &amp; zero-flicker React Query caching! 🚀
          </p>

          <div className="flex items-center justify-between text-slate-400 pt-1 text-[9px] px-2">
            <span className="flex items-center gap-1 hover:text-sky-400"><MessageSquare className="w-3 h-3" /> 24</span>
            <span className="flex items-center gap-1 hover:text-emerald-400"><Repeat className="w-3 h-3" /> 18</span>
            <span className="flex items-center gap-1 text-rose-400"><Heart className="w-3 h-3 fill-rose-500" /> 156</span>
            <span className="flex items-center gap-1 hover:text-sky-400"><Share2 className="w-3 h-3" /></span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1">
          <span>Illustrative Mockup: Full-Stack Social App</span>
          <span className="text-sky-400 font-mono">Cloudinary CDN</span>
        </div>
      </div>
    );
  }

  // Real-Time Chat App Mockup (Chatify)
  return (
    <div className="relative w-full h-48 sm:h-52 rounded-xl bg-dark-900 border border-slate-800/90 overflow-hidden p-3 font-sans select-none flex flex-col justify-between">
      {/* Mockup Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-emerald-700 flex items-center justify-center text-[10px] font-bold text-white">
              C
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-dark-900" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white leading-tight">Chatify Direct</div>
            <div className="text-[8px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Socket Connected
            </div>
          </div>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
          Zustand Store
        </span>
      </div>

      {/* Chat Bubbles */}
      <div className="space-y-1.5 my-1.5 text-[10px]">
        {/* Incoming message */}
        <div className="flex items-start gap-1.5">
          <div className="w-4 h-4 rounded-full bg-slate-700 shrink-0 text-[8px] flex items-center justify-center text-slate-300">
            JD
          </div>
          <div className="bg-slate-800 text-slate-200 px-2.5 py-1.5 rounded-2xl rounded-tl-none max-w-[80%] leading-tight">
            Hi Wasim! Are Socket.io rooms handling instant presence notifications?
          </div>
        </div>

        {/* Outgoing message */}
        <div className="flex items-end justify-end gap-1.5">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-2.5 py-1.5 rounded-2xl rounded-br-none max-w-[80%] leading-tight">
            Yes! Bidirectional socket events update online status and state via Zustand with zero lag.
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-1 text-[8px] text-slate-500 pl-6">
          <span>JD is typing</span>
          <span className="animate-bounce">.</span>
          <span className="animate-bounce delay-100">.</span>
          <span className="animate-bounce delay-200">.</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-800/40">
        <span>Illustrative Mockup: Real-Time WebSockets</span>
        <span className="text-emerald-400 font-mono">Socket.io + React</span>
      </div>
    </div>
  );
}
