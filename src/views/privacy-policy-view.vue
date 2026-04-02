<template>
  <div class="min-h-screen bg-[#060d1f] [background-image:radial-gradient(ellipse_at_20%_0%,rgba(30,80,200,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_100%,rgba(0,180,255,0.08)_0%,transparent_50%)] text-[#c8d8f0] font-sans pb-20">
    <div class="max-w-[780px] mx-auto px-6">

      <header class="flex items-center justify-between py-8 pb-12 border-b border-white/[0.07] mb-14 max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:py-6 max-sm:pb-9">
        <RouterLink to="/" class="no-underline">
          <img :src="logo" alt="WashPilot" class="h-8 w-auto" />
        </RouterLink>
        <p class="text-xs text-[#c8d8f0]/40 m-0">Last updated: {{ lastUpdated }}</p>
      </header>

      <div>
        <h1 class="font-display text-4xl font-normal text-white mb-5 tracking-tight leading-[1.1]">Privacy Policy</h1>
        <p class="text-base leading-[1.7] text-[#c8d8f0]/65 mb-14 pb-10 border-b border-white/[0.06]">
          WashPilot ("we," "us," or "our") operates the WashPilot platform and mobile
          application (the "Service"). This Privacy Policy explains how we collect, use,
          and protect the information of laundromat owners and operators ("you") who use
          our Service to manage their laundromat and receive customer assistance alerts.
        </p>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">1. Information We Collect</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">We collect the following types of information from laundromat owners and operators who register to use WashPilot:</p>
          <ul class="pl-5 my-3 space-y-2">
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Contact Information:</strong> Your name and mobile phone number when you, as a laundromat owner or operator, opt in to receive SMS alert notifications.</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Business Information:</strong> Details about your laundromat location(s) to configure your WashPilot dashboard and alert routing.</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Usage Data:</strong> Information about how you interact with our Service, including alert activity and response history.</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Device Information:</strong> Browser type, IP address, and device identifiers for security and performance purposes.</li>
          </ul>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">2. SMS Messaging &amp; Mobile Data</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">
            WashPilot is a platform built exclusively for <strong class="text-[#c8d8f0]/95 font-medium">laundromat owners and operators</strong>.
            SMS text messages sent through WashPilot are alert notifications delivered directly to you — the laundromat owner or operator —
            to notify you when a customer at your location needs assistance. WashPilot does not send SMS messages to your customers.
            These alerts are only sent if you have explicitly opted in to receive them.
          </p>
          <div class="bg-[#3b8aff]/[0.07] border border-[#3b8aff]/25 border-l-[3px] border-l-[#3b8aff] rounded-md px-6 py-5 my-5">
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/85 mb-3">
              <strong class="text-[#c8d8f0]/95 font-medium">Your mobile information will not be sold or shared with third parties
              for promotional or marketing purposes.</strong>
            </p>
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/85 mb-3">
              All categories of data collected exclude text messaging originator opt-in data
              and consent; this information will not be shared with any third parties.
            </p>
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/85 mb-0">
              We will not share your opt-in to an SMS campaign with any third party for
              purposes unrelated to providing you with the services of that campaign. We may
              share your personal data, including your SMS opt-in or consent status, with
              third parties that help us provide our messaging services, including but not
              limited to platform providers, phone companies, and any other vendors who assist
              us in the delivery of text messages.
            </p>
          </div>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            Message frequency varies based on customer assistance request activity at your laundromat location(s). Standard message
            and data rates may apply. You may opt out at any time by replying <strong class="text-[#c8d8f0]/95 font-medium">STOP</strong>
            to any SMS from WashPilot. Reply <strong class="text-[#c8d8f0]/95 font-medium">HELP</strong> for assistance.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">3. How We Use Your Information</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">We use the information we collect to:</p>
          <ul class="pl-5 my-3 space-y-2">
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Send you real-time SMS alerts when a customer at your laundromat requests assistance</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Enable you to respond to customer assistance requests through our live video feature</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Operate, maintain, and improve the WashPilot platform for laundromat owners</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Ensure the security and integrity of our Service</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Comply with applicable laws and regulations</li>
          </ul>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">4. Information Sharing &amp; Disclosure</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">
            We do not sell your personal information. We may share your information only in
            the following limited circumstances:
          </p>
          <ul class="pl-5 my-3 space-y-2">
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., SMS delivery providers, cloud infrastructure). These vendors are contractually prohibited from using your data for any purpose beyond providing services to WashPilot.</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Legal Requirements:</strong> When required by law, court order, or government authority.</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75"><strong class="text-[#c8d8f0]/95 font-medium">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice provided to affected users.</li>
          </ul>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">5. Data Retention</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            We retain your personal information only as long as necessary to provide the
            Service and fulfill the purposes described in this policy, or as required by law.
            SMS opt-in records are retained for a minimum of 4 years to comply with carrier
            and regulatory requirements.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">6. Your Rights &amp; Choices</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">As a laundromat owner or operator using WashPilot, you have the right to:</p>
          <ul class="pl-5 my-3 space-y-2">
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Opt out of SMS alert notifications at any time by replying STOP</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Request access to the personal information we hold about you</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Request correction or deletion of your personal information</li>
            <li class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75">Withdraw consent for data processing where consent is the legal basis</li>
          </ul>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            To exercise any of these rights, contact us at
            <a href="mailto:perusoanthony@gmail.com" class="text-[#3b8aff] no-underline border-b border-[#3b8aff]/30 hover:border-[#3b8aff] transition-colors duration-200">perusoanthony@gmail.com</a>.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">7. Security</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            We implement industry-standard technical and organizational measures to protect
            your personal information against unauthorized access, alteration, disclosure,
            or destruction. However, no method of transmission over the internet is 100%
            secure.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">8. Children's Privacy</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            WashPilot is not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children under 13. If you believe we have
            inadvertently collected such information, please contact us immediately.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">9. Changes to This Policy</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">
            We may update this Privacy Policy from time to time. We will notify you of
            material changes by posting the new policy on this page and updating the
            "Last updated" date. Continued use of the Service after changes constitutes
            acceptance of the revised policy.
          </p>
        </section>

        <section class="mb-11 pb-11 border-b border-white/[0.05] last:border-b-0">
          <h2 class="font-display text-[1.05rem] font-semibold text-[#3b8aff] tracking-wider uppercase mb-4">10. Contact Us</h2>
          <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-3.5">If you have questions about this Privacy Policy, please contact us:</p>
          <div class="bg-white/[0.03] border border-white/[0.08] rounded-lg px-6 py-5 mt-4">
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-1.5"><strong class="text-[#c8d8f0]/95 font-medium">WashPilot</strong></p>
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-1.5">Email: <a href="mailto:perusoanthony@gmail.com" class="text-[#3b8aff] no-underline border-b border-[#3b8aff]/30 hover:border-[#3b8aff] transition-colors duration-200">perusoanthony@gmail.com</a></p>
            <p class="text-[0.95rem] leading-[1.75] text-[#c8d8f0]/75 mb-0">Website: <a href="https://washpilot.app" class="text-[#3b8aff] no-underline border-b border-[#3b8aff]/30 hover:border-[#3b8aff] transition-colors duration-200">washpilot.app</a></p>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/logos/logo-1.png'

const lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>
