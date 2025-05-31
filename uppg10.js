function uppg10(){
  const numbers = [5, 12, 7, 10, 20, 9, 11];
  // skapa tre arrayer - bigEven, smallOdd, other
  let bigEven = [];
  let smallOdd = [];
  let other = [];
  // loopa igenom numbers och placera talen i respektive array
  for(let number of numbers) {
    if(number > 10 && number % 2 === 0) {
      // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
      bigEven.push(number);
    } else if(number < 10 && number % 2 === 1) {
      // smallOdd ska innehålla tal mindre än 10 och udda
      smallOdd.push(number);
    } else {
      // other ska innehålla alla andra tal
      other.push(number);
    }
  }
  // returnera ett objekt med de tre arrayerna
  return {
    bigEven: bigEven,
    smallOdd: smallOdd,
    other: other
  };
}
module.exports = { uppg10 };