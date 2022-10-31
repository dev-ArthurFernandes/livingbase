import observer from '../../scripts/observer.js';
import { backToTop, goToContent, navFilterScroll } from '../../scripts/scrolling.js';
import {setFilter} from './../../scripts/filter.js';
import {renderFeed} from './../../scripts/renderPosts.js';

async function loadPage(){
    localStorage.clear()
    const divObserver = document.querySelector('.divObserver')

    setFilter()
    navFilterScroll()
    goToContent()
    backToTop()
    await renderFeed()
    observer.observe(divObserver)
}

loadPage()