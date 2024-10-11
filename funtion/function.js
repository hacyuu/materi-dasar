//luassegitiga          
// let alas = Number(prompt("masukan alas"));
// let tinggi = Number(prompt("masukan tinggi"));  

// function luasSegitiga(a,t){
//     let luas = a*t/2;
//     alert(luas);
// }

// luasSegitiga(alas, tinggi)

//keliling lingkaran
// let jari = Number(prompt("masukan jari-jari"));

// function luasLingkaran(r){
//     let luas = 2*3.14*r;
//     alert(luas);
// }

// luasLingkaran(jari)

//bilangan prima

let bilangan = Number(prompt("masukan angka"));

fungsiPrima(bilangan);

function fungsiPrima(a){ 
    let prima = true;   
    for(let i = 2; i < a; i++){
        if(a % i == 0){
            prima = false;
            break;
        }
    }
    if(prima){
        alert(`${bilangan} bilangan prima`);
    }else{
        alert(`${bilangan} bukan bilangan prima`);
    }
}
