function submit() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let occu = document.getElementById("occupation").value;
    let country = document.getElementById("country").value;
    console.log("First Name" + ": " + fname,
                '\n',"Last Name" + ": " + lname,
                '\n',"Email" + ": " + email,
                '\n',"Occupation" + ": " + occu,
                '\n',"Country" + ": " + country)
}

const poundToKg = (pound) => {
    return pound * 0.453592
}
console.log(poundToKg(3))

const inchesToCentimeters = (inches) => {
    return inches * 2.54
}
console.log(inchesToCentimeters(3))

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}
console.log(fahrenheitToCelsius(3))

const feetToMeters = (feet) => {
    return feet / 3.281
}
console.log(feetToMeters(3))