import tank from './Components/tank.js';
import graveyard from './Components/graveyard.js';


const init = () => {
    tank.tankBuilder();
    graveyard.buildGraveyard();
};

init();

