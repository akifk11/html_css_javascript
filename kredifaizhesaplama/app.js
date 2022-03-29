function krediHesapla(){
    let krediTutari,krediVadesi;
    let krediAylikOdeme,krediToplamOdeme;
    krediTutari = document.getElementById("txtKredMiktari").value
    let liste = document.getElementById("vadeSecme")
    krediVadesi = liste.options[liste.selectedIndex].value
    if(krediVadesi==12){
        krediToplamOdeme = krediTutari*1.1;
    }else if(krediVadesi==24){
        krediToplamOdeme = krediTutari*1.2;
    }else if(krediVadesi==36){
        krediToplamOdeme = krediTutari*1.3;
    }else if(krediVadesi==48){
        krediToplamOdeme = krediTutari*1.4;
    }
    krediAylikOdeme = krediToplamOdeme/krediVadesi;
    document.querySelector("#vadeSonuc").innerHTML="kredi toplam borcu:"+krediToplamOdeme+"<br>"+"aylık taksit tutarı:"+krediAylikOdeme.toFixed(2); 
}