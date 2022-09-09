// _proto_ / [[Prototype]] : a property that refers to another object without storing it inside the current object

const object_1_20220628 = {
    IPv4: "8.8.8.8",
    IPv6: "0000:0000:0000:0000:0000:ffff:0808:0808",
    name: "https://dns.google/"
}

const object_2_20220628 = {
    IPv4: "172.217.166.228",
    IPv6: "0000:0000:0000:0000:0000:ffff:acd9:a6e4",
    name: "www.google.com",
    linked: Object.create(object_1_20220628)
};
console.log(`_proto_ : Object.create() :`, object_2_20220628.linked.IPv4, `=>`, object_2_20220628.linked.name); // _proto_ : Object.create() : 8.8.8.8 => https://dns.google/

console.log(object_1_20220628);

// prototype : an object/a free space in every function to store specific keys and values

function function_1_20220628() {
    return `function_1_20220628`
}

if (function_1_20220628.prototype) {
    console.log(`prototype : present`);
} else {
    console.log(`prototype : absent`);
}

console.log(function_1_20220628.prototype);
console.log(window);
