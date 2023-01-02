var oLinks = {
    "website":"https://www.anubhavtrainings.com/",
    "youtube":"https://www.youtube.com/@AnubhavOberoy"
}
function getLink(pathway){
    if(pathway === "website"){
        window.open(oLinks.website);
    } else if(pathway === "youtube"){
        window.open(oLinks.youtube);
    }
}
function onAdd(){
    var oTeam = document.getElementById("idTeam"); 
    var oCaptain = document.getElementById("idCaptain");
    var oOwner = document.getElementById("idOwner");
    var oTable = document.getElementById("idTab");
    var oRow = oTable.insertRow(oTable.rows.length);
    var oCell0 = oRow.insertCell(0);
    var oCell1 = oRow.insertCell(1);
    var oCell2 = oRow.insertCell(2);
    oCell0.innerHTML = oTeam.value;
    oCell1.innerHTML = oCaptain.value;
    oCell2.innerHTML = oOwner.value;
    reset();
}
function reset(){
    var oTeam = document.getElementById("idTeam"); 
    var oCaptain = document.getElementById("idCaptain");
    var oOwner = document.getElementById("idOwner");
    oTeam.value="";
    oCaptain.value="";
    oOwner.value="";
}