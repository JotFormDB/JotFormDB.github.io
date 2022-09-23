console.log("loaded");

function callbk(res){
  console.log(res);
}
/*
JF.initialize( {apiKey: "d17748747ac8e76618def4b967347ec5"} ); 
console.log(JF);
JF.getFormSubmissions("222338948374870",callbk);
*/
$.getJSON("https://vicom.jotform.com/API/form/222338948374870/submissions?apiKey=d17748747ac8e76618def4b967347ec5",callbk);