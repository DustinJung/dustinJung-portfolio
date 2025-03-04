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

    };


    vanilaJavascripts();
}

