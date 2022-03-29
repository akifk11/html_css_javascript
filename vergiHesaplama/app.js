function yillar(){

    let tarih=new Date();
    let yil= tarih.getFullYear();
    for(let i=yil;i>=1950;i--){
        var secenek=document.createElement("option");
        document.getElementById("aracModeli").options.add(secenek);
        secenek.value=i;
        secenek.text=i;
    }
}



function vergiHesapla(){

    let aracTipi;
    let vergiMiktari;
    let gucSecimi;
    let aracyili;
    let i;
    for(i=0;i<document.getElementById("aracTipi").length;i++){
        if(document.getElementById("aracTipi").options[i].selected){
            aracTipi=document.getElementById("aracTipi").options[i].value;
        }
    }
  
    if(aracTipi=="motorsiklet"){
        vergiMiktari=100;
    }else if(aracTipi="otomobil"){
        vergiMiktari=200;
    }
    for(i=0;i<document.getElementsByName("motorGucu").length;i++)
    {
        if(document.getElementsByName("motorGucu")[i].checked)
        {
            gucSecimi=document.getElementsByName("motorGucu")[i].value;
        }
        console.log(gucSecimi)
    }
    if(gucSecimi=="1000cc-1600cc"){
        vergiMiktari+=50
    }else  if(gucSecimi=="1601cc-2000cc"){
        vergiMiktari+=100
    }else if(gucSecimi=="2001cc"){
        vergiMiktari+=150 
    }
    for(i=0;i<document.getElementById("aracModeli");i++){
        if(document.getElementById("aracModeli").options[i].selected){
           aracyili=document.getElementById("aracModeli").options[i].value;

        }
        console.log(aracyili)
    }
    if(aracyili<2005){
        vergiMiktari= vergiMiktari-25;
    }
    document.getElementById("sonuc").innerHTML="Ödenecek vergi turarı:"+vergiMiktari;
}