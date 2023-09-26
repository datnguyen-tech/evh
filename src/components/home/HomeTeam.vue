<template>
  <div class="mt-[100px] pb-[38px] container md:mt-[50px]">
    <p class="text-center text-5xl font-semibold text-menu md:text-4xl">Đội Ngũ Chuyên Gia</p>
    <div class="mt-[50px] relative">
      <swiper-container id="swiper-container" ref="swiperRef" :slides-per-view="slidePerView" space-between="30">
        <swiper-slide>
          <div class="box">
            <img loading="lazy" src="/images/team.png" alt="hospital image" class="h-[525px] object-cover block" />
          </div>
          <p class="mt-4 text-4xl leading-none font-semibold text-[#4A8AC5] text-center md:text-2xl">Họ & Tên</p>
          <p class="mt-4 text-[25px] text-center md:text-base">Chức Vụ</p>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img loading="lazy" src="/images/team.png" alt="hospital image" class="h-[525px] object-cover block" />
          </div>
          <p class="mt-4 text-4xl leading-none font-semibold text-[#4A8AC5] text-center md:text-2xl">Họ & Tên</p>
          <p class="mt-4 text-[25px] text-center md:text-base">Chức Vụ</p>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img loading="lazy" src="/images/team.png" alt="hospital image" class="h-[525px] object-cover block" />
          </div>
          <p class="mt-4 text-4xl leading-none font-semibold text-[#4A8AC5] text-center md:text-2xl">Họ & Tên</p>
          <p class="mt-4 text-[25px] text-center md:text-base">Chức Vụ</p>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img loading="lazy" src="/images/team.png" alt="hospital image" class="h-[525px] object-cover block" />
          </div>
          <p class="mt-4 text-4xl leading-none font-semibold text-[#4A8AC5] text-center md:text-2xl">Họ & Tên</p>
          <p class="mt-4 text-[25px] text-center md:text-base">Chức Vụ</p>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <img loading="lazy" src="/images/team.png" alt="hospital image" class="h-[525px] object-cover block" />
          </div>
          <p class="mt-4 text-4xl leading-none font-semibold text-[#4A8AC5] text-center md:text-2xl">Họ & Tên</p>
          <p class="mt-4 text-[25px] text-center md:text-base">Chức Vụ</p>
        </swiper-slide>
      </swiper-container>
      <div class="flex justify-between absolute z-10 top-[200px] w-full md:hidden">
        <div class="arrow cursor-pointer" @click="nextSwiper('left')">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8507 27L2.90051 15L14.8507 3"
              stroke="#fff"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="rotate-180 cursor-pointer arrow" @click="nextSwiper('right')">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8507 27L2.90051 15L14.8507 3"
              stroke="#fff"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
      slidePerView.value = 1
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

<style scoped>
  .box {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  }

  .arrow {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #0e43a6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
