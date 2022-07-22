import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);
// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);
// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);
// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);
// Listen for cancel click
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Get posts
function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  // Validate input
  if (title === '' || body === '') {
    ui.showAlert('Please say something!', 'alert alert-danger');
  } else {
    const data = {
      title,
      body,
    };

    // Check for ID
    if (id === '') {
      // Create Post
      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post added!', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      // Update Post
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert('Post updated!', 'alert alert-info');
          ui.changeFormState('add');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Delete post
function deletePost(event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains('delete')) {
    const id = event.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Removed!', 'alert alert-warning');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Enable edit state
function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    // Fill the form with the current post
    ui.fillForm(data);
  }
}

// Cancel edit state
function cancelEdit(e) {
  e.preventDefault();

  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}
