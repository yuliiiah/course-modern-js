const posts = [
  { title: 'Post One', body: 'This is post one.' },
  { title: 'Post Two', body: 'This is post two.' },
];

// function createPost() {
//   setTimeout((post) => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = '';

//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post Three', body: 'This is post three.' });

// getPosts();

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = '';

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three.' })
  .then(getPosts)
  .catch(function () {
    console.log('Something went wrong...');
  });
