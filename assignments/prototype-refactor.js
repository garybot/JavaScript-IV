
class GameObject {
	constructor(attributes) {
	  this.createdAt = attributes.createdAt;
	  this.name = attributes.name;
	  this.dimensions = attributes.dimensions;
	}
	destroy() {
	  return `${this.name} was removed from the game`;	
	}
}

class CharacterStats extends GameObject {
	constructor(attributes) {
		super(attributes);
	  this.healthPoints = attributes.healthPoints;
	  this.maxHP = attributes.maxHP;
	}
	takeDamage(dmg = 1) {
	  this.healthPoints -= dmg;
	  if (this.healthPoints <= 0) {
	    console.log(`${this.name} took ${dmg} damage.`);
	    return this.destroy();
	  }
	  return `${this.name} took ${dmg} damage.\n${this.name} has ${this.healthPoints} health.`;
	}
	heal() {
		this.healthPoints = this.maxHP;
		return `${this.name} has been healed completely!`
	}
}

class Humanoid extends CharacterStats {
	constructor(attributes) {
		super(attributes);
	  this.team = attributes.team;
	  this.weapons = attributes.weapons;
	  this.language = attributes.language;
	}
	greet() {
	  return `${this.name} offers a greeting in ${this.language}.`;
	}
}


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// For giving attacks a damage range.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Hero extends Humanoid {
	constructor(attributes) {
		super(attributes);
	  this.fairies = attributes.fairies;
	}
	slash(enemy) {
	  console.log(`${this.name} slashed ${enemy.name} with their ${this.weapons[0]}!`)
	  return enemy.takeDamage(getRandomInt(4, 7));
	}
	fairy() {
  this.fairies--;
  this.healthPoints += 10;
  return `A fairy healed ${this.name} for 10 points.\n${this.name} has ${this.healthPoints} health!`
	}
}

class Villain extends Humanoid {
	constructor(attributes) {
		super(attributes);
	}
	fireball(enemy) {
	  console.log(`${this.name} blasted ${enemy.name} with a fireball!`)
	  return enemy.takeDamage(getRandomInt(5, 8));
	}
}

const hero = new Hero({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 2,
  height: 2,
},
healthPoints: 17,
name: 'Link',
team: 'Hyrule',
weapons: [
  'Master Sword',
  'Hylian Shield',
],
language: 'Kokiri',
fairies: 3,
maxHP: 15,
});

const villain = new Villain({
createdAt: new Date(),
dimensions: {
  length: 3,
  width: 3,
  height: 3,
},
healthPoints: 20,
name: 'Gannon',
team: 'None',
weapons: [
  'Magic',
  'War Hammer',
],
language: 'Hyrulian',
maxHP: 20,
});

function battle(hero, villain) {
  let round = 0
  while (hero.healthPoints > 0 && villain.healthPoints > 0) {
    console.log(`\nRound: ${++round}`);
    // The hero's turn
    if (hero.healthPoints <= 7 && hero.fairies > 0) {
      console.log(hero.fairy());
    } else {
      console.log(hero.slash(villain));
    }
    // The villain's turn
    if (hero.healthPoints > 0 && villain.healthPoints > 0) {
      console.log(villain.fireball(hero));
    }
  }
  hero.fairies = 3;
  console.log(hero.heal());
  console.log(villain.heal());
}

battle(hero, villain);
battle(hero, villain);
