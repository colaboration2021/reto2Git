/**
 * Author: Jair Erazo
 **/
// end point api audience Oracle Cloud
const endpoint = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience"

// peticion GET
function peticionget() {

    $.ajax({
        method: "GET",
        url: endpoint,
        datatype: "JSON",
        success: function(data) {
            console.log(data)
        }
    });
}
// llamado a peticion GET
peticionget()

// peticion POST
function peticionpost() {

    let id = 2;
    let owner = "Germany";
    let capacity = 550;
    let category_id = 12;
    let name = "Aula multiple";

    $.post(endpoint, {
        id: id,
        owner: owner,
        capacity: capacity,
        category_id: category_id,
        name: name
    }, function(response) {
        console.log(response.message);
    });
}

// peticion PUT
function peticionput() {

    var url = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience";

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = `{
  "id": 1,
  "owner": "Peru",
  "capacity": 120,
  "category_id": 13, 
  "name": "Pablo Honey"
}`;

    xhr.send(data);

}