<template>
  <section
    id="download-app"
    class="relative w-full bg-black text-white flex flex-col md:flex-row items-center justify-center py-24 md:py-28 px-6 md:px-16 overflow-hidden"
  >
    <div
      class="flex flex-col items-start text-left max-w-lg md:max-w-md lg:max-w-lg opacity-0 animate-fadeSlide md:mr-12 lg:mr-16"
    >
      <h2
        class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-primary-gradient"
      >
        Download App
      </h2>

      <p class="text-gray-300 text-lg leading-relaxed mb-6">
        Experience the full power of our platform from your mobile device.  
        Book, manage, and enjoy your favorite events seamlessly wherever you are.
      </p>

      <div class="flex gap-3 flex-wrap">
        <a
          href="#"
          class="flex items-center bg-white text-black font-semibold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-md"
        >
          <img
            src="@/assets/svgs/apple.svg"
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
            src="@/assets/svgs/google-play.webp"
            alt="Google Play"
            class="w-6 h-6 mr-3"
          />
          <div class="text-left leading-tight">
            <span class="block text-xs text-gray-600">Get it on</span>
            <span class="block text-base font-bold">Google Play</span>
          </div>
        </a>
      </div>
    </div>

    <div
      class="relative flex justify-center items-center mt-12 md:mt-0 opacity-0 animate-fadeDown"
    >
      <img
        src="@/assets/imgs/screen-center.webp"
        alt="App Preview"
        class="w-[240px] md:w-[360px] lg:w-[460px] object-contain drop-shadow-[0_0_25px_#50CE3B60]"
      />
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
    flex-direction: column;
    text-align: center;
  }

  .flex.items-start {
    align-items: center;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .md\:mr-12,
  .lg\:mr-16 {
    margin-right: 0;
  }

  .mt-12 {
    margin-top: 3rem;
  }
}
</style>
