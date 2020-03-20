// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        let jsonPromise = response.json();

        jsonPromise.then(function(json) {

            let container = document.getElementById("container");
            for (astronaut of json) {
                let astronautHTML = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${astronaut.picture}"></img>
            </div>
            `
                container.innerHTML += astronautHTML;
            }
        });
        });
    });
// });