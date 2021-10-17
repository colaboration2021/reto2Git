const endpoint = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience";
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
    let owner = document.getElementById("owner").value;
    let capacity = document.getElementById("capacity").value;
    let category_id =  document.getElementById("category_id").value;
    let name =  document.getElementById("name").value;

    var settings = {
        "url": endpoint,
        "data": {"id":id,"owner":owner,"capacity":capacity,"category_id":category_id,"name":name},
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
    let owner = document.getElementById("owner").value;
    let capacity = document.getElementById("capacity").value;
    let category_id =  document.getElementById("category_id").value;
    let name =  document.getElementById("name").value;

    var settings = {
        "url": endpoint,
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "id":id,
          "owner":owner,
          "capacity":capacity,
          "category_id":category_id,
          "name":name,
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