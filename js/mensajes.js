const endpointMessage = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message";

// peticion GET
function PeticionGetMessage() {
    var settings = {
        "url": endpointMessage,
        "method": "GET",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

// peticion POST
function PeticionPostMessage() {
    let id = document.getElementById("idMessage").value;
    let message = document.getElementById("messageText").value;
    
    var settings = {
        "url": endpointMessage,
        "data": {"id":id,"messagetext":message},
        "method": "POST",
        "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}


// peticion PUT
function PeticionPutMessage() {
    let id = document.getElementById("idMessage").value;
    let message = document.getElementById("messageText").value;

    var settings = {
        "url": endpointMessage,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "id":id,
          "messagetext":message
        }),
    };
      
    $.ajax(settings).done(function (response) {
      console.log(response);
    }); 
}

// peticion DELETE
function PeticionDeleteMessage() {
    let idDelete = document.getElementById("idDeleteMessage").value;
    var settings = {
        "url": endpointMessage,
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "id": idDelete
        }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}