import renderFeed from "./renderPosts.js"

const feed = document.querySelector('.feed')

let page =  1

const observer =  new IntersectionObserver(async (entry) => {
    console.log(entry)
    const filter = localStorage.getItem("@KenzieLiving:Filter")

    if(page < 4){
        if(entry[0].isIntersecting){
            await renderFeed(page, filter)
            page++
        }
    }
    if(page === 4){
        page =  1
    }
})

export default observer