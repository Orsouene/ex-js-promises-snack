//! Snack 1
function getPostTitle(id) {
  const promise = new Promise((resolve, reject) => {
    const url = `https://dummyjson.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
  return promise;
}

getPostTitle(5)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
