<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/logos/logo-6.png'
import logoDark from '@/assets/logos/logo-1.png'
import icon9 from '@/assets/icons/icon-9.png'

const email = ref('')
const submitted = ref(false)
const submitting = ref(false)

async function handleSubmit() {
  if (!email.value) return
  submitting.value = true
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'early-access', email: email.value }).toString(),
    })
  } finally {
    submitted.value = true
    submitting.value = false
  }
}

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 24 }

let observer: IntersectionObserver | undefined
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  const els = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'))
    return
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        observer?.unobserve(e.target)
      }
    })
  }, { rootMargin: '0px 0px -10% 0px' })
  els.forEach((el) => observer?.observe(el))
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})

const navLinks = [
  { href: '#assist', label: 'Remote assist' },
  { href: '#app', label: 'Owner app' },
  { href: '#dropoff', label: 'Drop-off' },
  { href: '#status', label: 'Status boards' },
  { href: '#access', label: 'Early access' },
]

const assistSteps = [
  {
    title: 'Customer scans your QR code',
    text: 'Post a WashPilot sign at your location. Anyone who needs help scans it with their phone camera — no app, no account.',
  },
  {
    title: 'Your phone rings in the app',
    text: 'The WashPilot app sends a push notification the moment they tap “Request assistance”, showing which location needs you.',
  },
  {
    title: 'You answer on live video',
    text: 'See what their camera sees — the machine display, the stuck door, the payment panel — and talk them through the fix.',
  },
]

