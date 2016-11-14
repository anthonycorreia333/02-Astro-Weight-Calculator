var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];

    var optionElement = document.createElement('option');
    optionElement.value = planet.gravity;
    optionElement.innerHTML = planet.planet;

    var selectElement = document.getElementById('selectPlanet');
    selectElement.appendChild(optionElement);

}

var form = document.getElementById('inputForm');
form.onsubmit = function(event) {

    var inputWeight = document.getElementById('inputWeight');

    var userWeight = inputWeight.value;

    var selectElement = document.getElementById('selectPlanet');

    var selectedIndex = selectElement.selectedIndex;

    var selectedOption = selectElement.options[selectedIndex];

    var planetName = selectedOption.text;

    var planetValue = selectedOption.value;

    var userWeightOnPlanet = userWeight * planetValue;
    userWeightOnPlanet = userWeightOnPlanet.toFixed(2);
    var message = 'You\'re weight on ' + planetName + ' would be ' + userWeightOnPlanet + ' lbs.';

    var output = document.getElementById('output');

    output.innerHTML = message;

    return false;

};
