function calcsalario() {

    let sbruto = document.getElementById("sbruto").value;

    if (sbruto <= 2508.50) {
        let vdesconto = 7.5 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    }
    else if(sbruto <= 2902.84)  { 
        let vdesconto = 9 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    }
    else if(sbruto <= 4354.27){
        let vdesconto = 12 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    }
    else{
        let vdesconto = 14 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
        }
}
