const http = new HTTPLib();

// // Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// // Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create data
const data = {
    title : 'Custom Post',
    body : 'Custom post body.'
};

// // Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});