var reverse = function(x) {
    let neg = x < 0;
    let reversed = 0;
    
    if (neg) {
        x *= -1
    }
    
    while(x > 0) {
        console.log(reversed*10, x%10,'=',(reversed*10)+  (x%10))    
        reversed = (reversed * 10) + (x % 10)    
        x = Math.floor(x/10);
    }
    
    if (reversed > (2 ** 31 - 1)) {
        return 0 
    }   
    return neg ? (reversed * -1) : reversed    
};
console.log(reverse(123))
