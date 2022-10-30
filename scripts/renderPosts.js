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

async function storageNews(index, page, filter){

    const newsArray = await getAllPosts(page)

    const {news} = newsArray

    console.log(news)

    if(!filter){
        return news[index]
    }else if (news[index].category === filter){
        /* Quando chega na ultima pagina tem tem nem um item na lista 'news' com isso o codigo quebra, pois
        ele tenta fazer o if com o 'undefined', por tanto fazer uma logica que só passe objetos existentes... */
        return news[index]
    }
}

async function renderFeed(filter){

    const feed = document.querySelector('.feed')

    let page = 0

    let index = 0

    let posts = []

   while(posts.length < 6){
    console.log(index)
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
   }
   console.log(posts)
   posts.forEach(async (element) => {
    const card = await createCards(element)

    feed.append(card)
   })
}

export default renderFeed