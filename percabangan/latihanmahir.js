let jam_masuk = Number(prompt("masukan jam masuk1"));
let jam_keluar = Number(prompt("masukan jam keluar"));

if(jam_masuk > 12 || jam_keluar > 12){
    alert("waktu kerja anda melebihi batas");
}else if (jam_keluar - jam_masuk || jam_masuk - jam_keluar !== 0){
    alert ("waktu kerja anda adalah " + (jam_keluar - jam_masuk || jam_masuk - jam_keluar)+ "jam");
}


