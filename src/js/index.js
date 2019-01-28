import 'bootstrap';

// css
import 'bootstrap/dist/css/bootstrap.min.css';


// custom
import Component1  from './comp1';
import Component2 from './comp2';

import './comp3';

let comp1 = new Component1();
console.log(comp1.addition());
console.log(comp1.subtraction());
console.log(comp1.multiplication());
console.log(comp1.division());

let comp2 = new Component2();
console.log(comp2.create());
