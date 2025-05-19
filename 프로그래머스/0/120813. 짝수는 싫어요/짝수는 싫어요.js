function solution(n) {
    const arr = Array.from({length:Math.floor(n/2)+1}, (_,i)=>(i*2)+1).filter(num=>num<=n);
    return arr;
}