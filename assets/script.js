/* 
    chiedere il nome all'utente
    chiedere il cognome all'utente
    chiedere il suo colore preferito all'utente
    scrivere sulla pagina il nome generato 
*/

const userName = prompt("Qual'è il tuo nome?");

const userLastname = prompt("Qual'è il tuo cognome?")

const userColor = prompt("Qual'è il tuo colore preferito?")

const eleSpan = document.getElementById("pwd")
eleSpan.innerHTML = userName + userLastname + userColor + 23