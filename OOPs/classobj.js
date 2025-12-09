    function Person(){
        this.name = "Unknown"; 
        this.lastname = "Unknown";
        this.getfullname= function(){                                       // //Method in a class 
            return this.name+" "+this.lastname; 
        }
    }

    var Person1 = new Person();
    Person1.name="Aasana";
    Person1.lastname="Lalani";

    //alert(Person1.name +" "+ Person1.lastname);

    //document.write(Person1.name +" "+Person1.lastname);

    document.getElementById("output").textContent= Person1.name +" "+Person1.lastname;  "\n"
    document.getElementById("output").textContent= Person1.getfullname();                   //using method of class

    var Person2= new Person();
    Person2.name="Isha";
    Person2.lastname="Parmar";

    document.getElementById("output2").textContent=Person2.name+" "+Person2.lastname;  "\n"
    document.getElementById("output2").textContent=Person2.getfullname();                    //using method of class    
