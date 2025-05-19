function solution(n) {
    let slice = 6;
    
    while(true){
        if(slice%n === 0){
            break;
        }
        
        slice+=6;
    }
    return slice/6;
}