import renderFeed from "./renderPosts.js"

function setFilter(){

    const feed = document.querySelector('.feed')

    const filters = document.querySelectorAll('.category')

    let filtered = ''
    localStorage.setItem('@KenzieLiving:Filter', filtered)
    
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            feed.innerHTML = ''
            filtered = filter.id
            localStorage.setItem('@KenzieLiving:Filter', filtered)
            
            filter.classList = 'category true'
            
            filters.forEach(elem => {
                if(elem.id !== filtered){
                    elem.classList = 'category'
                }
            })
            renderFeed(0, filtered)
        })
    })
}

export default setFilter