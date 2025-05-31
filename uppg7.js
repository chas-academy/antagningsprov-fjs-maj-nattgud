function uppg7() {
    // skapa en funktion som tar in två tal som argument
    function sum(a, b) {
        // funktionen ska returnera summan av talen
        return a+b;
    }
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
    return sum(5, 10);
}
module.exports = { uppg7 };