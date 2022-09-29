//function callbk(res) {
    //console.log(res);
//}

function statuscallback(res) {
    var status_txt;
    var details_txt;
    console.log(res["content"]);
    try {
        status_txt = res["content"]["workflowStatus"];
        $('#status').html(status_txt);
        if (status_txt.includes("Approve")) {
            //color to green
            $('#status').css("color", "green");
        }
        else if (status_txt.includes("Deny")) {
            //color to green
            $('#status').css("color", "red");
        }
        else {
            $('#status').css("color", "orange");
        }
    }
    catch (exception) {
        $('#status').html();
        $('#status').css("color", "black");
    }

    try {
        details_txt = res["content"]["workflowStatusDetails"]["text"];
        details_color = res["content"]["workflowStatusDetails"]["buttonColor"];
        $('#details').html(details_txt);
        $('#details').css("color", details_color);
    }
    catch (exception) {
        $('#details').html("");
        $('#details').css("color", "black");
    }
}



//5381705172429391458


//var tempid = "5397133132426539978"

function btn_down() {
    var tempid = $('#subid').val()
    $.getJSON("https://vicom.jotform.com/API/submission/" + tempid + "?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?", statuscallback);
}

//var formid = "222338948374870";

$('#subdown').mousedown(btn_down)
//btn_down();
//console.log("this other one");
//$.getJSON("https://vicom.jotform.com/API/submission/" + tempid + "?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?",statuscallback);

//$.getJSON("https://vicom.jotform.com/API/form/" + formid + "/submissions?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?", callbk);

window.addbtnlisten = () => {
    $('#subdown').mousedown(btn_down)
}

window.jf_getsubmissions = (formid,callbk,offset=0) => {
  $.getJSON("https://vicom.jotform.com/API/form/" + formid + "/submissions?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&offset=" + offset + "&limit=1000&callback=?", callbk);
}

window.jf_getsubmission = (subid,callbk) => {
   $.getJSON("https://vicom.jotform.com/API/submission/" + subid + "?apiKey=d17748747ac8e76618def4b967347ec5&addWorkflowStatus=1&callback=?", callbk);
}

window.jf_getforms = (callbk) => {
   $.getJSON("https://vicom.jotform.com/API/user/forms?apiKey=d17748747ac8e76618def4b967347ec5&limit=1000&callback=?", callbk);
}

