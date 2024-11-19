// SYNTAX

//1. koi bhi code hmain abhi nh chalana bad main chalana ha jb hm usy call krain. toh hm us ko function main rkh dety hen

function sum(){
 console.log("noreen")
}
//Calling Function
sum()

//func ko hmain call krna prhta ha ....

// 2. koi aasa code bar bar reuse krna ha...
function suum (){
console.log("noreen")
}
suum()
suum()
suum()
suum()
suum()

//3. jb hm chahty hen ksi code ko reuse krain lkn woh hr bar dif val de
function Age(para12:string) {
    console.log(para12)
}
Age("7")
Age("4")
Age("5")
Age("6")


function Sum(number1:number,number2:number){
        console.log(number1+number2)

}     
        Sum(5,4)


        
function newFunc(name1:string, name2:string){
            console.log(name1,name2)
}

newFunc("Moattar","Ansari")



function study (classes:string){
    console.log(`I study in class${classes}`)
}

study("9 th")
study("10 th")
study("11 th")
study("12 th")
study("13 th")
study("14 th")
study("15 th")


function funcName (){
    let name1 = "moattar";
    return name1
}
let me = funcName

console.log(me())