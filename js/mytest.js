console.log("loaded");

function callbk(res){
  console.log(res);
}

JF.initialize( {apiKey: "d17748747ac8e76618def4b967347ec5"} ); 
JF.getFormSubmissions("222338948374870",callbk);