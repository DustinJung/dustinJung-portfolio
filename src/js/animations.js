/* animations.js => 애니메이션 관련 함수 관리 ( gsap 포함 ) */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
    autoRefreshEvents: "DOMContentLoaded,load,resize"
});

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
                bubble.classList.remove('on');
                void bubble.offsetWidth; // 강제로 reflow 일으켜서 리셋
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
                // bubble이 애초에 떠 있는 걸 방지하려면 무조건 hidden 처리
                bubble.classList.remove('on');
                bubble.style.opacity = '0';
                bubble.style.visibility = 'hidden';
                bubble.style.pointerEvents = 'none';
            
                elements.forEach((el) => {
                    el.classList.add('on');
                });
            
                if (ufo.classList.contains('on')) {
                    setTimeout(() => {
                        ufo.classList.add("light-on");
                    }, 1600);
            
                    setTimeout(() => {
                        ufo.classList.remove('light-on');
                    }, 2000);
                }
            }
        });
    }) 
    return () => ctx.revert();
}



function theLastSection() {
    let ctx = gsap.context(() => {
        let bigSection = document.querySelector('#okay-ill-be-wating-contact-section');
        let bigWrapper = bigSection.querySelector('.waiting-section-text-wrapper');
        let smallWrapper = bigWrapper.querySelector('.each-other-wrapper');
        let theSpans = bigWrapper.querySelectorAll('.smallSpan');

        let existingTrigger = ScrollTrigger.getById("theSectionTrigger");
        if (existingTrigger) existingTrigger.kill();

        gsap.fromTo(theSpans, {
            y: "100%"
        }, {
            y: "0%",
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: bigSection,
                start: 'top 80%',
                id: 'theSectionTrigger',
            }
        })
    });

    return () => ctx.revert();
}

function coreWrapperHide() {
    let ctx = gsap.context((self) => {
        self.add(() => {
            let theWrapper = document.querySelector('.core-wrapper');
            let bigSection = document.querySelector('#okay-ill-be-wating-contact-section');

            if (!bigSection || !theWrapper) return;

            let existingTrigger = ScrollTrigger.getById("daSectionTrigger");
            if (existingTrigger) existingTrigger.kill();

            gsap.fromTo(theWrapper, 
                { autoAlpha: 0 }, 
                { 
                    autoAlpha: 1,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bigSection,
                        start: "20% 60%",
                        id: "daSectionTrigger",
                        markers: false,
                    }
                }
            );
        });
    });

    return () => {
        let existingTrigger = ScrollTrigger.getById("daSectionTrigger");
        if (existingTrigger) existingTrigger.kill();
        ctx.revert();
    };
}






function initAnimations() {
    letUfoHaveOn();
    waitForTheUfo();
    theLastSection();
    coreWrapperHide();
};

export { initAnimations };