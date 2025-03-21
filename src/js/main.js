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

        function letBodyTakeIsReady() {
            setTimeout(() => {
                document.querySelector('body').classList.add('is-ready');
            }, 5200)
        };
        function hoverThenPlanetGoesOn() {
            const thePlanet = document.querySelector('.the-planet');
            const inPlanet = document.querySelector('#in-the-planet');
            const warp_btn = document.getElementById('go-oustide-btn');
            const body = document.body;
            const theSection = document.querySelector('#my-skills-section');
            const sectionIndex = 2;
          
            function getScrollTarget() {
              const isModern = CSS.supports('height', '100lvh');
              return isModern
                ? inPlanet.getBoundingClientRect().top + window.scrollY
                : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex;
            }
          
            function planetClick() {
              thePlanet.addEventListener('click', function () {
                body.classList.remove('is-ready');
          
                // inPlanet의 위치 기준으로 정확하게 이동
                window.scrollTo({
                  top: getScrollTarget(),
                  behavior: 'smooth'
                });
          
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
          
                  // 현재 뷰포트 기준으로 정확하게 height 고정
                  inPlanet.style.height = `${window.innerHeight}px`;
          
                  setTimeout(() => {
                    inPlanet.classList.add('goOn');
                    document.querySelectorAll('.skill-gage-wrapper').forEach(wrapper => {
                      const span = wrapper.querySelector('span');
                      span.classList.add('on');
                    });
                  }, 50);
                }, 2400);
              });
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
            
                        // 마우스 호버 시 카드 효과
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
                        
                        
                        
            
                        // close 버튼 클릭 시 초기화
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
            let chuemBtn = document.querySelector('.letsGoChuem');
            let theClickBtn = megaX.querySelector('#mega-click-btn');
            let theUl = megaX.querySelector('ul');
            let theLis = theUl.querySelectorAll('li');
            let theSign = document.getElementById('the-place-sign');
            let floatDivWrappers = document.querySelectorAll('.floatDivWrapper');
            let exit_btns = document.querySelectorAll('.leftDiv_exit_btn');
            let more_info_btns = document.querySelectorAll('.leftDiv_moreinfo_btn');
            let info_div = document.querySelectorAll('.moreinfo_wrapper');
            let info_exit_btns = document.querySelectorAll('.info_exit_btn');
            let theSection = document.getElementById('my-projects-section');
            let theTargetScroll;

            function theclickBtnClick() {
                theClickBtn.addEventListener('click', function() {
                    const sectionIndex = 3;
                    const isModernBrowser = CSS.supports('height', '100lvh');
                    
                    const theTargetScroll = isModernBrowser
                        ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                        : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                    
                    window.scrollTo({
                        top: theTargetScroll,
                        behavior: 'smooth',
                    });
                    

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
                    setTimeout(() => {
                        chuemBtn.classList.add('on');
                    }, 2300);
                })
            }

            function theLisClick() {
                theLis.forEach((li, i) => {
                    li.addEventListener('click', function() {
                        const sectionIndex = 3;
                        const isModernBrowser = CSS.supports('height', '100lvh');
                        
                        const theTargetScroll = isModernBrowser
                            ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                            : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                        
                        window.scrollTo({
                            top: theTargetScroll,
                            behavior: 'smooth',
                        });
                        if (this.classList.contains('on')) {
                            theUl.classList.add('goOn');
                            theSign.classList.add('on');
                            chuemBtn.classList.remove('on');
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
                        const sectionIndex = 3;
                        const isModernBrowser = CSS.supports('height', '100lvh');
                        
                        const theTargetScroll = isModernBrowser
                            ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                            : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                        
                        window.scrollTo({
                            top: theTargetScroll,
                            behavior: 'smooth',
                        });
                        chuemBtn.classList.add('on');
                        floatDivWrappers[i].classList.remove('on');
                        setTimeout(() => {
                            theSign.classList.remove('on');
                            theUl.classList.remove('goOn');
                        })
                    })
                })
            }

            function moreInfoBtnClick() {
                more_info_btns.forEach((info_btn, i) => {
                    info_btn.addEventListener('click', function() {
                        const sectionIndex = 3;
                        const isModernBrowser = CSS.supports('height', '100lvh');
                        
                        const theTargetScroll = isModernBrowser
                            ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                            : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                        
                        window.scrollTo({
                            top: theTargetScroll,
                            behavior: 'smooth',
                        });
                        floatDivWrappers[i].classList.remove('on');
                        setTimeout(() => {
                            info_div[i].classList.add('on');
                        }, 200);
                    })
                })
            }

            function infoExitClick() {
                
                info_exit_btns.forEach((btn, i) => {
                    btn.addEventListener('click', function() {
                        const sectionIndex = 3;
                        const isModernBrowser = CSS.supports('height', '100lvh');
                        
                        const theTargetScroll = isModernBrowser
                            ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                            : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                        
                        window.scrollTo({
                            top: theTargetScroll,
                            behavior: 'smooth',
                        });
                        info_div[i].classList.remove('on');
                        setTimeout(() => {
                            floatDivWrappers[i].classList.add('on');
                            info_div.forEach((div, i) => {
                                div.querySelectorAll(".sub-dt").forEach((dt, index) => {
                                    dt.classList.remove('on');
                                    let angles = document.querySelectorAll('.rotate-angle');
                                    let angle = dt.querySelector('.rotate-angle');
                                    document.querySelectorAll(".sub-dd").forEach(dd => {
                                        let angles = document.querySelectorAll('.rotate-angle');
                                        angles.forEach((theAngle, i) => {
                                            if(theAngle.classList.contains('down')) {
                                                theAngle.classList.remove('down');
                                            }
                                        })
                                        if(dd.classList.contains('open')) {
                                            dd.classList.remove('open'); // 모든 dd 삭제
                                        }
                                    });
                                });
                            });

                        }, 200);
                    })
                })
            }

            function dldtddArcodian() {
                info_div.forEach((div, i) => {
                    div.querySelectorAll(".sub-dt").forEach((dt, index) => {
                        let angles = document.querySelectorAll('.rotate-angle');
                        let angle = dt.querySelector('.rotate-angle');
                        dt.addEventListener("click", function () {
                            if(dt.classList.contains('on')) {
                                dt.classList.remove('on');
                                document.querySelectorAll('.sub-dd').forEach(dd => {
                                    if(dd.classList.contains('open')) {
                                        dd.classList.remove('open'); // 모든 dd 삭제
                                    }
                                    angles.forEach((theAngle, i) => {
                                        if(theAngle.classList.contains('down')) {
                                            theAngle.classList.remove('down');
                                        }
                                    })
                                })

                                return;
                            }
                            dt.classList.add('on');
                            let targetDd = document.querySelectorAll(`.index${index}Dd`);

                            
                            //if문으로 이미 open 있는걸 또 누르면, 그냥 접기만 하려는거로 판단하고 return 활용해야함
                        
                            // 현재 열린 다른 dd 닫기
                            document.querySelectorAll(".sub-dd").forEach(dd => {
                                angles.forEach((theAngle, i) => {
                                    if(theAngle.classList.contains('down')) {
                                        theAngle.classList.remove('down');
                                    }
                                })
                                if(dd.classList.contains('open')) {
                                    dd.classList.remove('open'); // 모든 dd 삭제
                                }
                            });
                            
                            // 클릭한 dt의 dd만 토글
                            targetDd.forEach(dd => dd.classList.toggle("open"));
                            angle.classList.toggle('down'); // 클릭한 dd open

                            
                        });
                    });
                })
            }

            function letsGoChogiSangtae() {
                chuemBtn.addEventListener('click', function() {
                    theClickBtn.classList.remove('clicked');
                    theClickBtn.classList.remove('off');
                    theUl.classList.remove('on');
                    theLis.forEach((el) => {
                        el.classList.remove('on');
                    });
                    this.classList.remove('on');
                })
            }


            theclickBtnClick();
            theLisClick();
            exitBtnClick();
            moreInfoBtnClick();
            infoExitClick();
            dldtddArcodian();
            letsGoChogiSangtae();
        }
        function okTheToStudyIHaveToDo() {
            const buttons = document.querySelectorAll(".why-li");
            const contentWrapper = document.querySelector(".thats-the-reason-wrapper");
            const contents = document.querySelectorAll(".thats-the-reason-div");
            let theTargetScroll;
        
            buttons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    const sectionIndex = 2;
                    const isModernBrowser = CSS.supports('height', '100lvh');
                    
                    const theTargetScroll = isModernBrowser
                        ? window.innerHeight * sectionIndex // 최신 브라우저 → 100lvh 사용
                        : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex; // 구형 브라우저 → --vh 사용
                    
                    window.scrollTo({
                        top: theTargetScroll,
                        behavior: 'smooth',
                    });
                    buttons.forEach((buttonz, i) => {
                        if(buttonz.classList.contains('on')) {
                            buttonz.classList.remove('on');
                        }
                    })
                    button.classList.add('on');
                    // 부모 요소 내에서의 상대적 위치를 계산
                    const targetScroll = contents[index].offsetLeft - contentWrapper.offsetLeft;
                    
                    contentWrapper.scrollTo({
                        left: targetScroll,
                        behavior: "smooth" // 부드러운 스크롤 효과
                    });
                });
            });
        }
        function createStars() {
            const starsContainer = document.createElement('div');
            starsContainer.className = 'stars';
        
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.setProperty('--twinkle-duration', `${1 + Math.random() * 3}s`);
                starsContainer.appendChild(star);
            }
        
            const footer = document.getElementById("sticky-footer"); 
            footer.appendChild(starsContainer); 
        }
        function formBtnFunction() {
            let theBtn = document.getElementById("submit-btn");
            let emailInput = document.getElementById("email");
            let messageInput = document.getElementById("message");
            let form = document.getElementById("contact-form");
        
            form.addEventListener("submit", function (e) {
                e.preventDefault(); // 1. html 기본 폼 제출을 막는다 => Formspree에서 필수,
        
                theBtn.disabled = true;
                theBtn.classList.add('disabled');
                emailInput.disabled = true;
                messageInput.disabled = true; // 중복 제출 방지
        
                // Formspree API로 JSON 데이터 만들기
                let formData = {
                    email: emailInput.value,
                    message: messageInput.value,
                };
        
                fetch(form.action, { //fetch()는 JavaScript에서 서버와 데이터를 주고받을 때 사용하는 함수, 웹사이트에서 서버로 요청을 보내고, 서버에서 응답을 받아오는 역할
                    method: "POST", //form.action의 method를 가져오고, 
                    headers: {
                        "Content-Type": "application/json", //formspree에서 필수, 보낼 데이터가 json이라는 걸 알려줌
                        "Accept": "application/json", // formspree에서 필수, 받을 데이터를 json으로 보내달라고 요쳥하는 것.
                    },
                    body: JSON.stringify(formData), // formData는 자바스크립트 객체임. 그러나 서버는 JSON 문자열이 필요해서, formData를 JSON.stringify로 변환한 것. method가 post고 우리가 데이터를 보내는 거기 때문에, body: 가 필수적이다.
                    // 만약 여기서 body가 없으면, 서버는 요청은 확인하지만, 뭘 보내는 지 인식하지 못함.
                })
                .then(response => { // response는 서버에서 오는 응답 객체, 이 응답 객체에는 응답 상태, 응답 본문(JSON 데이터), 헤더 정보 등이 들어 있음.
                    if (response.ok) { // fetch API에서 제공하는 기본 속성, respons.ok는 서버 응답이 성공했는지(true/false)를 확인하는 속성.
                        // 즉, 성공적으로 적용되었을 경우, 
                        setTimeout(function () {
                            form.classList.add("is-submitted"); 
                            setTimeout(function () {
                                // 입력값 초기화
                                emailInput.value = "";
                                messageInput.value = "";
        
                                // Placeholder 원래대로 복구
                                emailInput.placeholder = "Your email";
                                messageInput.placeholder = "Let's connect! Send me a message.";
        
                                // 입력 필드 & 버튼 다시 활성화
                                emailInput.disabled = false;
                                messageInput.disabled = false;
                                theBtn.disabled = false;
                                theBtn.classList.remove('disabled');
        
                                form.classList.remove("is-submitted");
                            }, 6000);
                        }, 1000);
                    } else { // 서버가 '응답을 보냈지만 실패한 경우, 예시로 오류코드 400, 401, 500'
                        alert("전송에 실패했습니다. 다시 시도해주세요.");
                        emailInput.disabled = false;
                        messageInput.disabled = false;
                        theBtn.disabled = false;
                    }
                })
                .catch(error => { // 이쪽 에러는 네트워크 쪽 오류일 확률이 높음, 인터넷 끊김, 서버 다운, fetch()오류
                    alert("에러가 발생했습니다. 네트워크를 확인해주세요.");
                    emailInput.disabled = false;
                    messageInput.disabled = false;
                    theBtn.disabled = false;
                });
            });
        }
