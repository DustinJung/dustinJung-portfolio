/* animations.js => 애니메이션 관련 함수 관리 ( gsap 포함 ) */
gsap.registerPlugin(ScrollTrigger);

function letUfoHaveOn() {
    let ctx = gsap.context(() => {
        let theSection = document.getElementById('introduce-myself');
        let ufo = document.getElementById('ufo');
        gsap.to(ufo, {
            scrollTrigger: {
                trigger: theSection,
                start: "top 20%", // 뷰포트의 75% 지점에 도달하면 시작
                once: true, // 한 번만 실행
            },
            onStart: () => {
                ufo.classList.add("on");
                if(ufo.classList.contains('on')){
                        setTimeout(() => {
                            ufo.classList.add("light-on");
                        }, 1600); // UFO가 다 내려온 후 불빛 ON!    
                    
                        setTimeout(() => {
                            ufo.classList.remove('light-on');
                        }, 2000)
                }
            }
        });
    }) 
    return () => ctx.revert();
}









function initAnimations() {
    letUfoHaveOn();
};

export { initAnimations };