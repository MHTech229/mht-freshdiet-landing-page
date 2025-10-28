<template>
  <section
    id="about"
    class="relative w-full bg-black text-white flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden"
  >
    <h2
      class="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight opacity-0 animate-fadeDown"
    >
      <span class="text-primary-gradient">About Us</span>
    </h2>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl mx-auto px-6 md:px-12"
    >
      <div
        class="w-full md:w-1/2 flex justify-center opacity-0 animate-fadeSlide"
      >
        <img
          src="@/assets/imgs/screen-center.webp"
          alt="Application Diet"
          class="w-[80%] md:w-[90%] rounded-3xl object-cover shadow-lg"
        />
      </div>

      <div
        class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 opacity-0 animate-fadeSlide delay-200"
      >
        <h3 class="text-2xl md:text-3xl font-bold">
          Votre compagnon intelligent pour une vie plus saine 🍏
        </h3>
        <p class="text-gray-300 leading-relaxed">
          FreshDIET vous accompagne au quotidien pour atteindre vos objectifs
          de santé et de bien-être. Grâce à notre technologie intelligente,
          suivez vos repas, vos progrès et vos besoins nutritionnels de manière
          simple, rapide et personnalisée.
        </p>
        <button
          class="bg-primary-gradient px-8 py-4 rounded-md text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          En savoir plus
        </button>
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 blur-[160px] animate-pulse-glow pointer-events-none"
    ></div>
  </section>
</template>

<script setup lang="ts">
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
