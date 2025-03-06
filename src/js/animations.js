/* animations.js => 애니메이션 관련 함수 관리 ( gsap 포함 ) */
gsap.registerPlugin(ScrollTrigger);

function waitForTheUfo() {
    let bubble = document.getElementById('wait-for-the-ufo');
    let theSection = document.getElementById('introduce-myself');
    let ctx = gsap.context(() => {
        gsap.to(bubble, {
            scrollTrigger: {
                trigger: theSection,
                start: 'top 55%',
                once: true,
                markers: false,
                id: "wait",
            },
            onStart: () => {
                bubble.classList.add('on');
            }
        })
    })
    return () => ctx.revert();
}

function letUfoHaveOn() {
    let ctx = gsap.context(() => {
        let bubble = document.getElementById('wait-for-the-ufo');
        let theSection = document.getElementById('introduce-myself');
        let ufo = document.getElementById('ufo');
        let myself_dot = document.getElementById('hello-im-dustin-dot');
        let dustin_wrapper = document.getElementById('hello-im-dustin-wrapper');
        let before = document.getElementById('hello-im-dustin-before');
        let after = document.getElementById('hello-im-dustin-after');

        let elements = [ theSection, ufo, myself_dot, dustin_wrapper, before, after ];

        gsap.to(ufo, {
            scrollTrigger: {
                trigger: theSection,
                start: "top 20%", // 뷰포트의 75% 지점에 도달하면 시작
                once: true, // 한 번만 실행
                markers: false,
            },
            onStart: () => {
                if(bubble.classList.contains('on')){
                    bubble.classList.remove('on');
                }
                elements.forEach((el) => {
                    el.classList.add('on');
                })
                if(ufo.classList.contains('on')){
                        setTimeout(() => {
                            ufo.classList.add("light-on");
                        }, 1600); // UFO가 다 내려온 후 불빛 ON!    
                    
                        setTimeout(() => {
                            ufo.classList.remove('light-on');
                        }, 2000);
                }
            }
        });
    }) 
    return () => ctx.revert();
}









function initAnimations() {
    letUfoHaveOn();
    waitForTheUfo();
};

export { initAnimations };