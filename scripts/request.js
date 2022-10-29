async function getAllPosts(page){
    const response = await fetch(`https://m2-api-living.herokuapp.com/news?page=${page}`, {
        method: "GET",
    })
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.log(err))
    return response
}


export {getAllPosts}