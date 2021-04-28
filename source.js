var vin;
var digitOne; 
var digitThree; 
var digitFour;
var digitFive;
var digitSix;
var digitSeven;
var digitEight;
var digitNine;



function cls(){
vin = ""
digitOne = ""
digitThree = ""
digitFour = ""
digitFive = ""
digitSix = ""
digitSeven = ""
digitEight = ""
digitNine = ""
document.getElementById("vinCheck").innerHTML = "";
document.getElementById("make").innerHTML = "";
document.getElementById("model").innerHTML = "";
document.getElementById("year").innerHTML = "";
document.getElementById("country").innerHTML = "";
document.getElementById("produced").innerHTML = "";
document.getElementById("type").innerHTML = "";
document.getElementById("bodyType").innerHTML = "";
document.getElementById("engine").innerHTML = "";
document.getElementById("safety").innerHTML = "";
document.getElementById("number").innerHTML = "";
document.getElementById('vinInput').value = "";
};




function runVin(){

vin = ""
digitOne = ""
digitThree = ""
digitFour = ""
digitFive = ""
digitSix = ""
digitSeven = ""
digitEight = ""
digitNine = ""
document.getElementById("vinCheck").innerHTML = "";
document.getElementById("make").innerHTML = "";
document.getElementById("model").innerHTML = "";
document.getElementById("year").innerHTML = "";
document.getElementById("country").innerHTML = "";
document.getElementById("produced").innerHTML = "";
document.getElementById("type").innerHTML = "";
document.getElementById("bodyType").innerHTML = "";
document.getElementById("engine").innerHTML = "";
document.getElementById("safety").innerHTML = "";
document.getElementById("number").innerHTML = "";


vin = document.getElementById('vinInput').value;
 
vin = vin.toUpperCase();       
vin = vin.split("");

console.log(vin);
    
if(vin[1] == "N" || vin[1] == "T" || vin[1] == "Z"){
    firstCheck()
}else{
    document.getElementById("vinCheck").innerHTML = "This is not a Toyota VIN. Please enter the VIN of a Toyota Vehicle";
};
};




function firstCheck(){


switch(vin[0]){
    case "1":
    digitOne = "USA" 
    break;
    case "2":
    digitOne = "Canada"
    break;
    case "3":
    digitOne = "Mexico" 
    break;
    case "4":
    digitOne = "USA"
    break;
    case "5":
    digitOne = "USA"
    break;
    case "6":
    digitOne = "Australia"
    break;
    case "8":
    digitOne = "Argentina"
    break;
    case "9":
    digitOne = "Brazil" 
    break;
    case "J":
    digitOne = "Japan"
    break;
    case "S":
    digitOne = "United Kingdom"
    break;
    case "M":
    digitOne = "Thailand"
    break;
    case "K":
    digitOne = "Korea"
    break;
    case "V":
    digitOne = "France"
    break;
}


document.getElementById("make").innerHTML = "Make: Toyota";
document.getElementById("country").innerHTML = "Country of Origin: " + digitOne; 
secondCheck(); 
}



function secondCheck(){

switch(vin[2]){
    case "D": case "G": case "K": case "X": case "1": case "2": case "7": case "N": 
    digitThree = "Passenger Car" 
    break;
    case "A": case "B": case "F": case "M": case "4": case"Y":
    digitThree = "Truck"
    break;
    case "E": case "L": case "3": 
    if(vin[7] == "N"){
    digitThree = "Truck"
    }else{
    digitThree = "SUV/MPV" 
    }
    break;
    case "5":
    digitThree = "Convertable"
    break;
}

document.getElementById("type").innerHTML = "Vehicle Type: " + digitThree;
thirdCheck();
}




