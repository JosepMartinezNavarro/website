function change1(Estado, Distribuidor){
    Estado = document.getElementById(Estado);
    Distribuidor = document.getElementById(Distribuidor);
    Distribuidor.value ="";
    Distribuidor.innerHTML = "";
    if(Estado.value == "AGUASCALIENTES"){
    var optionArray = ["|","NORTE-AUTODISTRIBUIDORES CENTRO|NORTE-AUTODISTRIBUIDORES CENTRO",
                              "SUR-AUTODISTRIBUIDORES CENTRO|SUR-AUTODISTRIBUIDORES CENTRO"];
    } else if(Estado.value == "BAJA CALIFORNIA"){
    var optionArray = ["|","TIJUANA-AUTOPRODUCTOS|TIJUANA-AUTOPRODUCTOS",
                              "MEXICALI-AUTOPRODUCTOS|MEXICALI-AUTOPRODUCTOS"];                              
    } else if(Estado.value == "BAJA CALIFORNIA SUR"){
    var optionArray = ["|","LOS CABOS-NVA AUTOMOTRIZ TORO|LOS CABOS-NVA AUTOMOTRIZ TORO",
                              "LOS CABOS-NVA AUTOMOTRIZ TORO|LOS CABOS-NVA AUTOMOTRIZ TORO"];                           
    } else if(Estado.value == "CAMPECHE"){
    var optionArray = ["|","CD DEL CARMEN-PRESTIGIO MOTRIZ|CD DEL CARMEN-PRESTIGIO MOTRIZ",
                              "CAMPECHE-PRESTIGIO MOTRIZ|CAMPECHE-PRESTIGIO MOTRIZ"];   
    } else if(Estado.value == "CHIAPAS"){
    var optionArray = ["|","TUXTLA-PASTRANA DE PEDRERO|TUXTLA-PASTRANA DE PEDRERO",
                              "SAN CRISTOBAL-PASTRANA DE PEDRERO|SAN CRISTOBAL-PASTRANA DE PEDRERO"];
    } else if(Estado.value == "CHIHUAHUA"){
    var optionArray = ["|","PARRAL-ALTA MOTRIZ|PARRAL-ALTA MOTRIZ",
                               "DELICIAS-ALTA MOTRIZ|DELICIAS-ALTA MOTRIZ"];  
    } else if(Estado.value == "CD MEXICO"){
    var optionArray = ["|","CENTRAL DE AUTOPARTES|CENTRAL DE AUTOPARTES",
                                "VIADUCTO-AUTOKASA|VIADUCTO-AUTOKASA"];                                                   
  };

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    Distribuidor.options.add(newOption);
  };    
}