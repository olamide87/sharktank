import utls from './helpers/utils.js/index.js.js';


const takBuilder = () => {
    const persons = personData.getAlivePersons();
    let domString = '';
     domString += '<div class="card">'; 
     domString += '<div class="card-header">Sharktank</div>'
     domString += '<ul class="list-group list-group-flush">'

     persons.forEach((person) => {
         domstring += `<li class="list-group-item">${person.name}</li>`;
     });

    
    domString += </ul>
    domString += </div>
    
};

export default { tankBuilder }

