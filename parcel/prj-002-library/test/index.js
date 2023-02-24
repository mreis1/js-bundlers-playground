const {add} = require('../'); // <-- Notice we are importing from the root of our library
// const {add} = require('../dist'); // <--- this won't work because package.json is missing and main/module
// entries are required to determine which root file is used by our library


console.log(add(1,2));
