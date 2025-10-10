
// AND
let age=18;
let haveaLincecs=true;
if(age>=18 && haveaLincecs)
{
    console.log("you can drive")
}
else{
    console.log(" you can not drive")
}


// OR
let isStudent=true;
let isLoyaltyMember=false;
if( isStudent || isLoyaltyMember
)
{
    console.log ("you can eligible for discount")
}else{
    console.log(" sorry no discount avalable")
}

    
// not
let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("Please log in to access this feature");
} else {
  console.log("Welcome! You are logged in");
}

// while

let a=0
while( a<=10){
    console.log(a)
    a++
}

// for
const tab = 9;
for( let j = 1; j<=10; j++){
  let resul=tab*j;
    console.log("9 x ", j," = ", resul);
}


// do while
const table = 9;
let i=1;
do{
    let result= table*i;
    console.log("9 x", i ," = ", result);
    i++;
}while(i<=10);
