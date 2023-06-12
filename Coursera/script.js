let num_list = [4, 1, 10, 28];
for(let i = 0; i < num_list.length; i++) {
  console.log(num_list[i]);
}

let object = {
  "name": "Peter",
  "age": 25,
  "job": "Doctor"
};

console.log(object["name"]);
for(attribute in object) {
  console.log(object[attribute]);
}