function thirdCheck(){

switch(vin[3]){
    case "A":
    digitFour = "Two Wheel Drive, Two Door Sedan" 
    break;
    case "B":
    if(vin[7] == "K" || vin[7] == "E"){
    digitFour = "Two Wheel Drive, Four Door Sedan"
    }else if(vin[7] == "H"){
    digitFour = "Four Wheel Drive, Four Door Wagon/SUV"
    }else{
    digitFour = "Four Wheel Drive, Four Door Truck"
    }
    break;
    case "C":
    if(vin[7] == "N"){
    digitFour = "Four Wheel Drive, Four Door Truck"
    }else{
    digitFour = "Two Wheel Drive, Two Door Coupe" 
    }
    break;
    case "D":
    digitFour = "Four Wheel Drive, Four Door Truck"
    break;
    case "E":
    digitFour = "Two Wheel Drive, Four Door Truck"
    break;
    case "F":
    digitFour = "Two Wheel Drive, Two Door Coupe"
    break;
    case "G":
    digitFour = "Two Wheel Drive, Four Door Wagon/SUV"
    break;
    case "H":
    digitFour = "Four Wheel Drive, Four Door Wagon/SUV"
    break;
    case "K":
    digitFour = "Two Wheel Drive, Four Door Wagon/SUV" 
    break;
    case "L":
    digitFour = "Four Wheel Drive, Four Door Wagon/SUV -OR- Four Wheel Drive, Four Door Truck"
    break;
    case "M":
    digitFour = "Two Wheel Drive, Five Door Van"
    break;
    case "N":
    digitFour = "Two Wheel Drive, Two Door Regular Cab Truck"
    break;
    case "P":
    digitFour = "Four Wheel Drive, Two Door Regular Cab Truck"
    break;
    case "S":
    digitFour = "Four Wheel Drive, Three Door Liftback/Hatchback"
    break;
    case "T":
    digitFour = "Two Wheel Drive, Two Door Extended Cab Truck"
    break;
    case "X":
    digitFour = "Five Door SUV"
    break;
    case "W":
    digitFour = "Four Wheel Drive, Two Door Extended Cab Truck"
    break;
    case "Y":
    digitFour = "Sport Van"
    break;
    case "Z":
    digitFour = "Two Wheel Drive, Five Door Wagon"
    break;
}


document.getElementById("bodyType").innerHTML = "Body Type: " + digitFour;
forthCheck();
}



function forthCheck(){

switch(vin[4]){
    case "A":
    digitFive = "3MZ-FE" 
    break;
    case "B":
    digitFive = "1NZ-FXE -OR- 2AZ-FXE"
    break;
    case "D":
    digitFive = "2ZZ-JE" 
    break;
    case "E":
    digitFive = "2AZ-FE"
    break;
    case "F":
    digitFive = "1MZ-FE -OR- 2AR-FE"
    break;
    case "G":
    digitFive = "5S-FE"
    break;
    case "H":
    digitFive = "1AZ-FE"
    break;
    case "J":
    digitFive = "1FZ-FE" 
    break;
    case "K":
    digitFive = "2GR-FE"
    break;
    case "L":
    digitFive = "2RZ-FE"
    break;
    case "M":
    digitFive = "3RZ-FE"
    break;
    case "N":
    //Determins Tacoma or 4Runner and Year to determine engine (4cyl not tested)
    if(vin[7] == "R" && vin[2] == "E" || vin[2] == "L" || vin[2] == "3"){
    digitFive = "5VZ-FE"
    }else if(vin[7] == "N"){
    switch(vin[9]){
    case "V": case "W": case "X": case "Y": case "1": case "2": case "3": case "4":
    digitFive = "5VZ-FE"
    break;
    case "5": case "6": case "7": case "8": case "9": case "A": case "B": case "C": case "D": case "E": case "F":
    digitFive = "2ZR-FE"
    break;
    case "G": case "H": case "K": case "L": case "M": 
    digitFive = "D4S"
    break;
    }
    }else{
    digitFive="5VS-FE -OR- 2ZR-FE"
    }
    //end
    break;
    case "P":
    digitFive = "3S-FE"
    break;
    case "R":
    digitFive = "1ZZ-FE"
    break;
    case "S":
    digitFive = "1BM -OR- Electric Powertrain"
    break;
    case "T":
    digitFive = "3S-GTE"
    break;
    case "U":
    if(vin[7] == "N" && vin[9] == "5" || vin[9] == "6" || vin[9] == "7" || vin[9] == "8" || vin[9] == "9" || vin[9] == "A" || vin[9] == "B" || vin[9] == "C" || vin[9] == "D" || vin[9] == "E" || vin[9] == "F"){
    digitFive = "2ZR-FE"
    }else{
    digitFive = "1GR-FE"
    }
    break;
    case "V":
    digitFive = "1NR-FE"
    break;
    case "Y":
    digitFive = "3UR-FE"
    break;
    case "Z":
    digitFive = "D4S"
    break;
    case "4":
    digitFive = "7A-FE"
    break;
}

document.getElementById("engine").innerHTML = "Engine Code: " + digitFive;
fifthCheck();
}






