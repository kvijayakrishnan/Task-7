


                                              // Day 06 :OOPS TASK 

// 1. Class movie

class movie1{
    constructor(title, studio, rating="FG"){
        this.title;
        this.studio;
        this.rating;
    }
    Titile(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is "${this.rating}"`);
    }
}

class movieNew extends movie1{
    getPG(){
        console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
}

let movie3 = new movieNew("KGF", "drive store", "PG13");
movie3.Titile();
movie3.Studio();
movie3.Rating();
movie3.getPG();


// d) Write a piece of code that creates an instance of the class Movie with the title 
//“Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie4{
    constructor(title,studio,rating="PG"){
     this.title=title;
      this.studio=studio;
      this.rating=rating;
    }
  }
  
  let movie=new movie4('casio royale', 'eon production', 'PG13')
  console.log(movie)


// 2. Circle - Class
class Circle {
  constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
  }
  toString(radius = this.radius) {
      this.radius = radius;
      return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
  }
  circle() {
      return `color is ${this.color} and radius is ${this.radius}`;
  }
  circle(radius) {
      this.radius = radius;
      return `radius is ${this.radius}`;
  }
 
  setRadius(radius = 1.0) {
      this.radius = radius;
  }
  getRadius() {
      return `the radius by get and set is ${this.radius}`;
  }
  setColor(color = "red") {
      this.color = color;
  }
  getColor() {
      return `the color by get and set is ${this.color}`;
  }
  getArea() {
      return `the area is ${(this.radius)*(this.radius)*4}`;
  }
  getCircumference() {
      return `the circumference is ${(this.radius)+(Math.PI)}`;
  }
   circle(radius, color) {
      this.radius = radius;
      this.color = color;
      return `the radius is ${this.radius} and color is ${this.color}`;
  }
}
let cir = new Circle(6, "Green");
console.log(cir);
console.log(cir.circle(6,"red"));
console.log(cir.circle(5, "blue"));
console.log(cir.circle(4, "white"));
console.log(cir.getRadius());
cir.setColor();
console.log(cir.getColor());
console.log(cir.toString(6));
cir.setRadius();
console.log(cir.getArea());
console.log(cir.getCircumference()); 



//3. Write a “person” class to hold all the details.

class person{
    constructor(Name, FatherName, MotherName, Gender, Age, Address, MobiileNo, Email, VoterID, AadharNo){
      this.Name=Name;
      this.FatherName=FatherName;
      this.MotherName=MotherName;
      this.Gender=Gender;
      this.Age=Age;
      this.Address=Address;
      this.MobiileNo=MobiileNo;
      this.Email=Email;
      this.VoterID=VoterID;
      this.AadharNo=AadharNo;
    }
   personName(){
     return `My name is ${this.Name}`;
   }
    
     personFatherName(){
     return `My father name is ${this.FatherName}`;
   }
    
     personMotherName(){
     return `My mother name is ${this.MotherName}`;
   }
     personGender(){
     return `My gender is ${this.Gender}`;
   }
     personAge(){
     return `My age is ${this.Age}`;
   }
     personAddress(){
     return `My Address is ${this.Address}`;
   }
     personMobileNo(){
     return `My Mobile no is ${this.MobiileNo}`;
   }
     personEmail(){
     return `My Email id is ${this.Email}`;
   }
     personVoterID(){
     return `My My voter id is ${this.VoterID}`;
   }
     personAadharNo(){
     return `My Aadhaar no is ${this.AadharNo}`;
  }
  }
  
  const personobj = new person("Vijay", "Kannan", "Banu", "Male", "30", "Trichy", "1234567891", "vijay@emai.com", "kds6576", "145879632154897");
  
  console.log(personobj.personName());
  console.log(personobj.personFatherName());
  console.log(personobj.personMotherName());
  console.log(personobj.personGender());
  console.log(personobj.personAge());
  console.log(personobj.personAddress());
  console.log(personobj.personMobileNo());
  console.log(personobj.personEmail());
  console.log(personobj.personVoterID());
  console.log(personobj.personAadharNo());


//4.write a class to calculate uber price.
class Uber {
    constructor(BaseFare=15,CostPerMile=2,CostPerMinute=1,BookingFee=10,time=1,mile=2){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=time;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(this.BaseFare)+(this.BookingFee)+
        (this.CostPerMinute)+(this.time)+(this.mile)
    }
}
let bike = new Uber(10, 20);
bike.totalPrice(20,100); 
bike.totalPrice(20,20); 














































