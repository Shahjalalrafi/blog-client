/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:5050/api/posts/";
const API_BASE_URL = "http://localhost:5050/";

window.onload = () => {
    getPost();
}

const getPostIdParams = () => {
    const queryString = window.location.search
    const queryParams = new URLSearchParams(queryString)
    return queryParams.get('id')
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParams()
    const url = `${API_URL}${postId}`
    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.title)
        buildPost(data)
    })
}

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toDateString()
    const img = `${API_BASE_URL}${data.post_image}`

    document.getElementById('header').style.backgroundImage = `url(${img})`
    // HINT: Convert the date number to a Date string 
    document.getElementById('individual-post-title').innerText = data.title
    document.getElementById('individual-post-date').innerText = `published on ${postDate}`
    document.getElementById('individual-post-content').innerText =data.content
}

