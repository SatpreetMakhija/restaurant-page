import { createHomepage } from './pagelayout';
import {home} from './home';
import {menu} from './menu';

init();


function addNavEvents() {
    const homeBtn = document.querySelector('#Home');
    homeBtn.addEventListener('click', home);
    const menuBtn = document.querySelector('#Menu');
    menuBtn.addEventListener('click', menu);
}

function init() {
    createHomepage();
    addNavEvents();
}