function navModal() {
    let navBtn = document.querySelector('.navigation');
    let theNav = document.getElementById('nav-menu-modal');
    let ul = theNav.querySelector('#theNavUl');
    let lis = ul.querySelectorAll('li');
    let body = document.querySelector('body');
    let exitBtn = document.querySelector('.nav_exit_btn');

    let theSections = [
        document.getElementById('intro-section'),
        document.getElementById('introduce-myself'),
        document.getElementById('my-skills-section'),
        document.getElementById('my-projects-section'),
        document.getElementById('to-study-section'),
        document.getElementById('okay-ill-be-wating-contact-section'),
        document.getElementById('sticky-footer')
    ];

    navBtn.addEventListener('click', function () {
        theNav.classList.add('on');
    });

    exitBtn.addEventListener('click', function () {
        theNav.classList.remove('on');
    });

    lis.forEach((li, i) => {
        li.addEventListener('click', function () {
            theNav.classList.remove('on');
    
            let targetScroll;
    
            if (i === lis.length - 1) {
                // 마지막 li (푸터로 이동)
                const pageHeight = document.documentElement.scrollHeight;
                const stickyFooterHeight = document.getElementById('sticky-footer').offsetHeight;
                targetScroll = pageHeight - stickyFooterHeight;
            } else {
                // 최신 브라우저(100lvh 지원) vs 구형 브라우저(--vh 사용) 구분
                const isModernBrowser = CSS.supports('height', '100lvh');
    
                targetScroll = isModernBrowser
                    ? window.innerHeight * i // 최신 브라우저 → 100lvh 사용
                    : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * i; // 구형 브라우저 → --vh 사용
            }
    
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
        });
    });
    
}

        function disableNavigationTabindex() {
            let rightDivs = document.querySelectorAll('.rightDiv');
            let floatDivs = document.querySelectorAll('.floatDivWrapper');
            
            rightDivs.forEach((div, i) => {
                div.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
                    button.tabIndex = -1;
                });

                floatDivs.forEach((floatDiv, i) => {
                    if(floatDiv.classList.contains('on')) {
                        floatDiv.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(button => {
                            button.tabIndex = 0;
                        });
                    }
                })                
            })

        }
        
        
        


        letBodyTakeIsReady();
        hoverThenPlanetGoesOn();
        theProjectsSection();
        okTheToStudyIHaveToDo();
        createStars();
        formBtnFunction();
        navModal();
        disableNavigationTabindex();
    };



    vanilaJavascripts();
    
}

