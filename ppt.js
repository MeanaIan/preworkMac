var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"
var w = "win"
var l = "lost"

var resultado = function(user,cpu){
    if (user == cpu) {
        console.log("emp") 
    } else if ( op1 == op2) {
        console.log(l)
    } else if ( op1 == op3) {
        console.log(w)
    } else if ( op2 == op1) {
        console.log(w)
    } else if ( op2 == op3) {
        console.log(l)
    } else if ( op3 == op1) {
        console.log(l)
    } else {
        console.log(w)
    }
}

resultado(op1,op2)