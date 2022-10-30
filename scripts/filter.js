import renderFeed from "./renderPosts.js"

function setFilter(){

    const feed = document.querySelector('.feed')

    const filters = document.querySelectorAll('.category')

    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            feed.innerHTML = ''
            
            filter.classList = 'category true'
            
            filters.forEach(elem => {
                if(elem.id !== filter.id){
                    elem.classList = 'category'
                }
            })
            renderFeed(filter.id)
        })
    })
}

export default setFilter