var employee = {

    name:"John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length);
    },
    LastName: function(){
        splitname=this.name.split(" ");
        console.log(splitname);
        console.log(splitname[1]);

    }
}

alert("Name is " + employee.name + " " + "job is " + employee.job + " " + "age is " + employee.age);
employee.LastName();