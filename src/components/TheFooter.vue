<template>
  <div class="mt-[170px] relative footer">
    <div class="inner">
      <div class="contact">
        <span class="text-white text-[40px] font-semibold md:hidden">Liên Hệ Chúng tôi</span>
        <input v-model="text" type="text" class="input" placeholder="Enter your email" />
        <div class="ml-auto uppercase text-white text-[18px] flex items-center justify-center cursor-pointer btn">Subscribe</div>
      </div>
      <div class="content flex md:hidden">
        <div class="left flex flex-col items-center [h-253px] pr-[72px] border-r border-solid border-[#C4C4C4]">
          <img loading="lazy" src="/images/logo.png" alt="" class="logo" />
          <img loading="lazy" src="/images/company-name.png" alt="" class="block mt-[35px]" />
          <div class="flex items-center justify-between space-x-[27px] mt-4">
            <img loading="lazy" src="/images/Insta.png" alt="" />
            <img loading="lazy" src="/images/Fb.png" alt="" />
            <img loading="lazy" src="/images/Twiter.png" alt="" />
            <img loading="lazy" src="/images/In.png" alt="" />
            <img loading="lazy" src="/images/Youtube.png" alt="" />
          </div>
        </div>
        <div class="pl-5 flex-1">
          <span class="text-menu font-medium text-[30px]">Menu</span>
          <div class="flex mt-2">
            <ul class="text-xl leading-[40px]">
              <li>Trang Chủ</li>
              <li>Dịch Vụ</li>
              <li>Đội Ngũ</li>
              <li>Tin Tức</li>
              <li>Tuyển Dụng <span class="text-base px-3 bg-[#39AFBA] rounded-[15px] text-white">Offer</span></li>
            </ul>
            <ul class="ml-[29px] text-xl leading-[40px]">
              <li>Liên hệ</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo mật</li>
              <li>Quy định sử dụng</li>
            </ul>
          </div>
        </div>
        <div class="pl-[57px] w-[331px]">
          <span class="text-menu font-medium text-[30px]">Address</span>
          <p class="text-xl leading-[40px]">
            Tầng 10, Tòa nhà Việt Á, Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội
          </p>
          <p class="text-xl leading-[40px]">hotline: 1900 955535</p>
          <p class="text-xl leading-[40px]">mail@primpay.com</p>
        </div>
      </div>
      <div class="mt-[26px] flex justify-end space-x-[42px] md:hidden">
        <img loading="lazy" src="/images/appstore.png" alt="" />
        <img loading="lazy" src="/images/gg-play.png" alt="" />
      </div>
    </div>
    <div class="h-[77px] bg-white flex items-center justify-center md:hidden">
      EVH Medical Technology © Bảng Quyền thuộc sở hữu của EVH
    </div>

    <!-- footer mb -->
    <div class="pt-[100px] text-white pl-[31px] pr-[38px] hidden md:block">
      <span class="text-2xl leading-3 font-semibold">Menu</span>
      <div class="mt-1">
        <ul class="text-base leading-[32px]">
          <li>Trang Chủ</li>
          <li>Dịch Vụ</li>
          <li>Đội Ngũ</li>
          <li>Tin Tức</li>
          <li>Tuyển Dụng <span class="text-sm px-3 bg-[#39AFBA] rounded-[15px] text-white">Offer</span></li>
        </ul>
        <ul class="base leading-[32px] mt-4">
          <li>Liên hệ</li>
          <li>Điều khoản dịch vụ</li>
          <li>Chính sách bảo mật</li>
          <li>Quy định sử dụng</li>
        </ul>
      </div>
      <div class="mt-4">
        <span class="text-2xl leading-3 font-semibold">Address</span>
        <div class="mt-1">
          <p class="text-base leading-8">
            Tầng 10, Tòa nhà Việt Á, Số 9 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội
            <br />
            Hotline: 1900 955535
            <br />
            mail@primpay.com
          </p>
        </div>
      </div>
      <div class="mt-10 flex justify-center items-center space-x-[50px]">
        <img loading="lazy" src="/images/appstore.png" alt="" class="w-[120px]" />
        <img loading="lazy" src="/images/gg-play.png" alt="" class="w-[120px]" />
      </div>
      <div class="mt-10 flex flex-col justify-center items-center">
        <img loading="lazy" src="/images/logo.png" alt="" class="w-[65px]" />
        <img loading="lazy" src="/images/company-name-mb.png" alt="" class="block mt-[18px]" />
        <div class="flex items-center justify-between space-x-[14px] mt-3">
          <img loading="lazy" src="/images/Insta-mb.png" alt="" />
          <img loading="lazy" src="/images/Fb-mb.png" alt="" />
          <img loading="lazy" src="/images/Twiter-mb.png" alt="" />
          <img loading="lazy" src="/images/In-mb.png" alt="" />
          <img loading="lazy" src="/images/Youtube-mb.png" alt="" />
        </div>
      </div>
      <div class="mt-[20px] text-[10px] leading-[20px] text-white text-center pb-2">
        EVH Medical Technology © Bảng Quyền thuộc sở hữu của EVH
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const text = ref('')
</script>

<style scoped lang="scss">
  .footer {
    border-radius: 30px 30px 0px 0px;
    background: #f5f5f5;
    .inner {
      width: 1160px;
      margin: 170px auto 0;
      min-height: 200px;
      padding-bottom: 40px;
      .contact {
        height: 137px;
        background: linear-gradient(180deg, #1d56c1 0%, #5c82c8 100%);
        border-radius: 30px;
        position: absolute;
        top: -88px;
        z-index: 20;
        width: 1053px;
        padding: 0 38px;
        display: flex;
        align-items: center;

        .input {
          width: 393px;
          height: 44px;
          padding-left: 20px;
          border-radius: 72px;
          margin-left: 51px;
          &:focus-visible {
            outline: none;
          }
        }
        .btn {
          width: 161px;
          height: 49px;
          background-color: #0e43a6;
          border-radius: 72px;
        }
      }
      .content {
        padding-top: 138px;

        li {
          cursor: pointer;
          &:hover {
            color: #0e43a6;
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      margin-top: 100px;
      border-radius: 0;
      background: linear-gradient(180deg, #1d56c1 0%, #5c82c8 100%);
      .inner {
        width: 100%;
        margin-top: 100px;
        min-height: auto;
        padding-bottom: 0;

        .contact {
          width: calc(100vw - 60px);
          height: 43px;
          padding: 0 16px;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          .input {
            width: 230px;
            height: 25px;
            margin-left: 0;
          }
          .btn {
            width: 64px;
            height: 20px;
            background-color: #0e43a6;

            font-size: 8px;
          }
        }
      }
    }
  }
</style>
