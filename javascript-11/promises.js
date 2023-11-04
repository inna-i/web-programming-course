// Promise.all([])
// returns error response or all resposes, if all success
const promise1 = Promise.reject("error 401");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise3, promise2, promise1])
  .then((values) => {
    console.log(values);
  })
  .catch(error => console.error(error));

// Promise.allSettled([])
// returns array of result and status no matter 
const promise11 = Promise.resolve(3);
const promise22 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "error 403")
);

Promise.allSettled([promise11,promise22])
  .then((result) => {
    console.log(result)
  })
  .catch(error => console.error(error));

// Promise.any()
const promise222 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise333 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
const promise444 = new Promise((resolve) => setTimeout(resolve, 1500, "super slow"));

Promise.any([promise444, promise333, promise222])
  .then(result => console.log(result))
  .catch(error => console.error(error));

