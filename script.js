
//Exercise #3.1
const calculate = function(transation, interest, fee ){
    return( transation * interest ) + fee
}
console.log(calculate(300,0.001,3));

//Exercise #3.2 part 1
const greeting = function(name1, name2, name3){
    return(`Welcome ${name1}, ${name2}, ${name3}.`)
}
console.log(greeting("saft", "Aon", "modtanod"));

//Exercise #3.2 part 2
const age = (presentYear, birthYear)=> {
    return(presentYear- birthYear )
}
console.log(age(2024, 1994));

//Exercise #3.2 part 3
const person =(name1, age1, name2, age2, name3, age3)=>{
    return (`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
}
console.log(person("Aon", 25, "Lek", 52, "saft", 25));


//challenge Yourself

const score = (scoreStudent) =>{
    if (scoreStudent === 11){
        console.log("Perfect");
    }
    else if (scoreStudent > 8){
        console.log("Excellent");
    }
    else if (scoreStudent >= 5){
        console.log("Pass");
    }
    else {
        console.log("fail");
    }
}
score(11)