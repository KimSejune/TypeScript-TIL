interface CraftBeer5 {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer5(): CraftBeer5 {
  let my = (function(beer:string) {console.log('beer :', beer)}) as CraftBeer5;
  console.log(my)
  my.brand = 'Cass';
  my.brew = function() {
    console.log(`${my.brand} drink!`);
  }
  console.dir(my, 2) // { [Function: my] brand: 'Cass', brew: [Function] }
  return my;
}

let brewedBeer = myBeer5();
brewedBeer('My First Beer'); // function beer에 값이 할당.
brewedBeer.brand = 'Test Craft';
brewedBeer.brew(); // Test Craft drink!