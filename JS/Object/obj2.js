obj1 = {
    a:10,
    b:20
}
obj2 = obj1;

obj2.b = 200;
console.log(obj1.b, obj2.b);