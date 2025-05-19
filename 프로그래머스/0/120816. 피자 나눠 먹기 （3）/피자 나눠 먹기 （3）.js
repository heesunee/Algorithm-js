function solution(slice, n) {
    let pizza= slice;
     while(pizza<n){
         if(pizza%n > 0 && pizza <= n){
         pizza+=slice;
     }
     }
    return pizza/slice;
}