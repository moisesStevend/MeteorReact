var a=10,b=20;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

result=(a>b)? true : false
for(var i=0;i<10;i++){
  console.log("la Data es: "+(i+2).toString());
}

var text1="Como te llamas"
var i;
for(i in text1){
  console.log(text1[i])
}
console.log(text1+text1.length)
//sleep(2000)
console.log(result);
console.log(typeof(result))
console.log(new Date())
console.log(new Date().getTime())
