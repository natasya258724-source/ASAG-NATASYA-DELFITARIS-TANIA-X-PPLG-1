
    function sendToWhatsApp(){
      let nama  = document.getElementById("nama").value;
      let menuPesanan  = document.getElementById("menuPesanan").value;
      let jumlah = document.getElementById("jumlah").value;
      let alamat = document.getElementById("alamat").value;

      let nomor = "6285720104862";

      let pesan = `Halo La Crème Bakery

        Nama : ${nama}
        Menu : ${menuPesanan}
        Jumlah : ${jumlah}
        Alamat : ${alamat}`;

      let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

      window.open(url, '_blank');
    }