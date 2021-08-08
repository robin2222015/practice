// var num1 =2;
// var sum =function(){
//     var num2=3;

//     return function(){
//         return num1;
//     }

// };
// var myfunc = sum();
// console.dir(myfunc);


// function bankAccount(initbalance){
//    var balance = initbalance;
//    return function(){
//        return balance;
//    };
// }
// var account= bankAccount(100000);
// console.log(account());

// for(var a = 1; a<5;  a++){
//     document.write("Display from for loop "+"</br>");
// }
// var num = 1;
// while(num<5){
//     document.write("I am from while Loop <br/>");
//     num++;

// }
// function(){
// document.write("hello world");
// }();

// function  toFehrenheit(c){
// 	document.write((c*1.8)+32 +" Degree Fahrenhiet");
// }
// toFehrenheit(31 );

/*
name.typeof
name.search
name.length
name.ondexOf
name.lastIndexOf
name.slice(get 2 peramitar)

*/
// var name = "robin";
// document.write(name.search());
// var username =['robin','farhana','iush'];
// for (var i = 0;  i< 3; i++) {
// 	document.write(username[i]);
// }

var cityName=["Dhaka","Chitagong","khulna"];
cityName.sort();
var html="<select><option>Select City</option>"; 
for (var i = 0; i < 3; i++) {
	html= html+"<option>"+cityName[i]+"</option>"
}
html= html+"</select>";
document.write(html);

	