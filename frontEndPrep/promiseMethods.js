Promise.myRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = (promises) => {
  let rejectedCount = 0;
  return new Promise((resolve, reject) =>
    promises.forEach((promise) =>
      promise
        .then(resolve)
        .catch(
          () =>
            ++rejectedCount === promises.length &&
            reject("all promises rejected")
        )
    )
  );
};

Promise.myAll = (promises) => {
  let resolvedCount = 0;
  let resolvedValues = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) =>
      promise
        .then((value) => {
          resolvedValues[i] = value;
          ++resolvedCount === promises.length && resolve(resolvedValues);
        })
        .catch(reject)
    );
  });
};

Promise.myAllSettled = (promises) => {
  let settledCount = 0;
  let resolutions = [];

  return new Promise((resolve) =>
    promises.forEach((promise, i) =>
      promise
        .then((value) => (resolutions[i] = { status: "fulfilled", value }))
        .catch((error) => (resolutions[i] = { status: "rejected", error }))
        .finally(
          () => ++settledCount === promises.length && resolve(resolutions)
        )
    )
  );
};
