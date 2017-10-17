function add(...values) {
    let sum = 0;
    console.log('values : ',values);
    for(let v of values){
        sum += v;
        console.log(v);
    }
    return sum;
}
console.log('sum', add(2, 3, 4));