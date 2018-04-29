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
  },
  {
    kd_barang : '004',
    barang  : "Sepatu",
    stock : 170,
    harga : 500000}
];
var banyak_barang = {'001':0,'002':0,'003':0,'004':0};


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

function banyakpembelian(a,b,c){
    var nama_barang = document.getElementById(a).value;
    var jml_barang = document.getElementById(b).value;
    var table = document.getElementById(c);
    var totalharga = document.getElementById('totalharga').innerHTML;
    totalharga = parseInt(totalharga);
    jml_barang = parseInt(jml_barang);
    var value = 0;
      for(var key in banyak_barang){
        if(nama_barang===key){
          banyak_barang[key] += jml_barang;
        }
      }
      var row = table.insertRow(value+1);
      var total = 0;
      for(var j = 0; j < kategori_barang.length; j++){
        if(nama_barang===kategori_barang[j].kd_barang){
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          cell1.innerHTML = kategori_barang[j].kd_barang;
          cell2.innerHTML = kategori_barang[j].barang;
          cell3.innerHTML = jml_barang;
          total=jml_barang*kategori_barang[j].harga;
          cell4.innerHTML = total;
        }

      }
      total += totalharga;
      // console.log(total);
      document.getElementById('totalharga').innerHTML = total;
      console.log(banyak_barang);
}



function kembalian(a,b) {
  var total = document.getElementById(a).innerHTML;
  var bayar = document.getElementById(b).value;
  var hasil = 0;
  hasil = parseInt(bayar) - parseInt(total);
  document.getElementById('sisa').innerHTML = hasil;
}

function total(a,b,c,d) {
  var kembalian = document.getElementById('sisa').innerHTML;
  var jml = document.getElementById('jumlahbarang').value;
  var jenisbarang = document.getElementById('jenisbarang').value;
  var table = document.getElementById('tabel_pembelian');
  ifkembalian ==''||parseInt(kembalian)<0){
    alert('uang tidak cukup');
    return false;
  }
  else {
    for(var i = 0; i < kategori_barang.length; i++){
      for (var key in banyak_barang) {
        if(key==kategori_barang[i].kd_barang){
          if(banyak_barang[key]<=kategori_barang[i].stock){
            kategori_barang[i].stock -= banyak_barang[key];
          }
          else {
                alert('barang tidak cukup');
                return false;
          }
        }

      }
    }
    alert('pembelian berhasil');
  }
}
// total('sisa','jumlahbarang',jenisbarang,tabel_pembelian)
function home(){
  var a = document.getElementById('stock').style.display = 'none';
  var b = document.getElementById('stock2').style.display = 'none';
  var c = document.getElementById('penjualan').style.display = 'none';
  var d = document.getElementById('home').style.display = '';
}
function Stock(a,b) {
    stockbarang(b);
    tambahstock(a);
    var a = document.getElementById('stock').style.display = '';
    var b = document.getElementById('stock2').style.display = '';
    var c = document.getElementById('penjualan').style.display = 'none';
    var d = document.getElementById('home').style.display = 'none';

}
function Penjualan(a,b) {
    tambahstock(a);
    // totharga(a,b)
    var a = document.getElementById('stock').style.display = 'none';
    var b = document.getElementById('stock2').style.display = 'none';
    var c = document.getElementById('penjualan').style.display = '';
    var d = document.getElementById('home').style.display = 'none';
}
