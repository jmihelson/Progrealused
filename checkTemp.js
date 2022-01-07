

// Kodutöö
// 0-20 liiga külm      -1
// 21-40 paras           0
// 40-60 liiga kuum     1
// checkTemp(temp)

// Faili nimi checkTemp.js
// Githubi ülesse



function checkTemp(a){
    if (a<21){
        console.log("liiga külm")
    return -1
}
    else if (a>40){
        console.log("liiga kuum")
    return 1
    }
    else{
        console.log("paras")
    return 0
    }
}

checkTemp(30)
