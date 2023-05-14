export function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
}
export function getUser(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => data)
}