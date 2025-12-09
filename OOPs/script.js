//use of enums in javascript

const color = {
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
};

console.log(color.RED);
console.log(color.GREEN); //display output for debugging purpose
color.GREEN = "darkgreen"; //modifying the enum value
console.log(color.GREEN);

//document.write("Color RED is: " + color.RED + "<br>"); //display output on web page

//Making the enum object immutable
const Days = Object.freeze({
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7,
});

console.log(Days.MONDAY); // 1
console.log(Days.SUNDAY); // 7 use only the key values

//document.write("Day MONDAY is: " + Days.MONDAY + "<br>");
