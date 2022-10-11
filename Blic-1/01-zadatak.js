function jedanKljuc(arr) {
    var polje = [];
    for (let el of arr){
        let len = Object.keys(el).length;
        if (len == 1){
            polje.push(el);
        }
    }
    return polje;
}

var arr = [{1: "a",},{1: "c",2: "2",},{ 2: "c",},];
console.log(jedanKljuc(arr));