<template>
  <div class="menu container flex items-center md:max-w-none">
    <img loading="lazy" src="/images/logo.png" alt="logo evh" class="w-[67px] md:w-[41px]" />
    <span class="text-menu text-[50px] font-bold ml-[10px] cursor-pointer md:hidden">EVH</span>
    <div class="space-x-[37px] text-menu font-semibold text-lg ml-[153px] md:hidden">
      <a href="/">Trang Chủ</a>
      <a href="#service">Dịch Vụ</a>
      <a href="#team">Đội ngũ</a>
      <a href="#news">Tin Tức</a>
      <a href="#recruiting">Tuyển dụng</a>
    </div>
    <div class="btn w-[184px] h-[55px] bg-menu text-white rounded-[72px] flex items-center justify-center ml-auto md:hidden">
      <img loading="lazy" src="/images/download.png" alt="icon download" />
      <span class="pl-2">Download</span>
    </div>

    <!-- mobile menu -->
    <div
      class="w-[35px] h-[35px] bg-black p-2 space-y-1 flex justify-center flex-col ml-auto invisible md:visible"
      @click="isOpen = true"
    >
      <div class="bg-white h-0.5 w-full"></div>
      <div class="bg-white h-0.5 w-full"></div>
      <div class="bg-white h-0.5 w-full"></div>
    </div>

    <div v-show="isOpen" class="menu-mobile">
      <div class="icon" @click="isOpen = false">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.25 14.75L23.875 6.875L22.625 5.625L15 13.375L7.375 5.625L6.125 6.875L13.75 14.75L5.625 23.125L6.875 24.375L15 16.125L23.125 24.375L24.375 23.125L16.25 14.75Z"
            fill="black"
          />
        </svg>
      </div>

      <a href="/" @click="isOpen = false">Trang Chủ</a>
      <a href="#service" @click="isOpen = false">Dịch Vụ</a>
      <a href="#team" @click="isOpen = false">Đội ngũ</a>
      <a href="#news" @click="isOpen = false">Tin Tức</a>
      <a href="#recruiting" @click="isOpen = false">Tuyển dụng</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isOpen = ref(false)
</script>

<style scoped lang="scss">
  .menu {
    border-radius: 0px 0px 20px 20px;
    background: #fff;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
    padding: 0 13px 0 23px;
    height: 107px;

    @media screen and (max-width: 768px) {
      border-radius: none;
      height: 60px;
      box-shadow: none;
      margin: 10px 0;
      padding: 0 31px;
    }
  }
  .menu-mobile {
    transition: all linear 0.3s;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100vw;
    padding-right: 20px;
    a {
      margin: 10px 0;
      color: #0e43a6;
      font-size: 20px;
    }
  }
</style>
