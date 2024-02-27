function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayEmail(data))
}

function displayEmail(data){
    const ul = document.getElementById('user-email');
    for(const user of data){
        console.log(user.email)
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li)
    }

}

function numberList(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(rs => rs.json())
    .then(data => displayNumber(data))

function displayNumber(data){
        const ul =document.getElementById('user-number');
        for(const user of data){
            const li = document.createElement('li');
            li.innerText = user.phone;
            ul.appendChild(li);
        }}
}

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