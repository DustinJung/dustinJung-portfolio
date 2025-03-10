/* main.js => vanila javascript, 함수 모듈 총괄 */
import { initAnimations } from "./animations.js";
import { initComponents } from "./components.js";
import { initUtils } from "./utils.js";


function startWeb() {
    try {
        initComponents();

        initAnimations();


    } catch (error) {
        console.log('오류 발생 오류 발생 : ', error);
    }
}

startWeb();



document.addEventListener("DOMContentLoaded", function () {
    initUtils();
});


window.onload = function() {
    function vanilaJavascripts() {

        function letSkillValueIncrease() {
            let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
        
            theWrappers.forEach((wrapper) => {
                let startValue = 0;
                let targetValue = parseInt(wrapper.getAttribute('data-percent')) || 0;
                let duration = 2000; // 2초 동안 애니메이션
                let interval = 30; // 업데이트 간격 (30ms)
                let increment = targetValue / (duration / interval);
        
                let fill = wrapper.querySelector('.fill');
                let span = wrapper.querySelector('span.on');
        
                console.log("targetValue:", targetValue);
                console.log("increment:", increment);
        
                let letsIncrease = setInterval(() => {
                    startValue += increment;
        
                    if (startValue >= targetValue) {
                        startValue = targetValue;
                        clearInterval(letsIncrease);
                    }
        
                    span.innerText = Math.round(startValue) + "%";
                    fill.style.width = startValue + "%";
                }, interval);
            });
        }

        function intro_parallax() {
            window.addEventListener("scroll", function () {
                let scrollValue = window.scrollY;
                let its_me = document.querySelector('#its-me-wrapper > div')
                
                //document.getElementById("intro-parallax-div").style.transform = `translateY(${scrollValue * 0.3}px)`;
                its_me.style.transform = `translate(0, ${scrollValue * 0.3}px)`;
                document.getElementById("take-a-look").style.transform = `translate(-50%, ${scrollValue * 0.2}px)`;
            });
        };
        
        function letBodyTakeIsReady() {
            setTimeout(() => {
                document.querySelector('body').classList.add('is-ready');
            }, 5200)
        };
        function hoverThenPlanetGoesOn() {
            let theTextBox = document.querySelector('#my-projects-section > .this-planet-wrapper');
            let thePlanet = document.querySelector('.the-planet');
            let timeout;
            let inPlanet = document.querySelector('#in-the-planet');
            let warp_btn = document.getElementById('go-oustide-btn');
            let body = document.querySelector('body');

            function planetHover() {
                thePlanet.addEventListener('mouseenter', function() {
                    clearTimeout(timeout);
                    theTextBox.classList.add('on');
                })
    
                thePlanet.addEventListener('mouseleave', function() {
                    timeout = setTimeout(() => {
                        theTextBox.classList.remove('on');
                    }, 150);
                })
            }

            function planetClick() {
                thePlanet.addEventListener('click', function() {
                    this.classList.add('on');
                    setTimeout(() => {
                        thePlanet.style.touchAction = 'none';
                        this.style.pointerEvents = 'none';
                        this.style.touchAction = 'none';
                        this.style.cursor = 'none';
                    }, 2200);
                    
                    setTimeout(() => {
                        this.classList.add('nowGo');
                        inPlanet.classList.add('on');
                        body.classList.remove('is-ready');
                        setTimeout(() => {
                            inPlanet.classList.add('goOn');
                            let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
                            theWrappers.forEach((wrapper) => {
                                let span = wrapper.querySelector('span');
                                span.classList.add('on');
                                letSkillValueIncrease();
                            })
                        }, 50);
                    },2400);

                })
            }
            
            function createParticles() {
                let container = document.querySelector('.the-particles');
                for (let i = 0; i < 20; i++) { //for문 돌리고
                    let particle = document.createElement('div'); //for문마다 particle이라는 변수의 div를 create(20개)
                    particle.classList.add('particle'); //그 div에 particle class를 추가.
                    let size = Math.random() * 5 + 2; // Math.random은 0 - 1 사이 랜덤값 생성/ 거기에 *5 + 2(2는 최소 크기)
                    let posX = Math.random() * window.innerWidth; //innerWidth는 브라우저 화면 가로 너비
                    let posY = Math.random() * window.innerHeight; // innerHeight => 브라우저 화면 세로 너비
                    let duration = Math.random() * 5 + 3; // 애니메이션 지속 시간도 랜덤하게 설정.
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${posX}px`;
                    particle.style.top = `${posY}px`;
                    particle.style.animationDuration = `${duration}s`;
                    container.appendChild(particle); //container 안에 자식요소로 particle을 추가
                }
            }

            function theCardEffect() {
                let containers = document.querySelectorAll('.skill-swiper-wrapper .container');
                let overlays = document.querySelectorAll('.skill-swiper-wrapper .overlay');
                let swiper_wrapper = document.querySelector('.skill-swiper-wrapper');
                let isMoving = false;
                let theBtn = document.getElementById('go-outside-btn-wrapper');
            
                containers.forEach((container, i) => {
                    let animationFrame; // animationFrames 변수 선언
                    let desc_wrappers = document.querySelectorAll('.desc-wrapper');
                    let close_btn = desc_wrappers[i].querySelector('.desc-close-btn');
            
                    container.addEventListener('mousemove', function(e) {
                        if (isMoving) return;
            
                        cancelAnimationFrame(animationFrame); // 이전 애니메이션 예약 취소
                        animationFrame = requestAnimationFrame(() => { //requestAnimationFrame()은 브라우저에게 "다음 화면을 그릴 때 실행해줘!" 라고 요청하는 함수, 
                            //  CPU 자원을 효율적으로 사용하면서도 부드러운 애니메이션을 만들 수 있음
                            // 모니터 주사율(FPS)에 맞춰 자동 실행되는 게 장점
                            let x = e.offsetX; // 마우스 x, y값 가져오기
                            let y = e.offsetY; 
            
                            let rotateY = (-1 / 5) * x + 20; // X축 회전 조정 / 최솟값과 최댓값이 20
                            let rotateX = (4 / 30) * y - 20; // Y축 회전 조정 / x보다 y가 긴 만큼 수치 적용 방향 다르게 적용
            
                            overlays[i].style.backgroundPosition = `${x / 5 + y / 5}%`; // 백그라운드 위치 조정, 마우스 위치보다 1/5 씩.
                            container.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        });
                    });
            
                    container.addEventListener('mouseleave', function() {
                        if (isMoving) return; 
            
                        cancelAnimationFrame(animationFrame);
                        container.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg)`;
                    });
            
                    container.addEventListener('click', function() {
                        // 1. 일단 클릭된 카드의 위치를 계산해야 한다.
                        // 2. 그럴려면, getBoundingClientRect()를 쓸 수 있음.

                        if (isMoving) return; // isMoving이 true면 실행하지마
                        isMoving = true; // isMoving을 true로 바꿈
                        
                        swiper_wrapper.classList.add('active');
                        container.classList.add('active');
                        theBtn.classList.add('active');

                        // getBoundingClientRect()는 **클릭된 카드(container)**의 위치 및 크기 정보를 반환하는 함수
                        // rect = {
                        //     left: 현재 요소의 왼쪽 끝이 뷰포트에서 얼마나 떨어져 있는지,
                        //     top: 현재 요소의 상단이 뷰포트에서 얼마나 떨어져 있는지,
                        //     width: 요소의 너비,
                        //     height: 요소의 높이
                        // } 
                        // 화면(뷰포트)의 가로 크기를 window.innerWidth로 가져와서 2로 나누면 정중앙 좌표가 나옴.
                        // rect.left는 현재 카드의 왼쪽 시작 좌표
                        // rect.width / 2를 더하면 카드의 가로 중간 좌표
                        // 화면 중앙 - 카드 중앙 = 이동해야 할 거리
                        let rect = container.getBoundingClientRect();
                        let centerX = window.innerWidth / 2 - (rect.left + rect.width / 2); // 가로(X축) 정중앙으로 이동시키기 위한 translateX 값을 구하는 공식
                        let centerY = window.innerHeight / 2 - (rect.top + rect.height / 2); // 세로(Y축) 정중앙으로 이동시키기 위한 translateY 값을 구하는 공식
            
                        containers.forEach((c, index) => { // 포이치문 안에서 forEach를 한번 더 돌린다
                            if (index !== i) { // 전체 forEach문의 i값과 여기서 돌린 index가 다르다면
                                c.style.opacity = "0"; // 안에서 돌린 forEach문의 인자인 c의 opacity를 없앤다.
                                c.style.transition = "opacity 0.5s ease-in-out";
                            }
                        });
            
                        container.style.transform = `translate3D(${centerX}px, ${centerY}px, 0.1px) scale(1.2)`; // 그 후, 위에 조건문에서 걸리지 않은(리얼클릭한) container는 가운데로 이동 시킨다!
                        container.style.transition = "transform 0.6s ease-in-out, opacity .6s ease-out";
            
                        setTimeout(() => {
                            container.classList.add('fade-out');
                            container.style.opacity = '0';
                            container.style.filter = 'blur(20px)';
                            container.style.webkitFilter = 'blur(20px)';
                            container.style.transform = `translate3D(${centerX}px, ${centerY}px, 0.1px) scale(1.4)`
                            desc_wrappers[i].classList.add('active');
                            setTimeout(() => {
                                desc_wrappers[i].style.opacity = '1';
                                desc_wrappers[i].style.transform = 'translate(-50%, -50%) scale(1)';
                            }, 800)
                        }, 800);
                    });
                        
                    close_btn.addEventListener('click', function() {
                        desc_wrappers[i].classList.remove('active');
                        desc_wrappers[i].style.opacity = '0';
                        desc_wrappers[i].style.transform = 'translate(-50%, -50%) scale(.2)';
                        container.style.webkitFilter = 'blur(0)';
                        container.style.filter = 'blur(0)';
                        container.style.transform = `translate3D(0%, 0%, 0.1px) scale(1)`
                        container.classList.remove('fade-out');
                        setTimeout(() => {
                            containers.forEach((c, index) => { 
                                if (index !== i) { 
                                    c.style.opacity = "1";
                                    c.style.transition = "opacity 0.5s ease-in-out";
                                }
                            });
                            container.style.transition =  'opacity .6s ease-out';
                            container.style.opacity = '1';
                            swiper_wrapper.classList.remove('active');
                            container.classList.remove('active');
                            theBtn.classList.remove('active');
                            setTimeout(() => {
                                container.style.transition = 'all 0.1s'
                                isMoving = false;
                            }, 100)
                        }, 850);
                    })
                });
            }
            
            function go_warp_outside() {
                let el1 = document.querySelector('#in-the-planet.goBig .the-particles');
                let el2 = document.querySelector('#in-the-planet.goBig .skill-swiper-wrapper');
                let el3 = document.getElementById('go-outside-btn-wrapper');
                warp_btn.addEventListener('click', function() {
                    // 1. 행성에서 나가는 애니메이션이 있어야 한다.
                    // 1 - 1 inPlanet의 내부 스케일이 작아지는 애니메이션 클래스(goBig) 추가 => goOn 클래스 제거 => 애니메이션 클래스 제거
                    // 1 - 2 애니메이션 클래스를 제거하면 forwards기 때문에 내부 요소의 스케일을 원래대로 되돌려야 함.
                    // 2. 더플래닛의 커진 스케일을 다시 원래대로 돌리는게 맞다.
                    // 3. 추가된 클래스는 삭제하는게 맞다.
                    // 4. 바디에 is-ready를 다시 줘야 한다.
                    inPlanet.classList.add('goBig'); // goBig에 반응해서 내부요소 두개에 애니메이션 추가하기, .5s 의 소요시간
                    thePlanet.classList.remove('nowGo'); // 행성 오퍼시티를 1에서 0으로 만들었던 클래스 ? .the-planet
                    thePlanet.classList.remove('on');
                    thePlanet.style.animation = 'none'; // 플로팅 애니메이션 속성 때문
                    thePlanet.style.transform = "translate3d(0, 1vmin, 100px) rotate3d(0, 0, 1, 2deg) scale(20)"; // 다시 보이게 만들어 놓고.
                    setTimeout(() => {
                        inPlanet.classList.remove('goOn'); //인플래닛 오퍼시티를 1로 만드는 클래스 #in-the-planet, 그걸 제거함.
                    }, 350);
                    setTimeout(() => {
                        thePlanet.style.transform = "translate3d(0, 1vmin, 100px) rotate3d(0, 0, 1, 2deg) scale(1)";
                        let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
                        theWrappers.forEach((wrapper) => {
                            let span = wrapper.querySelector('span.on');
                            let fill = wrapper.querySelector('.fill');
                
                            if (span) {
                                span.classList.remove('on');
                                span.innerText = "0%";
                            }
                
                            if (fill) {
                                fill.style.width = "0%";
                            }
                        });
                    }, 600);
                    setTimeout(() => {
                        inPlanet.classList.remove('on'); // 인플레닛 비저블을 보이게 만드는 클래스 
                        inPlanet.classList.remove('goBig'); // goBig 애니메이션 주는 클래스 제거하고 scale 원래대로 되돌리기.
                        if(el1) el1.style.transform = 'scale(1)'; // goBig 애니메이션 주는 클래스 제거하고 scale 원래대로 되돌리기.
                        if(el2) el2.style.transform = 'scale(1)'; // goBig 애니메이션 주는 클래스 제거하고 scale 원래대로 되돌리기.
                        if(el3) el3.style.transform = 'scale(1)'; // goBig 애니메이션 주는 클래스 제거하고 scale 원래대로 되돌리기.
                    }, 950);
                    setTimeout(() => {
                        body.classList.add('is-ready');// 바디 스크롤 클래스
                    }, 1250);
                    setTimeout(() => {
                        thePlanet.style.animation = 'floating 3s alternate ease-in-out infinite';
                    }, 1500)
                    setTimeout(() => {
                        thePlanet.style.touchAction = 'auto';
                        thePlanet.style.pointerEvents = 'auto';
                        thePlanet.style.cursor = 'pointer';
                    }, 1501)
                })
            }


            planetHover();
            planetClick();
            createParticles();
            theCardEffect();
            go_warp_outside();
        };


        letBodyTakeIsReady();
        intro_parallax();
        hoverThenPlanetGoesOn();
    };



    vanilaJavascripts();
    
}

