$(document).ready(function () {
  // 建立新的 Swiper 來作用在 .swiper-container
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    // direction: "vertical", // 上下移動 (預設是 horizontal 水平移動)
    speed: 1000, // 速度
    loop: true, // 重複播放
    autoplay: {
      // 自動輪播
      delay: 1500 // 延遲
    },
    effect: "cube", // 效果

    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
});
