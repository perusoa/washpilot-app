<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/logos/logo-6.png'
import logoDark from '@/assets/logos/logo-1.png'

const email = ref('')

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const problemCards = [
  {
    num: '01',
    title: 'Machine issues go unresolved',
    text: 'A jammed door, stopped cycle, or payment error with no one to call means a lost customer and a bad review.',
  },
  {
    num: '02',
    title: 'Your phone rings at the worst times',
    text: "Customers call your personal number while you're asleep, at dinner, or driving. Every missed call is a relationship you didn't get to save.",
  },
  {
    num: '03',
    title: 'Staff is expensive',
    text: 'A part-time attendant runs $1,500–$2,000/month. WashPilot replaces that coverage for $29 — without the HR headaches.',
  },
]

const qrPattern = [
  true, true, true, false, true,
  true, false, true, true, false,
  false, true, false, true, true,
  true, false, true, false, true,
  true, true, false, true, true,
]

const featuredBullets = [
  'See exactly what the customer sees, live',
  'Your voice guides them through the fix',
  'Works in any mobile browser, no download',
  'Customer can flip to rear camera to show machines',
]

const freeFeats = ['1 location', 'Unlimited calls', 'SMS notifications', 'QR code + setup help']
const paidFeats = [
  'Unlimited video calls',
  'SMS + voice call alerts',
  'Full call history & logs',
  'Missed call protection',
  'Custom QR code branding',
]

