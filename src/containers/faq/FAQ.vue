<template>
  <section
    id="faq"
    class="relative w-full bg-black text-white flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden"
  >
    <h2
      class="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tight opacity-0 animate-fadeDown"
    >
      <span class="text-primary-gradient">FAQ's</span>
    </h2>

    <p
      class="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed opacity-0 animate-fadeSlide"
    >
      Find answers to the most common questions about our services and
      platform.
    </p>

    <div
      class="flex flex-col gap-6 w-full max-w-4xl px-6 md:px-12 opacity-0 animate-fadeSlide delay-200"
    >
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-white/5 rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_25px_#50CE3B40]"
      >
        <button
          class="flex justify-between items-center w-full text-left focus:outline-none"
          @click="toggleFAQ(index)"
        >
          <h3 class="text-lg md:text-xl font-semibold text-white">
            {{ faq.question }}
          </h3>
          <span
            class="text-primary-gradient text-3xl font-bold transition-transform duration-300"
            :class="{ 'rotate-180': faq.open }"
          >
            {{ faq.open ? '−' : '+' }}
          </span>
        </button>

        <transition name="faq-slide">
          <p
            v-if="faq.open"
            class="mt-4 text-gray-300 text-base leading-relaxed"
          >
            {{ faq.answer }}
          </p>
        </transition>
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 blur-[160px] animate-pulse-glow pointer-events-none"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import faqData from "@/data/faq.json";

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

const faqs = ref<FAQ[]>([]);

onMounted(() => {
  faqs.value = faqData.map((item) => ({
    ...item,
    open: false,
  }));
});

const toggleFAQ = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};
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

.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.3s ease;
}
.faq-slide-enter-from,
.faq-slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
.faq-slide-enter-to,
.faq-slide-leave-from {
  opacity: 1;
  max-height: 200px;
  transform: translateY(0);
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
