<template>
  <div class="mt-[100px] container md:mt-[50px]">
    <p class="text-[40px] leading-none font-semibold text-menu md:text-4xl md:text-center">Hệ Thống Bệnh Viện Triển Khai</p>
    <div class="mt-[50px] relative md:mt-[45px]">
      <swiper-container id="swiper-container" ref="swiperRef" :slides-per-view="slidePerView" space-between="10">
        <swiper-slide>
          <img
            loading="lazy"
            src="/images/hos-1.png"
            alt="hospital image"
            class="h-[288px] object-cover block w-full md:h-[220px]"
          />
          <p class="mt-5 text-[28px] font-semibold text-menu md:text-[21px]">Bệnh Viện An Việt</p>
        </swiper-slide>
        <swiper-slide>
          <img
            loading="lazy"
            src="/images/hos-2.png"
            alt="hospital image"
            class="h-[288px] object-cover block w-full md:h-[220px]"
          />
          <p class="mt-5 text-[28px] font-semibold text-menu md:text-[21px]">Bệnh Viện Nhi Đồng 1</p>
        </swiper-slide>
        <swiper-slide>
          <img
            loading="lazy"
            src="/images/hos-1.png"
            alt="hospital image"
            class="h-[288px] object-cover block w-full md:h-[220px]"
          />
          <p class="mt-5 text-[28px] font-semibold text-menu md:text-[21px]">Bệnh Viện Bình Thạnh</p>
        </swiper-slide>
        <swiper-slide>
          <img
            loading="lazy"
            src="/images/hos-2.png"
            alt="hospital image"
            class="h-[288px] object-cover block w-full md:h-[220px]"
          />
          <p class="mt-5 text-[28px] font-semibold text-menu md:text-[21px]">Bệnh Viện Bình Thạnh</p>
        </swiper-slide>
        <swiper-slide>
          <img
            loading="lazy"
            src="/images/hos-1.png"
            alt="hospital image"
            class="h-[288px] object-cover block w-full md:h-[220px]"
          />
          <p class="mt-5 text-[28px] font-semibold text-menu md:text-[21px]">Bệnh Viện Bình Thạnh</p>
        </swiper-slide>
      </swiper-container>
      <div class="flex justify-between absolute z-10 top-[114px] w-full md:hidden">
        <img loading="lazy" src="/images/arrow.png" alt="arrow" class="cursor-pointer" @click="nextSwiper('left')" />
        <img loading="lazy" src="/images/arrow.png" alt="arrow" class="rotate-180 cursor-pointer" @click="nextSwiper('right')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { register } from 'swiper/element/bundle'

  register()

  const swiperRef = ref()
  const isBeginElement = ref(true)
  const isEndElement = ref(false)
  const slidePerView = ref(3)

  onMounted(() => {
    if (window.innerWidth < 768 || window.outerWidth < 768) {
      slidePerView.value = 1.2
    }
    nextTick(() => {
      swiperRef.value.addEventListener('slidechange', () => {
        isBeginElement.value = swiperRef.value?.swiper.isBeginning || false
        isEndElement.value = swiperRef.value?.swiper.isEnd || false
      })
    })
  })
  onBeforeUnmount(() => {
    swiperRef.value.removeEventListener('slidechange', null)
  })
  const nextSwiper = (direction: 'left' | 'right') => {
    direction == 'right' ? swiperRef.value?.swiper.slideNext() : swiperRef.value?.swiper.slidePrev()
  }
</script>

<style scoped></style>