function fifthCheck(){

switch(vin[6]){
    case "0":
    digitSix = "Seatbelts with Two Airbags and Side Curtain Airbags" 
    break;
    case "1":
    digitSix = "Seatbelt"
    break;
    case "2":
    digitSix = "Seatbelts with Two Airbags" 
    break;
    case "3":
    digitSix = "Seatbelts with Two Airbags"
    break;
    case "6":
    //Fixes old 4Runner, leaves other models with two options
    if(vin[7] && vin[2] == "E" || vin[2] == "L" || vin[2] == "3"){
    switch(vin[9]){
    case "V": case "W": case "X": case "Y": case "1": case "2":
    digitSix = "Seatbelts with Two Airbags"
    break;
    case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "A": case "B": case "C": case "D": case "E": case "F": case "G": case "H": case "K": case "L": case "M":
    digitSix = "Seatbelts with Two Airbags, Side Airbags, Side Curtain Sheld Airbags and Driver Knee Airbag -OR- Seatbelts with Two Airbags"
    break;
    }}else{
    digitSix = "Seatbelts with Two Airbags, Side Airbags, Side Curtain Sheld Airbags and Driver Knee Airbag -OR- Seatbelts with Two Airbags"
    }
    //end
    break;
    case "7":
    digitSix = "Seatbelts with Two Airbags and Driver Knee Airbag"
    break;
    case "8":
    digitSix = "Seatbelts with Two Airbags and Side Airbags"
    break;
    case "9":
    digitSix = "Seatbelts with Two Airbags, Side Airbags and Front Curtain Airbags" 
    break;
    case "D":
    digitSix = "Seatbelts with Two Airbags, Side Airbags, Three Row Curtain Sheild Airbags and Driver Knee Airbag"
    break;
    case "F":
    digitSix = "Seatbelts with Two Airbags, Side Airbags and Driver Knee Airbag"
    break;
}

document.getElementById("safety").innerHTML = "Safety Features: " + digitSix;
sixthCheck();
}


