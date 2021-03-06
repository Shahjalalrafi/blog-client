

const API_URL = "http://localhost:5050/api/posts";
const API_BASE_URL = "http://localhost:5050/";

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
    let content = ''
    for (blogPost of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString()
        const postImage = `${API_BASE_URL}${blogPost.post_image}`
        const postUrl = `/post.html?id=${blogPost.id}`
        content += `
            <a href=${postUrl} class="post-link">
                <div class="post">
                    <div class="post-image" style='background-image: url(${postImage})'></div>
                    <div class="post-content">
                        <div class="post-date">${postDate}</div>
                        <div class="post-title"><h4>${blogPost.title}</h4></div>
                        <div class="post-text">${blogPost.content}</div>
                    </div>
                </div>
            </a>
        `
    }
    document.querySelector('.blog-post').innerHTML = content
}