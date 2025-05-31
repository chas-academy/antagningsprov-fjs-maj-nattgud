function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    function sort(numberArray) {
        // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
        for(let number of numberArray) {
            // i if-sattsen skriv ut i konsolen resultatet
            // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
            if(number % 2 === 0) {
                console.log(number, "jämt");
            } else {
                console.log(number, "udda");
            }
        }
    }
    // anropa funktionen och skicka med en array som argument
    sort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
}
module.exports = { uppg9 };