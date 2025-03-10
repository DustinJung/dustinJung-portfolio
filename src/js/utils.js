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

    
    

    //resize
    function gsapRefresh() {
        const resizeHandler = () => {
            const scale = Math.min(window.innerWidth, window.innerHeight) / 1200;
            const size = 0.5 + scale * 0.7;
        
            var r = document.querySelector(':root');
            r.style.setProperty('--size', size);
            r.style.setProperty('--sizeBig', 1);
            r.style.setProperty('--scale', scale);
        };
        resizeHandler();
        window.addEventListener("resize", () => {
            ScrollTrigger.refresh(); 
            
            //resize시 변수 변경


            resizeHandler();
        });
    }







    scrollOpacityHide();
    scrambleTextHover();
    gsapRefresh();
}

export { initUtils };