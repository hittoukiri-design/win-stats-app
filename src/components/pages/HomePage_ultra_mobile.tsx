// Ultra Lightweight Mobile-First HomePage (India Optimized)

import React from "react";

export default function HomePage() {
  return (
    <div className="bg-[#05070c] text-white min-h-screen">

      {/* HERO MOBILE-FIRST */}
      <section className="px-4 pt-16 pb-8 text-center">
        <h1 className="text-2xl font-bold leading-tight mb-3">
          Fast Withdrawal Betting Platform in India
        </h1>
        <p className="text-sm text-zinc-300 mb-4">
          Play WinGo, Aviator, Slots & earn real money. Instant withdraw & ₹500 bonus.
        </p>

        <div className="flex flex-col gap-3">
          <a href="https://dostwin.com/#/register"
             className="bg-blue-600 py-3 rounded-xl font-semibold">
            Register & Get Bonus
          </a>

          <a href="/download"
             className="border border-white/20 py-3 rounded-xl">
            Download App
          </a>
        </div>
      </section>

      {/* QUICK TRUST */}
      <section className="px-4 py-4 grid grid-cols-2 gap-3 text-xs text-center">
        <div className="bg-white/5 p-3 rounded-lg">10K+ Users</div>
        <div className="bg-white/5 p-3 rounded-lg">Instant Withdraw</div>
        <div className="bg-white/5 p-3 rounded-lg">Secure Payment</div>
        <div className="bg-white/5 p-3 rounded-lg">24/7 Support</div>
      </section>

      {/* GAMES */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Popular Games</h2>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="bg-white/5 p-4 rounded-lg">WinGo</div>
          <div className="bg-white/5 p-4 rounded-lg">Aviator</div>
          <div className="bg-white/5 p-4 rounded-lg">Slots</div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="px-4 py-6 bg-[#070b12]">
        <h2 className="text-lg font-semibold mb-4">How to Start</h2>
        <ol className="text-sm text-zinc-300 space-y-2">
          <li>1. Register account</li>
          <li>2. Login</li>
          <li>3. Add funds</li>
          <li>4. Start playing</li>
        </ol>
      </section>

      {/* PROMO */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Bonus & Rewards</h2>
        <div className="space-y-3 text-sm">
          <div className="bg-white/5 p-4 rounded-lg">₹500 Welcome Bonus</div>
          <div className="bg-white/5 p-4 rounded-lg">Daily Cashback</div>
          <div className="bg-white/5 p-4 rounded-lg">Referral Rewards</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-8 text-center">
        <a href="https://dostwin.com/#/register"
           className="bg-blue-600 px-6 py-3 rounded-xl font-semibold">
          Start Playing Now
        </a>
      </section>

    </div>
  );
}
