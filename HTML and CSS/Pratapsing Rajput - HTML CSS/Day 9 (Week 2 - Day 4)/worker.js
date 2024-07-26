onmessage = function (e) {
  const limit = e.data;
  const primeCount = countPrimes(limit);
  postMessage(primeCount);
};

function countPrimes(limit) {
  let count = 0;
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
