//your JS code here. If required.
let student = {
	name: "avi"
}
Object.prototype.getKeys = function () {
  let arr = [];
  for (let key in student) {
    arr.push(key)
  }
  return arr;
}