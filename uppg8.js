function uppg8(){
	// skapa en array med fem person obkjet
	// varje person objekt ska ha två properties, name och age
	const persons = [
		{
			name: "Kalle",
			age: 20
		},{
			name: "Emma",
			age: 22
		},{
			name: "Ali",
			age: 25
		},{
			name: "Meriam",
			age: 29
		},{
			name: "Johan",
			age: 32
		}
	];
	// skapa en fuktion som tar in en array som argument
	function filterByAge(personsList) {
		for(let person of personsList) {
			// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
			//  över 30 år som skrivs ut i konsolen
			if(person.age > 30) {
				console.log(person.name);
			}
		}
	}
	// anropa funktionen och skicka med arrayen som argument
	filterByAge(persons);
}
module.exports = { uppg8 };