const appFeatures = [
  {
    title: 'Push notifications',
    text: 'Assistance requests and new drop-off orders reach your lock screen instantly.',
    icon: `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
  },
  {
    title: 'Answer in one tap',
    text: 'Pick up a customer video call straight from the notification.',
    icon: `<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>`,
  },
  {
    title: 'Call history',
    text: 'See every request, when it came in, and how it was handled.',
    icon: `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>`,
  },
  {
    title: 'Drop-off orders',
    text: 'Every wash-dry-fold order customers place, in one queue.',
    icon: `<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/>`,
  },
  {
    title: 'Every location',
    text: 'Each laundromat gets its own QR code. Everything routes to you.',
    icon: `<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>`,
  },
  {
    title: 'Install your way',
    text: 'Native app for iPhone and Android, or add it to your home screen from any browser.',
    icon: `<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>`,
  },
]

const dropoffSteps = [
  { title: 'Customer drops off', text: 'They leave their bags and scan the drop-off QR code.' },
  { title: 'They enter the order', text: 'Name, phone, bag count, and any care instructions — on their own phone.' },
  { title: 'You get it in the app', text: 'The order lands in your queue with a push notification. No paper tickets.' },
]

type Machine = { id: string; state: 'free' | 'busy' | 'done'; left?: number; pct?: number }
const washers: Machine[] = [
  { id: 'W1', state: 'busy', left: 12, pct: 70 },
  { id: 'W2', state: 'free' },
  { id: 'W3', state: 'busy', left: 27, pct: 25 },
  { id: 'W4', state: 'done' },
  { id: 'W5', state: 'free' },
  { id: 'W6', state: 'busy', left: 4, pct: 90 },
]
const dryers: Machine[] = [
  { id: 'D1', state: 'busy', left: 18, pct: 45 },
  { id: 'D2', state: 'free' },
  { id: 'D3', state: 'busy', left: 33, pct: 15 },
  { id: 'D4', state: 'free' },
]
const statusBullets = [
  'Which washers and dryers are free right now',
  'Time remaining on every machine in use',
  'Shown on a screen in your laundromat or on your website',
]

const foundingFeats = [
  'Unlimited live video calls',
  'The WashPilot owner app, with push notifications',
  'Wash-dry-fold drop-off ordering',
  'Full call history',
  'A custom QR code for each location',
  'Direct input on what we build next',
]
</script>

<template>
  <div class="font-sans bg-white text-slate-700 leading-relaxed overflow-x-hidden antialiased">

    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-ink focus:px-4 focus:py-2 focus:rounded-lg">Skip to content</a>

    <!-- ── NAV ── -->
    <header
      class="fixed top-0 inset-x-0 z-[100] transition-all duration-300"
      :class="scrolled ? 'py-3' : 'py-5'"
    >
      <nav
        class="mx-auto max-w-6xl px-4 sm:px-5 flex items-center justify-between gap-4 rounded-2xl transition-all duration-300"
        :class="scrolled ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(15,31,61,0.06),0_8px_30px_rgba(15,31,61,0.08)] py-2.5 mx-3 sm:mx-5 lg:mx-auto' : 'py-2'"
        aria-label="Main"
      >
        <a href="#" class="shrink-0 rounded-md" aria-label="WashPilot home">
          <img :src="scrolled ? logo : logoDark" alt="WashPilot" class="h-6 sm:h-7 w-auto" />
        </a>
        <ul class="hidden md:flex items-center gap-1 list-none m-0 p-0">
          <li v-for="l in navLinks" :key="l.href">
            <a
              :href="l.href"
              class="px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline"
              :class="scrolled ? 'text-slate-600 hover:text-ink hover:bg-slate-100' : 'text-white/65 hover:text-white hover:bg-white/10'"
            >{{ l.label }}</a>
          </li>
        </ul>
        <a href="#cta" class="btn-primary text-sm px-4 py-2.5">Get early access</a>
      </nav>
    </header>

    <main id="main">

      <!-- ── HERO ── -->
      <section class="relative bg-ink overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div class="hero-glow" aria-hidden="true"></div>
        <div class="hero-contours" aria-hidden="true"></div>

        <div class="relative max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-8 items-center">
          <div>
            <p class="hero-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] pl-1.5 pr-3.5 py-1 mb-8 text-[13px] text-white/70">
              <span class="rounded-full bg-signal text-white text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5">New</span>
              The WashPilot owner app is here
            </p>

            <h1 class="hero-in font-display text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-[5.25rem] font-medium tracking-[-0.035em] text-white mb-7" style="--d: 80ms">
              Always there,<br>
              <span class="text-gradient">even when<br>you're not.</span>
            </h1>

            <p class="hero-in text-lg text-white/60 max-w-[34rem] mb-10 leading-relaxed" style="--d: 160ms">
              Customers scan a QR code to video-call you for help. You answer from the WashPilot app, wherever you are. And when no one's on staff, customers can drop off wash-dry-fold orders on their own.
            </p>

            <div class="hero-in flex flex-col sm:flex-row gap-3 sm:items-center" style="--d: 240ms">
              <a href="#cta" class="btn-primary px-7 py-4 text-base">
                Get early access
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#assist" class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white/80 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.04] font-medium transition-colors no-underline">
                See how it works
              </a>
            </div>

            <ul class="hero-in mt-12 flex flex-wrap gap-x-6 gap-y-2 list-none p-0 font-mono text-[12px] uppercase tracking-wider text-white/40" style="--d: 320ms">
              <li class="flex items-center gap-2"><span class="tick" aria-hidden="true"></span>No app for customers</li>
              <li class="flex items-center gap-2"><span class="tick" aria-hidden="true"></span>iPhone, Android &amp; web</li>
              <li class="flex items-center gap-2"><span class="tick" aria-hidden="true"></span>Multi-location</li>
            </ul>
          </div>

          <!-- Signature: the moment a request reaches the owner -->
          <div class="hero-stage relative mx-auto w-full max-w-[420px] h-[560px] sm:h-[600px]" aria-hidden="true">
            <!-- Customer phone -->
            <div class="phone phone-customer">
              <div class="phone-screen bg-gradient-to-b from-[#f7f9fd] to-[#eaf0fb]">
                <div class="phone-island"></div>
                <div class="px-4 pt-3 pb-5 flex flex-col items-center flex-1">
                  <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-5">washpilot.app</div>
                  <img :src="icon9" alt="" class="w-14 h-auto mb-3" />
                  <div class="font-display text-[15px] font-semibold text-ink leading-tight">Super Wash</div>
                  <div class="text-[10px] text-slate-500 mb-5">Main St · Machine 7</div>
                  <div class="w-full rounded-xl bg-signal text-white text-[11px] font-semibold py-2.5 text-center shadow-[0_6px_16px_rgba(37,99,235,0.35)] tap-pulse">
                    Request assistance
                  </div>
                  <div class="mt-3 w-full rounded-xl border border-slate-200 bg-white text-ink text-[11px] font-medium py-2.5 text-center">
                    Drop off laundry
                  </div>
                </div>
              </div>
            </div>

            <!-- Owner phone -->
            <div class="phone phone-owner">
              <div class="phone-screen owner-screen">
                <div class="phone-island"></div>
                <div class="text-center text-white pt-6">
                  <div class="font-mono text-[11px] tracking-widest text-white/50">TUESDAY, 9:41 PM</div>
                  <div class="font-display text-[64px] font-medium leading-none tracking-tight mt-1">9:41</div>
                </div>

                <div class="notif mx-3 mt-6">
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="w-5 h-5 rounded-[6px] bg-white grid place-items-center">
                      <img :src="icon9" alt="" class="w-3.5 h-auto" />
                    </span>
                    <span class="text-[10px] font-semibold uppercase tracking-wider text-white/60">WashPilot</span>
                    <span class="ml-auto text-[10px] text-white/40">now</span>
                  </div>
                  <div class="text-[12.5px] font-semibold text-white leading-snug">Customer needs help at Super Wash</div>
                  <div class="text-[11.5px] text-white/65 leading-snug">Machine 7 · Tap to answer the video call</div>
                </div>

                <div class="mt-auto px-6 pb-7">
                  <div class="flex items-center justify-center gap-10">
                    <div class="flex flex-col items-center gap-1.5">
                      <span class="w-12 h-12 rounded-full bg-red-500 grid place-items-center">
                        <svg class="w-5 h-5 rotate-[135deg]" viewBox="0 0 24 24" fill="white"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                      </span>
                      <span class="text-[10px] text-white/60">Decline</span>
                    </div>
                    <div class="flex flex-col items-center gap-1.5">
                      <span class="answer-btn w-12 h-12 rounded-full bg-emerald-500 grid place-items-center">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                      </span>
                      <span class="text-[10px] text-white/60">Answer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Signal line connecting the two -->
            <svg class="signal-path" viewBox="0 0 200 120" fill="none">
              <path d="M10 100 C 70 100, 120 20, 190 20" stroke="url(#sig)" stroke-width="1.5" stroke-dasharray="3 5" />
              <defs>
                <linearGradient id="sig" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stop-color="#93c5fd" stop-opacity="0.1" />
                  <stop offset="1" stop-color="#67e8f9" stop-opacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <!-- ── PRODUCT OVERVIEW ── -->
      <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
          <div class="max-w-2xl mb-12 lg:mb-16 reveal">
            <p class="eyebrow">What's in WashPilot</p>
            <h2 class="section-title text-ink">Run an unattended laundromat without leaving customers on their own.</h2>
          </div>

          <div class="grid md:grid-cols-6 gap-4 lg:gap-5">
            <a href="#assist" class="product-card md:col-span-3 reveal group">
              <div class="flex items-center justify-between mb-10">
                <span class="icon-tile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect x="7" y="7" width="4" height="4" rx=".5"/><path d="M17 13v4h-4"/></svg>
                </span>
                <span class="status status-live">Live</span>
              </div>
              <h3 class="card-title">Remote assistance</h3>
              <p class="card-text">A QR code at your location connects customers to you on live video. You see the problem and walk them through it.</p>
              <span class="card-link">How it works <span aria-hidden="true">→</span></span>
            </a>

            <a href="#app" class="product-card md:col-span-3 reveal group" style="--d: 80ms">
              <div class="flex items-center justify-between mb-10">
                <span class="icon-tile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                </span>
                <span class="status status-live">Live</span>
              </div>
              <h3 class="card-title">Owner app</h3>
              <p class="card-text">Get push notifications, answer calls, and manage orders from one app on your phone — native or installed from the browser.</p>
              <span class="card-link">See the app <span aria-hidden="true">→</span></span>
            </a>

            <a href="#dropoff" class="product-card md:col-span-2 reveal group" style="--d: 120ms">
              <div class="flex items-center justify-between mb-10">
                <span class="icon-tile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
                </span>
                <span class="status status-live">Live</span>
              </div>
              <h3 class="card-title">Wash-dry-fold drop-off</h3>
              <p class="card-text">No attendant on shift? Customers enter their own drop-off order, and it shows up in your app ready to process.</p>
              <span class="card-link">See drop-off <span aria-hidden="true">→</span></span>
            </a>

            <a href="#status" class="product-card product-card--soon md:col-span-2 reveal group" style="--d: 160ms">
              <div class="flex items-center justify-between mb-10">
                <span class="icon-tile icon-tile--muted">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h4"/><path d="M7 12h2"/><path d="M14 8h3"/><path d="M14 12h3"/></svg>
                </span>
                <span class="status status-soon">Coming soon</span>
              </div>
              <h3 class="card-title">Machine status boards</h3>
              <p class="card-text">Customers see which machines are free and how much time is left on the rest.</p>
              <span class="card-link">See status boards <span aria-hidden="true">→</span></span>
            </a>

            <a href="#lockers" class="product-card product-card--soon md:col-span-2 reveal group" style="--d: 200ms">
              <div class="flex items-center justify-between mb-10">
                <span class="icon-tile icon-tile--muted">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/><path d="M8 10v2"/><path d="M16 10v2"/></svg>
                </span>
                <span class="status status-soon">Coming soon</span>
              </div>
              <h3 class="card-title">Laundry lockers</h3>
              <p class="card-text">An integration with laundry lockers for 24/7 pickup.</p>
            </a>
          </div>
        </div>
      </section>

      <!-- ── REMOTE ASSIST: HOW IT WORKS ── -->
      <section id="assist" class="relative py-20 lg:py-28 bg-ink overflow-hidden scroll-mt-16">
        <div class="hero-contours opacity-60" aria-hidden="true"></div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-14 lg:mb-20 reveal">
            <div>
              <p class="eyebrow eyebrow--light">Remote assistance</p>
              <h2 class="section-title text-white">From “this machine ate my quarters” to fixed, in three steps.</h2>
            </div>
            <p class="text-white/55 text-lg leading-relaxed lg:pb-2">
              No manuals and no training. If you can hang a sign, you can set up WashPilot.
            </p>
          </div>

          <ol class="relative grid md:grid-cols-3 gap-10 md:gap-6 list-none p-0 m-0">
            <li class="step-rail hidden md:block" aria-hidden="true"></li>
            <li v-for="(s, i) in assistSteps" :key="s.title" class="relative reveal" :style="{ '--d': `${i * 100}ms` }">
              <div class="step-node mb-8">
                <span class="font-mono text-[13px] text-cyan">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
              <h3 class="font-display text-2xl font-medium text-white tracking-tight mb-3">{{ s.title }}</h3>
              <p class="text-white/55 leading-relaxed max-w-sm">{{ s.text }}</p>
            </li>
          </ol>

          <!-- Live call panel -->
          <div class="mt-16 lg:mt-24 grid lg:grid-cols-[1.3fr_1fr] gap-6 reveal">
            <div class="rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
              <div class="relative rounded-2xl overflow-hidden aspect-[16/10] bg-deep">
                <div class="absolute inset-0 video-feed" aria-hidden="true"></div>
                <div class="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-[12px] text-white">
                  <span class="live-dot" aria-hidden="true"></span> Live · Customer at Machine 7
                </div>
                <div class="absolute top-4 right-4 font-mono text-[12px] text-white/70 bg-black/40 backdrop-blur rounded-full px-3 py-1.5">01:24</div>
                <!-- Machine display the customer is pointing at -->
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] rounded-xl bg-[#101826] border border-white/10 p-4 shadow-2xl">
                  <div class="font-mono text-[10px] text-white/40 mb-1">WASHER 07</div>
                  <div class="font-mono text-2xl sm:text-3xl text-amber-300 tracking-widest">E-DOOR</div>
                </div>
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
                  <span class="call-ctl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg></span>
                  <span class="call-ctl bg-red-500!"><svg viewBox="0 0 24 24" fill="currentColor" class="rotate-[135deg]" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg></span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center gap-6 lg:pl-4">
              <h3 class="font-display text-3xl font-medium text-white tracking-tight leading-tight">See what they see.</h3>
              <ul class="list-none p-0 m-0 flex flex-col gap-4">
                <li class="check-item">One-way video — only the customer's camera is on, so you can answer from anywhere</li>
                <li class="check-item">Customers flip to the rear camera to show you the machine</li>
                <li class="check-item">Read error codes and payment screens yourself</li>
                <li class="check-item">Works in any phone browser — nothing to download</li>
                <li class="check-item">Low-latency HD video powered by Stream</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ── OWNER APP ── -->
      <section id="app" class="py-20 lg:py-28 bg-paper scroll-mt-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center">
          <!-- App screen -->
          <div class="order-2 lg:order-1 reveal">
            <div class="phone phone-flat mx-auto" aria-hidden="true">
              <div class="phone-screen bg-white">
                <div class="phone-island"></div>
                <div class="px-4 pt-2 pb-4 flex flex-col gap-4 flex-1 text-left">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-[11px] text-slate-400">Good evening</div>
                      <div class="font-display text-lg font-semibold text-ink leading-tight">Your locations</div>
                    </div>
                    <img :src="icon9" alt="" class="w-9 h-auto" />
                  </div>

                  <div class="rounded-2xl bg-ink text-white p-3.5">
                    <div class="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-cyan mb-1.5">
                      <span class="live-dot" aria-hidden="true"></span> Incoming call
                    </div>
                    <div class="text-[13px] font-semibold">Super Wash · Machine 7</div>
                    <div class="mt-3 grid grid-cols-2 gap-2">
                      <span class="rounded-lg bg-white/10 text-center text-[11px] py-1.5">Decline</span>
                      <span class="rounded-lg bg-emerald-500 text-center text-[11px] font-semibold py-1.5">Answer</span>
                    </div>
                  </div>

                  <div>
                    <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">Drop-off orders</div>
                    <div class="flex flex-col gap-2">
                      <div class="app-row">
                        <div><div class="font-semibold text-ink">Maria G.</div><div class="text-slate-400">3 bags · Fold neatly</div></div>
                        <span class="pill pill-new">New</span>
                      </div>
                      <div class="app-row">
                        <div><div class="font-semibold text-ink">Devon R.</div><div class="text-slate-400">1 bag · Unscented</div></div>
                        <span class="pill">Washing</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">Recent calls</div>
                    <div class="app-row">
                      <div><div class="font-semibold text-ink">Oak St Laundry</div><div class="text-slate-400">Payment reader · 2m 10s</div></div>
                      <span class="text-[10px] text-slate-400">6:12 PM</span>
                    </div>
                  </div>

                  <div class="mt-auto grid grid-cols-4 border-t border-slate-100 pt-3 text-[9px] text-center text-slate-400">
                    <span class="text-signal font-semibold">Home</span><span>Calls</span><span>Orders</span><span>Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="reveal">
              <p class="eyebrow">The owner app</p>
              <h2 class="section-title text-ink mb-5">Your laundromat, in your pocket.</h2>
              <p class="text-lg text-slate-500 leading-relaxed max-w-xl mb-12">
                Every request from every location comes to one app. Install it from the App Store or Google Play, or add it to your home screen from the browser.
              </p>
            </div>
            <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-8 list-none p-0 m-0">
              <li v-for="(f, i) in appFeatures" :key="f.title" class="flex gap-4 reveal" :style="{ '--d': `${i * 60}ms` }">
                <span class="icon-tile icon-tile--sm shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="f.icon"></svg>
                </span>
                <div>
                  <h3 class="font-display text-lg font-medium text-ink tracking-tight leading-snug mb-1">{{ f.title }}</h3>
                  <p class="text-[15px] text-slate-500 leading-relaxed">{{ f.text }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── DROP-OFF ── -->
      <section id="dropoff" class="py-20 lg:py-28 bg-white scroll-mt-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          <div>
            <div class="reveal">
              <p class="eyebrow">Wash-dry-fold drop-off</p>
              <h2 class="section-title text-ink mb-5">Take drop-off orders with no one at the counter.</h2>
              <p class="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                Customers place their own order from their phone when you don't have an attendant on shift. You keep the business instead of turning it away.
              </p>
            </div>
            <ol class="list-none p-0 m-0 flex flex-col">
              <li v-for="(s, i) in dropoffSteps" :key="s.title" class="dropoff-step reveal" :style="{ '--d': `${i * 80}ms` }">
                <span class="dropoff-num">{{ i + 1 }}</span>
                <div>
                  <h3 class="font-display text-lg font-medium text-ink tracking-tight mb-0.5">{{ s.title }}</h3>
                  <p class="text-[15px] text-slate-500">{{ s.text }}</p>
                </div>
              </li>
            </ol>
          </div>

          <!-- Order form mock -->
          <div class="reveal" style="--d: 120ms">
            <div class="relative mx-auto max-w-[360px]" aria-hidden="true">
              <div class="rounded-[28px] bg-white border border-line shadow-[0_30px_60px_-20px_rgba(15,31,61,0.25)] p-6">
                <div class="flex items-center gap-3 mb-6">
                  <img :src="icon9" alt="" class="w-10 h-auto" />
                  <div>
                    <div class="font-display font-semibold text-ink leading-tight">Drop-off order</div>
                    <div class="text-xs text-slate-400">Super Wash · Main St</div>
                  </div>
                </div>
                <div class="flex flex-col gap-3 text-sm">
                  <div class="field"><span class="field-label">Name</span><span class="text-ink">Maria Gonzalez</span></div>
                  <div class="field"><span class="field-label">Phone</span><span class="text-ink">(555) 014-2280</span></div>
                  <div class="field flex items-center justify-between">
                    <div><span class="field-label">Bags</span><span class="text-ink">3</span></div>
                    <div class="flex gap-1.5">
                      <span class="stepper">−</span><span class="stepper">+</span>
                    </div>
                  </div>
                  <div class="field"><span class="field-label">Instructions</span><span class="text-ink">Please fold everything neatly. Thank you!</span></div>
                </div>
                <div class="mt-5 rounded-xl bg-signal text-white text-center font-display font-semibold py-3.5">Place order</div>
              </div>
              <div class="toast">
                <span class="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-600 grid place-items-center shrink-0">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <div class="leading-tight">
                  <div class="text-[13px] font-semibold text-ink">New drop-off order</div>
                  <div class="text-[12px] text-slate-500">Maria G. · 3 bags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── LOCKERS ── -->
      <section id="lockers" class="pb-20 lg:pb-28 bg-white scroll-mt-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8">
          <div class="reveal relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-paper p-8 sm:p-10 lg:p-12 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
            <div class="locker-grid" aria-hidden="true">
              <span></span><span class="on"></span><span></span>
              <span></span><span></span><span class="on"></span>
            </div>
            <div>
              <span class="status status-soon mb-3 inline-flex">Coming soon</span>
              <h2 class="font-display text-2xl sm:text-3xl font-medium text-ink tracking-tight mb-2">Laundry locker integration</h2>
              <p class="text-slate-500 max-w-xl">Connect laundry lockers to WashPilot so customers can pick up finished wash-dry-fold orders any time — even after you've locked up.</p>
            </div>
            <a href="#cta" class="inline-flex items-center gap-2 font-semibold text-signal hover:text-brand no-underline whitespace-nowrap">
              Get notified <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ── STATUS BOARDS ── -->
      <section id="status" class="relative py-20 lg:py-28 bg-ink overflow-hidden scroll-mt-16">
        <div class="hero-glow opacity-60" aria-hidden="true"></div>
        <div class="relative max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div class="reveal">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <p class="eyebrow eyebrow--light mb-0!">Machine status boards</p>
              <span class="status status-soon-dark">Coming soon</span>
            </div>
            <h2 class="section-title text-white mb-5">Show customers what's free before they ask.</h2>
            <p class="text-lg text-white/55 leading-relaxed mb-8">
              A live board of every washer and dryer at your location, so customers know where to go and how long to wait.
            </p>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
              <li v-for="b in statusBullets" :key="b" class="check-item">{{ b }}</li>
            </ul>
          </div>

          <!-- Board mock -->
          <div class="reveal" style="--d: 100ms">
            <div class="board" role="img" aria-label="Example status board: 2 washers and 2 dryers available, the rest in use with time remaining">
              <div class="flex items-center justify-between mb-5">
                <div class="flex items-center gap-3">
                  <img :src="icon9" alt="" class="w-9 h-auto cta-mark" />
                  <div>
                    <div class="font-display text-white font-semibold leading-tight">Super Wash</div>
                    <div class="text-[11px] text-white/45">Main St</div>
                  </div>
                </div>
                <div class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white/50">
                  <span class="live-dot"></span> Live
                </div>
              </div>

              <div v-for="group in [{ label: 'Washers', items: washers }, { label: 'Dryers', items: dryers }]" :key="group.label" class="mb-5 last:mb-0">
                <div class="flex items-baseline justify-between mb-2.5">
                  <span class="font-mono text-[11px] uppercase tracking-wider text-white/45">{{ group.label }}</span>
                  <span class="text-[11px] text-emerald-300">{{ group.items.filter(m => m.state === 'free').length }} available</span>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  <div
                    v-for="m in group.items"
                    :key="m.id"
                    class="machine"
                    :class="`machine--${m.state}`"
                  >
                    <div class="font-mono text-[11px] text-white/55">{{ m.id }}</div>
                    <div class="font-display text-[15px] font-semibold leading-tight mt-1">
                      <template v-if="m.state === 'busy'">{{ m.left }}<span class="text-[11px] font-medium text-white/60"> min</span></template>
                      <template v-else-if="m.state === 'free'">Free</template>
                      <template v-else>Done</template>
                    </div>
                    <div v-if="m.state === 'busy'" class="machine-bar"><span :style="{ width: `${m.pct}%` }"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── FOUNDING ACCESS + TESTIMONIAL ── -->
      <section id="access" class="py-20 lg:py-28 bg-paper scroll-mt-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <figure class="reveal m-0">
            <p class="eyebrow">From a founding member</p>
            <blockquote class="font-display text-2xl sm:text-3xl lg:text-[2.125rem] font-medium text-ink leading-[1.2] tracking-[-0.02em] m-0 mb-8">
              “I used to miss calls from customers constantly. Now they scan the code, I can see exactly what they're dealing with, and I talk them through it in seconds — even when I'm at home.”
            </blockquote>
            <figcaption class="flex items-center gap-4">
              <span class="w-12 h-12 rounded-full bg-signal grid place-items-center font-display text-lg font-semibold text-white">J</span>
              <span>
                <strong class="block text-ink font-semibold">John P.</strong>
                <span class="text-sm text-slate-500">Owner, Forester Ave Express Laundry Center</span>
              </span>
            </figcaption>
          </figure>

          <div class="reveal rounded-3xl bg-ink p-8 sm:p-10 relative overflow-hidden" style="--d: 100ms">
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-signal/30 blur-3xl" aria-hidden="true"></div>
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <h2 class="font-display text-3xl font-medium text-white tracking-tight">Founding member access</h2>
              </div>
              <p class="text-white/60 leading-relaxed mb-7">
                We're onboarding a limited number of laundromat owners before public launch. Founding members get 90 days free, a locked-in founding rate, and a direct line into what we build next.
              </p>
              <ul class="list-none p-0 m-0 flex flex-col gap-3 mb-8">
                <li v-for="f in foundingFeats" :key="f" class="check-item">{{ f }}</li>
              </ul>
              <a href="#cta" class="btn-primary w-full py-4 text-base">Claim founding access</a>
              <p class="text-center mt-4 text-xs text-white/40">No credit card. No commitment.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CTA ── -->
      <section id="cta" class="relative py-24 lg:py-32 bg-ink overflow-hidden text-center scroll-mt-16">
        <div class="hero-glow opacity-80" aria-hidden="true"></div>
        <div class="hero-contours" aria-hidden="true"></div>
        <div class="relative max-w-2xl mx-auto px-4 sm:px-5">
          <img :src="icon9" alt="" class="w-16 h-auto mx-auto mb-8 cta-mark" aria-hidden="true" />
          <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-[-0.035em] leading-[1] mb-5">
            Start simple.<br><span class="text-gradient">Grow with us.</span>
          </h2>
          <p class="text-lg text-white/55 mb-10 leading-relaxed">
            Join as a founding member and get 90 days free. We'll reach out within 24 hours to get your location set up.
          </p>

          <form
            v-if="!submitted"
            name="early-access"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="mx-auto max-w-md flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl bg-white/[0.06] border border-white/10 focus-within:border-sky/50 transition-colors"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="early-access" />
            <input name="bot-field" class="hidden" tabindex="-1" autocomplete="off" />
            <label for="cta-email" class="sr-only">Email address</label>
            <input
              id="cta-email"
              v-model="email"
              type="email"
              name="email"
              placeholder="you@yourlaundromat.com"
              autocomplete="email"
              required
              class="flex-1 min-w-0 bg-transparent px-4 py-3 text-base text-white placeholder-white/35 outline-none"
            />
            <button type="submit" :disabled="submitting" class="btn-primary px-6 py-3 text-base disabled:opacity-60">
              {{ submitting ? 'Sending…' : 'Get early access' }}
            </button>
          </form>
          <p
            v-else
            role="status"
            class="mx-auto max-w-md px-5 py-4 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-medium"
          >
            You're on the list. We'll be in touch within 24 hours.
          </p>
          <p class="mt-5 text-sm text-white/40">Built by a laundromat owner, for laundromat owners.</p>
        </div>
      </section>
    </main>

    <!-- ── FOOTER ── -->
    <footer class="bg-ink border-t border-white/[0.06] py-10">
      <div class="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <img :src="logoDark" alt="WashPilot" class="h-6 w-auto" />
        <p class="text-xs text-white/30">© 2026 WashPilot</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── Shared pieces ── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: var(--color-signal);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 24px -8px rgba(37,99,235,0.6);
  transition: background-color .2s, transform .2s, box-shadow .2s;
}
.btn-primary:hover { background: #3b74f0; transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 14px 32px -10px rgba(37,99,235,0.75); }
.btn-primary:active { transform: translateY(0); }

:where(a, button, input):focus-visible {
  outline: 2px solid var(--color-cyan);
  outline-offset: 3px;
}

.text-gradient {
  background: linear-gradient(100deg, var(--color-sky) 10%, var(--color-cyan) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-signal);
  margin-bottom: 1rem;
}
.eyebrow--light { color: var(--color-cyan); }

.section-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2rem, 4.2vw, 3.25rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.tick {
  width: 6px; height: 6px; border-radius: 999px;
  background: var(--color-cyan);
  box-shadow: 0 0 10px var(--color-cyan);
}

/* ── Hero background ── */
.hero-glow {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(60% 50% at 75% 35%, rgba(37,99,235,0.35) 0%, transparent 70%),
    radial-gradient(40% 40% at 10% 100%, rgba(103,232,249,0.10) 0%, transparent 70%);
}
/* Swirl from the logo mark, repeated as faint concentric rings */
.hero-contours {
  position: absolute; inset: 0; pointer-events: none;
  background: repeating-radial-gradient(circle at 78% 40%, transparent 0 46px, rgba(147,197,253,0.06) 46px 47px);
  mask-image: radial-gradient(55% 60% at 78% 40%, #000 20%, transparent 75%);
}

.hero-in {
  opacity: 0;
  animation: rise .8s cubic-bezier(.22,1,.36,1) forwards;
  animation-delay: var(--d, 0ms);
}

/* ── Hero device composition ── */
.phone {
  position: absolute;
  background: #0b0d12;
  border-radius: 42px;
  padding: 10px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.6);
}
.phone-screen {
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.phone-island {
  width: 84px; height: 24px; border-radius: 999px;
  background: #0b0d12; margin: 10px auto 0; flex-shrink: 0;
}
.phone-customer {
  width: 190px; height: 400px;
  left: 0; bottom: 20px; z-index: 1;
  transform: rotate(-6deg);
  opacity: 0; animation: rise .9s cubic-bezier(.22,1,.36,1) forwards .35s;
}
.phone-owner {
  width: 270px; height: 560px;
  right: 0; top: 0; z-index: 3;
  opacity: 0; animation: rise .9s cubic-bezier(.22,1,.36,1) forwards .2s;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 50px 100px -20px rgba(0,0,0,0.7), 0 0 120px -20px rgba(37,99,235,0.5);
}
.owner-screen {
  background:
    radial-gradient(120% 60% at 50% 0%, #1e4fa0 0%, transparent 60%),
    linear-gradient(180deg, #0f1f3d 0%, #0a1628 100%);
}
.notif {
  border-radius: 18px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.10);
  opacity: 0;
  animation: drop .7s cubic-bezier(.22,1.4,.36,1) forwards 1.2s;
}
.answer-btn { animation: ring 1.6s ease-out infinite 1.9s; }
.tap-pulse { animation: tap 3.2s ease-in-out infinite 1s; }
.signal-path {
  position: absolute;
  left: 110px; top: 260px;
  width: 170px; height: 100px; z-index: 2;
  opacity: 0; animation: fadeIn .8s ease forwards .9s;
}
.signal-path path { animation: dash 1.2s linear infinite; }

@media (max-width: 640px) {
  .hero-stage { transform: scale(.86); transform-origin: top center; margin-bottom: -80px; }
  .phone-customer { left: -24px; }
}

/* ── Product cards ── */
.product-card {
  display: flex; flex-direction: column;
  border-radius: 24px;
  border: 1px solid var(--color-line);
  background: #fff;
  padding: 1.75rem;
  text-decoration: none;
  transition: border-color .25s, box-shadow .25s, transform .25s;
}
@media (min-width: 1024px) { .product-card { padding: 2.25rem; } }
.product-card:hover {
  border-color: #c7d6f5;
  transform: translateY(-2px);
  box-shadow: 0 24px 48px -24px rgba(30,79,160,0.35);
}
.product-card--soon { background: var(--color-paper); border-style: dashed; border-color: #cbd5e1; }
.product-card--soon:hover { transform: none; box-shadow: none; border-color: #94a3b8; }
.card-title {
  font-family: var(--font-display); font-weight: 500;
  font-size: 1.625rem; letter-spacing: -0.02em; line-height: 1.1;
  color: var(--color-ink); margin-bottom: .5rem;
}
.card-text { color: #64748b; line-height: 1.6; max-width: 32rem; }
.card-link {
  margin-top: 1.5rem; font-weight: 600; font-size: .9375rem; color: var(--color-signal);
  display: inline-flex; gap: .375rem;
}
.card-link span { transition: transform .2s; }
.product-card:hover .card-link span { transform: translateX(3px); }

.icon-tile {
  width: 48px; height: 48px; border-radius: 14px;
  display: grid; place-items: center;
  background: #eaf1ff; color: var(--color-brand);
}
.icon-tile svg { width: 24px; height: 24px; }
.icon-tile--sm { width: 42px; height: 42px; border-radius: 12px; }
.icon-tile--sm svg { width: 20px; height: 20px; }
.icon-tile--muted { background: #e2e8f0; color: #64748b; }

.status {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-mono); font-size: 11px;
  letter-spacing: .08em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 999px;
}
.status-live { background: #ecfdf5; color: #047857; }
.status-live::before { content: ''; width: 6px; height: 6px; border-radius: 99px; background: #10b981; }
.status-soon { background: #fff; color: #64748b; border: 1px solid #e2e8f0; }
.status-soon-dark { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.14); }

/* ── How it works ── */
.step-rail {
  position: absolute; left: 22px; right: 22px; top: 22px; height: 1px;
  background: linear-gradient(90deg, rgba(103,232,249,0.5), rgba(147,197,253,0.15));
}
.step-node {
  position: relative; z-index: 1;
  width: 44px; height: 44px; border-radius: 999px;
  display: grid; place-items: center;
  background: var(--color-ink);
  border: 1px solid rgba(103,232,249,0.35);
  box-shadow: 0 0 0 6px var(--color-ink), 0 0 24px rgba(103,232,249,0.2);
}

.video-feed {
  background:
    radial-gradient(60% 70% at 50% 50%, rgba(37,99,235,0.28) 0%, transparent 70%),
    linear-gradient(160deg, #1a2b4d 0%, #0b1426 100%);
}
.call-ctl {
  width: 40px; height: 40px; border-radius: 999px;
  display: grid; place-items: center;
  background: rgba(255,255,255,0.14); color: #fff;
  backdrop-filter: blur(8px);
}
.call-ctl svg { width: 17px; height: 17px; }

.live-dot {
  width: 7px; height: 7px; border-radius: 99px; background: #22c55e;
  box-shadow: 0 0 8px #22c55e; display: inline-block;
  animation: blink 1.5s ease-in-out infinite;
}

.check-item {
  display: flex; gap: .75rem; align-items: flex-start;
  color: rgba(255,255,255,0.75); line-height: 1.5;
}
.check-item::before {
  content: ''; flex-shrink: 0; margin-top: 2px;
  width: 20px; height: 20px; border-radius: 99px;
  background: rgba(103,232,249,0.14) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 5l2 2 4-4' stroke='%2367e8f9' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E") center / 11px no-repeat;
}

/* ── Owner app screen ── */
.phone-flat {
  position: relative;
  width: 300px; height: 610px;
  box-shadow: 0 0 0 1px rgba(15,31,61,0.08), 0 40px 80px -30px rgba(15,31,61,0.45);
}
.app-row {
  display: flex; align-items: center; justify-content: space-between;
  border: 1px solid #eef2f7; border-radius: 12px;
  padding: 9px 11px; font-size: 11.5px; line-height: 1.35;
}
.pill {
  font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 99px;
  background: #f1f5f9; color: #475569;
}
.pill-new { background: #eaf1ff; color: var(--color-signal); }

/* ── Drop-off ── */
.dropoff-step {
  display: grid; grid-template-columns: 40px 1fr; gap: 1rem;
  padding: 1.25rem 0; border-top: 1px solid var(--color-line);
}
.dropoff-step:last-child { border-bottom: 1px solid var(--color-line); }
.dropoff-num {
  width: 32px; height: 32px; border-radius: 10px;
  display: grid; place-items: center;
  background: var(--color-ink); color: #fff;
  font-family: var(--font-mono); font-size: 13px;
}
.field {
  border: 1px solid var(--color-line); border-radius: 12px;
  padding: 8px 12px; background: #fbfcfe;
}
.field-label { display: block; font-size: 11px; color: #94a3b8; margin-bottom: 1px; }
.stepper {
  width: 28px; height: 28px; border-radius: 8px; display: grid; place-items: center;
  border: 1px solid var(--color-line); color: var(--color-ink); background: #fff;
}
.toast {
  position: absolute; right: -12px; top: -22px;
  display: flex; align-items: center; gap: 10px;
  background: #fff; border: 1px solid var(--color-line);
  border-radius: 16px; padding: 10px 14px;
  box-shadow: 0 16px 40px -12px rgba(15,31,61,0.3);
  animation: floaty 5s ease-in-out infinite;
}
@media (min-width: 640px) { .toast { right: -48px; } }

/* ── Status board ── */
.board {
  border-radius: 24px;
  padding: 1.25rem;
  background: linear-gradient(180deg, #0f1f3d 0%, #0b1730 100%);
  border: 1px solid rgba(147,197,253,0.14);
  box-shadow: 0 0 0 8px rgba(255,255,255,0.03), 0 40px 80px -30px rgba(0,0,0,0.7);
}
@media (min-width: 640px) { .board { padding: 1.75rem; } }
.machine {
  border-radius: 12px;
  padding: 10px 10px 12px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  color: #fff;
}
.machine--free { border-color: rgba(52,211,153,0.35); background: rgba(52,211,153,0.08); color: #6ee7b7; }
.machine--done { border-color: rgba(103,232,249,0.3); background: rgba(103,232,249,0.06); color: var(--color-cyan); }
.machine-bar {
  margin-top: 8px; height: 3px; border-radius: 99px; background: rgba(255,255,255,0.1); overflow: hidden;
}
.machine-bar span { display: block; height: 100%; border-radius: inherit; background: var(--color-sky); }

/* ── Lockers ── */
.locker-grid {
  display: grid; grid-template-columns: repeat(3, 28px); gap: 5px;
}
.locker-grid span {
  height: 36px; border-radius: 6px; background: #fff; border: 1px solid #cbd5e1;
  position: relative;
}
.locker-grid span::after {
  content: ''; position: absolute; right: 5px; top: 50%; width: 3px; height: 8px;
  transform: translateY(-50%); border-radius: 2px; background: #cbd5e1;
}
.locker-grid span.on { border-color: var(--color-signal); background: #eaf1ff; }
.locker-grid span.on::after { background: var(--color-signal); }

.cta-mark { filter: brightness(0) invert(1); opacity: .9; }

/* ── Scroll reveal ── */
.reveal {
  opacity: 0; transform: translateY(18px);
  transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
  transition-delay: var(--d, 0ms);
}
.reveal.is-in { opacity: 1; transform: none; }

/* ── Keyframes ── */
@keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; } }
@keyframes fadeIn { to { opacity: 1; } }
@keyframes drop {
  from { opacity: 0; transform: translateY(-16px) scale(.96); }
  to { opacity: 1; transform: none; }
}
@keyframes ring {
  0% { box-shadow: 0 0 0 0 rgba(16,185,129,.55); }
  100% { box-shadow: 0 0 0 16px rgba(16,185,129,0); }
}
@keyframes tap {
  0%, 70%, 100% { transform: scale(1); }
  76% { transform: scale(.96); }
}
@keyframes dash { to { stroke-dashoffset: -16; } }
@keyframes blink { 50% { opacity: .35; } }
@keyframes floaty { 50% { transform: translateY(-6px); } }

@media (prefers-reduced-motion: reduce) {
  .hero-in, .phone-customer, .phone-owner, .notif, .signal-path { animation: none; opacity: 1; }
  .answer-btn, .tap-pulse, .signal-path path, .live-dot, .toast { animation: none; }
  .reveal { opacity: 1; transform: none; transition: none; }
}
</style>
