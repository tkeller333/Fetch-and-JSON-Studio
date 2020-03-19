// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const div = document.getElementById("container");
            div.innerHTML = `
            <h3> ${json[0].firstName} ${json[0].lastName} </h3>
            <img src=${json[0].picture} height=250</img>
                <ul>
                    <li>Hours in Space: ${json[0].hoursInSpace}</li>
                    <li>Active: ${json[0].active}</li>
                    <li>Skills: ${json[0].skills}</li>
                </ul>`
        });
    });
});