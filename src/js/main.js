/* main.js => vanila javascript, 함수 모듈 총괄 */
import { initAnimations } from "./animations.js";
import { initComponents } from "./components.js";


function startWeb() {
    try {
        initComponents();

        initAnimations();


    } catch (error) {
        console.log('오류 발생 오류 발생 : ', error);
    }
}

startWeb();




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
        }

        
        intro_parallax();
    };


    vanilaJavascripts();
}

