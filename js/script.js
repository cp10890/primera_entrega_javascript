alert("Bienvenido al convertidor de unidades.");

function unitConverter() {
  let optionMain = prompt(
    "Elija que tipo de unidades desea convertir: \n1- Temperatura.\n2- Velocidad.\n3- Peso.\n4- Distancia.\n5- Salir de la aplicacion."
  );

  while (optionMain != "5") {
    switch (optionMain) {
      case "1":
        let optionTemp = prompt(
          "Elija la conversion a realizar:\n1- Celsius a Fahrenheit.\n2- Fahrenheit a Celsius.\n3- Celsius a Kelvin.\n4- Kelvin a Celsius.\n5- Fahrenheit a Kelvin.\n6- Kelvin a Fahrenheit.\n7- Volver al menu anterior."
        );
        while (optionTemp != "7") {
          switch (optionTemp) {
            case "1":
              let tempCtoF = parseInt(prompt("Ingrese el valor a convertir:"));
              tempCtoF = tempCtoF * (9 / 5) + 32;
              alert("El valor es igual a " + tempCtoF + " grados Fahrenheit.");
              break;
            case "2":
              let tempFtoC = parseInt(prompt("Ingrese el valor a convertir:"));
              tempFtoC = (tempFtoC - 32) * (5 / 9);
              alert("El valor es igual a " + tempFtoC + " grados Celsius.");
              break;
            case "3":
              let tempCtoK = parseInt(prompt("Ingrese el valor a convertir:"));
              tempCtoK = tempCtoK + 273.15;
              alert("El valor es igual a " + tempCtoK + " grados Kelvin.");
              break;
            case "4":
              let tempKtoC = parseInt(prompt("Ingrese el valor a convertir:"));
              tempKtoC = tempKtoC - 273.15;
              alert("El valor es igual a " + tempKtoC + " grados Celsius.");
              break;
            case "5":
              let tempFtoK = parseInt(prompt("Ingrese el valor a convertir:"));
              tempFtoK = (tempFtoK - 32) * (5 / 9) + 273.15;
              alert("El valor es igual a " + tempFtoK + " grados Kelvin.");
              break;
            case "6":
              let tempKtoF = parseInt(prompt("Ingrese el valor a convertir:"));
              tempKtoF = (tempKtoF - 273.15) * (9 / 5) + 32;
              alert("El valor es igual a " + tempKtoF + " grados Fahrenheit.");
              break;
            default:
              alert("Elija una opcion valida.");
              break;
          }
          optionTemp = prompt(
            "Elija la conversion a realizar:\n1- Celsius a Fahrenheit.\n2- Fahrenheit a Celsius.\n3- Celsius a Kelvin.\n4- Kelvin a Celsius.\n5- Fahrenheit a Kelvin.\n6- Kelvin a Fahrenheit.\n7- Volver al menu anterior."
          );
        }
        break;
      case "2":
        let optionVel = prompt(
          "Elija la conversion a realizar:\n1- km/h a MPH.\n2- MPH a km/h.\n3- Volver al menu anterior."
        );
        while (optionVel != "3") {
          switch (optionVel) {
            case "1":
              let velKMHtoMPH = parseInt(
                prompt("Ingrese el valor a convertir:")
              );
              velKMHtoMPH = velKMHtoMPH / 1.609;
              alert("El valor es igual a " + velKMHtoMPH + " MPH");
              break;
            case "2":
              let velMPHtoKMH = parseInt(
                prompt("Ingrese el valor a convertir:")
              );
              velMPHtoKMH = velMPHtoKMH * 1.609;
              alert("El valor es igual a " + velMPHtoKMH + " km/h.");
              break;
            default:
              alert("Elija una opcion valida.");
              break;
          }
          optionVel = prompt(
            "Elija la conversion a realizar:\n1- km/h a MPH.\n2- MPH a km/h.\n3- Volver al menu anterior."
          );
        }
        break;
      case "3":
        let optionWeight = prompt(
          "Elija la conversion a realizar:\n1- Kilogramos a libras.\n2- Libras a kilogramos.\n3- Volver al menu anterior."
        );
        while (optionWeight != "3") {
          switch (optionWeight) {
            case "1":
              let kgToLbs = parseInt(prompt("Ingrese el valor a convertir:"));
              kgToLbs = kgToLbs * 2.205;
              alert("El valor es igual a " + kgToLbs + " libras.");
              break;
            case "2":
              let lbsToKg = parseInt(prompt("Ingrese el valor a convertir:"));
              lbsToKg = lbsToKg / 2.205;
              alert("El valor es igual a " + lbsToKg + " kilogramos.");
              break;
            default:
              alert("Elija una opcion valida.");
              break;
          }
          optionWeight = prompt(
            "Elija la conversion a realizar:\n1- Kilogramos a libras.\n2- Libras a kilogramos.\n3- Volver al menu anterior."
          );
        }
        break;
      case "4":
        let optionDist = prompt(
          "Elija la conversion a realizar:\n1- Kilometros a millas.\n2- Millas a kilometros.\n3- Volver al menu anterior."
        );
        while (optionDist != 3) {
          switch (optionDist) {
            case "1":
              let kmToMile = parseInt(prompt("Ingrese el valor a convertir:"));
              kmToMile = kmToMile / 1.609;
              alert("El valor es igual a " + kmToMile + " millas.");
              break;
            case "2":
              let mileToKm = parseInt(prompt("Ingrese el valor a convertir:"));
              mileToKm = mileToKm * 1.609;
              alert("El valor es igual a " + mileToKm + " kilometros.");
              break;
            default:
              alert("Elija una opcion valida.");
              break;
          }
          optionDist = prompt(
            "Elija la conversion a realizar:\n1- Kilometros a millas.\n2- Millas a kilometros.\n3- Volver al menu anterior."
          );
        }
        break;
      default:
        alert("Elija una opcion valida.");
        break;
    }
    optionMain = prompt(
      "Elija que tipo de unidades desea convertir: \n1- Temperatura.\n2- Velocidad.\n3- Peso.\n4- Distancia.\n5- Salir de la aplicacion."
    );
  }
}

unitConverter();

alert("Gracias por usar nuestra aplicacion.");
