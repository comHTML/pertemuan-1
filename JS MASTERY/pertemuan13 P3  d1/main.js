
// == versi sederhana

import { user } from "./modules2/contoh.js";
import { siswa } from "./modules2/contoh.js";

console.log(siswa);
console.log(user);


// == alias bisa dipake di import dan export 

import {y as yw, q} from "./modules2/contoh.js";

console.log(yw, q);

// import semua data

import * as ever from "./modules2/contoh.js";

console.log( ever.sks, ever.kls);


 