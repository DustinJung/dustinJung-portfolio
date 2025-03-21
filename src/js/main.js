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
            let thePlanet = document.querySelector('.the-planet');
            let inPlanet = document.querySelector('#in-the-planet');
            let warp_btn = document.getElementById('go-oustide-btn');
            let body = document.querySelector('body');
            let theSection = document.querySelector('#my-skills-section');
          
            function planetClick() {
              thePlanet.addEventListener('click', function () {
                body.classList.remove('is-ready');
          
                const sectionIndex = 2;
                const isModern = CSS.supports('height', '100lvh');
          
                // 정확한 위치로 이동 (scrollTo는 유지)
                const theTargetScroll = isModern
                  ? window.innerHeight * sectionIndex
                  : parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 * sectionIndex;
          
                window.scrollTo({
                  top: theTargetScroll,
                  behavior: 'smooth',
                });
          
                // 행성 클릭 애니메이션
                this.classList.add('on');
                setTimeout(() => {
                  thePlanet.style.touchAction = 'none';
                  this.style.pointerEvents = 'none';
                  this.style.touchAction = 'none';
                  this.style.cursor = 'none';
                }, 2200);
          
                // inPlanet 등장
                setTimeout(() => {
                  this.classList.add('nowGo');
                  inPlanet.classList.add('on');
          
                  // 💥 핵심: 현재 화면 높이로 고정
                  inPlanet.style.height = `${window.innerHeight}px`;
          
                  setTimeout(() => {
                    inPlanet.classList.add('goOn');
          
                    let theWrappers = document.querySelectorAll('.skill-gage-wrapper');
                    theWrappers.forEach((wrapper) => {
                      let span = wrapper.querySelector('span');
                      span.classList.add('on');
                    });
                  }, 50);
                }, 2400);
              });
            }
          
            planetClick();
          
            // 행성에서 나갈 때 height 초기화도 같이!
            warp_btn.addEventListener('click', function () {
              inPlanet.style.removeProperty('height');
              // 나머지 나가기 처리 네가 이미 구현해둔 대로~
            });
          }
          

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

