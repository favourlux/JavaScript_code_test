function factorialize(num) {
    let n = [];
    let m = 1;
    for (let i =1; i<=num; i++) {
        n.push(i);
    } 
    for (let j = 0; j < n.length; j++) {
        m *= n[j];
    }
    return m;
}

console.log(factorialize(5));