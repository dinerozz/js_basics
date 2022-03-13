// Capitalizing a string in JAVASCRIPT USING SPLIT & JOIN
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function capitalize(str){
    const words = str.split(" ");

    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    console.log(words.join(" ")) ;
}
capitalize( "How can mirrors be real if our eyes aren't real")

// OR
String.prototype.toJadenCase = function capitalize () {

    const words = this.split(" ");

    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");


};