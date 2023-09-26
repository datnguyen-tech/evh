<template>
  <div class="mt-[100px] container md:mt-[50px]">
    <p class="text-center text-5xl font-semibold text-menu md:text-4xl">Liên hệ</p>
    <div class="w-[1000px] mx-auto grid grid-cols-4 gap-5 mt-[50px] md:grid-cols-2 md:gap-y-[31px] ms:gap-x-[18px] md:w-full">
      <div class="box">
        <img loading="lazy" src="/images/hotline.png" alt="" />
        <p class="mt-4 text-menu text-lg leading-none font-semibold md:text-[12px]">HOTLINE</p>
        <p class="text-sm text-menu mt-[11px] md:text-[9px] md:leading-3">1900 955 535</p>
      </div>
      <div class="box">
        <img loading="lazy" src="/images/address.png" alt="" />
        <p class="mt-4 text-menu text-lg leading-none font-semibold md:text-[12px]">ĐỊA CHỈ</p>
        <p class="text-sm text-menu mt-[11px] md:text-[9px] md:leading-3">
          Tầng 10, Tòa nhà Việt Á, Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội
        </p>
      </div>
      <div class="box">
        <img loading="lazy" src="/images/email.png" alt="" />
        <p class="mt-6 text-menu text-lg leading-none font-semibold md:text-[12px] md:mt-4">MAIL</p>
        <p class="text-sm text-menu mt-[11px] md:text-[9px] md:leading-3">mail@Evh.com</p>
      </div>
      <div class="box">
        <img loading="lazy" src="/images/time.png" alt="" />
        <p class="mt-4 text-menu text-lg leading-none font-semibold md:text-[12px]">THỜI GIAN LÀM VIỆC</p>
        <p class="text-sm text-menu mt-[11px] md:text-[9px] md:leading-3">Thời gian làm việc từ thứ 2 đến thứ 7 7:30 - 16:30</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .box {
    border-radius: 20px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
    height: 233px;
    padding: 30px 24px;

    @media screen and (max-width: 767px) {
      width: auto;
      height: 153px;
      img {
        height: 24px;
      }
    }
  }
</style>
