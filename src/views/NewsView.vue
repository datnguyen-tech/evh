<template>
  <div>
    <the-banner />
    <div class="mt-[100px] container md:mt-[50px]">
      <div class="grid grid-cols-3 gap-6 md:grid-cols-1">
        <div
          v-for="item in 20"
          :key="item"
          class="col shadow-xl cursor-pointer"
          @click="$router.push({ name: 'DetailNews', params: { id: 1 } })"
        >
          <img
            loading="lazy"
            src="https://icdn.24h.com.vn/upload/3-2023/images/2023-09-25/TPHCM-Thao-do-can-nha-4-mat-tien-doc-nhat-o-quan-Tan-Phu-1-1695631867-227-width2000height1339.jpg"
            alt=""
            class="block object-cover h-[243px] w-full"
          />
          <div class="p-3">
            <p class="text-lg font-semibold text-menu line-clamp-2">
              Hà Nội thêm 2 ca tử vong do sốt xuất huyết, số mắc vẫn tăng
            </p>
            <p class="my-[10px] text-[13px]">20/2/2022</p>
            <p class="line-clamp-3 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur
              gravida sagittis aliquam bibendum
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheBanner from '@/components/TheBanner.vue'
</script>

<style scoped></style>
