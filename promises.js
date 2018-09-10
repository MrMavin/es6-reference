const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 1000)
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 500)
});

Promise
  .all([promise1, promise2])
  .then((response) => {
    const [p1, p2] = response;

    console.log(`${p1} ${p2}`);
  })
  .catch((error) => {
    console.error(error);
  });

const todos = fetch('https://jsonplaceholder.typicode.com/todos');
const posts = fetch('https://jsonplaceholder.typicode.com/posts');
const comments = fetch('https://jsonplaceholder.typicode.com/comments');

Promise
  .all([todos, posts, comments])
  .then(r => Promise.all(r.map(r => r.json())))
  .then(([todos, posts, comments]) => {
    console.log(todos);
    console.log(posts);
    console.log(comments);
  })
  .catch((error) => console.error(error));
