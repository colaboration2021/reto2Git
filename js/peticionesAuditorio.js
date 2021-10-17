/* Creación de Frontend.

Haciendo uso de lo aprendido sobre JavaScript y HTML, se deben crear los formularios para:

-Creación de Auditorios.

-Registro de Clientes.

-Registro de mensajes.

Así mismo, se debe poder visualizar una lista de los elementos registrados en las tablas de:

-Auditorio.

-Clientes.

-Mensajes.

Una vez hecha la lista, cada elemento debe tener en el título un enlace para poder visualizar en una sección "detalle" los detalles de cada:

-Auditorio.

-Cliente.

-Mensaje.

Al poder ver el detalle de cada uno, se podrá editar la información que contiene (excepto el id, este no se deberá poder editar).

Es necesario también crear un botón para eliminar cada Auditorio y mensaje.

*/

const endpoint = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience";
const endpointClient = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client";
let xhr = new XMLHttpRequest();


// *****************************************************************
// Auditorio
// *****************************************************************

// peticion GET auditorio
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

// peticion POST auditorio
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


// peticion PUT auditorio
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

// peticion DELETE auditorio
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

// *****************************************************************
// Cliente
// *****************************************************************

// peticion GET cliente
function peticiongetClient() {
  var settings = {
      "url": endpointClient,
      "method": "GET",
      "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

// peticion POST cliente
function peticionpostClient() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age =  document.getElementById("age").value;

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


// peticion PUT cliente
function peticionputClient() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age =  document.getElementById("age").value;

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

// peticion DELETE cliente
function peticiondeleteClient() {
  let idDelete = document.getElementById("idDelete").value;
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