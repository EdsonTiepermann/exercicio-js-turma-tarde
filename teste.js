let n = [1,2,4,6,8,5,33,4,6,8]

function teste(a, b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    } else{
        0
    }
}

n.sort(teste);
console.log(n.lenght);