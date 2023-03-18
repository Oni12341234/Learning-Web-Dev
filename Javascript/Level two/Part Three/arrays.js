students = ["Oni", "Lupu", "Vali"];
function add(student){

students.push(student);

}

function remove(student){
var index=roster.indexOf(student);
roster.splice(index,1)

}

function display(){

    students.forEach(console.log(students));

}

function quit(){

    return 0;
}

start=prompt("Would you like to start the roster web app? y/n")

while (start=="y"){

    choice=prompt("What would you like to do a/r/d/q");
    if (choice=='a'){
        addstudent=prompt("What student would you like to add?");
        add(addstudent);
    }
    else if (choice="r"){
        removestudent=prompt("What student would you like to remove?")
        remove(removestudent);
    }
    else if (choice="d"){
        display();
    }
    else{
        start=="n";
    }
}