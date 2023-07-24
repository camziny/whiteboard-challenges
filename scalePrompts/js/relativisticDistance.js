const relativisticDistance = (c, v, t) => {
  "use strict";

  // Check that the parameters are valid.
  if (typeof c !== "number" || c <= 0) {
    throw new TypeError("The speed of light must be a positive number.");
  }
  if (typeof v !== "number" || v < 0) {
    throw new TypeError("The velocity must be a non-negative number.");
  }
  if (typeof t !== "number" || t < 0) {
    throw new TypeError("The time must be a non-negative number.");
  }

  // Calculate the relativistic distance.
  const gamma = 1 / Math.sqrt(1 - (v / c) ** 2);
  return c * t * gamma;
};

let c = 300000000; // The speed of light in meters per second.
let v = 0.9 * c; // The velocity of the object in meters per second.
let t = 10; // The time it takes to reach the object in seconds.

const result = relativisticDistance(c, v, t);

console.log(result); // 6882472016.116854
