class Employee{
    constructor(){
        this.empName='shubham'
        this.id=123
    }
    // constructor(id,name)
    //     this.empName=name
    //     this.id=id
    // }
    displayInfo(){
        console.log(this.id+ " "+this.empName)
    }
}
let emp=new Employee();
emp.displayInfo();
let em=new Employee(238294,'divya')
em.displayInfo();