import axios from 'axios'
import { people } from './people.js';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function formatPairs(pairs) {

    let fS = "";

    for (const pair of pairs) {
        fS += `${pair[0]} <---> ${pair[1]}\n\n`
    }

    return fS;
}

function createPairs(people) {
    if (people.length % 2 === 1) {
        let rmindex = getRandomInt(people.length);
        people.splice(rmindex, 1);
    }

    let pairs = [];

    while (people.length > 0) {
        let pair1 = people[0];
        people.splice(0, 1);
        let pair2 = getRandomInt(people.length);
        pairs.push([pair1, people[pair2]]);
        people.splice(pair2, 1);
    }

    axios.post("", { "text": formatPairs(pairs) })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) });

}

createPairs(people);
