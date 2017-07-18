const factObj = {
    factOne: 'HTTP is cool',
    factTwo: 'HTTP is fun',
    factThree: 'HTTP sucks'
};

factObj.arrayOfFacts = [factObj.factOne, factObj.factTwo, factObj.factThree];

factObj.getRandomFact = function () {

    let randomNum = Math.floor(Math.random() * factObj.arrayOfFacts.length) + 1;

    return factObj.arrayOfFacts[randomNum];

};

module.exports = factObj;