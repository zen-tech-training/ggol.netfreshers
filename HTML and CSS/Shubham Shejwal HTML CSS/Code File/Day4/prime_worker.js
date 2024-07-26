// prime_worker.js

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Listen for messages from the main thread
self.onmessage = function(event) {
    const limit = event.data;
    let primeCount = 0;

    // Calculate the number of prime numbers up to the limit
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    // Send the result back to the main thread
    self.postMessage(primeCount);
};