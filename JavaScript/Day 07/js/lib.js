function checkPrime(num) {
    // num == "prime" ? true : false 
    if (isNaN(num) == false) {
        var isPrime = true;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    } else {
        console.error("The input must be a number");
        return null;
    }

}