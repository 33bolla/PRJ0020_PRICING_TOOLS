// automation JS for PricingTools
// by MaoSoft() R1 20180409  Basic Routines
//              R2 
//              R3 


/*  ****Function List
    Sconto (compute discount from data input)
    MarkUp
    Listino
    ******
*/


function ScontoAcquisto(){
    
    var PA = $("#PA").val();
    var PL = $("#PL").val();
    var SCA=(1-PA/PL); //sconto riservato a Bemac dal prezzo di listino
    $("#OutputTextarea1").html("Sconto Acquisto  =  "+SCA);
};


function MarkUp(){
    //preliminary test 
    //alert("You are in MarkUp  Now! ");  
    var MU = $("#MU").val();
    var PA = $("#PA").val();
    console.log(MU);
    var PV=((PA*(1+MU)/100)); //prezzo di vendita calcolato a partire dal PA
    $("#OutputTextarea1").html("prezzo Vendita  =  "+PV);
};  

function Listino(){
    alert("You are in Listino Now! ");
    var MU = $("#MU").val();
    var PA = $("#PA").val();
    var PV=((PA*(1+MU)/100));
    var PL = (2*PA);
    var SCV = (1-(PV/PL));
    
    
    $("#OutputTextarea1").html("Prezzo Listino  =  "+PL+"Sconto Vendita  =  "+SCV);
    //PL calcolato a partire da PA, dal MarkUp impostato  e dallo sconto da praticare sul prezzo di listino assunto pari a 2 volte il PA 0---

};



/*
$("#btnMarkUp").click(function() { 
    //preliminary test 
    alert("You are in MarkUp  Now! ");  
    //var PA =100;
    var MU =30;
    // var PV = MarkUp(MU,PA);
    var PA = $("#PA").val();
    console.log(PA);
    var PL=$("#PL").val();
    console.log(PL);
    var PV = PA*(1+MU/100);
    //$("#demo").html(L2Html);
    console.log(PA);
    $("#OutputTextarea1").html("prezzo Acquisto =  "+PA+ "prezzo Vendita = "+PV+"Prezzo di Listino = "+PL);
    console.log(PV);  
    
});
*/   