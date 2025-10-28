<template>
  <header
    class="relative w-full flex flex-col justify-center items-center text-center text-white overflow-visible py-24 md:py-32"
  >
    <h1
      class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight opacity-0 z-20 relative"
      :class="{ 'animate-fadeDown opacity-100': showContent }"
    >
      Votre Coach de <span class="text-primary-gradient">Diète</span> Intelligent 🍏
    </h1>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-primary opacity-20 blur-[180px] animate-pulse-glow pointer-events-none z-10"
    ></div>

    <div
      class="relative flex items-center justify-center w-full max-w-7xl gap-4 md:gap-6 z-20 -mt-8"
    >
      <div
        class="w-56 sm:w-60 md:w-64 lg:w-96 h-[480px] sm:h-[500px] md:h-[520px] lg:h-[540px] rounded-3xl overflow-hidden opacity-0"
        :class="{ 'animate-fadeSlide animate-float opacity-100 delay-200': showContent }"
      >
        <img
          src="@/assets/imgs/screen-left.webp"
          alt="Image gauche"
          class="w-full h-full object-contain"
        />
      </div>

      <div
        class="w-80 sm:w-96 lg:w-[440px] h-[560px] sm:h-[600px] md:h-[640px] lg:h-[680px] rounded-3xl overflow-hidden opacity-0"
        :class="{ 'animate-fadeSlide animate-float opacity-100 delay-400': showContent }"
      >
        <img
          src="@/assets/imgs/screen-center.webp"
          alt="Image centrale"
          class="w-full h-full object-contain"
        />
      </div>

      <div
        class="w-56 sm:w-60 md:w-64 lg:w-96 h-[480px] sm:h-[500px] md:h-[520px] lg:h-[540px] rounded-3xl overflow-hidden opacity-0"
        :class="{ 'animate-fadeSlide animate-float opacity-100 delay-600': showContent }"
      >
        <img
          src="@/assets/imgs/screen-right.webp"
          alt="Image droite"
          class="w-full h-full object-contain"
        />
      </div>
    </div>

    <div
      class="flex sm:flex-row flex-col justify-center items-center gap-4 mt-10 md:mt-12 opacity-0 z-20 w-full"
      :class="{ 'animate-fadeDown opacity-100': showContent }"
    >
      <a
        href="#"
        class="flex items-center bg-white text-black font-semibold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md"
      >
        <img
          src='@/assets/svgs/apple.svg'
          alt="Apple"
          class="w-6 h-6 mr-3"
        />
        <div class="text-left leading-tight">
          <span class="block text-xs text-gray-600">Download on the</span>
          <span class="block text-base font-bold">App Store</span>
        </div>
      </a>

      <a
        href="#"
        class="flex items-center bg-white text-black font-semibold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md"
      >
        <img
          src='@/assets/svgs/google-play.webp'
          alt="Google Play"
          class="w-6 h-6 mr-3"
        />
        <div class="text-left leading-tight">
          <span class="block text-xs text-gray-600">Get it on</span>
          <span class="block text-base font-bold">Google Play</span>
        </div>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const showContent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 200);
});
</script>

<style scoped>
@keyframes fadeDown {
  0% { opacity: 0; transform: translateY(-40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeDown { animation: fadeDown 1s ease-out forwards; }

@keyframes fadeSlide {
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fadeSlide { animation: fadeSlide 1s ease-out forwards; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float { animation: float 5s ease-in-out infinite; }

@keyframes pulse-glow {
  0%,100% { opacity:0.15; transform: scale(1);}
  50% { opacity:0.35; transform: scale(1.05);}
}
.animate-pulse-glow { animation: pulse-glow 6s ease-in-out infinite; }

.text-primary-gradient {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient-primary {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
}

@media (max-width: 768px) {
  .relative.flex.items-center.justify-center.gap-4.md\:gap-6 > :nth-child(1),
  .relative.flex.items-center.justify-center.gap-4.md\:gap-6 > :nth-child(3) {
    display: none;
  }
  .relative.flex.items-center.justify-center.gap-4.md\:gap-6 {
    justify-content: center;
  }
}
</style>
