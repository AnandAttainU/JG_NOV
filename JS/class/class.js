class Student 
{
    constructor(name, isStudying, marks){
        this.name = name;
        this.isStudying = isStudying;
        this.marks = marks;
    }
    
    getGrade(){
        if(this.isStudying){
            console.log('A');
        }
        else {
            console.log('C');
        }
    }

    getMarks(){
        return this.marks;
    }
}

let s1 = new Student("Prince", true, 85);
let s2 = new Student("Manu", false, 86);

console.log(s1.getMarks());


