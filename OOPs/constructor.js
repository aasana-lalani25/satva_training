function Person(name,lastname,age){
    this.name= name || "unknown";
    this.lastname=lastname || "unknown";
    this.age=age ||25;
    this.getfullname=function(){
        return this.name+" "+this.lastname;
        }
};

var Person1=new Person("Aasana","Lalani",22);                               //using constructor to initialize values
document.getElementById("output").textContent=Person1.getfullname() +" , Age:" +Person1.age;

var Person2 =new Person("Isha","Parmar",21);
document.getElementById("output2").textContent=Person2.getfullname() +" , Age:" +Person2.age;