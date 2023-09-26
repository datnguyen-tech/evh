<template>
  <div id="service" class="container">
    <div class="mt-[100px] text-center max-w-[871px] mx-auto md:mt-2 md:max-w-none">
      <span class="text-5xl leading-none text-menu font-semibold md:text-4xl">Giới Thiệu EVH- Đặt lịch khám bệnh</span>
      <p class="text-xl leading-[30px] mt-[19px] text-center md:mt-[30px] md:text-sm">
        EVH là giải pháp đặt lịch khám bệnh, chăm sóc sức khỏe trực tuyến cho cả gia đình. Người dùng chủ động trong việc khám
        chữa bệnh, được lựa chọn dịch vụ, chuyên khoa, bác sĩ tại các bệnh viện và phòng khám hàng đầu Việt Nam như Bệnh viện Đại
        học Y Dược TP.HCM, Bệnh viện Chợ Rẫy, Bệnh viện Nhi Đồng Thành Phố.
      </p>
    </div>
    <div
      class="grid grid-cols-3 gap-[37px] mt-[100px] max-w-[1181px] mx-auto md:mt-[50px] md:max-w-none md:grid-cols-1 md:gap-[50px]"
    >
      <div class="box">
        <img loading="lazy" src="/images/intro-1.png" alt="intro 1" />
        <p class="text-3xl font-semibold mt-[28px] md:text-[26px] md:mt-[25px]">Đặt Lịch nhanh chóng</p>
        <p class="mt-[15px] text-base md:text-sm md:mt-[13px]">
          Bệnh nhân có thể chủ động tìm kím bệnh viện và đặt lịch khám nhanh chóng (ngày khám và giờ khám)
        </p>
      </div>
      <div class="box">
        <img loading="lazy" src="/images/intro-2.png" alt="intro 1" />
        <p class="text-3xl font-semibold mt-[28px]">Thanh toán dễ dàng</p>
        <p class="mt-[15px] text-base">Người dùng có thể chọn và thanh toán trực tiếp trên phần mềm</p>
      </div>
      <div class="box">
        <img loading="lazy" src="/images/intro-3.png" alt="intro 1" />
        <p class="text-3xl font-semibold mt-[28px]">Nhận phiếu trực tuyến</p>
        <p class="mt-[15px] text-base">Bệnh nhân nhận phiếu khám trực tuyến tại trên phần mềm</p>
      </div>
    </div>
    <p class="mt-[54px] text-[25px] text-center md:text-sm md:mt-[30px]">
      Tìm hiểu về quy trình <span class="text-menu">Đăng ký khám bệnh</span>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .box {
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 9px 13px 0px rgba(0, 0, 0, 0.25);
    height: 393px;
    padding: 0 10px;
    @media screen and (max-width: 767px) {
      height: 349px;
    }
  }
</style>
