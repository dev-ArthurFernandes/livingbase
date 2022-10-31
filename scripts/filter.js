import observer from "./observer.js"
import {renderFeed} from "./renderPosts.js"

function setFilter(){

    const feedSection = document.querySelector('.feedSection')

    const filters = document.querySelectorAll('.category')

    const divObserver = document.querySelector('.divObserver')
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            observer.unobserve(divObserver)
            feedSection.innerHTML = ''
            
            filter.classList = 'category true'
            
            filters.forEach(elem => {
                if(elem.id !== filter.id){
                    elem.classList = 'category'
                }
            })
            renderFeed(0, filter.id)
        })
    })
}

function filterMark(category){
    
    const filters = document.querySelectorAll('.category')

    filters.forEach(filter => {
        filter.classList = 'category'
        filter.style = '    cursor: default;'
        if(filter.id === category){
            filter.classList = 'category true'
        }
        
    })
}

export {setFilter, filterMark}