/* components.js => 컴포넌트( 슬라이더, 모달, UI 등 ) 관리 js 파일 */

function initSwiper() {
  var swiper01 = new Swiper(".skill-swiper-1", {
      breakpoints: {
        1367: {
            slidesPerView: 5.5,
            centeredSlides: true,
        },
        769: {  // 화면 너비 768px 이상일 때
            slidesPerView: 3.5,
            centeredSlides: true,
        },
        400: {
            slidesPerView: 2.5,
            centeredSlides: true,
        },
        0: {
            slidesPerView: 1.5,
            centeredSlides: true,
        }
    },
      spaceBetween: 30,
      observer: true,  // Swiper가 DOM 변경을 감지할 수 있도록 설정
      observeParents: true, // Swiper의 부모 요소 변경도 감지
      allowTouchMove: true, // 기본적으로 터치 가능
      keyboard: {
        enabled: true, 
        onlyInViewport: true, // Swiper가 화면에 있을 때만 키보드 포커스 허용
    },
      on: {
        init: () => {
          var swiper_wrapper = document.querySelector('.skill-swiper-wrapper');

          // MutationObserver로 "active" 클래스 추가 감지
          // MutationObserver는 DOM 요소의 변경을 감지하는 API
          // 이걸 사용하면 HTML 요소의 속성(class, style 등)이나 자식 요소가 변경될 때 자동으로 특정 함수를 실행 가능 .
        
          const observer = new MutationObserver(() => { // 콜백 함수 안에서 .skill-swiper-wrapper 요소에 "active" 클래스가 있는지 확인.
              if (swiper_wrapper.classList.contains('active')) {
                  swiper01.allowTouchMove = false; // 터치 이동 비활성화
              } else {
                  swiper01.allowTouchMove = true; // 터치 이동 활성화
              }
              // "active" 클래스가 추가되면 allowTouchMove = false;,
              // "active" 클래스가 없어지면 allowTouchMove = true;
              swiper01.update(); // Swiper에게 변경 사항을 반영하도록 업데이트 실행
          });

          // observer 실행 (class 속성 감시)
          observer.observe(swiper_wrapper, { attributes: true, attributeFilter: ['class'] }); // observe(타겟, 옵션)을 사용해서 swiper_wrapper의 변경을 감시 시작
          // attributes: true → class, style 같은 속성이 변경될 때 감지
          // attributeFilter: ['class'] → "class" 속성만 감지하도록 설정 (불필요한 감지 방지)

        },
        resize: () => {
          swiper01.update();
        }
      }
  });

  var swiper02 = new Swiper(".skill-swiper-2", {
    breakpoints: {
      1280: {
          slidesPerView: 5.5,
          centeredSlides: true,
      },
      769: {  // 화면 너비 768px 이상일 때
          slidesPerView: 3.5,
          centeredSlides: true,
      },
      400: {
        slidesPerView: 2.5,
        centeredSlides: true,
      },
      0: {
          slidesPerView: 1.5,
          centeredSlides: true,
      }
  },
    spaceBetween: 30,
    observer: true,  // Swiper가 DOM 변경을 감지할 수 있도록 설정
    observeParents: true, // Swiper의 부모 요소 변경도 감지
    allowTouchMove: true, // 기본적으로 터치 가능
    keyboard: {
      enabled: true, 
      onlyInViewport: true, // Swiper가 화면에 있을 때만 키보드 포커스 허용
  },
    on: {
      init: () => {
        var swiper_wrapper = document.querySelector('.skill-swiper-wrapper');

        // MutationObserver로 "active" 클래스 추가 감지
        // MutationObserver는 DOM 요소의 변경을 감지하는 API
        // 이걸 사용하면 HTML 요소의 속성(class, style 등)이나 자식 요소가 변경될 때 자동으로 특정 함수를 실행 가능 .
      
        const observer = new MutationObserver(() => { // 콜백 함수 안에서 .skill-swiper-wrapper 요소에 "active" 클래스가 있는지 확인.
            if (swiper_wrapper.classList.contains('active')) {
                swiper02.allowTouchMove = false; // 터치 이동 비활성화
            } else {
                swiper02.allowTouchMove = true; // 터치 이동 활성화
            }
            // "active" 클래스가 추가되면 allowTouchMove = false;,
            // "active" 클래스가 없어지면 allowTouchMove = true;
            swiper02.update(); // Swiper에게 변경 사항을 반영하도록 업데이트 실행
        });

        // observer 실행 (class 속성 감시)
        observer.observe(swiper_wrapper, { attributes: true, attributeFilter: ['class'] }); // observe(타겟, 옵션)을 사용해서 swiper_wrapper의 변경을 감시 시작
        // attributes: true → class, style 같은 속성이 변경될 때 감지
        // attributeFilter: ['class'] → "class" 속성만 감지하도록 설정 (불필요한 감지 방지)

      },
      resize: () => {
        swiper02.update();
      }
    }
  });

var swiper03 = new Swiper(".projects_swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  observer: true,  
  observeParents: true, 
  allowTouchMove: true, 
  keyboard: {
    enabled: true, 
    onlyInViewport: true, 
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      setTimeout(() => this.update(), 100);  
    },
    resize: function () {
      this.update(); 
    }
  }
});



}


function initUIs() {

}

function initComponents() {
    initSwiper();
    initUIs();
}

export { initComponents };