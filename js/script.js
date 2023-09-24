"use strict";

let jason_hp = 100;
let caracteristiques = ["Nerd","Sportif","Corpulent","Baraqué","Peureux","Tiktokeur","Otaku","Gothique"];
let listeNoms = ["Natalia","Sarah","Nina","Ilan","Jarod","Edgar","Jules","Flore","Jean","Tchoupi","Momo"];
let listePersonnages = [];
let listeMorts = [];
const greenstyle= [
  'color: white','background: green','font-size: 15px'
].join(';');
const redstyle= [
  'color: white','background: purple','font-size: 15px'
].join(';');
const colordefault='';
const titleJason = "text-shadow: 1px 1px 2px black, 0 0 1em purple, 0 0 0.2em purple; font-size: 40px; font-weight: bold";
const titleWin = "text-shadow: 1px 1px 2px black, 0 0 1em green, 0 0 0.2em green; font-size: 40px; font-weight: bold";
const titleDeath = "text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; font-size: 40px; font-weight: bold";
const title = 'font-weight: bold; font-size: 20px;color: white; text-shadow: 1px 1px 0 silver , 2px 2px 0 crimson, 3px 3px 0 gray , 4px 4px 0 black ';
const bold = 'font-weight: bold; font-size:15px';



class Personnage {
    // Le constructeur initialise les attributs du personnage lors de sa création
    constructor(nom, caractere, probaMort, probaDegats, probaMortDegats) {
      this.nom = nom; // Le nom du personnage
      this.caractere = caractere; // Les points de vie du personnage
      this.probaMort = probaMort; // Probabilité d'attaquer avec succès
      this.probaDegats = probaDegats; // Probabilité de contre-attaque
      this.probaMortDegats = probaMortDegats; // Les dégâts infligés par le personnage
    }
  }
  
console.log("%cListe des héros et de leurs caractéristiques:",title);
  for(let i=0;i<5;i++){
    let rdmNom =listeNoms[Math.floor(Math.random() * listeNoms.length)];
    let rdmCara=caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    let proba1; let proba2; let proba3;
    switch (rdmCara){
      case "Nerd" :
        proba1 = 5 + Math.floor(Math.random() * 45);
        proba3 = 5 + Math.floor(Math.random() * 35);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Sportif":
        proba1 = 3 + Math.floor(Math.random() * 25);
        proba3 = 4 + Math.floor(Math.random() * 45);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Corpulent" :
        proba1 = 7 + Math.floor(Math.random() * 40);
        proba3 = 7 + Math.floor(Math.random() * 40);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Baraqué":
        proba1 = 3 + Math.floor(Math.random() * 35);
        proba3 = 3 + Math.floor(Math.random() * 35);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Peureux" :
        proba1 = 7 + Math.floor(Math.random() * 35);
        proba3 = 7 + Math.floor(Math.random() * 35);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Tiktokeur":
        proba1 = 7 + Math.floor(Math.random() * 35);
        proba3 = 5 + Math.floor(Math.random() * 35);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Otaku":
        proba1 = 5 + Math.floor(Math.random() * 45);
        proba3 = 5 + Math.floor(Math.random() * 30);
        proba2 = 100 - proba1 - proba3;
        break;
      case "Gothique":
        proba1 = 7 + Math.floor(Math.random() * 30);
        proba3 = 7 + Math.floor(Math.random() * 45);
        proba2 = 100 - proba1 - proba3;
        break;  
    }

    listePersonnages.push(new Personnage(rdmNom,rdmCara,proba1,proba2,proba3));
    console.log(`%c${listePersonnages[i].nom}`,greenstyle);
    console.log(listePersonnages[i].caractere);
    console.log(`%c${listePersonnages[i].probaMort}% %c de chance de se faire tuer.`,bold,colordefault);
    console.log(`%c${listePersonnages[i].probaDegats}% %c de chance d'infliger des dégats.`,bold,colordefault);
    console.log(`%c${listePersonnages[i].probaMortDegats}% %c de chance de se faire tuer en infligeant des dégats.`,bold,colordefault);
    console.log("-------------------------")
    listeNoms.splice(listeNoms.indexOf(rdmNom),1);
  }

