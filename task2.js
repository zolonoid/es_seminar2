class Student {
    name = "";
    age = 0;
    grade = "";

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}

const student = new Student("John Doe", 16, "10th grade");
student.displayInfo();