function sixthCheck(){

switch(vin[7]){
    case "0":
    digitSeven = "MR2 Spyder" 
    break;
    case "1":
    digitSeven = "Tundra"
    break;
    case "2":
    digitSeven = "Echo -OR- Yaris" 
    break;
    case "3":
    digitSeven = "Yaris" 
    break;
    case "4":
    digitSeven = "Scion xB -OR- xD"
    break;
    case "7":
    digitSeven = "Scion tC"
    break;
    case "A":
    digitSeven = "Highlander -OR- Sequoia -OR- Celica -OR- Supra"
    break;
    case "B":
    digitSeven = "Avalon"
    break;
    case "C":
    digitSeven = "Sienna -OR- Previa" 
    break;
    case "D":
    digitSeven = "T100"
    break;
    case "E":
    digitSeven = "Corolla -OR- Matrix"
    break;
    case "F":
    digitSeven = "FJ Cruiser"
    break;
    case "G":
    digitSeven = "Hilux"
    break;
    case "H":
    digitSeven = "Highlander"
    break;
    case "J":
    digitSeven = "Land Cruiser"
    break;
    case "K":
    digitSeven = "Camry"
    break;
    case "L":
    digitSeven = "Tercel -OR- Paseo"
    break;
    case "M":
    digitSeven = "Previa"
    break;
    case "N":
    digitSeven = "Tacoma -OR- Pre-1995 Pickup"
    break;
    case "P":
    digitSeven = "Camry Solara"
    break;
    case "R":
    if(vin[2] == "E" || vin[2] == "L" || vin[2] == "3"){
    digitSeven = "4Runner"
    }else{
    digitSeven = "Corolla"
    };
    break;
    case "T":
    digitSeven = "Celica"
    break;
    case "U":
    digitSeven = "Prius"
    break;
    case "V":
    digitSeven = "Rav4"
    break;
    case "W":
    digitSeven = "Non-Spyder MR2"
    break;
    case "X":
    digitSeven = "Cressida"
    break;
}
document.getElementById("model").innerHTML = "Model: " + digitSeven;
seventhCheck();
}




function seventhCheck(){

switch(vin[9]){
    case "V":
    digitEight = "1997" 
    break;
    case "W":
    digitEight = "1998"
    break;
    case "X":
    digitEight = "1999" 
    break;
    case "Y":
    digitEight = "2000"
    break;
    case "1":
    digitEight = "2001"
    break;
    case "2":
    digitEight = "2002"
    break;
    case "3":
    digitEight = "2003"
    break;
    case "4":
    digitEight = "2004" 
    break;
    case "5":
    digitEight = "2005"
    break;
    case "6":
    digitEight = "2006"
    break;
    case "7":
    digitEight = "2007"
    break;
    case "8":
    digitEight = "2008"
    break;
    case "9":
    digitEight = "2009"
    break;
    case "A":
    digitEight = "2010"
    break;
    case "B":
    digitEight = "2011"
    break;
    case "C":
    digitEight = "2012"
    break;
    case "D":
    digitEight = "2013"
    break;
    case "E":
    digitEight = "2014"
    break;
    case "F":
    digitEight = "2015"
    break;
    case "G":
    digitEight = "2016"
    break;
    case "H":
    digitEight = "2017"
    break;
    case "J":
    digitEight = "2018"
    break;
    case "K":
    digitEight = "2019"
    break;
    case "L":
    digitEight = "2020"
    break;
    case "M":
    digitEight = "2021"
    break;
}

document.getElementById("year").innerHTML = "Year: " + digitEight;
eighthCheck();
}





function eighthCheck(){

switch(vin[10]){
    case "0": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "K": 
    digitNine = "Japan" 
    break;
    case "A":
    digitNine = "Onnaing-Valenciennes, France"
    break;
    case "C":
    digitNine = "Cambridge, ON, CA" 
    break;
    case "E":
    digitNine = "United Kingdom"
    break;
    case "M":
    digitNine = "Baja CA, Mexico"
    break;
    case "N":
    digitNine = "Kolín, Czech Republic"
    break;
    case "R":
    digitNine = "Lafayette, IN, US"
    break;
    case "S":
    digitNine = "Princeton, IN, US" 
    break;
    case "U":
    digitNine = "Georgetown, KY, US"
    break;
    case "W":
    digitNine = "Woodstock, ON, CA"
    break;
    case "X":
    digitNine = "San Antonio, TX, US"
    break;
    case "Z":
    digitNine = "Fremont, CA, US"
    break;
}

document.getElementById("produced").innerHTML = "Assembeled in: " + digitNine;
ninthCheck();
}





function ninthCheck(){

document.getElementById("number").innerHTML = "This Vehicle is Number " + vin[11] + vin[12] + vin[13] + vin[14] + vin[15] + vin[16] + " of " + digitSeven + "s Made for " + digitEight + " Model Year";
}





