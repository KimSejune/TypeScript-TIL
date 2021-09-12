interface CraftBeer4 {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer4 implements CraftBeer4 {
  beerName: string = 'Cass';
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor(){}
}