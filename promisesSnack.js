// //! Snack 1
// function getPostTitle(id) {
//   const promise = new Promise((resolve, reject) => {
//     const url = `https://dummyjson.com/posts/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then(resolve)
//       .catch(reject);
//   });
//   return promise;
// }
// getPostTitle(5)
//   .then((data) => console.log(data.title))
//   .catch((error) => console.log(error));

// *  BONUS
//? get entire post
function getPost(id) {
  const promise1 = new Promise((resolve, reject) => {
    const url = `https://dummyjson.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
  return promise1;
}

//? get User
function user(id) {
  const urlUser = `https://dummyjson.com/users/${id}`;
  const promise2 = new Promise((resolve, reject) => {
    fetch(urlUser)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
  return promise2;
}

getPost(5)
  .then((data) => {
    return user(data.id).then((Userdata) =>
      console.log({ ...data, the_User: Userdata })
    );
  })
  .catch((error) => console.log(error));
