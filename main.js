alert("Buyerda sonlar yg'indisi hisoblanadi ")

let a = prompt("Son kiritishingizni so'raymiz:");

a = String(a)
let b = 0;
let i = 0;


while(i < a.length){

  b += Number(a[i])
  i++
}
document.write("Siz yozgan sonnig yig'indisi: "+b+ " ga teng");