while(jason_hp>0 && listePersonnages.length>0){
  let attacked = Math.floor(Math.random()* listePersonnages.length);
  let rdmProba = Math.random()*100;
  if (listePersonnages[attacked].probaMort>rdmProba){
    listeMorts.push(listePersonnages[attacked].nom);
    switch (listePersonnages[attacked].caractere){
      case "Nerd" :
        console.log(`"Non... je ne vais plus pouvoir geeker..."`);
        break;
      case "Sportif":
        console.log(`"J'ai déçu toute mon équipe..."`);
        break;
      case "Corpulent" :
        console.log(`"J'ai pas pu finir mon donut..."`);
        break;
      case "Baraqué":
        console.log(`"Mes muscles n'étaient pas assez saillants..."`);
        break;
      case "Peureux" :
        console.log(`"Ce genre de choses n'arrive qu'à moi !"`);
        break;
      case "Tiktokeur":
        console.log(`"Je n'ai pas pu dire au revoir à mes fans..."`);
        break;
      case "Otaku":
        console.log(`"Ça ne peux pas se finir comme ça... DATTEBAYO!!!"`);
        break;
      case "Gothique":
        console.log(`"Mon moment est enfin venu..."`);
        break;
    }
    console.log(`%c${listePersonnages[attacked].nom}%c le/la ${listePersonnages[attacked].caractere} a été tué(e) par %cJason.`,greenstyle,colordefault,redstyle);
    listePersonnages.splice(attacked,1);
  } else if (listePersonnages[attacked].probaMortDegats+listePersonnages[attacked].probaMort>rdmProba){
    listeMorts.push(listePersonnages[attacked].nom);
    switch (listePersonnages[attacked].caractere){
      case "Nerd" :
        console.log(`"Je n'ai pas dit mon dernier mot!..."`);
        break;
      case "Sportif":
        console.log(`"Je ne m'en irais pas sans t'avoir bien amoché!"`);
        break;
      case "Corpulent" :
        console.log(`"Tu ne t'en sortiras pas aussi facilement!"`);
        break;
      case "Baraqué":
        console.log(`"Je mets tous mes stéroîdes dans ce dernier coup!"`);
        break;
      case "Peureux" :
        console.log(`"Je prends mon courage à deux mains une dernière fois!"`);
        break;
      case "Tiktokeur":
        console.log(`"Un dernier selfie...!"`);
        break;
      case "Otaku":
        console.log(`"Mon attaque ultime... KAMEHAMEHA!!!"`);
        break;
      case "Gothique":
        console.log(`"J'ai pu lui mettre un coup de couteau dans un dernier souffle!"`);
        break;
    }

    jason_hp -= 15;
    console.log(`%c${listePersonnages[attacked].nom}%c le/la ${listePersonnages[attacked].caractere} a infligé %c15 dégats%c à %cJason%c mais a succombé à ce dernier ! %cPV Jason = ${jason_hp}`,greenstyle, colordefault,bold,colordefault,redstyle,colordefault,redstyle);
    listePersonnages.splice(attacked,1);
  } else {
    jason_hp -= 10;
    console.log(`%c${listePersonnages[attacked].nom}%c le/la ${listePersonnages[attacked].caractere} a esquivé et infligé %c10 dégats%c à %cJason%c sans se faire toucher!   %cPV Jason = ${jason_hp}`, greenstyle, colordefault,bold,colordefault, redstyle, colordefault,redstyle);
  }
  console.log("-------------------------")
};
if (jason_hp <= 0 && listePersonnages.length == 0){
  console.log("Tout le monde est mort, Jason inclus!");
  console.log(`${listeMorts.join(', ')} nous ont malheureusement quittés.`);
  console.log('%cTOUT LE MONDE EST MORT', titleDeath);
} else if (jason_hp > 0) {
  console.log(`Jason a vaincu nos 5 héros. C'est la fin de la partie.`);
  console.log(`${listeMorts.join(', ')} nous ont malheureusement quittés.`);
  console.log('%cJASON WINS', titleJason);
} else if (listePersonnages.length > 0) {
  console.log(`Nos héros sont venus à bout de Jason. C'est gagné !`);
  console.log(`${listeMorts.join(', ')} nous ont malheureusement quittés.`);
  console.log('%cVICTOIRE DES HEROS', titleWin);

}
