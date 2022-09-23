function callbk(res){
  console.log(res);
}

var formid = "222338948374870"

$.getJSON("https://vicom.jotform.com/API/form/" + formid + "/submissions?apiKey=d17748747ac8e76618def4b967347ec5&callback=?",callbk);