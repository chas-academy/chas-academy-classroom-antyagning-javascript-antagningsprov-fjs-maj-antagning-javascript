function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
const bigEven = [];
const smallOdd = [];
const other = [];

for (let i = 0; i < numbers.length; i++) {
  let tal= numbers[i];

  if (tal > 10 && tal % 2 === 0) {
      bigEven.push(tal);
    } else if (tal < 10 && tal % 2 !== 0) {
      smallOdd.push(tal);
    } else {
      other.push(tal);
    }
  }
return {
    bigEven: bigEven,
    smallOdd: smallOdd,
    other: other
  };
}

console.log(uppg10());

  
  module.exports = { uppg10 };
  