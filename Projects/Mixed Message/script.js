const heroNameData = {
    firstpart: ['The','Captain','Super','Wonder','Doctor','Mr.','Mrs.','Professor'],
    secondpart: ['Big','Invisible','Incredible','Rocket','Mega','Lightning','Flamethrower','Frozen'],
    thirdpart: ['King','Guy','Demon','Man','Girl','Boy','Woman','Queen']
}
const greetingsData = {
    hello: ['Wassup!','Bonjour!','Hello!','Howdy!','Konnichiwa!','Hola!','Ni hao!','Ahnyong!'],
    goodbye: ['Sayonara!','See ya!','Goodbye!','See you later!','Goodluck!','Have a nice day!','Hope you enjoy your day!','Adios!'] 
}

let sentence = '';
let heroName = '';
let hello = '';
let goodbye = '';
let random;

const randomGenerator = () => Math.floor(Math.random()*8);

const heroNameGenerator = () => {
    random = randomGenerator();
    if(random >= 5){
        heroName += heroNameData.firstpart[random] + ' ';
    }
    random = randomGenerator();
    heroName += heroNameData.secondpart[random] + ' ';
    random = randomGenerator();
    heroName += heroNameData.thirdpart[random];
}

const greetingsGenerator = () => {
    random = randomGenerator();
    hello = greetingsData.hello[random];
    goodbye = greetingsData.goodbye[random];
}

const sentenceGenerator = () => {
    heroNameGenerator();
    greetingsGenerator();
    sentence = `${hello} ${heroName} ${goodbye}`;
    console.log(sentence);
}

sentenceGenerator();
