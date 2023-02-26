function Cars (name,model,type,color,backgroundcolor,fuel,wheel) {
    this.name = name,
    this.model = model,
    this.type = type,
    this.color = color,
    this.backgroundcolor = backgroundcolor,
    this.fuel = fuel,
    this.wheel = wheel
};

let car_1 = {
    styling: "BRABUS",
    mator: "8L",
    fastcar: true,
    _proto_: new Cars("Mercedes","G-class","SUV","Black","Red","Petrol","R22-AMG")
};

let car_2 = {
    styling: "Keyvany",
    mator: "5.5L",
    _proto_: new Cars("Mercedes","G-class","SUV","Black","Red","Petrol","R22-AMG")
};

let car_3 = {
    styling: "Maybach",
    mator: "5.5L",
    confortable: true,
    _proto_: new Cars("Mercedes","S-class","Sedan","White","Black","Petrol","R22-AMG")
};

let car_4 = {
    styling: "Urban",
    mator: "1.7L",
    styleWheel: "Watermelon",
    madeIn: "Russia",
    styleNationality: "Armenian",
    _proto_: new Cars("Lada","Niva","Super-SUV","Black or White","Black Python","SuperPetrol","R18")
};

let car_5 = {
    styling: false,
    mator: "Electro",
    doors: 5,
    gamesInCar: true,
    _proto_: new Cars("Tesla","S","Sedan","White","Black","Energy","R20-Vossen")
};


let cars = [car_1,car_2,car_3,car_4,car_5];
console.log(cars);

function bigFather () {
    this.car = "Mercedes E-190",
    this.capital = "500000 rubli and 15kg gold"
}

let grandFather = {
    car: "Vaz 24",
    house: "Apartment in centre of London.",
    _proto_: new bigFather
};

let Father = {
    car: "Tesla",
    house: "Apartment in centre of Erevan.",
    _proto_:  grandFather
};

function Son () {
    this.car = "Mercedes S",
    this.__proto__ = Father
};


function  Animal(foot=4,heand,xishnik,pet,slow,quick,kg) {
    this.foot = foot,
    this.heand = heand,
    this.xishnik = xishnik,
    this.pet = pet,
    this.slow = slow,
    this.quick = quick,
    this.kg = kg
}


let lion = {
    king : true,
    info : "if you want to know more information  click ---------> Prototype",
    __proto__  : new Animal(4,0,true,false,false,true, " ", "150 to 250 kilograms")

};

let tiger = {
    info : "if you want to know more information  click ---------> Prototype",
    __proto__  : lion
};

let football = {
    countOfplayers : 11,
    ball : true,
    goalkepper : true,
}

let manUtd = {
    worldCup : false,
    premerLeague : true,
    info : "if you want to know more information  click ---------> Prototype",
    coach : true,
    __proto__ : football
}

let arsenal = {
    championLeague : true,
    assistentManager : 1,
    info : "if you want to know more information  click ---------> Prototype",
    __proto__ : manUtd
}

let liverPool = {
    countofGoalkepper : 4,
    teamLogo : true,
    info : "if you want to know more information  click ---------> Prototype",
    __proto__ : arsenal
}

let chelsea = {
    museum : true,
    footballKit : true,
    info : "if you want to know more information  click ---------> Prototype",
    __proto__ : liverPool
}

let manCity = {
    players : "Only Boys",
    owner : "Sheikh",
    info : "if you want to know more information  click ---------> Prototype",
    teamCountry: "England",
    teamCity : "Manchester",
    __proto__ : chelsea
}



console.log(manCity);
console.log(lion,tiger);
console.log(new Son);
