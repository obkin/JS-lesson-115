'use strict';

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');



// () => {}                            
// microtasks: then/catch/finally/await
// render (перемалювання якихось речей на сторінці)
// () => {}



// macrotasks
// microtasks: then/catch/finally/await
// page render
// macrotasks

// microtasks: then/catch/finally/await
// page render
// macrotasks