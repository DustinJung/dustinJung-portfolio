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
                // 1. 각 콘테이너와 overlay의 index가 같음
                // 2. 각 contianer 안에서 forEach 돌려야함
                // 3. 그 안에서 container에 index값 hover하면 동일한 index값 overlay의 backgroundposition이 바뀌어야 함
                // 4. 해결 방법 => forEach에서 index값 주고, 그 안에서 overlays에 i값 배열에 이벤트 주기
                containers.forEach((container, i) => {
                    container.addEventListener('mousemove', function(e) {
                        let x = e.offsetX;
                        let y = e.offsetY; // 마우스 x, y값 가져오기
            
                        let rotateY = (-1/5) * x + 20; // X축 회전 조정 / 최솟값과 최댓값이 20
                        let rotateX = 4/30 * y - 20;   // Y축 회전 조정 / x보다 y가 긴 만큼 수치 적용 방향 다르게 적용
            

                        overlays[i].style.backgroundPosition = `${x/5 + y/5}%`; // 백그라운드 위치 조정, 마우스 위치보다 1/5 씩.

                        container.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    });
            
                    container.addEventListener('mouseout', function() {
                        overlays[i].style.opacity = "0";
                        container.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg)`;
                    });
                })
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

