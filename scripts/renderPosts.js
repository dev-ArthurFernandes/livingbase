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
    
    imgDiv.appendChild(img)
    li.append(imgDiv, h2, p, span)
    
    return li
}

async function storageNews(page, filter){

    let pages = page
    
    let allPosts = await getAllPosts(pages)

    const {news} = await allPosts

    let array = []

    await news.forEach(async (element) => {
        const card = await createCards(element)

        if(filter === 'Todos' || !filter){
            array.push(card)
        }else if(element.category === filter){
            array.push(card)
        }
    })

    return array
}

async function renderFeed(page, filter){

    const feed = document.querySelector('.feed')

    let pages = page

    const divObserver = document.querySelector('.divObserver')

    let array = await storageNews(pages, filter)

    array.forEach(element => feed.appendChild(element))
    console.log(array)

    divObserver.style = 'position: absolute; bottom: 0;'
    observer.observe(divObserver)
}

export default renderFeed