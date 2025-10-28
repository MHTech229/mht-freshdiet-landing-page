<template>
  <section
    id="partners"
    class="relative w-full bg-black text-white flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden"
  >
    <h2
      class="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tight opacity-0 animate-fadeDown"
    >
      <span class="text-primary-gradient">Our Partners</span>
    </h2>

    <p
      class="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed opacity-0 animate-fadeSlide"
    >
      We are proud to collaborate with trusted brands and organizations that
      share our vision of promoting a healthier and smarter lifestyle for
      everyone around the world.
    </p>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto px-6 md:px-12 opacity-0 animate-fadeSlide delay-200"
    >
      <div
        v-for="(partner, i) in partnerImages"
        :key="i"
        class="flex justify-center items-center bg-white/5 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-[0_0_25px_#50CE3B40] transition-all duration-500 hover:scale-105"
      >
        <img
          :src="partner"
          alt="Partner Logo"
          class="w-64 h-16 object-contain brightness-200"
        />
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 blur-[160px] animate-pulse-glow pointer-events-none"
    ></div>
  </section>
</template>

<script setup lang="ts">
import partner1 from '@/assets/imgs/partner-1.webp'
import partner2 from '@/assets/imgs/partner-2.webp'
import partner3 from '@/assets/imgs/partner-3.webp'
import partner4 from '@/assets/imgs/partner-4.webp'
import partner5 from '@/assets/imgs/partner-5.webp'
import partner6 from '@/assets/imgs/partner-6.webp'
import partner7 from '@/assets/imgs/partner-7.webp'
import partner8 from '@/assets/imgs/partner-8.webp'

const partnerImages = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8
]
</script>

<style scoped>
@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeDown {
  animation: fadeDown 1s ease-out forwards;
}

@keyframes fadeSlide {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fadeSlide {
  animation: fadeSlide 1.2s ease-out forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.25;
    transform: scale(1.1);
  }
}
.animate-pulse-glow {
  animation: pulse-glow 6s ease-in-out infinite;
}

.text-primary-gradient {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient-primary {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
}

@media (max-width: 768px) {
  section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
</style>
