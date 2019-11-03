fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response) {
        return response.json();
    })

   .then (function(json) {
    loopResults(json);
    })

    .catch (function(error) {
        console.log(error);
    });

function loopResults(json) {
    const resultContainer = document.getElementById("code");
    const results = json.response;
    console.log(loopResults);
    
 
 
 for (let i = 0; i < json.length; i++) {
    const status = json[i].completed ? "complete": "incomplete";
    resultContainer.innerHTML += "<div class=card>Userid: " + json[i].userId + "<br/>" + " Id: " + json[i].id + "<br/>" + " Title: " + json[i].title + "<br/>" + " Status: " + status + "</div>";
     
                                                           
 }

}

   
