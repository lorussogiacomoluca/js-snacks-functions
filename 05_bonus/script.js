/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function sayHello(name){
    let saluto = '';
    const d = new Date;
    let hour = d.getHours();
    if (hour < 13){
        saluto = `Buongiorno`
    } else if (hour > 13 && hour < 18){
        saluto = `Buon pomeriggio`
    }else{
        saluto = `Buonasera`
    }
    return `${saluto} ${name} `
}

const sayHelloArrow = (name) => {
    let saluto = '';
    const d = new Date;
    let hour = d.getHours();
    if (hour < 13){
        saluto = `Buongiorno`
    } else if (hour > 13 && hour < 18){
        saluto = `Buon pomeriggio`
    }else{
        saluto = `Buonasera`
    }
    return `${saluto} ${name} `
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHello(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.