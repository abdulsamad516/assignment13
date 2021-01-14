//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++changing case++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//====================================================================Q1================================================================
// var a = prompt("enter anything","your answer");
// var upper = a.toUpperCase();
// document.write(upper);

//======================================================================Q2==============================================================
// function titleCase(samad) {
//     var sentence = samad.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//  document.write(sentence.join(" "));
//  return sentence;
//  }
//  titleCase("hello my name is samad whats your name");



//+++++++++++++++++++++++++++++++++++++++++++++++++Strings: measuring length and extracting parts++++++++++++++++++++++++++++++++++
//==============================================================Q1===========================================================
// var mob = prompt('enter your fav mob','your fav mob is');
// document.write('my fav mob is: ',mob,'<br>length :',mob.length);


//=============================================================Q2============================================================
// var a = prompt('enter name','name is: ');
// var b = a.slice(-1);
// document.write(b);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Strings: finding segments+++++++++++++++++++++++++++++++++++++++++++++++
//============================================================Q1====================================================================
// var a = 'pakistani';
// var indexnum = a.indexOf('n');
// document.write(indexnum);


//===============================================================Q2=================================================================
// var names = prompt('enter your username');
// if (names.match(/[\@\.\,\!]/)===null){
//         alert('hello '+names)
// }else{
//         alert('enter valid username')
// }


//===============================================================Q3==================================================================
// let str = "the quick brown fox jumps over the lazy dog",
//     split = str.split(" "),
//     obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }
// console.log(obj);





//++++++++++++++++++++++++++++++++++++++++++++++++Strings: finding a character at a location+++++++++++++++++++++++++++++++++++++++
//===============================================================Q1=============================================================
//  var a = "pakistani";
//  document.write(a.charAt(3));



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Strings: replacing characters+++++++++++++++++++++++++++++++++++++++++
//=================================================================Q1=======================================================
  //  var text = "hyderabad hydera hyderhy hyderubad"
   // var  indexnum = text.indexOf('hyder');
   // var firsttext = text.slice(0,indexnum)
   // var replacingtext = 'islam';
   // var third = text.slice(indexnum+5)
   // document.write(firsttext+replacingtext+third);


//================================================================Q2==============================================================
//    var para = "Ali and Sami are best friends. They play cricket and football toghether";
// var para1 = para.replaceAll("and","&");
// document.write(para1);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Rounding numbers++++++++++++++++++++++++++++++++++++++++++++++++++++
//========================================================Q1=============================================================
// B
// var a = Math.round(prompt('enternum'));
// document.write(a)
// C
// var a = Math.floor(prompt('enternum'));
// document.write(a)
// D
// var a = Math.ceil(prompt('enternum'));
// document.write(a)


//=======================================================Q2============================================================
// B
// var a = Math.round(prompt('enter nagative number'));
// document.write(a)
// C
// var a = Math.floor(prompt('enter negative number'));
// document.write(a)
// D
// var a = Math.ceil(prompt('enter negative number'));
// document.write(a)


//+++++++++++++++++++++++++++++++++++++++++++++Generating random numbers++++++++++++++++++++++++++++++++++++++++++++++++++
//===================================================Q1===================================================================
// var num = Math.ceil(Math.random() * 6);
// document.write(num);
// document.write("first dice<br>")
// var num1 = Math.ceil(Math.random() * 6);
// document.write(num1);
// document.write("second dice<br>")


//===================================================Q2====================================================================
// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br>Head")
// } else if(floor === 1)
// {
//     document.write("1 <br>Tails")
// }



//==============================================================Q3==============================================================
// const num = Math.ceil(Math.random() * 10); 
// console.log(num); 
// const gnum = prompt('Guess the number between 1 and 10 inclusive'); 
// if (gnum == num) console.log('Matched'); 
// else console.log('Not matched, the number was '+gnum); 


//++++++++++++++++++++++++++++++++++++++++Converting strings to integers and decimals++++++++++++++++++
//==============================================Q1==================================================
// var a = prompt('enter your weight');
// var b = parseInt(a)
// document.write(b+"kgs")


//+++++++++++++++++++++++++++++++++++++++++++++++++++++Converting strings to numbers, numbers to strings++++++++++++++++++++++++++++
//==========================================================Q1==============================================================
// var a = "472";
// var num = Number(a);
// document.write(num);


//===========================================================Q2===============================================================
// var number = 35.36;
// document.write("result: " , number.toString().replace("." , ""))



//+++++++++++++++++++++++++++++++++++++++++++++++++Controlling the length of decimals+++++++++++++++++++++++++++++
//===============================================Q1==============================================================
// var percent = 30/45*100
// document.write("<br/>" + percent)
// var fix = percent.toFixed(2)
// document.write("<br/>" + fix)
