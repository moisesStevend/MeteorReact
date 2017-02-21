function BookClass(autor,anyo){
  this.autor=autor;
  this.anyo=anyo;
  this.addPrecio=addPrecio;
}

function addPrecio(precio){
  this.precio=precio;
  return ("el precio es: "+this.precio.toString());
}

var myBook=new BookClass("morir o vivir",1996);
p_actual=myBook.addPrecio(15)

console.log(p_actual)
console.log(myBook.precio)

try{
  console.log(s+2);
}catch(e){
  console.log("error ocurrido: "+e.description)
}
