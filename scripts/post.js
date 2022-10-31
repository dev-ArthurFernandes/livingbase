import { filterMark } from "./filter.js";
import { getPostById } from "./request.js";

async function post(id){

    const post = await getPostById(id)

    const {title, description, content, image, category} = post

    
    const postTitle         = document.querySelector("#postTitle")
    const postDescription   = document.querySelector("#postDescription")
    const postContent       = document.querySelector("#postContent")
    const postImg           = document.querySelector("#postImg")

    postTitle.innerText = title
    postDescription.innerText = description

    postImg.src = image
    postImg.alt = title
    postContent.innerText = content
    filterMark(category)
}

export default post