require('./main.css');
import 'bootstrap/dist/css/bootstrap.css';

import _ from 'lodash';

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}
const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

function makeTable(persons, sport){                       //const block scope and will not be changed.

  const propertyNames = _.keys(new Person);               //lægger Person attributes i variable
  const tableHead = propertyNames.map(function (title) {  //looper array igennem    
    return ('<th>' + _.startCase(title) + '</th>');           //Ændrer string 
  });

  const tableBody = persons.map((p) => {              //es 6 arrow function and template strings
    return(`<tr>                                      
            <td>${p.firstName}</td>
            <td>${p.lastName}</td>
            <td>${p.favoriteSport}</td>
            </tr>`);
 });
        return  (`<table class="table">
                    <thead>${tableHead}</thead>
                    <tbody>${tableBody}</tbody>
                    </table>`)
};

const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;