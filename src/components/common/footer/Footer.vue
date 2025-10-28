<template>
  <footer class="relative bg-black text-white py-12 px-6 md:px-16 border-t border-gray-800 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

      <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
        <h2 class="text-2xl font-extrabold text-primary-gradient">Diet App</h2>
        <p class="text-gray-400 text-sm max-w-sm leading-relaxed">
          Simplify your nutrition journey with our smart tracking and personalized diet plans.
        </p>
      </div>

      <div class="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-300">
        <a href="#about" class="hover:text-[#9FE860] transition-colors">About Us</a>
        <a href="#partners" class="hover:text-[#9FE860] transition-colors">Partners</a>
        <a href="#testimonials" class="hover:text-[#9FE860] transition-colors">Testimonials</a>
        <a href="#faq" class="hover:text-[#9FE860] transition-colors">FAQ</a>
        <a href="#download-app" class="hover:text-[#9FE860] transition-colors">Download</a>
      </div>
    </div>

    <div class="w-full h-px bg-gray-800 my-8"></div>

    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm px-16">
      <p>© {{ new Date().getFullYear() }} Diet App. Made with ❤️ by <a href="https://www.linkedin.com/in/ange-marie-charbel-mehinto" class="font-bold text-white">MEHINTO Charbel</a>. <br>All rights reserved.</p>

      <div class="flex gap-5">
        <a href="#" class="hover:text-[#9FE860] transition-colors" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="hover:text-[#9FE860] transition-colors" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="hover:text-[#9FE860] transition-colors" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-primary opacity-5 blur-[140px] animate-pulse-glow pointer-events-none"
    ></div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.text-primary-gradient {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #9FE860 0%, #50CE3B 100%);
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 8s ease-in-out infinite;
}
</style>
