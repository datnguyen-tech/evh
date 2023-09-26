<template>
  <div class="mt-[55px] pl-[150px] pt-[147px] text-white relative container banner md:px-[31px] md:pt-[33px]">
    <div class="max-w-[462px] md:max-w-none">
      <span class="text-[46px] leading-[64px] font-semibold md:text-[36px] md:leading-[50px]"
        >Đặt Lịch Hẹn Khám bệnh Nhanh Chóng
      </span>
      <p class="mt-[17px] text-xl leading-[30px] md:text-sm">
        EVH là một ứng dụng về chăm sóc sức khỏe bao gồm: Đặt lịch hẹn, tìm kiếm phòng khám, cập nhật tin tức mới nhất về y tế…
        ngay trên thiết bị di động.
        <br />
        Giúp người bệnh dễ dàng tìm được cơ sở khám chữa bệnh.
      </p>
    </div>
    <div class="mt-[26px] md:hidden">
      <span class="text-xl font-semibold"> Tải Ứng Dụng Tại Đây </span>
      <div class="space-x-[13px] mt-[17px] flex cursor-pointer">
        <img src="/images/appstore.png" alt="" />
        <img src="/images/gg-play.png" alt="" />
      </div>
    </div>
    <div class="mt-[181px] space-y-[15px] hidden md:block">
      <div class="action text-[10px] px-0.5 py-1 border border-solid border-[#0E43A6] rounded-md w-fit">D O W N L O A D</div>
      <img src="/images/appstore.png" alt="" class="w-[119px]" />
      <img src="/images/gg-play.png" alt="" class="w-[119px]" />
    </div>
    <img src="/images/mockup-phone.png" alt="mockup phone" class="absolute bottom-0 right-[105px] md:hidden" />
    <img src="/images/mockup-phone-mb.png" alt="mockup phone" class="absolute bottom-0 right-0 hidden md:block" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .banner {
    background-image: url('/images/bg-banner.png');
    height: 694px;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
      margin-top: 0;
      max-width: 100%;
      border-radius: 0;
      background-image: url('/images/banner-mb.png');
      height: 764px;
      background-repeat: repeat-x;
    }
  }
</style>
