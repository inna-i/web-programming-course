// Promise.all( [] )
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise3, promise2, promise1])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.error(err));

// Promise.allSettled( [] )
const promise11 = Promise.resolve(3);
const promise22 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "error 403")
);
const promises = [promise11, promise22];

Promise.allSettled(promises).then((results) =>
  results.forEach((result, index) =>
    console.log("allSettled " + index + " ", result)
  )
);

// Promise.any()
const promise222 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise333 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promisesAny = [promise222, promise333];

Promise.any(promisesAny).then((value) => console.log(value));
