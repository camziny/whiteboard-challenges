const PROMISE_STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = PROMISE_STATE.PENDING;
  #value = null;
  #thenCallback = null;
  #catchCallback = null;

  constructor(executorFunc) {
    try {
      executorFunc(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const onFulfilledWithResolve = () => {
        if (!onFulfilled) return resolve(this.#value);

        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      const onRejectedWithResolve = () => {
        if (!onRejected) return reject(this.#value);

        queueMicrotask(() => {
          try {
            const value = onRejected(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.#state === PROMISE_STATE.PENDING) {
        this.#thenCallback = onFulfilledWithResolve;
        this.#catchCallback = onRejectedWithResolve;
      } else if (this.#state === PROMISE_STATE.FULFILLED) {
        onFulfilledWithResolve();
      } else if (this.#state === PROMISE_STATE.REJECTED) {
        onRejectedWithResolve();
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  get state() {
    return this.#state;
  }

  get value() {
    return this.#value;
  }

  #resolve(value) {
    this.#value = value;
    this.#state = PROMISE_STATE.FULFILLED;
    if (this.#thenCallback) {
      this.#thenCallback();
    }
  }

  #reject(value) {
    this.#value = value;
    this.#state = PROMISE_STATE.REJECTED;
    if (this.#catchCallback) {
      this.#catchCallback();
    }
  }
}
