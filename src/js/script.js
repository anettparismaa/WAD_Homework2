//https://www.javascripttutorial.net/javascript-fetch-api/
/**
 * function that fetches posts from endpoint
 * @returns 
 */
async function fetchPosts(){
    try {
        //let promise = await fetch('https://api.npoint.io/b2488b205f84c767cd84');
        let promise = await fetch('posts.json');
        if (!promise.ok) {
            throw new Error('Failed to fetch posts: ${promise.status}');
        }
        return await promise.json();
    } catch(error) {
        console.log(error);
    }
}

async function listsPosts() {
    let data = await fetchPosts();
    let html = '';
    data.Posts.forEach(post => {
        let htmlSegment = `<div class="article">
            <img src="${post.img}"/>
            <h4>${post.date}</h4>
            <p>${post.body}</p>
            </div>`;
        html += htmlSegment;
    })
    const container = document.getElementById('posts');
    container.innerHTML = html;
}
listsPosts();

