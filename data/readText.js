var fs = require("fs");
var ingredients = fs.readFileSync("./foods.txt", "utf-8");
var ingredientsByLine = ingredients.split("\n");

fs.writeFileSync("./ingredients.json", JSON.stringify(ingredientsByLine));
console.log('complete');
