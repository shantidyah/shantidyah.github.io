var kategori_barang =
[
  {
    kd_barang : "001",
    barang  : "Baju",
    stock : 200,
    harga : 150000
  },
  {
    kd_barang : '002',
    barang : "Celana",
    stock : 250,
    harga : 200000

  },
  {
    kd_barang : '003',
    barang  : "Jaket",
    stock : 150,
    harga : 250000
  }
];

function tambahstock(a) {
  var selectBox = document.getElementById(a);
  while(selectBox.options.length > 0){
    selectBox.remove(0);
  }

  for(var i = 0; i < kategori_barang.length; i++){
    var option = kategori_barang[i];
    selectBox.options.add( new Option(option.barang, option.kd_barang) );
  }
}


function stockbarang(b) {
  var table = document.getElementById(b);
  while(table.rows.length > 1){
    table.deleteRow(1);
  }
  for (var i = 0; i < kategori_barang.length; i++) {

    var row = table.insertRow(i+1);
    var a = 0;
    for(var key in kategori_barang[i]){
      var cell1 = row.insertCell(a);

      cell1.innerHTML = kategori_barang[i][key];
      a++;
    }
  }
}
function simpanstock() {
  var nabar = document.getElementById('jenisbarangmasuk').value;
  var banyakbar = document.getElementById('banyakbarang').value;
  banyakbar = parseInt(banyakbar);
  var arr = [];
  for (var i = 0; i < kategori_barang.length; i++) {
      if(nabar===kategori_barang[i].kd_barang){
        kategori_barang[i].stock += banyakbar;
      }
  }
  stockbarang('stock_tabel');
}
function totharga(a,b){
  var nama_barang = document.getElementById(a).value;
  var jml_barang = document.getElementById(b).value;
  var total = 0;


  for (var i = 0; i < kategori_barang.length; i++) {
    if(nama_barang===kategori_barang[i].kd_barang){
      total=parseInt(jml_barang)*kategori_barang[i].harga;
    }
  }
  if(isNaN(total)){
    total=0;
  }
  document.getElementById('totalharga').innerHTML = total;
}

function kembalian(a,b) {
  var total = document.getElementById(a).innerHTML;
  var bayar = document.getElementById(b).value;
  var hasil = 0;
  hasil = parseInt(bayar) - parseInt(total);
  console.log(total);
  console.log(bayar);
  document.getElementById('sisa').innerHTML = hasil;
}

function total(a,b,c) {
  var kembalian = document.getElementById('sisa').innerHTML;
  var jml = document.getElementById('jumlahbarang').value;
  var jenisbarang = document.getElementById('jenisbarang').value;
  if(parseInt(kembalian)<0){
    alert('uang tidak cukup');
    return false;
  }
  else {
    for(var i = 0; i < kategori_barang.length; i++){
      if(jenisbarang===kategori_barang[i].kd_barang){
        if(parseInt(jml)<=kategori_barang[i].stock){
          kategori_barang[i].stock -= parseInt(jml);
        }
        else {
          alert('barang tidak cukup');
          return false;
        }
      }
    }
    alert('pembelian berhasil');
  }

}
// total('sisa','jumlahbarang',jenisbarang)
function Stock(a,b) {
    stockbarang(b);
    tambahstock(a);
    var a = document.getElementById('stock').style.display = '';
    var b = document.getElementById('stock2').style.display = '';
    var c = document.getElementById('penjualan').style.display = 'none';
    var d = document.getElementById('laporan').style.display = 'none';
}
function Penjualan(a,b) {
    tambahstock(a);
    // totharga(a,b)
    var a = document.getElementById('stock').style.display = 'none';
    var b = document.getElementById('stock2').style.display = 'none';
    var c = document.getElementById('penjualan').style.display = '';
    var d = document.getElementById('laporan').style.display = '';
}
