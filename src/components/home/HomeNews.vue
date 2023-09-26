<template>
  <div class="mt-[100px] container md:mt-[50px]">
    <div class="flex items-center justify-between md:flex-col md:items-stretch">
      <p class="text-[40px] font-semibold text-menu md:text-4xl">Bài Viết Mới Nhất</p>
      <div
        class="read-more px-[27px] py-[9px] text-center text-menu mt-[20px] cursor-pointer md:px-3 md:py-1 md:w-fit"
        @click="$router.push({ name: 'News' })"
      >
        Xem thêm >
      </div>
    </div>

    <div class="grid grid-cols-3 grid-rows-2 gap-2 mt-10 md:hidden">
      <div
        v-for="item in 5"
        :key="item"
        class="col cursor-pointer"
        :class="{ 'col-span-2 flex': item === 1, 'col-start-3': item === 2, 'row-start-2': item > 2 }"
        @click="$router.push({ name: 'DetailNews', params: { id: 1 } })"
      >
        <div class="mr-6">
          <p class="text-[28px] font-semibold text-menu" :class="{ 'line-clamp-3': item === 1, 'line-clamp-1': item > 1 }">
            Hà Nội thêm 2 ca tử vong do sốt xuất huyết, số mắc vẫn tăng
          </p>
          <p v-if="item === 1" class="my-[10px] text-[13px]">20/2/2022</p>
          <p class="line-clamp-2 text-xl" :class="{ 'line-clamp-5': item === 1 }">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur
            gravida sagittis aliquam bibendum
          </p>
        </div>
        <img
          loading="lazy"
          src="https://icdn.24h.com.vn/upload/3-2023/images/2023-09-25/TPHCM-Thao-do-can-nha-4-mat-tien-doc-nhat-o-quan-Tan-Phu-1-1695631867-227-width2000height1339.jpg"
          alt=""
          class="block object-cover h-[300px] rounded-[40px]"
          :class="{ 'mt-[10px] !h-[243px]': item > 1 }"
        />
      </div>
    </div>
    <swiper-container
      id="swiper-container"
      ref="swiperRef"
      class="hidden mt-4 md:block"
      :slides-per-view="1.06"
      space-between="12"
    >
      <swiper-slide>
        <div class="col" @click="$router.push({ name: 'DetailNews', params: { id: 1 } })">
          <p class="text-[24px] font-semibold text-menu line-clamp-1">
            Hà Nội thêm 2 ca tử vong do sốt xuất huyết, số mắc vẫn tăng
          </p>
          <p class="line-clamp-2 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur
            gravida sagittis aliquam bibendum
          </p>

          <img
            loading="lazy"
            src="https://icdn.24h.com.vn/upload/3-2023/images/2023-09-25/TPHCM-Thao-do-can-nha-4-mat-tien-doc-nhat-o-quan-Tan-Phu-1-1695631867-227-width2000height1339.jpg"
            alt=""
            class="block object-cover rounded-[34px] mt-2 h-[209px]"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="col" @click="$router.push({ name: 'DetailNews', params: { id: 1 } })">
          <p class="text-[24px] font-semibold text-menu line-clamp-1">
            Hà Nội thêm 2 ca tử vong do sốt xuất huyết, số mắc vẫn tăng
          </p>
          <p class="line-clamp-2 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur
            gravida sagittis aliquam bibendum
          </p>

          <img
            loading="lazy"
            src="https://icdn.24h.com.vn/upload/3-2023/images/2023-09-25/TPHCM-Thao-do-can-nha-4-mat-tien-doc-nhat-o-quan-Tan-Phu-1-1695631867-227-width2000height1339.jpg"
            alt=""
            class="block object-cover rounded-[34px] mt-2 h-[209px]"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="col" @click="$router.push({ name: 'DetailNews', params: { id: 1 } })">
          <p class="text-[24px] font-semibold text-menu line-clamp-1">
            Hà Nội thêm 2 ca tử vong do sốt xuất huyết, số mắc vẫn tăng
          </p>
          <p class="line-clamp-2 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur
            gravida sagittis aliquam bibendum
          </p>

          <img
            loading="lazy"
            src="https://icdn.24h.com.vn/upload/3-2023/images/2023-09-25/TPHCM-Thao-do-can-nha-4-mat-tien-doc-nhat-o-quan-Tan-Phu-1-1695631867-227-width2000height1339.jpg"
            alt=""
            class="block object-cover rounded-[34px] mt-2 h-[209px]"
          />
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup lang="ts">
  import { register } from 'swiper/element/bundle'

  register()
  const slidePerView = ref(1)
</script>

<style scoped>
  .read-more {
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  }
  .col {
    height: 400px;
    border-radius: 30px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
    padding: 26px 37px;
    @media screen and (max-width: 767px) {
      height: 328px;
      padding: 15px 33px;
      border-radius: 25.809px;
      box-shadow: 0px 3.4412px 5.16181px 0px rgba(0, 0, 0, 0.25);
      margin-left: 2px;
      margin-bottom: 8px;
    }
  }
</style>
