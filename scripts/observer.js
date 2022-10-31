import {moreNews} from "./renderPosts.js"

let page =  1

const observer =  new IntersectionObserver(async (entry) => {
    
    const divObserver = document.querySelector('.divObserver')
    
    observer.unobserve(divObserver)

    const filter = localStorage.getItem("@KenzieLiving:Filter")

    if(page < 3){
        if(entry[0].isIntersecting){
            await moreNews(page, filter)
            page++
        }
    }
       
   observer.observe(divObserver)
})

export default observer