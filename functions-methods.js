// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email){
    const mailsplit=email.split('@');
    const result=mailsplit[1];
    return result;
}

// return emaildomain
const emailDomain1=getEmailDomain("n.eeken@novi-education.nl");
const emailDomain2=getEmailDomain("t.mellink@novi.nl");
const emailDomain3=getEmailDomain("a.wiersma@outlook.com");
console.log(emailDomain1, emailDomain2,emailDomain3);



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    let result = "";
    if (email.includes('@novi-education.nl')) {
        result = "student";
    } else if (email.includes('@novi.nl')) {
        result = "Medewerker";
    } else {
        result = "Extern"
    }
    return result;
}

//check types of Emails
const emailCheck1=typeOfEmail("n.eeken@novi-education.nl");
const emailCheck2=typeOfEmail("t.mellink@novi.nl");
const emailCheck3=typeOfEmail("novi.nlaapjesk@outlook.com");
const emailCheck4=typeOfEmail("a.wiersma@outlook.com");
console.log(emailCheck1,emailCheck2,emailCheck3,emailCheck4);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email) {
    if ((email.charAt(email.length - 1) == '.') || (email.includes(','))) {
        return false;
    } else if (!email.includes('@')) {
        return false;
    } else {
        return true
    }
}

//check if mailadresses are valid
const validMailAdress1 = checkEmailValidity('n.eeken@novi.nl');
const validMailAdress2 = checkEmailValidity('tessmellink@novi.nl');
const validMailAdress3 = checkEmailValidity('n.eekenanovi.nl');
const validMailAdress4 = checkEmailValidity('n.eeken@novinl.');
const validMailAdress5 = checkEmailValidity('tessmellink@novi,nl');

console.log(validMailAdress1, validMailAdress2, validMailAdress3, validMailAdress4, validMailAdress5);