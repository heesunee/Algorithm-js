

function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1*denom2;
    const numer = denom1*numer2 + denom2*numer1;
    
    const gcd = (a,b) => b ===0 ? a : gcd(b,a%b);
    const divisor = gcd(numer,denom);
    
    return [numer/divisor, denom/divisor];
 
}