const roadmapItems = [
  {
    live: true,
    title: 'Remote Customer Assistance',
    text: 'Customers scan a QR code and reach you instantly via live video. You see their problem, talk them through it, from anywhere.',
    icon: `<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`,
  },
  {
    live: false,
    title: 'Live Machine Status Boards',
    text: 'A real-time display showing which washers and dryers are available — on a screen in your laundromat or embedded on your website.',
    icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`,
  },
  {
    live: false,
    title: 'Owner Dashboard',
    text: 'A central view of all your locations — call history, machine status, customer activity, and performance insights in one clean dashboard.',
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  },
]
</script>

<template>
  <div class="font-sans bg-white text-slate-800 leading-relaxed overflow-x-hidden">

    <!-- ── NAV ── -->
    <nav class="fixed top-0 left-0 right-0 z-[100] h-[68px] px-5 lg:px-20 flex items-center justify-between bg-white/[0.92] backdrop-blur-xl border-b border-slate-200">
      <a href="#" class="no-underline">
        <img :src="logo" alt="WashPilot" class="h-8 w-auto" />
      </a>
      <a href="#cta" class="text-sm font-semibold text-white bg-[#1e4fa0] hover:bg-[#1d3e75] hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)] px-5 py-2.5 rounded-lg transition-all no-underline">
        Get Early Access
      </a>
    </nav>

    <!-- ── HERO ── -->
    <section class="min-h-screen bg-[#0a1628] grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center px-5 lg:px-20 pt-[120px] pb-20 gap-20 relative overflow-hidden">
      <div class="hero-bg-glow"></div>
      <div class="hero-grid"></div>

      <div class="relative z-[1]">
        <div class="hero-badge">
          <div class="hero-badge-dot"></div>
          Built for laundromats. Simple by design.
        </div>

        <h1 class="font-display text-5xl lg:text-7xl font-medium leading-none tracking-[-0.035em] text-white mb-6 hero-anim-1">
          Simple tools for<br>
          laundromat owners<br>
          <span class="bg-gradient-to-br from-[#93c5fd] to-[#67e8f9] bg-clip-text text-transparent">who do it all.</span>
        </h1>

        <p class="text-lg text-white/50 font-light leading-relaxed max-w-[440px] mb-10 hero-anim-2">
          WashPilot is built for laundromat owners, not IT departments. Start with one feature — remote customer assistance via live video — and grow with us as we build the platform your laundromat deserves.
        </p>

        <div class="flex items-center gap-4 hero-anim-3">
          <a href="#cta" class="bg-[#2563eb] hover:bg-[#3b82f6] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.45)] text-white px-[2.125rem] py-[0.9375rem] rounded-[10px] font-display text-base font-semibold no-underline inline-flex items-center gap-2 transition-all">
            Get Early Access
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#how" class="text-white/50 hover:text-white/85 text-base font-medium no-underline inline-flex items-center gap-1.5 transition-colors">
            See How It Works
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
        </div>

        <div class="flex gap-10 mt-14 pt-8 border-t border-white/[0.08] hero-anim-4">
          <div>
            <div class="font-display text-3xl font-bold text-white tracking-[-0.03em] leading-none mb-1">30<span class="text-[#06b6d4]">s</span></div>
            <div class="text-xs text-white/35 font-medium tracking-[0.02em] uppercase">Avg. response time</div>
          </div>
          <div>
            <div class="font-display text-3xl font-bold text-white tracking-[-0.03em] leading-none mb-1">$0</div>
            <div class="text-xs text-white/35 font-medium tracking-[0.02em] uppercase">To get started</div>
          </div>
          <div>
            <div class="font-display text-3xl font-bold text-white tracking-[-0.03em] leading-none mb-1">90<span class="text-[#06b6d4]">d</span></div>
            <div class="text-xs text-white/35 font-medium tracking-[0.02em] uppercase">Free trial</div>
          </div>
        </div>
      </div>

      <!-- Phone mockup -->
      <div class="relative z-[1] justify-center hidden lg:flex hero-anim-5">
        <div class="device-wrap">
          <div class="device-frame">
            <div class="device-screen">
              <div class="device-notch"></div>
              <div class="flex flex-col items-center px-5 pb-6 gap-4 relative z-[1] flex-1">
                <div class="bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.25)] text-[#93c5fd] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.06em] uppercase">
                  Super Wash · Main Floor
                </div>
                <div class="text-center">
                  <div class="w-[72px] h-[72px] bg-[rgba(37,99,235,0.15)] border border-[rgba(59,130,246,0.2)] rounded-[22px] mx-auto mb-3.5 flex items-center justify-center">
                    <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M12 7v5l3 3"/>
                      <path d="M6 3.5A9 9 0 0 1 21 12"/>
                    </svg>
                  </div>
                  <div class="font-display text-xl font-bold text-white tracking-[-0.02em] mb-1">WashPilot</div>
                  <div class="text-xs text-white/35">Help is one tap away</div>
                </div>
                <button class="device-cta">
                  <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Request Assistance
                </button>
                <div class="text-xs text-white/20 text-center">Tap to connect with your laundromat owner</div>
                <div class="relative w-20 h-10 mx-auto">
                  <div class="ring"></div>
                  <div class="ring" style="animation-delay: 0.8s"></div>
                  <div class="ring" style="animation-delay: 1.6s"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="chip chip-1">
            <div class="chip-dot-green"></div>
            <div>
              <strong class="block text-xs font-semibold text-white leading-tight">Owner connected</strong>
              <span class="text-xs text-white/40">Joining now...</span>
            </div>
          </div>
          <div class="chip chip-2">
            <div class="chip-dot-blue"></div>
            <div>
              <strong class="block text-xs font-semibold text-white leading-tight">SMS sent</strong>
              <span class="text-xs text-white/40">1s ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROBLEM ── -->
    <section class="py-20 px-5 lg:px-20 bg-white">
      <div class="max-w-[1100px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div class="section-overline">The Problem</div>
            <h2 class="font-display text-4xl lg:text-5xl font-medium leading-none tracking-[-0.03em] text-slate-900">
              Unattended Laundromats <em class="not-italic text-[#1e4fa0]">Lose Customers</em> Every Single Day.
            </h2>
          </div>
          <div>
            <p class="text-base text-slate-500 leading-relaxed font-normal pt-10">
              When a machine breaks, a payment fails, or a customer is confused — and nobody is there to help — they leave frustrated and don't come back. The laundromat industry has been underserved by technology for decades. WashPilot fixes that, one simple tool at a time.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="card in problemCards"
            :key="card.num"
            class="prob-card bg-slate-50 border border-slate-200 rounded-2xl p-8 transition-all hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] hover:-translate-y-0.5"
          >
            <div class="font-display text-6xl font-bold text-blue-100 leading-none mb-5 tracking-[-0.04em]">{{ card.num }}</div>
            <div class="font-display text-xl font-medium text-slate-900 mb-2.5 tracking-tight">{{ card.title }}</div>
            <div class="text-sm text-slate-500 leading-relaxed">{{ card.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS ── -->
    <section id="how" class="py-20 px-5 lg:px-20 bg-[#0a1628] relative overflow-hidden">
      <div class="how-grid"></div>
      <div class="max-w-[1100px] mx-auto relative">
        <div class="text-center mb-14">
          <div class="section-overline-light">How it works</div>
          <h2 class="font-display text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white mb-4 leading-none">Three Steps. That's It.</h2>
          <p class="text-base text-white/40 font-light max-w-[420px] mx-auto">No manuals. No training. No IT person required. If you can post a sign, you can use WashPilot.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr_60px_1fr] items-start gap-0">
          <!-- Step 1 -->
          <div class="bg-white/[0.04] border border-white/[0.07] rounded-[20px] p-9 transition-all hover:bg-[rgba(37,99,235,0.12)] hover:border-[rgba(59,130,246,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(37,99,235,0.2)]">
            <div class="w-10 h-10 bg-[#1e4fa0] rounded-[10px] flex items-center justify-center font-display text-base font-bold text-white mb-6">01</div>
            <div class="h-[72px] flex items-center mb-6">
              <div class="qr-block">
                <div v-for="(b, i) in qrPattern" :key="i" :class="['qc', b ? 'b' : '']"></div>
              </div>
            </div>
            <div class="font-display text-xl font-medium text-white mb-2.5 tracking-tight">Customer scans your QR code</div>
            <div class="text-sm text-white/45 leading-relaxed">Post one WashPilot QR code at your location. Any customer who needs help scans it with their phone camera — no app, no login.</div>
          </div>

          <!-- Arrow -->
          <div class="hidden md:flex items-start justify-center pt-8 mt-10">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(59,130,246,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          <!-- Step 2 -->
          <div class="bg-white/[0.04] border border-white/[0.07] rounded-[20px] p-9 transition-all hover:bg-[rgba(37,99,235,0.12)] hover:border-[rgba(59,130,246,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(37,99,235,0.2)]">
            <div class="w-10 h-10 bg-[#1e4fa0] rounded-[10px] flex items-center justify-center font-display text-base font-bold text-white mb-6">02</div>
            <div class="h-[72px] flex items-center mb-6">
              <div class="bg-[#1e4fa0] rounded-[12px_12px_12px_3px] px-3.5 py-2.5 text-xs text-white font-medium max-w-[200px] leading-normal">
                <div class="text-xs text-white/60 font-semibold tracking-[0.04em] uppercase mb-[3px]">WashPilot</div>
                Someone needs help at Super Wash! Tap to join: washpilot.app/s/k8xP2 (30 min)
              </div>
            </div>
            <div class="font-display text-xl font-medium text-white mb-2.5 tracking-tight">You get a text with a join link</div>
            <div class="text-sm text-white/45 leading-relaxed">The instant they tap "Request Assistance," you get an SMS with a unique link. One tap and you're in the call — no login required on your end either.</div>
          </div>

          <!-- Arrow -->
          <div class="hidden md:flex items-start justify-center pt-8 mt-10">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="rgba(59,130,246,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          <!-- Step 3 -->
          <div class="bg-white/[0.04] border border-white/[0.07] rounded-[20px] p-9 transition-all hover:bg-[rgba(37,99,235,0.12)] hover:border-[rgba(59,130,246,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(37,99,235,0.2)]">
            <div class="w-10 h-10 bg-[#1e4fa0] rounded-[10px] flex items-center justify-center font-display text-base font-bold text-white mb-6">03</div>
            <div class="h-[72px] flex items-center mb-6">
              <div class="flex items-center gap-2.5 w-full">
                <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">👤</div>
                <div class="call-wire flex-1"></div>
                <div class="w-12 h-12 rounded-full bg-[#1e4fa0] flex items-center justify-center text-xl shrink-0">👨‍💼</div>
              </div>
            </div>
            <div class="font-display text-xl font-medium text-white mb-2.5 tracking-tight">You see it. You solve it. In seconds.</div>
            <div class="text-sm text-white/45 leading-relaxed">You see exactly what the customer is pointing at through their camera. You talk them through the fix — from anywhere you happen to be.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section id="features" class="py-20 px-5 lg:px-20 bg-slate-50">
      <div class="max-w-[1100px] mx-auto">
        <div class="text-center mb-10">
          <div class="section-overline justify-center">Features — Starting with</div>
          <h2 class="font-display text-4xl lg:text-5xl font-medium text-slate-900 tracking-[-0.03em] leading-none mb-2">One Feature, Done Right.</h2>
          <p class="text-slate-400 text-base font-light max-w-[480px] mx-auto mt-3">
            We're starting with remote customer assistance. Machine status boards, owner dashboards, and more are on the roadmap. Simple now. More powerful as we grow together.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <!-- Featured card -->
          <div class="bg-[#0a1628] border border-[rgba(59,130,246,0.2)] rounded-[20px] p-10 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div class="w-[52px] h-[52px] bg-[rgba(37,99,235,0.2)] rounded-[14px] flex items-center justify-center mb-5">
                <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <div class="font-display text-2xl font-medium text-white mb-2 tracking-tight">Live video assistance, on demand</div>
              <div class="text-sm text-white/45 leading-relaxed mb-5">
                Your customer's camera streams live directly to you. See exactly what they're pointing at — a machine display, a door that won't open, a payment panel. Your voice guides them to the fix in real time.
              </div>
              <ul class="flex flex-col gap-2.5 list-none m-0 p-0">
                <li v-for="b in featuredBullets" :key="b" class="text-sm text-white/60 flex items-center gap-2.5">
                  <span class="feat-check shrink-0"></span>{{ b }}
                </li>
              </ul>
            </div>
            <!-- Live call demo -->
            <div class="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-semibold tracking-[0.08em] uppercase text-white/30">Active call</span>
                <span class="live-dot">Live</span>
              </div>
              <div class="bg-[#0f1f3d] rounded-[10px] aspect-video flex flex-col items-center justify-center gap-2.5 mb-4 relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,rgba(37,99,235,0.2)_0%,transparent_60%)]"></div>
                <span class="text-3xl relative z-[1]">👤</span>
                <span class="text-xs text-white/50 font-medium relative z-[1]">Customer · Machine 7</span>
              </div>
              <div class="flex justify-center gap-3">
                <button class="w-[42px] h-[42px] rounded-full bg-white/10 border-0 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </button>
                <button class="w-[42px] h-[42px] rounded-full bg-red-500 border-0 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A2 2 0 0 1 9.72 19"/></svg>
                </button>
                <button class="w-[42px] h-[42px] rounded-full bg-white/10 border-0 flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- SMS + voice -->
          <div class="bg-white border border-slate-200 rounded-[20px] p-8 transition-all hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-0.5">
            <div class="w-[52px] h-[52px] bg-blue-50 rounded-[14px] flex items-center justify-center mb-5">
              <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#1e4fa0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="font-display text-xl font-medium text-slate-900 mb-2 tracking-tight">SMS + voice call alerts</div>
            <div class="text-sm text-slate-500 leading-relaxed">You get an SMS the instant a customer requests help. If you don't respond in 15 seconds, WashPilot calls your phone directly — so you never miss a customer who needs you.</div>
          </div>

          <!-- Multi-location -->
          <div class="bg-white border border-slate-200 rounded-[20px] p-8 transition-all hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-0.5">
            <div class="w-[52px] h-[52px] bg-blue-50 rounded-[14px] flex items-center justify-center mb-5">
              <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#1e4fa0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div class="font-display text-xl font-medium text-slate-900 mb-2 tracking-tight">Multi-location ready</div>
            <div class="text-sm text-slate-500 leading-relaxed">Own more than one laundromat? Manage every location from a single dashboard. Each gets its own unique QR code. All calls route to you.</div>
          </div>

          <!-- Zero friction -->
          <div class="bg-white border border-slate-200 rounded-[20px] p-8 transition-all hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-0.5">
            <div class="w-[52px] h-[52px] bg-blue-50 rounded-[14px] flex items-center justify-center mb-5">
              <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#1e4fa0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div class="font-display text-xl font-medium text-slate-900 mb-2 tracking-tight">Zero friction for customers</div>
            <div class="text-sm text-slate-500 leading-relaxed">Scan → tap → connected. No app download, no account, no password. Any smartphone, any browser. The lowest possible barrier to getting help.</div>
          </div>

          <!-- Missed call protection -->
          <div class="bg-white border border-slate-200 rounded-[20px] p-8 transition-all hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-0.5">
            <div class="w-[52px] h-[52px] bg-blue-50 rounded-[14px] flex items-center justify-center mb-5">
              <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#1e4fa0" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="font-display text-xl font-medium text-slate-900 mb-2 tracking-tight">Missed call protection</div>
            <div class="text-sm text-slate-500 leading-relaxed">If you can't pick up, customers see a friendly message instead of silence. Every interaction is logged so you can follow up and nothing falls through.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ROADMAP ── -->
    <section class="py-20 px-5 lg:px-20 bg-[#0a1628] relative overflow-hidden">
      <div class="how-grid"></div>
      <div class="max-w-[1100px] mx-auto relative">
        <div class="text-center mb-12">
          <div class="section-overline-light">What's coming next</div>
          <h2 class="font-display text-4xl lg:text-5xl font-medium text-white tracking-[-0.03em] leading-tight mb-3.5">This Is Just The Beginning.</h2>
          <p class="text-white/40 text-base font-light max-w-[460px] mx-auto leading-relaxed">
            WashPilot is building the operating system for unattended laundromats. Remote assistance is feature one. Here's what's on the roadmap.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="item in roadmapItems"
            :key="item.title"
            class="rounded-2xl p-7 relative overflow-hidden"
            :class="item.live
              ? 'bg-white/[0.04] border border-white/[0.07]'
              : 'bg-white/[0.03] border border-dashed border-white/10 opacity-85'"
          >
            <div
              class="absolute top-4 right-4 rounded-full px-2.5 py-[3px] text-xs font-bold tracking-[0.06em] uppercase"
              :class="item.live
                ? 'bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.25)] text-[#67e8f9]'
                : 'bg-white/[0.07] border border-white/10 text-white/35'"
            >{{ item.live ? 'Now live' : 'Coming soon' }}</div>
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              :class="item.live ? 'bg-[rgba(37,99,235,0.2)]' : 'bg-white/[0.06]'"
            >
              <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none"
                :stroke="item.live ? '#93c5fd' : 'rgba(255,255,255,0.35)'"
                stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                v-html="item.icon"
              ></svg>
            </div>
            <div
              class="font-display text-lg font-medium mb-2 tracking-tight"
              :class="item.live ? 'text-white' : 'text-white/60'"
            >{{ item.title }}</div>
            <div
              class="text-sm leading-relaxed"
              :class="item.live ? 'text-white/40' : 'text-white/30'"
            >{{ item.text }}</div>
          </div>
        </div>

        <p class="text-center mt-8 text-sm text-white/25">
          Founding members help shape what we build next.
          <a href="#cta" class="text-[#93c5fd] no-underline font-semibold">Join Early Access →</a>
        </p>
      </div>
    </section>

    <!-- ── PRICING ── -->
    <section id="pricing" class="py-20 px-5 lg:px-20 bg-white">
      <div class="max-w-[920px] mx-auto">
        <div class="text-center mb-12">
          <div class="section-overline justify-center">Pricing</div>
          <h2 class="font-display text-4xl lg:text-5xl font-medium text-slate-900 tracking-[-0.03em] leading-none mb-3">Flat, Simple Pricing.</h2>
          <p class="text-slate-400 text-base font-light">No per-call fees. No usage caps. One rate per location.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Free trial -->
          <div class="border border-slate-200 rounded-3xl p-10 transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
            <div class="font-display text-xs font-bold tracking-[0.1em] uppercase text-slate-400 mb-5">Free Trial</div>
            <div class="flex items-baseline gap-1 mb-2">
              <span class="font-display text-xl font-semibold text-slate-500 self-start mt-2">$</span>
              <span class="font-display text-6xl font-bold text-slate-900 leading-none tracking-[-0.04em]">0</span>
              <span class="text-sm text-slate-400 self-end mb-1">/ 90 days</span>
            </div>
            <p class="text-sm text-slate-500 leading-relaxed mb-8">Try WashPilot completely free for 90 days. No credit card, no commitment.</p>
            <ul class="flex flex-col gap-3 list-none m-0 p-0 mb-8">
              <li v-for="f in freeFeats" :key="f" class="text-sm text-slate-600 flex items-center gap-3">
                <span class="price-check"></span>{{ f }}
              </li>
            </ul>
            <a href="#cta" class="block w-full py-4 rounded-xl font-display text-base font-semibold text-center text-slate-700 border border-slate-300 hover:border-blue-500 hover:text-[#1e4fa0] transition-all no-underline">
              Start Free Trial
            </a>
          </div>

          <!-- Paid -->
          <div class="relative bg-[#2563eb] border border-[#2563eb] rounded-3xl p-10 shadow-[0_24px_64px_rgba(37,99,235,0.35)] -translate-y-1.5">
            <div class="absolute top-[-13px] left-1/2 -translate-x-1/2 bg-[#06b6d4] text-[#0a1628] py-[3px] px-4 rounded-full text-xs font-bold tracking-[0.06em] uppercase whitespace-nowrap">
              Most popular
            </div>
            <div class="font-display text-xs font-bold tracking-[0.1em] uppercase text-white/50 mb-5">Per Location</div>
            <div class="flex items-baseline gap-1 mb-2">
              <span class="font-display text-xl font-semibold text-white/60 self-start mt-2">$</span>
              <span class="font-display text-6xl font-bold text-white leading-none tracking-[-0.04em]">29</span>
              <span class="text-sm text-white/40 self-end mb-1">/ mo</span>
            </div>
            <p class="text-sm text-white/50 leading-relaxed mb-8">Everything you need to be virtually present. Less than two hours of staff wages per month.</p>
            <ul class="flex flex-col gap-3 list-none m-0 p-0 mb-8">
              <li v-for="f in paidFeats" :key="f" class="text-sm text-white/75 flex items-center gap-3">
                <span class="price-check-white"></span>{{ f }}
              </li>
            </ul>
            <a href="#cta" class="block w-full py-4 rounded-xl font-display text-base font-semibold text-center text-[#1d3e75] bg-white hover:bg-blue-50 transition-all no-underline">
              Get Started
            </a>
          </div>
        </div>

        <p class="text-center mt-8 text-sm text-slate-400">
          Running 3+ locations? <a href="#cta" class="text-[#1e4fa0] font-semibold no-underline">Contact Us</a> for multi-location pricing.
        </p>
      </div>
    </section>

    <!-- ── TESTIMONIAL ── -->
    <section class="py-[4.5rem] px-5 lg:px-20 bg-blue-50">
      <div class="max-w-[680px] mx-auto text-center">
        <div class="w-[52px] h-[52px] bg-blue-100 rounded-2xl mx-auto mb-7 flex items-center justify-center">
          <svg class="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="#2563eb">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
        </div>
        <p class="font-display text-xl lg:text-2xl font-medium text-slate-800 leading-normal tracking-[-0.02em] mb-8">
          "I used to miss calls from customers constantly. Now they scan the code, I can see exactly what they're dealing with, and I talk them through it in seconds — even when I'm at home. It's completely changed how I run my laundromat."
        </p>
        <div class="flex items-center justify-center gap-4">
          <div class="w-[46px] h-[46px] bg-[#2563eb] rounded-full flex items-center justify-center font-display text-lg font-bold text-white">A</div>
          <div class="text-left">
            <strong class="block text-sm font-semibold text-slate-800">Anthony R.</strong>
            <span class="text-xs text-slate-400">Owner, Super Wash Laundromat · Sussex, NJ</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section id="cta" class="py-20 px-5 lg:px-20 bg-gradient-to-br from-[#0f1f3d] to-[#0a1628] relative overflow-hidden text-center">
      <div class="how-grid opacity-50"></div>
      <div class="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%);"></div>
      <div class="max-w-[580px] mx-auto relative z-[1]">
        <div class="inline-flex items-center gap-2 bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.25)] text-[#67e8f9] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.06em] uppercase mb-8">
          🛠 Founding member access
        </div>
        <h2 class="font-display text-4xl lg:text-5xl font-medium text-white tracking-[-0.03em] leading-none mb-5">
          Start Simple.<br>
          <span class="bg-gradient-to-br from-[#93c5fd] to-[#67e8f9] bg-clip-text text-transparent">Grow With Us.</span>
        </h2>
        <p class="text-base text-white/40 font-light mb-10 leading-relaxed">
          Join as a founding member and get 90 days free. You'll shape what WashPilot builds next — and lock in a founding rate before we open to the public.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="flex-1 px-5 py-[0.9375rem] bg-white/[0.07] border border-white/[0.12] rounded-[10px] text-base text-white placeholder-white/25 outline-none focus:border-blue-400 transition-colors font-sans"
          />
          <button class="bg-[#2563eb] hover:bg-[#3b82f6] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] text-white border-0 px-7 py-[0.9375rem] rounded-[10px] font-display text-base font-semibold cursor-pointer transition-all whitespace-nowrap">
            Claim Founding Access
          </button>
        </div>
        <p class="text-xs text-white/25">No credit card. No commitment. Built by a laundromat owner, for laundromat owners.</p>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer class="bg-[#0a1628] border-t border-white/[0.05] px-5 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <img :src="logoDark" alt="WashPilot" class="h-7 w-auto opacity-60" />
      <p class="text-xs text-white/20">© 2025 WashPilot. All rights reserved.</p>
      <ul class="flex gap-8 list-none m-0 p-0">
        <li v-for="link in ['Privacy', 'Terms', 'Contact']" :key="link">
          <a href="#" class="text-xs text-white/25 hover:text-white/60 transition-colors no-underline">{{ link }}</a>
        </li>
      </ul>
    </footer>

  </div>
</template>

<style>
/* ── Font utility ── */
.font-display { font-family: 'Clash Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif; }
.font-sans { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }

/* ── Section overlines ── */
.section-overline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Clash Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 1rem;
}
.section-overline::before {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background: #2563eb;
  border-radius: 2px;
  flex-shrink: 0;
}
.section-overline-light {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Clash Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 1rem;
  width: 100%;
}
.section-overline-light::before {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background: #93c5fd;
  border-radius: 2px;
  flex-shrink: 0;
}

/* ── Hero background effects ── */
.hero-bg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-bg-glow::before {
  content: '';
  position: absolute;
  top: -20%; left: -10%;
  width: 70vw; height: 70vw;
  background: radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 65%);
}
.hero-bg-glow::after {
  content: '';
  position: absolute;
  bottom: -10%; right: -10%;
  width: 50vw; height: 50vw;
  background: radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 65%);
}
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* ── How/Roadmap grid background ── */
.how-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

/* ── Hero badge ── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(37,99,235,0.2);
  border: 1px solid rgba(59,130,246,0.3);
  color: #93c5fd;
  padding: 0.375rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0;
  animation: slideUp 0.7s cubic-bezier(.22,1,.36,1) forwards 0.1s;
}
.hero-badge-dot {
  width: 6px; height: 6px;
  background: #06b6d4;
  border-radius: 50%;
  animation: blink 1.8s ease-in-out infinite;
}

/* ── Hero entry animations ── */
.hero-anim-1 { opacity: 0; animation: slideUp 0.7s cubic-bezier(.22,1,.36,1) forwards 0.2s; }
.hero-anim-2 { opacity: 0; animation: slideUp 0.7s cubic-bezier(.22,1,.36,1) forwards 0.3s; }
.hero-anim-3 { opacity: 0; animation: slideUp 0.7s cubic-bezier(.22,1,.36,1) forwards 0.4s; }
.hero-anim-4 { opacity: 0; animation: slideUp 0.7s cubic-bezier(.22,1,.36,1) forwards 0.5s; }
.hero-anim-5 { opacity: 0; animation: fadeIn 1s ease forwards 0.6s; }

/* ── Device mockup ── */
.device-wrap {
  position: relative;
  width: 300px;
}
.device-frame {
  width: 300px;
  background: #0d0d0f;
  border-radius: 44px;
  padding: 14px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.07),
    0 40px 80px rgba(0,0,0,0.6),
    0 80px 160px rgba(37,99,235,0.15);
}
.device-screen {
  background: linear-gradient(160deg, #0f1b35 0%, #0a1020 100%);
  border-radius: 32px;
  overflow: hidden;
  aspect-ratio: 9/19.5;
  display: flex;
  flex-direction: column;
  position: relative;
}
.device-screen::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 30%, rgba(37,99,235,0.15) 0%, transparent 60%);
  pointer-events: none;
}
.device-notch {
  width: 100px; height: 30px;
  background: #0d0d0f;
  border-radius: 0 0 20px 20px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}
.device-cta {
  width: 100%;
  background: #1e4fa0;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 1rem;
  font-family: 'Clash Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 20px rgba(37,99,235,0.5);
  letter-spacing: -0.01em;
}

/* ── Ring pulse ── */
.ring {
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 40px; height: 40px;
  border: 1.5px solid #3b82f6;
  border-radius: 50%;
  animation: ringPulse 2.4s ease-out infinite;
  opacity: 0;
}

/* ── Floating chips ── */
.chip {
  position: absolute;
  background: rgba(15,31,61,0.95);
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 12px;
  padding: 0.625rem 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  backdrop-filter: blur(12px);
  white-space: nowrap;
}
.chip-1 { right: -40px; top: 18%; animation: floatA 4s ease-in-out infinite; }
.chip-2 { left: -50px; bottom: 22%; animation: floatB 4s ease-in-out infinite 2s; }
.chip-dot-green {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34,197,94,0.5);
  flex-shrink: 0;
}
.chip-dot-blue {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 8px rgba(59,130,246,0.5);
  flex-shrink: 0;
}

/* ── QR code block ── */
.qr-block {
  width: 56px; height: 56px;
  background: white;
  border-radius: 8px;
  padding: 7px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
}
.qc { background: white; border-radius: 1px; }
.qc.b { background: #0f172a; }

/* ── Call wire animation ── */
.call-wire {
  height: 2px;
  background: linear-gradient(90deg, rgba(59,130,246,0.3), #06b6d4, rgba(59,130,246,0.3));
  position: relative;
  border-radius: 2px;
}
.call-wire::after {
  content: '';
  position: absolute;
  top: 50%; left: 0;
  transform: translateY(-50%);
  width: 8px; height: 8px;
  background: #06b6d4;
  border-radius: 50%;
  box-shadow: 0 0 8px #06b6d4;
  animation: travelDot 2s linear infinite;
}

/* ── Prob card bottom accent ── */
.prob-card {
  position: relative;
  overflow: hidden;
}
.prob-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.prob-card:hover::after { transform: scaleX(1); }

/* ── Feature checklist bullet ── */
.feat-check {
  width: 18px; height: 18px;
  border-radius: 50%;
  background: rgba(37,99,235,0.25);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M4 9l3.5 3.5 7-7' stroke='%2393c5fd' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
  background-size: 11px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

/* ── Pricing checklist ── */
.price-check {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #dbeafe;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 5l2 2 4-4' stroke='%231e4fa0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  flex-shrink: 0;
}
.price-check-white {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 5l2 2 4-4' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");
  background-size: 10px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  flex-shrink: 0;
}

/* ── Live dot indicator ── */
.live-dot {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #22c55e;
}
.live-dot::before {
  content: '';
  width: 6px; height: 6px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 6px #22c55e;
  animation: blink 1.5s ease-in-out infinite;
}

/* ── Keyframes ── */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes floatA {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
@keyframes floatB {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}
@keyframes ringPulse {
  0%   { transform: translateX(-50%) scale(0.6); opacity: 0.7; }
  100% { transform: translateX(-50%) scale(2.2); opacity: 0; }
}
@keyframes travelDot {
  0%   { left: 0%; }
  100% { left: calc(100% - 8px); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
</style>
