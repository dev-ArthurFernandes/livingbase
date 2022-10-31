import observer from "./observer.js";
import { getAllPosts } from "./request.js";

async function createCards(element){

    const {id, title, description, image} = element
        
    const li = document.createElement('li')
    li.classList = 'card'
    
    const imgDiv = document.createElement('div')
    imgDiv.id = 'image'
    
    const img = document.createElement('img')
    img.src = image
    img.alt = title
    
    const h2 = document.createElement('h2')
    h2.innerText = title
    
    const p = document.createElement('p')
    p.innerText = description
    
    const span = document.createElement('span')
    span.classList = "green access"
    span.innerText = 'Acessar conteúdo'
    
    span.addEventListener('click', () => {
        localStorage.setItem("@KenzieLiving:PostId", id)
        window.location.assign('/pages/post/index.html')
    })

    imgDiv.appendChild(img)
    li.append(imgDiv, h2, p, span)
    
    return li
}

async function storageNews(index, page, filter){

    const newsArray = await getAllPosts(page)

    const {news} = newsArray
    if(news[index]){
        
        if(!filter){
            return news[index]
        }
        if(filter === 'Todos'){
            return news[index]
        }
        if(news[index].category === filter){
            return news[index] 
        }
    }
    
}

async function moreNews(page, filter){
    
    const feedSection = document.querySelector('.feedSection')

    const load = document.createElement('div')
    load.classList = 'loadingPosts'

    load.innerHTML = `
    <div class="loading">
        <div class="rect" id="r_1"></div>
        <div class="rect" id="r_2"></div>
        <div class="rect" id="r_3"></div>
        <div class="rect" id="r_4"></div>
    </div>
    <div class="loading">
        <div class="rect" id="r_1"></div>
        <div class="rect" id="r_2"></div>
        <div class="rect" id="r_3"></div>
        <div class="rect" id="r_4"></div>
    </div>
    `
    const feed = document.createElement('div')
    feed.classList = "feed"

    feedSection.append(feed)
    feed.append(load)

    let index = 0

    let posts = []

    while(posts.length < 6){
        const post = await storageNews(index, page, filter)

        if(post){
            posts.push(post)
            index++
        }else{
            index++
        }
        if(index === 5){
            page++
            index = 0
        }
        if(page === 4){
            break
        }
   }
   feed.innerHTML = ''
   posts.forEach(async (element) => {
    const card = await createCards(element)

    feed.append(card)
   })
}

async function renderFeed(page, filter){

    const divObserver = document.querySelector(".divObserver")

    const feedSection = document.querySelector('.feedSection')

    const load = document.createElement('div')
    load.classList = 'loadingPosts'

    load.innerHTML = `
    <div class="loading">
        <div class="rect" id="r_1"></div>
        <div class="rect" id="r_2"></div>
        <div class="rect" id="r_3"></div>
        <div class="rect" id="r_4"></div>
    </div>
    <div class="loading">
        <div class="rect" id="r_1"></div>
        <div class="rect" id="r_2"></div>
        <div class="rect" id="r_3"></div>
        <div class="rect" id="r_4"></div>
    </div>
    `
    const feed = document.createElement('div')
    feed.classList = "feed"

    feedSection.append(feed)
    feed.append(load)

    let pages = page || 0

    let index = 0

    let posts = []

   while(posts.length < 6){

    const post = await storageNews(index, pages, filter)

    if(post){
        posts.push(post)
        index++
    }else{
        index++
    }
    if(index === 6){
        pages++
        index = 0
    }
    if(pages === 3){
        break
    }
   }
   feed.innerHTML = ''
   posts.forEach(async (element) => {
    const card = await createCards(element)

    feed.append(card)
   })
   if(posts.length === 6){
    observer.observe(divObserver)
   }
}

export {renderFeed, moreNews}

