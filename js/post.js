function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPOst(data))


}


function displayPOst(posts){
    // console.log(posts)
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const PostDiv = document.createElement('div');
        PostDiv.classList.add('post');
        PostDiv.innerHTML = `<h4>User-${post.userId} </h4>
            <h5>Post title-${post.title} </h5>
            <p>Post-${post.body} </p>` 
        postContainer.appendChild(PostDiv);
    }
}
loadPost();
function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
}

function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}