<template>
  <div class="w-full h-auto flex flex-col justify-start items-start bg-transparent overflow-x-hidden">
    <nav
      class="fixed top-0 left-0 w-full z-50 flex justify-between md:justify-around items-center bg-black/90 transition-all duration-500 ease-in-out lg:px-8 md:px-4 px-2 md:py-6 py-4"
    >
      <ul class="hidden md:flex justify-center items-center gap-x-6 lg:text-lg text-md">
        <li
          v-for="(item, index) in menuItems"
          :key="item.name"
          class="opacity-0 animate-fade-in-down"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <a
            :href="item.href"
            class="text-white font-semibold relative group transition-colors duration-300"
          >
            {{ item.name }}
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-primary-gradient transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </li>
      </ul>

      <div
        class="flex md:flex-1 justify-center items-center text-center text-white md:text-4xl text-2xl logo im-fell opacity-0 animate-fade-in-down"
        style="animation-delay: 0.4s"
      >
        Fresh<span class="text-gradient">DIET</span>
      </div>

      <div class="hidden md:flex justify-center items-center gap-x-4">
        <button
          class="text-white cursor-pointer font-semibold lg:text-lg text-md lg:px-12 lg:py-4 px-6 py-3 rounded-sm border border-white/30 transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.5s"
        >
          Login
        </button>
        <button
          class="bg-primary-gradient cursor-pointer text-white font-semibold lg:text-lg text-md lg:px-12 lg:py-4 px-6 py-3 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 animate-fade-in-down"
          style="animation-delay: 0.6s"
        >
          Register
        </button>
      </div>

      <button
        @click="toggleMenu"
        class="bg-primary-gradient p-2 transition-all duration-300 md:hidden rounded-sm z-50"
      >
        <MenuIcon v-if="!showMenu" class="text-white w-6 h-6" />
        <CloseIcon v-else class="text-white w-6 h-6" />
      </button>
    </nav>

    <transition name="slide-down">
      <div
        v-if="showMenu"
        class="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-6 md:hidden z-60"
      >
        <a
          @click="() => (showMenu = false)"
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          class="text-lg font-semibold bg-white/10 rounded-sm hover:bg-primary-gradient hover:text-white w-3/4 text-center px-6 py-3 transition-all duration-300"
        >
          {{ item.name }}
        </a>

        <div class="flex flex-col items-center w-3/4 space-y-3 mt-8">
          <button
            @click="() => (showMenu = false)"
            class="bg-primary-gradient text-white font-semibold text-lg px-6 py-3 rounded-sm w-full transition-all duration-300"
          >
            Log In
          </button>
          <button
            @click="() => (showMenu = false)"
            class="bg-white text-gray-900 font-semibold text-lg px-6 py-3 rounded-sm w-full transition-all duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </transition>

    <div class="pt-24 md:pt-28"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-vue-next";

const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Partners", href: "#partners" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Download", href: "#download-app" },
];
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease forwards;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}
.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}

.text-gradient {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root {
  --primary-gradient: linear-gradient(90deg, #00ff88, #00ccff);
}
</style>
