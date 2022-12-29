const date = new Date();
const month = date.getMonth();


const months = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector(".date h4").innerHTML =  months[5];
