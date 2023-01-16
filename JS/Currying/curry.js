function abc(){
    var a = 100;
    function xyz(){
        var c = 10;
        pqr = () => {
            console.log(b);
            var b = 40;
            return 0;
        }
        console.log(a);
        return pqr;
    }
    return xyz;
}

p = abc()()();

console.log(p);