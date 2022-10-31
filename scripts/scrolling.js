function navFilterScroll(){
    const arrowLeft = document.querySelector('#arrowLeft')

    const arrowRight = document.querySelector('#arrowRight')

    const filterList = document.querySelector('.filterList')

    arrowLeft.addEventListener('click', () => {
        filterList.scrollTo(0, 0)
        arrowRight.style = 'display: block'
        arrowLeft.style = 'display: none'
    })

    arrowRight.addEventListener('click', () => {
        filterList.scrollTo(1000, 0)
        arrowRight.style = 'display: none'
        arrowLeft.style = 'display: block'
    })
}

function goToContent(){
    const goTo = document.querySelector('#goTo')

    const navFilter = document.querySelector('.navFilter')
    goTo.addEventListener('click', () => {
        navFilter.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

function backToTop(){
    const backTo = document.querySelector('#backTo')

    const main = document.querySelector('main')
    backTo.addEventListener('click', () => {
        main.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

function backToHome(){
    const backToHome = document.querySelector('#goHome')

    backToHome.addEventListener('click', () => {
        localStorage.removeItem('@KenzieLiving:PostId')
        window.location.assign('/pages/home/index.html')
    })
}

export {navFilterScroll, goToContent, backToTop, backToHome}