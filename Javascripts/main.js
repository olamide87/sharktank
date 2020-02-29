import tank from './Components/tank.js';
import graveyard from './Components/graveyard.js';
import personData from './helpers/data/personData.js'


const sharkAttackEvent = () => {
    personData.randomMurder();
    tank.tankBuilder();
    graveyard.buildGraveyard();


}


const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
    $('#bite-me').click(sharkAttackEvent);
};

init();

