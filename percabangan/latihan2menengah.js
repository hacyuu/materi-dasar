// soal 1

// let X = Number ( prompt ("masukan X","") ) ;
// let y = Number ( prompt ("masukan y","") ) ;

// if (X > y){
//     alert(`yang terbesar adalah ${X}`);
// }else{
//     alert(`yang terbesar adalah ${y}`);
// }

// soal 2 

// let a = Number ( prompt ("masukan a","") ) ;
// let b= Number ( prompt ("masukan b","") ) ;
// let c= Number ( prompt ("masukan c","") ) ;

// let d = b**2 - (4*(a*c))

// if(d > 0){
//     alert(`d = ${d}`)
// }else if(d == 0){
//     alert(`d = sama dengan ${d}`)
// }else{
//     alert(`d = imaginer kurang dari ${d}`)
// }

//soal 3

// let UTS = Number(prompt("masukan nilai UTS"));
// let UAS = Number(prompt("masukan nilai UAS"));
// let Tugas = Number(prompt("masukan nilai Tugas"));

// let average = (UTS + UAS + Tugas) / 3;

// if(average >= 80 && average <= 100) {
//     return 'A';
// }else if(average >= 70 && average < 80) {
//     return 'B';
// }else if(average >= 50 && average < 70) {
//     return 'C';
// }else if(average >= 40 && average < 50) {
//     return 'D';
// }else{
//     return 'E';
    
// }


//soal  4

// let x = Number(prompt("masukan angka"));
// let y = Number(prompt("masukan angka"));
// let z = Number(prompt("masukan angka"));

// if(x != y && x != z){
    
//     if(x > y && x > z){
//         alert(`bilangan yang lebih besar adalah ${x}`)
//     }else if(y > x && y > z){
//         alert(`bilangan yang lebih besar adalah ${y}`)
//     }else if(z > x && z > y){
//         alert(`bilangan yang lebih besar adalah ${z}`)
//     }
// }  else {
//     alert("salah, bilangan harus berbeda")
// }

//soal no 5
// let x = Number(prompt("masukan angka"));
// let y = Number(prompt("masukan angka"));

// if(x < 0 && y < 0){
//     return 'kuadran III';
// }else if(x > 0 && y > 0){
//     return 'kuadran I';

// }else if (x < 0 && y > 0){
//     return 'kuadran II';
// }else if(x > 0 && y < 0){
//     return 'kuadran IV';
// }else{
//     return 'salah';
// }

// soal no 6
let tanggal = Number(prompt("masukan tanggal"));
let bulan = Number(prompt("masukan bulan"));
let hari = 0

if(bulan == 2) {
    hari = 31 + tanggal
} else if(bulan == 3) {
    hari =31 + 28 + tanggal
}else if(bulan == 4 ){
    hari = 31 + 28 + 31 + tanggal

}else if (bulan == 5 ){
    hari = 31 + 28 + 31 + 30 + tanggal
}else if (bulan == 6 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + tanggal
}else if (bulan == 7 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal
}else if (bulan == 8 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 +30 +tanggal
}else if (bulan == 9 ){
    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
}else if (bulan == 10 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + tanggal
}else if (bulan == 11 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
}else if (bulan == 12 ){
   hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 +tanggal
}else {
    alert('eror')
}

alert(hari)



