const endpointAudience = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience";

// peticion GET
function PeticionGetAudience() {
    var settings = {
        "url": endpointAudience,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

// peticion POST
function PeticionPostAudience() {
    let id = document.getElementById("idAudience").value;
    let owner = document.getElementById("ownerAudience").value;
    let capacity = document.getElementById("capacityAudience").value;
    let category_id =  document.getElementById("category_idAudience").value;
    let name =  document.getElementById("nameAudience").value;

    var settings = {
        "url": endpointAudience,
        "data": {"id":id,"owner":owner,"capacity":capacity,"category_id":category_id, "name":name},
        "method": "POST",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}


// peticion PUT
function PeticionPutAudience() {
    let id = document.getElementById("idAudience").value;
    let owner = document.getElementById("ownerAudience").value;
    let capacity = document.getElementById("capacityAudience").value;
    let category_id =  document.getElementById("category_idAudience").value;
    let name =  document.getElementById("nameAudience").value;

    var settings = {
        "url": endpointAudience,
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
          "name":name
        }),
    };
      
    $.ajax(settings).done(function (response) {
      console.log(response);
    }); 
}

// peticion DELETE
function PeticionDeleteAudience() {
    let idDelete = document.getElementById("idDeleteAudience").value;
    var settings = {
        "url": endpointAudience,
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