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
    
    function gsapRefresh() {
        window.addEventListener("resize", () => {
            ScrollTrigger.refresh(); 
        });
    }







    scrollOpacityHide();
    gsapRefresh();
}

export { initUtils };