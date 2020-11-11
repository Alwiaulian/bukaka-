var str = "AKU SUKA MAKAN NASI PADANG"; 
var spt = [...str.split(' '), ...str.split(' ').reverse()];
var array = []; 
spt.map((item, index) => {
    if(index == 5){
       array.push(item)
    }else{
        array.push((array[index - 1] + " " + item).replace('undefined ', ''));
    }
}); 
array;