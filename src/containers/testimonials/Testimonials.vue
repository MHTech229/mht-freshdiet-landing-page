<template>
  <section
    id="testimonials"
    class="relative w-full bg-black text-white flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden"
  >
    <h2
      class="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tight opacity-0 animate-fadeDown"
    >
      <span class="text-primary-gradient">Testimonials</span>
    </h2>

    <p
      class="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed opacity-0 animate-fadeSlide"
    >
      Discover what our users are saying about their experience with our
      platform. Their satisfaction is our greatest motivation to keep improving.
    </p>

    <Swiper
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }"
      :space-between="30"
      :loop="true"
      class="md:max-w-6xl w-full px-4 md:px-12 opacity-0 animate-fadeSlide delay-200"
    >
      <SwiperSlide
        v-for="(page, pageIndex) in paginatedTestimonials"
        :key="pageIndex"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div
            v-for="(testimonial, index) in page"
            :key="index"
            class="bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-[0_0_25px_#50CE3B40] transition-all duration-500 hover:scale-[1.02]"
          >
            <p class="text-gray-200 italic leading-relaxed mb-6">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center gap-4">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 class="font-semibold text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-gray-400 text-sm">{{ testimonial.profession }}</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div
      class="absolute flex items-start max-w-6xl w-full gap-4 z-10 bottom-10 md:left-auto left-8"
    >
      <button
        class="swiper-prev flex justify-center items-center bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        class="swiper-next flex justify-center items-center bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 blur-[160px] animate-pulse-glow pointer-events-none"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

interface Testimonial {
  name: string
  profession: string
  quote: string
  avatar: string
}

import testimonialsData from "@/data/testimonials.json"
const testimonials = ref<Testimonial[]>(testimonialsData as Testimonial[])

const paginatedTestimonials = ref<Testimonial[][]>([])

onMounted(() => {
  const chunkSize = 4
  for (let i = 0; i < testimonials.value.length; i += chunkSize) {
    paginatedTestimonials.value.push(
      testimonials.value.slice(i, i + chunkSize)
    )
  }
})
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
  0%, 100% {
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

.swiper-prev,
.swiper-next {
  cursor: pointer;
  transition: all 0.3s ease;
}
.swiper-prev:hover,
.swiper-next:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  section {
    padding: 6rem 2rem;
  }
  .swiper-prev,
  .swiper-next {
    width: 48px;
    height: 48px;
  }
}
</style>
