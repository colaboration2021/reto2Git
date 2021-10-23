const endpointClient = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";

// peticion GET
function PeticionGetClient() {
    var settings = {
        "url": endpointClient,
        "method": "GET",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

// peticion POST
function PeticionPostClient() {
    let id = document.getElementById("idClient").value;
    let name = document.getElementById("nameClient").value;
    let email = document.getElementById("emailClient").value;
    let age =  document.getElementById("ageClient").value;
    var settings = {
        "url": endpointClient,
        "data": {"id":id,"name":name,"email":email,"age":age},
        "method": "POST",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

// peticion PUT
function PeticionPutClient() {
    let id = document.getElementById("idClient").value;
    let name = document.getElementById("nameClient").value;
    let email = document.getElementById("emailClient").value;
    let age =  document.getElementById("ageClient").value;

    var settings = {
        "url": endpointClient,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "id":id,
          "name":name,
          "email":email,
          "age":age
        }),
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    }); 
}

// peticion DELETE
function PeticionDeleteClient() {
    let idDelete = document.getElementById("idDeleteClient").value;
    var settings = {
        "url": endpointClient,
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