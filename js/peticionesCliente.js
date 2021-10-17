const endpoint = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
let xhr = new XMLHttpRequest();

// peticion GET
function peticionget() {
    var settings = {
        "url": endpoint,
        "method": "GET",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

// peticion POST
function peticionpost() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age =  document.getElementById("age").value;

    var settings = {
        "url": endpoint,
        "data": {"id":id,"name":name,"email":email,"age":age},
        "method": "POST",
        "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}


// peticion PUT
function peticionput() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age =  document.getElementById("age").value;

    var settings = {
        "url": endpoint,
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
function peticiondelete() {
    let idDelete = document.getElementById("idDelete").value;
    var settings = {
        "url": endpoint,
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