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
        let isMoving = false;

        function letSkillValueIncrease() {
            let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
        
            theWrappers.forEach((wrapper) => {
                let startValue = 0;
                let targetValue = parseInt(wrapper.getAttribute('data-percent')) || 0;
                let duration = 2000; // 2초 동안 애니메이션
                let interval = 30; // 업데이트 간격 (30ms)
                let increment = targetValue / (duration / interval);
        
                let fill = wrapper.querySelector('.fill');
                let span = wrapper.querySelector('span');
        
                let letsIncrease = setInterval(() => {
                    startValue += increment;
        
                    if (startValue >= targetValue) {
                        startValue = targetValue;
                        clearInterval(letsIncrease);
                    }
        
                    span.innerText = Math.round(startValue) + "%";
                    fill.style.width = `${startValue}%`;
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
            let thePlanet = document.querySelector('.the-planet');
            let inPlanet = document.querySelector('#in-the-planet');
            let warp_btn = document.getElementById('go-oustide-btn');
            let body = document.querySelector('body');
            let theSection = document.querySelector('#my-skills-section');

            function planetClick() {
                thePlanet.addEventListener('click', function() {
                    theSection.scrollIntoView({ behavior: 'smooth' });
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
                let skillSwipers = document.querySelectorAll('.skill-swiper'); 
                let descWrappers = document.querySelectorAll('.desc-wrapper-container'); 
                let theBtn = document.getElementById('go-outside-btn-wrapper');
                
                skillSwipers.forEach((swiper, swiperIndex) => {
                    let containers = swiper.querySelectorAll('.container'); 
                    let descWrapper = descWrappers[swiperIndex]; 
                    let descs = descWrapper.querySelectorAll('.desc-wrapper'); 
            
                    containers.forEach((container, containerIndex) => {
                        let animationFrame; 
                        let desc = descs[containerIndex]; 
                        let close_btn = desc.querySelector('.desc-close-btn'); 
            
                        // 🎯 마우스 호버 시 카드 효과
                        container.addEventListener('mousemove', function(e) {
                            if (isMoving) return;
                            cancelAnimationFrame(animationFrame); 
                            animationFrame = requestAnimationFrame(() => {
                                let x = e.offsetX;
                                let y = e.offsetY;
                                let rotateY = (-1 / 5) * x + 20;
                                let rotateX = (4 / 30) * y - 20;
                                container.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            });
                        });
            
                        container.addEventListener('mouseleave', function() {
                            if (isMoving) return;
                            cancelAnimationFrame(animationFrame);
                            container.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg)`;
                        });
            
                        container.addEventListener('click', function() {
                            if (isMoving) return;
                            isMoving = true;
                        
                            //  swiper_wrapper를 클릭된 container의 부모 요소에서 찾기
                            let swiper_wrapper = container.closest('.skill-swiper-wrapper'); 
                        
                            swiper_wrapper.classList.add('active');
                            container.classList.add('active');
                            theBtn.classList.add('active');
                        
                            // 중앙 정렬 좌표 계산
                            let rect = container.getBoundingClientRect();
                            let centerX = window.innerWidth / 2 - (rect.left + rect.width / 2);
                            let centerY = window.innerHeight / 2 - (rect.top + rect.height / 2);
                        
                            // 다른 컨테이너 투명도 낮추기
                            containers.forEach((c, index) => {
                                if (index !== containerIndex) {
                                    c.style.opacity = "0";
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
                                
                                desc.classList.add('active');
                                setTimeout(() => {
                                    desc.style.opacity = '1';
                                    desc.style.transform = 'translate(-50%, -50%) scale(1)';
                                }, 800);
                            }, 600);
                        });
                        
                        
                        
            
                        // 🎯 close 버튼 클릭 시 초기화
                        close_btn.addEventListener('click', function() {
                            desc.classList.remove('active');
                            desc.style.opacity = '0';
                            desc.style.transform = 'translate(-50%, -50%) scale(.2)';
                            container.style.filter = 'blur(0)';
                            container.style.transform = `translate3D(0%, 0%, 0.1px) scale(1)`;
                            container.classList.remove('fade-out');
            
                            setTimeout(() => {
                                containers.forEach((c, index) => {
                                    if (index !== containerIndex) {
                                        c.style.opacity = "1";
                                        c.style.transition = "opacity 0.5s ease-in-out";
                                    }
                                });
                                container.style.transition = 'opacity .6s ease-out';
                                container.style.opacity = '1';
                                theBtn.classList.remove('active');
                                isMoving = false;
                            }, 850);
                        });
                    });
                });
            }
            
            theCardEffect();
            
            
            theCardEffect();
                   
            function go_warp_outside() {
                let el1 = document.querySelector('#in-the-planet.goBig .the-particles');
                let el2 = document.querySelector('#in-the-planet.goBig .skill-swiper-wrapper');
                let el3 = document.getElementById('go-outside-btn-wrapper');
                warp_btn.addEventListener('click', function() {
                    // 변수 1. theButtons의 on과 theTextBoxu의 off를 제거해야함.
                    // 변수 2. swiperWrapper의 css 구조가 변경되어서 기존 작아지는 효과가 이상하게 나옴 => 해결
                    let theTextBoxu = document.getElementById('theTextBoxBetweenCodingAndDesign');
                    let theButtons = theTextBoxu.querySelectorAll('button');
                    let theMatch = document.querySelectorAll('.skill-swiper-wrapper');
                    let theBg = document.querySelector('.ifClickBgGoOff');
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
                        let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
                        theWrappers.forEach((wrapper) => {
                            let span = wrapper.querySelector('span.on');
                            let fill = wrapper.querySelector('.fill');
                
                            if (span) {
                                span.classList.remove('on');
                                span.innerText = "0%";
                            }
                
                            if (fill) {
                                fill.style.width = "0%"
                            }
                        });
                    }, 1250);
                    setTimeout(() => {
                        thePlanet.style.animation = 'floating 3s alternate ease-in-out infinite';
                    }, 1500)
                    setTimeout(() => {
                        thePlanet.style.touchAction = 'auto';
                        thePlanet.style.pointerEvents = 'auto';
                        thePlanet.style.cursor = 'pointer';
                        theButtons.forEach((button, i) => {
                            if(theTextBoxu.classList.contains('off') && theMatch[i].classList.contains('on')){
                                theTextBoxu.classList.remove('off');
                                theMatch[i].classList.remove('on');
                                theBg.classList.remove('on');
                            }
                        })
                    }, 1501)
                })
            }
            function theTextBoxes() {
                let theTextBoxu = document.getElementById('theTextBoxBetweenCodingAndDesign');
                let theButtons = theTextBoxu.querySelectorAll('button');
                let theMatch = document.querySelectorAll('.skill-swiper-wrapper');
                let theBg = document.querySelector('.ifClickBgGoOff');
                let desc_wrappers = document.querySelectorAll('.desc-wrapper');
    
                theButtons.forEach((button, i) => {
                    button.addEventListener('click', function() {
                        theTextBoxu.classList.add('off');
                        theBg.classList.add('on');
                        setTimeout(() => {
                            theMatch[i].classList.add('on');
                        }, 50);
                        setTimeout(() => {
                            letSkillValueIncrease();
                        }, 300)
                    })

                    theBg.addEventListener('click', function() {
                        let theBtn = document.getElementById('go-outside-btn-wrapper');
                        if(theTextBoxu.classList.contains('off') && theMatch[i].classList.contains('on')){
                            theTextBoxu.classList.remove('off');
                            theMatch[i].classList.remove('on');
                            theBg.classList.remove('on');
                            let theSwiperWrappers = document.querySelectorAll('.skill-swiper-wrapper');
                            theSwiperWrappers.forEach((wrapper) => {
                                if(wrapper.classList.contains('active') || wrapper.classList.contains('on')) {
                                    wrapper.classList.remove('active');
                                    wrapper.classList.remove('on');
                                }
                                let containers = wrapper.querySelectorAll('.skill-swiper-wrapper .container');
                                containers.forEach((container, i) => {
                                    container.classList.remove('active');
                                    container.classList.remove('fade-out');
                                    container.style.webkitFilter = 'blur(0)';
                                    container.style.filter = 'blur(0)';
                                    container.style.transform = `translate3D(0%, 0%, 0.1px) scale(1)`;
                                    container.style.opacity = '1';
                                    isMoving = false;
                                })
                            });
                            desc_wrappers.forEach((desc_wrapper) => {
                                desc_wrapper.classList.remove('active');
                                desc_wrapper.style.opacity = '0';
                                desc_wrapper.style.transform = 'translate(-50%, -50%) scale(.2)';
                            })
                            theBtn.classList.remove('active');
                            let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
                            theWrappers.forEach((wrapper) => {
                                let span = wrapper.querySelector('span.on');
                                let fill = wrapper.querySelector('.fill');
                    
                                if (span) {
                                    span.classList.remove('on');
                                    span.innerText = "0%";
                                }
                    
                                if (fill) {
                                    fill.style.width = '0%';
                                }
                            });
                        }
                    })
                })
            }


            planetClick();
            createParticles();
            theCardEffect();
            go_warp_outside();
            theTextBoxes();
        };

        function theProjectsSection() {
            let megaX = document.getElementById('mega-x-ui');
            let theClickBtn = megaX.querySelector('#mega-click-btn');
            let theUl = megaX.querySelector('ul');
            let theLis = theUl.querySelectorAll('li');
            let theSign = document.getElementById('the-place-sign');
            let floatDivWrappers = document.querySelectorAll('.floatDivWrapper');
            let exit_btns = document.querySelectorAll('.leftDiv_exit_btn');

            function theclickBtnClick() {
                theClickBtn.addEventListener('click', function() {
                    this.classList.add('clicked');
                    setTimeout(() => {
                        this.classList.add('off');
                    }, 1220);
                    setTimeout(() => {
                        theUl.classList.add('on');
                    }, 1530);
                    setTimeout(() => {
                        theLis[0].classList.add('on');
                    }, 2150);
                })
            }

            function theLisClick() {
                theLis.forEach((li, i) => {
                    li.addEventListener('click', function() {
                        if (this.classList.contains('on')) {
                            /*
                            theClickBtn.classList.remove('clicked');
                            theClickBtn.classList.remove('off');
                            theUl.classList.remove('on');
                            theLis.forEach((el) => {
                                el.classList.remove('on');
                            }) 초기화, 아직 쓸 떄가 아님.*/
                            theUl.classList.add('goOn');
                            theSign.classList.add('on');
                            setTimeout(() => {
                                floatDivWrappers[i].classList.add('on');
                            }, 300)
                            return; // 기존 이벤트 중단
                        }

                        theLis.forEach((el) => {
                            el.classList.remove('on');
                        })
                        this.classList.add('on');
                    })
                })
            }
            
            function exitBtnClick() {
                exit_btns.forEach((btn, i) => {
                    btn.addEventListener('click', function() {
                        floatDivWrappers[i].classList.remove('on');
                        setTimeout(() => {
                            theSign.classList.remove('on');
                            theUl.classList.remove('goOn');
                        })
                    })
                })
            }

            theclickBtnClick();
            theLisClick();
            exitBtnClick();
        }



        letBodyTakeIsReady();
        intro_parallax();
        hoverThenPlanetGoesOn();
        theProjectsSection()
    };



    vanilaJavascripts();
    
}

