const Person={
    name: 'matt'
    age:50
    email:'mm@gmail.com'
}
console.log(Person.name+" "+Person.age+" "+Person.email)
//adding object destructure
const{name,age,email}=Person
console.log(name+" "+age+" "+email)