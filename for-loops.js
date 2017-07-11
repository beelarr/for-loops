/**
 * Created by beelarr on 7/10/17.
 */

for (let i = 5; i < 121; i +=10){
    console.log(i)
}

for (let i = 4096; i > 1; i/=2){
    console.log(i)
}

let presidents = ['George Washington', 'John Adams', 'Thomas Jefferson']

for(let i in presidents){
    console.log('President #' + (Number(i) + 1) + ' was ' + presidents[i])
}

var antSpecies = {
    argentine: {},
    army: {},
    bigHeaded: {},
    black: {},
    bull: {},
    carpenter: {},
    crazy: {},
    fire: {},
    glider: {},
    honeyPot: {},
    jackJumper: {}
}

for (let species in antSpecies){
    console.log(species)
}