import { filterMark } from "../../scripts/filter.js";
import post from "../../scripts/post.js";
import { backToHome, backToTop, navFilterScroll } from "../../scripts/scrolling.js";


async function loadPage(){
    const postId = localStorage.getItem("@KenzieLiving:PostId")

    backToTop()
    backToHome()
    navFilterScroll()
    post(postId)
}

loadPage()