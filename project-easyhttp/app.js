const http = new easyHTTP();

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
  if (error) {
    console.log(error);
  } else {
    console.log(posts);
  }
});
