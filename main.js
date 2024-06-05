let inName = document.querySelector("input");
let form = document.querySelector("form");
let names = [];
let localNames = localStorage.getItem("names");
console.log(localNames);
form.onsubmit = (e) =>{
    e.preventDefault();
    let value = inName.value;
    names.push(value);
    localStorage.setItem("names",names);
    print();
}
function print() {
    document.querySelector("div").innerHTML =
     localNames.split(",").map((name) => `<p>${name}</p>`).join()
}