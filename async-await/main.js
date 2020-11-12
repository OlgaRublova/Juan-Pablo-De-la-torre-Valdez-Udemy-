// async function getClients() {
//     const clients = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Client list is downloaded...')
//         }, 1000);
//     });
//     const error = false;
//     if (!error) {
//         const response = await clients; //hold until client is executed
//         return response;
//     } else {
//         await Promise.reject("There was an error");
//     }
// }
//
// getClients()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));


//Async Await with a Rest API
// async function getPosts() {
//     //wait until the posts are downloaded
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     //execute them
//     const data = await response.json();
//
//     return data;
// }
//
// getPosts()
//     .then(posts => console.log(posts));