//import { Agent } from "node:http"

// export class ClassandConstructor {
//     name: string
//     age: number

//     //create constructor
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }

//     //create method
//     displayStudent() {
//         console.log(`Name is ${this.name} and Age is ${this.age}`)
//     }



// }
// const stddetails = new ClassandConstructor('Dheeraj', 25)
// stddetails.displayStudent()

// export class ClassandConstructor {
//     public name: string
//     private salary: number
//     public department: string

//     constructor(EmpName: string, Empsalary: number, Empdepartment: string) {
//         this.name = EmpName
//         this.salary = Empsalary
//         this.department = Empdepartment
//     }

//     empInfo() {
//         console.log(`name is ${this.name} , salary is ${this.salary}, department is ${this.department}`)
//     }
// }

// const Empdetails = new ClassandConstructor('Prema', 500000, 'Police')
// Empdetails.empInfo()

export class ClassandConstructor {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    login() {
        console.log(`Logging in with username : ${this.username}`)
    }
}
const logininfo = new ClassandConstructor('Madhuri', 'Madjas@1234')
logininfo.login()