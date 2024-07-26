self.onmessage = function(event) {
    const limit = event.data;
    let count = 0;

    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    self.postMessage(count);
};

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
