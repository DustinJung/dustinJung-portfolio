/* utils.js => utils 함수 모음 */
gsap.registerPlugin(ScrollTrigger);

function initUtils() {
    function scrollOpacityHide() {
        let scrollElements = document.querySelectorAll(".scroll_on");
        let loop = false;
        let exposurePercentage = 40;
    
        function handleScroll() {
            const winHeight = window.innerHeight;
            
            scrollElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.bottom - rect.top;
    
                if (rect.top <= winHeight - (elementHeight * exposurePercentage) / 100 &&
                    rect.bottom >= (elementHeight * exposurePercentage) / 100) {
                    element.classList.add("active");
                }
    
                if (loop && (rect.top >= winHeight || rect.bottom <= 0)) {
                    element.classList.remove("active");
                }
            });
        }
    
    
        
        window.addEventListener("scroll", handleScroll);
    }

    function scrambleTextHover() {
        const buttons = document.querySelectorAll(".scramble-btn");
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // 변환될 랜덤 문자들

        buttons.forEach(button => {
            const textElement = button.querySelector("span");
            const originalText = textElement.innerText;

            function scrambleText() {
                const textArray = originalText.split("");
                let completed = 0;

                textArray.forEach((char, index) => {
                    let changes = Math.floor(Math.random() * 2) + 3; // 2~3번 변경
                    let delay = Math.random() * 210; // 랜덤한 변경 간격 (0~300ms)

                    let counter = 0;
                    const interval = setInterval(() => {
                        textArray[index] = letters[Math.floor(Math.random() * letters.length)];
                        textElement.innerText = textArray.join("");

                        counter++;
                        if (counter >= changes) {
                            clearInterval(interval);
                            textArray[index] = originalText[index]; // 원래 문자로 복구
                            completed++;

                            if (completed === textArray.length) {
                                textElement.innerText = originalText; // 모든 문자 복구 후 원래 텍스트 유지
                            }
                        }
                    }, delay);
                });
            }

            button.addEventListener("mouseenter", scrambleText);
        });
    }

    function betweenBtnHover() {
        let btns = document.querySelectorAll('.betweenBtn');
        let mediaQuery = window.matchMedia("(min-width: 1280px)");
    
        function handleHover(event) {
            let el1 = document.querySelectorAll('.betweenBtnFirst');
            let el2 = document.querySelectorAll('.betweenBtnSecond');
    
            let i = Array.from(btns).indexOf(event.currentTarget);
            if (i === -1) return;
    
            if (event.type === 'mouseenter') {
                el1[i].classList.add('on');
                el2[i].classList.add('on');
            } else if (event.type === 'mouseleave') {
                el1[i].classList.remove('on');
                el2[i].classList.remove('on');
            }
        }
    
        function addHoverEvents() {
            btns.forEach(btn => {
                btn.addEventListener('mouseenter', handleHover);
                btn.addEventListener('mouseleave', handleHover);
            });
        }
    
        function removeHoverEvents() {
            btns.forEach(btn => {
                btn.removeEventListener('mouseenter', handleHover);
                btn.removeEventListener('mouseleave', handleHover);
            });
        }
    
        function checkMediaQuery(e) {
            if (e.matches) {
                addHoverEvents();
            } else {
                removeHoverEvents();
            }
        }
    
        // 초기 실행
        checkMediaQuery(mediaQuery);
    
        // 화면 크기 변경 감지
        mediaQuery.addEventListener("change", checkMediaQuery);
    }
    
    
    

    //resize
    function initEffects() {
        function intro_parallax() {
            function handleScroll() {
                if (!window.matchMedia("(min-width: 1367px)").matches) return; 
    
                let scrollValue = window.scrollY;
                let its_me = document.querySelector('#its-me-wrapper > div');
    
                its_me.style.transform = `translate(0, ${scrollValue * 0.3}px)`;
                document.getElementById("take-a-look").style.transform = `translate(-50%, ${scrollValue * 0.2}px)`;
            }
    
            window.addEventListener("scroll", handleScroll);
        }
    
        function setVH() {
            let vh = window.visualViewport ? window.visualViewport.height * 0.01 : window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    
        function setSize() {
            requestAnimationFrame(() => {
                const scale = Math.min(window.innerWidth, window.innerHeight) / 1200;
                const size = 0.5 + scale * 0.7;
    
                var r = document.querySelector(':root');
                r.style.setProperty('--size', size);
                r.style.setProperty('--sizeBig', 1);
                r.style.setProperty('--scale', scale);
            });
        }
    
        function gsapRefresh() {
            setSize();
            setVH(); 
    
            let resizeTimeout;
            let resizeTimeoutForMobile;
            
            window.addEventListener("resize", () => {
              clearTimeout(resizeTimeout);
              clearTimeout(resizeTimeoutForMobile);
            
              resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 1366) {
                  ScrollTrigger.refresh();
                }
            
                setSize(); // 공통 처리
            
                // 모바일용: 700ms 뒤에 vh 다시 설정
                resizeTimeoutForMobile = setTimeout(() => {
                  setVH();
                  ScrollTrigger.refresh();
                }, 700);
              }, 200);
            });
            
    
            window.addEventListener("orientationchange", () => {
                setTimeout(() => {
                    setVH();
                    ScrollTrigger.refresh();
                }, 300);
            });
        }
    
        function handleResize() {
            gsapRefresh();
        }
    
        intro_parallax();
    
        if (window.matchMedia("(min-width: 1367px)").matches) {
            gsapRefresh();
            window.addEventListener("resize", handleResize);
        } else {
            gsapRefresh();
        }

        // visualViewport 변화 감지해서 vh 보정
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', () => {
                setVH();
            });
        }
    }
    
    
    
    
    
    

    
    






    initEffects();
    scrollOpacityHide();
    scrambleTextHover();
    betweenBtnHover();
}

export { initUtils };