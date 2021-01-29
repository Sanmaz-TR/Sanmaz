var capitalize = (string) => { 
    return string.split(" ").map(word => { 
        return word.split(" ").map(letter => { 
            return letter.toUpperCase(); }).join(' ') }).join(' ') }
console.log(capitalize("oh hello"));

var myArr = [1, 3, 5, 3, 4];
var output = myArr.map(function(num) {
    return num * 2
})
console.log(output)

var output = myArr.map(function(item,index,myArr) {
    return "This item " + item + " is at " + index + ":" + myArr
});
console.log(output)

function doubleNumbers(arr) {
        return arr.map(function(num) {
            return num * 2;
        })
      }
  
  console.log(doubleNumbers([2, 5, 100]));

  var str = "Sancheeta";
  var newName = Array.prototype.map.call(str, function(item){
      return item + 'a';
    }
  )
  console.log(newName);
 