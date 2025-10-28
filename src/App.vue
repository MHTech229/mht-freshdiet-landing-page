<template>
  <transition name="fade" appear>
    <div
      v-if="loading"
      class="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black z-50 overflow-hidden"
    >
      <div class="flex flex-col items-center">
        <div class="loader-gradient w-20 h-20 rounded-full relative">
          <div class="loader-inner w-full h-full rounded-full animate-spin-gradient"></div>
        </div>
        <p class="text-white mt-4 font-semibold tracking-wide">Loading...</p>
      </div>

      <div
        class="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#9FE860] via-[#50CE3B] to-[#00FF88] rounded-full opacity-20 blur-[150px] animate-pulse-glow pointer-events-none"
      ></div>
    </div>
  </transition>

  <transition name="fade" appear>
    <div v-if="!loading" class="w-screen h-auto flex flex-col justify-start items-start bg-black overflow-x-hidden">
      <NavBar />
      <Header />
      <About />
      <Partner />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

function preloadImages(selector: string) {
  const images = Array.from(document.querySelectorAll<HTMLImageElement>(selector));
  const promises = images.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.onload = img.onerror = () => resolve();
    });
  });
  return Promise.all(promises);
}

onMounted(async () => {
  await preloadImages("img");

  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.loader-gradient {
  background: conic-gradient(#50CE3B, #9FE860, #50CE3B, #00FF88);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader-inner {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: black;
}

@keyframes spin-gradient {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-spin-gradient {
  animation: spin-gradient 1.2s linear infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.15); }
}
.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}
</style>
