class A {
    a;
    
    add(){
        console.log("add called");
    }
}

class B extends A {
    add(a,b){
        super.add();
        console.log(a+b);
    }
    minus(){
        super.add();
    }
}

var obj = new A();
var obj2 = new B();

obj2.add(3,5);
