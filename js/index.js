

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: "GET",
    })
    .then(res => res.json())
    .then(data => buildPosts(data))
}

const buildPosts = (blogPosts) => {
    console.log(blogPosts)
}