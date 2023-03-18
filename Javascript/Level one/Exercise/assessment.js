var FirstName=prompt("What is your first name?");
var LastName=prompt("What is your last name?");
var Age=prompt("What is your age?");
var Height=prompt("What is your height? (in cm)");
var PetName=prompt("What is your pet's name?");



console.log(PetName[-1])
if (FirstName[0] === LastName[0] && Height>170 && PetName[PetName.length-1] === "y" && Age > 20 && Age < 30){
    
    console.log("Hi Comrade! Thank\'s for showing up")
}
alert("Thank you for the information")