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
        let date = new Date(post.date)
        let htmlSegment = `<div class="article">
            <img src="${post.img}"/>
            <h4>${date.toLocaleString()}</h4>
            <p>${post.body}</p>
            </div>`;
        html += htmlSegment;
    })
    const container = document.getElementById('posts');
    container.innerHTML = html;
}
listsPosts();

function showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
/**
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('userButton');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});
 
window.onclick = function(event) {
    if (!event.target.matches(".dropdown-content")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/
