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
            let inPlanet = document.querySelector('.in-the-planet')

            thePlanet.addEventListener('mouseenter', function() {
                clearTimeout(timeout);
                theTextBox.classList.add('on');
            })

            thePlanet.addEventListener('mouseleave', function() {
                timeout = setTimeout(() => {
                    theTextBox.classList.remove('on');
                }, 150);
            })

            thePlanet.addEventListener('click', function() {
                this.classList.add('on');
                setTimeout(() => {
                    this.classList.add('nowGo')
                    inPlanet.classList.add('on')
                },3700);
                setTimeout(() => {
                    theTextBox.style = `display: none`;
                    this.style = `touch-action: none; cursor: auto;`;
                }, 3500)
            })

        }


        letBodyTakeIsReady();
        intro_parallax();
        hoverThenPlanetGoesOn();
    };



    vanilaJavascripts();
    
}

