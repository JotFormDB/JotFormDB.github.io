function callbk(res){
  console.log(res);
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

var formid = "222338948374870";

$('#subdown').mousedown(function(){
  $.getJSON("https://vicom.jotform.com/API/submission/" + $('#subid').val() + "?addWorkflowStatus=1&callback=?",statuscallback)
  }
  )

$.getJSON("https://vicom.jotform.com/API/form/" + formid + "/submissions?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?",callbk);