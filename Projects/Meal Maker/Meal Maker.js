let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn){
    this._courses.appetizers = appetizersIn;
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mainsIn){
    this._courses.mains = mainsIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertsIn){
    this._courses.desserts = dessertsIn;
  },
  get courses(){ // return menu
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName,dishName,dishPrice){
    let dish = {
      courseName,
      dishName,
      dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let random = Math.floor(Math.random()*dishes.length);
    return dishes[random];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers'); // appetizers
    let main = this.getRandomDishFromCourse('mains'); // mains
    let dessert = this.getRandomDishFromCourse('desserts'); // desserts
    let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
    return `Your meal : ${appetizer.dishName} , ${main.dishName} , ${dessert.dishName} and total price is ${totalPrice}`;
  }
}
menu.addDishToCourse('appetizers','pancake',20); //1
menu.addDishToCourse('appetizers','cornflakes',15); //2
menu.addDishToCourse('appetizers','dumplings',13); //3
menu.addDishToCourse('mains','fried-rice',35); //4
menu.addDishToCourse('mains','pizza',45); //5
menu.addDishToCourse('mains','fried-chicken',40); //6
menu.addDishToCourse('desserts','pandan cake',28); //7
menu.addDishToCourse('desserts','jelly',12); //8
menu.addDishToCourse('desserts','bingsu',35); //9

let meal = menu.generateRandomMeal();
console.log(meal); // log all menu
//console.log(menu.courses); // log all menu
//console.log(menu.desserts); // log only specific course using 'get'
/*menu.mains = [{courseName: 'mains', dishName: 'boiled rice', price: 35}, {courseName: 'mains', dishName: 'spaghetti', price: 45}, {courseName: 'mains', dishName: 'steak', price: 60}];*/ // change course directly using 'set'