/* main.js => vanila javascript, 함수 모듈 총괄 */
import { initAnimations } from "./animations";
import { initComponents } from "./components";


function startWeb() {
    try {
        initComponents();

        initAnimations();


    } catch (error) {
        console.log('오류 발생 오류 발생 : ', error);
    }
}

startApp();




window.onload = function() {






    function vanilaJavascripts() {

    };


    vanilaJavascripts();
}

