console.log("Hello World!! \n");

let hello = "Hello World \n";

console.log(hello);

function hello_one(a) {
    console.log(a+"\n");
}

hello_one(hello);


function h(a) {
return a+" Saman \n";
}

h(hello);

let return_value = h(hello);
console.log(return_value);
console.log(h(hello))

let return_value_one = (a)=> h(a);
console.log(return_value_one(hello));