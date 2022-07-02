function change(Modelo, Version){
    Modelo = document.getElementById(Modelo);
    Version = document.getElementById(Version);
    Version.value ="";
    Version.innerHTML = "";
    if(Modelo.value == "MOBI"){
    var optionArray = ["|","MOBI TREKKING|MOBI TREKKING",
                              "MOBI LIKE|MOBI LIKE"];
    } else if(Modelo.value == "ARGO"){
    var optionArray = ["|","ARGO HGT|ARGO HGT",
                              "ARGO TREKKING AT|ARGO TREKKING AT",
                              "ARGO TREKKING MT|ARGO TREKKING MT",
                              "ARGO DRIVE PLUS|ARGO DRIVE PLUS"];                              
    } else if(Modelo.value == "PULSE"){
    var optionArray = ["|","PULSE DRIVE|PULSE DRIVE",
                              "PULSE DRIVE PLUS|PULSE DRIVE PLUS",
                              "PULSE AUDACE|PULSE AUDACE",
                              "PULSE IMPETUS|PULSE IMPETUS"];                           
    } else if(Modelo.value == "DUCATO VAN"){
    var optionArray = ["|","DUCATO VAN 15 M3|DUCATO VAN 15 M3",
                              "DUCATO VAN 11.5 M3|DUCATO VAN 11.5 M13",
                              "DUCATO VAN 9.5 M3|DUCATO VAN 9.5 M3"];                            
  };

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    Version.options.add(newOption);
  };    
}

