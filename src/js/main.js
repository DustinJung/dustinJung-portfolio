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
        }

        

        function hoverThenPlanetGoesOn() {
            let theTextBox = document.querySelector('#my-projects-section > .this-planet-wrapper');
            let thePlanet = document.querySelector('.the-planet');
            let timeout;
            let inPlanet = document.querySelector('#in-the-planet');

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
                        theTextBox.style = `display: none`;
                        this.style = `touch-action: none; cursor: auto;`;
                    }, 3500);
                    
                    setTimeout(() => {
                        this.classList.add('nowGo');
                        inPlanet.classList.add('on');
                        if(inPlanet.classList.contains('on')) {
                            document.querySelector('body').classList.remove('is-ready');
                        };
                        setTimeout(() => {
                            inPlanet.classList.add('goOn');
                        }, 50);
                    },3700);

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
                let skill_swiper = document.querySelector('.skill-swiper-wrapper .skill-swiper');
                let isMoving = false;
            
                containers.forEach((container, i) => {
                    let animationFrame; // animationFrames 변수 선언
            
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
                        swiper_wrapper.classList.add('active');
                        container.classList.add('active');
                        // 1. 일단 클릭된 카드의 위치를 계산해야 한다.
                        // 2. 그럴려면, getBoundingClientRect()를 쓸 수 있음.

                        if (isMoving) return; // isMoving이 true면 실행하지마
                        isMoving = true; // isMoving을 true로 바꿈
                        
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
            
                        container.style.transform = `translate3D(${centerX}px, ${centerY}px, 0px) scale(1.2)`; // 그 후, 위에 조건문에서 걸리지 않은(리얼클릭한) container는 가운데로 이동 시킨다!
                        container.style.transition = "transform 0.6s ease-in-out";
            
                        //setTimeout(() => {
                        //    // 💨 카드도 점점 사라짐
                        //    container.style.opacity = "0";
                        //    container.style.transition = "opacity 0.5s ease-in-out";
            
                            //setTimeout(() => {
                            //    let detailBox = document.querySelector(`#detail-${i}`); // 카드와 연결된 상세 정보 div, 템플릿 리터럴을 사용, 
                            //    detailBox.classList.add("on");
                            //    detailBox.style.opacity = "1";
            
                            //    // 
                            //    isMoving = false;
                            //}, 500);
                        //}, 600);
                        });
            
                    /*document.querySelector(`#detail-${i} .close-btn`).addEventListener("click", function () {
                        let detailBox = document.querySelector(`#detail-${i}`);
                        detailBox.classList.remove("on");
                        detailBox.style.opacity = "0";
            
                        setTimeout(() => {
                            containers.forEach((c) => {
                                c.style.opacity = "1";
                                c.style.transform = "";
                                c.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
                            });
            
                            isMoving = false;
                        }, 500);
                    });*/
                });
            }
            


            planetHover();
            planetClick();
            createParticles();
            theCardEffect()
        }


        letBodyTakeIsReady();
        intro_parallax();
        hoverThenPlanetGoesOn();
    };



    vanilaJavascripts();
    
}

