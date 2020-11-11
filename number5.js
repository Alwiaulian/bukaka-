var buah = [
    {nama: "JERUK", harga: 5000, rasa: "ASAM", },
    {nama: "MANGGA", harga: 20000, rasa: "MANIS", },
    {nama: "APEL", harga: 5000, rasa: "MANIS", },
    {nama: "DURIAN", harga: 50000, rasa: "MANIS", },
    {nama: "DUKU", harga: 10000, rasa: "ASAM", },
    {nama: "NANAS", harga: 5000, rasa: "ASAM", },
];
// A.
buah.push({nama: "PISANG", harga: 5000, rasa: "MANIS"});
var sorted = buah.sort((a, b) => { 
if(a.nama < b.nama){
    return -1
}else{
    return 1
}
});
console.log(sorted);

// B
var includeK = buah.filter(item => item.nama.includes("K") == true);
console.log(includeK);

// C
var cheapSwt = buah.filter(item => item.harga < 10000 && item.rasa == "MANIS");
console.log(cheapSwt);