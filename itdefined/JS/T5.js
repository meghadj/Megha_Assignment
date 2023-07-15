//Assignment1


/*function studentGrade(name,marks)

{

if (marks>=80)
{
	console.log(`The student ${name} has got distinction`)
}

else if (marks>=60)
{
	console.log(`The student ${name} has got First class`)
}

else if (marks>=50)
{
	console.log(`The student ${name} has got Second class`)
}

else if (marks>=35)
{
	console.log(`The student ${name} has got Passed`)

}

else if (marks>=0){
	console.log(`The student ${name} has failed`)
}

else {
	console.log("Enter valid marks")
}

} 

studentGrade('megha',80)
studentGrade('deepak',70) 
studentGrade('RAJ',35) 
studentGrade('Ram',20) */


//Assignment2

/*let age=prompt("Enter your age")

if(age>=18)
{
	console.log("You are eligible for voting")

}
else{
	console.log(`you need ${18-age} more years to vote`)
}*/


let marks=-68
switch(true) {
  case (marks>=80):
   console.log(`The student  has got distinction`)
    break;
  case (marks>=60):
    console.log(`The student has got First class`)
    break;
     case(marks>=50):
     	console.log(`The student has got Second class`)

      case (marks>=35):
      	console.log(`The student has got Passed`)
      	case(marks>=0):
         console.log(`The student has failed`)

  default:
    console.log("Enter valid marks")
}