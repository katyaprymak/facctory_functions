const createOutfit = function () {
  const outfit = {
    shirt: "green",
    pants: "blue",
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log("Show-off your brand new outfit!");
    },
  };
  return outfit;
};

console.log(createOutfit());

/*const tuesday = createOutfit();
tuesday.shirt = "white";
tuesday.pants = "black";
console.log(tuesday);*/

const tuesday = createOutfit("white", "black");
console.log(tuesday);

const wednesday = createOutfit("pink", "gray");
console.log(wednesday);

/*for (let key in tuesday) {
  console.log(tuesday[key]);
}*/

for (let key in tuesday) {
  console.log(key, tuesday[key]);
}

const outfitArray = [tuesday, wednesday];
/*for (let outfit of outfitArray) {
  console.log(outfit);
}*/

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
