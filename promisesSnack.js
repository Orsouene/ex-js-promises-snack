// //! Snack 1
// function getPostTitle(id) {
//   const promise = new Promise((resolve, reject) => {
//     const url = `https://dummyjson.com/posts/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then(resolve)
//        .then((data) => resolve(data.title))
//       .catch(reject);
//   });
//   return promise;
// }
// getPostTitle(5)
//   .then((data) => console.log("Titolo : ", data.title))
//    .then((res) => console.log("Il titolo è : ", res))
//   .catch((error) => console.log(error));

// *  BONUS
// //? get entire post
// function getPost(id) {
//   const promise = new Promise((resolve, reject) => {
//     const url = `https://dummyjson.com/posts/${id}`;
//     // const urlUser = ;
//     fetch(url)
//       .then((res) => res.json())
//       .then((post) =>
//         fetch(`https://dummyjson.com/users/${post.userId}`)
//           .then((res) => res.json())
//           .then((user) => resolve({ ...post, User: user }))
//       )
//       .catch(reject);
//   });
//   return promise;
// }

// getPost(4)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//! snack -2

// function lanciaDado() {
//   const promise = new Promise((resolve, reject) => {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     let incastrato = Math.random() < 0.2;
//     console.log("lanciamento del Dado ...");
//     setTimeout(() => {
//       if (incastrato) {
//         reject(" Il dado si è incastrato !! ");
//       } else {
//         resolve("Il tuo numero è  " + rand);
//       }
//     }, 3000);
//   });
//   return promise;
// }
// lanciaDado()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// function creaLanciaDado() {
//   let resultato = 0;
//   console.log("prima dell assengazione", resultato);
//   return function () {
//     let rand = Math.floor(Math.random() * 6 + 1);
//     let incastrato = Math.random() < 0.2;
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (incastrato) {
//           reject("il Dado se incastrato");
//         } else {
//           if (resultato === rand) {
//             console.log("incredibile !!!");
//           }
//           resultato = rand;
//           resolve("il tuo numero è " + rand);
//           console.log("dopo lassegnazione ", resultato);
//         }
//       }, 3000);
//     });

//     return promise;
//   };
// }
// const dadoResult = creaLanciaDado();
// dadoResult()
//   .then((res) => {
//     console.log(res);
//     dadoResult()
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
