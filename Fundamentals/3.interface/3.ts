interface CraftBeer {
  name: string;
  hop?: number;
}

let myBear = {
  name: 'Cass'
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.name);
}
brewBeer(myBear);
