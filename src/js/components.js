/* components.js => 컴포넌트( 슬라이더, 모달, UI 등 ) 관리 js 파일 */

function initSwiper() {
    var swiper = new Swiper(".skill-swiper", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function initUIs() {

}

function initComponents() {
    initSwiper();
    initUIs();
}

export { initComponents };