function resto() {
    // 1
    let jenis = prompt("pilih jenis menu : \n makanan / minuman")

    let menu;
    let harga;

    // 2
    if (jenis === "makanan") {
        menu = prompt("pilih makanan : \n nasi goreng (5000)  \n mie goreng (10000) ")
        if (menu === "nasi goreng") {
            harga = 5000
        }else if (menu === "mie goreng") {
            harga = 10000   
        }else{
            alert("anda belum memilih menu yang tersedia")
        }

        // 3
    }else if (jenis === "minuman") {
        menu = prompt("pilih minuman : \n es teh (5000) \n juice (10000)")
        if (menu === "es teh") {
            harga = 5000
        }else if (menu === "juice") {
            harga = 10000
        }else{
            alert("anda belum memilih menu yang tersedia")
        }

    }else{
        alert("anda belum memilih jenis menu")
    }

    // 4
    let uangPembeli = parseInt(prompt("masukan jumlah uang anda"))

    // 5uangPembeli - harga
    alert("anda memesan menu " + menu)
    
    // 6
    if (uangPembeli >= harga) {
        let kembalian = uangPembeli - harga
        alert("anda telah berhasil membayar, dan kembalian anda : " + kembalian)
    }else {
        alert("uang anda kurang")
    }

    // 7
    alert("terima kasih anda telah memesan")

    // 8, 9
    let konfirmasi = confirm("apakah ada pesanan lain")
    if (konfirmasi === true) {
        resto()
    }else{
        alert("terima kasih telah memesan \n pesanan anda akan segera di proses")
    }
}

resto()