function solution(n) {
    const gcd = (a,b) => b===0 ? a : gcd(b,a%b);
    const divisor = (n>=6) ? gcd(n,6) : gcd(6,n);
    return  ((n*6) / divisor)/6;
}