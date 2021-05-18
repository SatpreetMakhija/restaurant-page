import { createHomepage } from './pagelayout';
import {home} from './home';
import {menu} from './menu';
import {about} from './aboutus';


init();
home();

function addNavEvents() {
    const homeBtn = document.querySelector('#Home');
    homeBtn.addEventListener('click', home);
    const menuBtn = document.querySelector('#Menu');
    menuBtn.addEventListener('click', menu);
    const aboutBtn = document.querySelector('#About');
    aboutBtn.addEventListener('click', about);

}

function init() {
    createHomepage();
    addNavEvents();
}

