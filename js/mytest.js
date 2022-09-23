function callbk(res){
  //console.log(res);
}

function statuscallback(res){
  console.log(res["content"]);
    $('#status').html(res["content"]["workflowStatus"]);
    try{
      $('#details').html(res["content"]["workflowStatusDetails"]["text"]);
    }
    catch(exception){
      $('#details').html("");
    }
}



//5381705172429391458


//var tempid = "5397133132426539978"

function btn_down(){
  var tempid = $('#subid').val()
  $.getJSON("https://vicom.jotform.com/API/submission/" + tempid + "?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?",statuscallback);
}

var formid = "222338948374870";

//btn_down();
$('#subdown').mousedown(btn_down)
//console.log("this other one");
//$.getJSON("https://vicom.jotform.com/API/submission/" + tempid + "?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?",statuscallback);

$.getJSON("https://vicom.jotform.com/API/form/" + formid + "/submissions?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?",callbk);