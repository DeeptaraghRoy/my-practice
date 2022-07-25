// Strings: Properties & Methods

const nam = "Deepta";
/* const greeting = "Good Morning";
console.log(greeting + " " + nam);*/

let html;
html = "<h1> this is heading </h1>" + "<p> this is my para </p>";

html = html.concat("this", " str2");
/*console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[0]);
console.log(html[1]);
console.log(html.indexOf("this"));
console.log(html.indexOf("hssdfsd1")); // Does not exist. Hence expected output : -1
console.log(html.lastIndexOf("<"));
console.log(html.charAt(3));
console.log(html.endsWith("str2"));*/
console.clear();
console.log(html.includes("s"));

console.log(html.substring(1, 5)); // upto (n-1)
console.log(html.slice(-4)); // expected output: str2
console.log(html.substring(-4)); // expected output: <h1> this is heading </h1><p> this is my para </p>this str2
console.log(html.slice(0, 4)); // expected output upto (n-1) : <h1>
console.log(html.split(" ")); // expected output : array
console.log(html.split(">")); // expected output : array
console.log(html.replace("this", "it"));

// Strings: Template Literals

let fruit1 = "Orange";
let fruit2 = "Apple";
let myHtml = `Hello ${nam}
<h1> This is heading </h1>
<p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;
