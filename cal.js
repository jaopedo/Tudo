function calcularDes() {
    var d1 = parseFloat(document.getElementById("d1").value);
    var d2 = parseFloat(document.getElementById("d2").value);
    var d3 = parseFloat(document.getElementById("d3").value);
    var total = d1 + d2 + d3;
    var por1 = (d1/total)*100;
    var por2 = (d2/total)*100;
    var por3 = (d3/total)*100;
    var resultado = por1, por2, por3;


    if(resultado) {
        //window.alert("O Restante dos Ganhos: " + resultado);
        window.alert("A primeira porcentagem: " + por1+"%")
        window.alert("A segunda  porcentagem: " + por2+"%")
        window.alert("A terceira porcentagem: " + por3+"%")
        
    } else{
        window.alert("Erro");
    }
    
}