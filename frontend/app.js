const API_URL = "https://8fx6up4gml.execute-api.ap-southeast-2.amazonaws.com/releases";

async function loadReleases() {

    try {

        const response = await fetch(API_URL);

        const releases = await response.json();

        const table = document.getElementById("releaseTable");

        // Only update the table if we are on the dashboard page
        if (!table) {
            return;
        }

        table.innerHTML = "";

        releases.forEach(release => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${release.releaseId || ""}</td>
                <td>${release.version || ""}</td>
                <td>${release.buildStatus || ""}</td>
                <td>${release.testStatus || ""}</td>
                <td>${release.deploymentStatus || ""}</td>
            `;

            table.appendChild(row);

        });

    } catch (error) {

        console.error("Unable to load releases:", error);

    }
}

loadReleases();


// Login functionality

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        if (email === "" || password === "") {

            document.getElementById("loginMessage").textContent =
                "Please enter email and password.";

            return;
        }

        document.getElementById("loginMessage").textContent =
            "Login system will be connected to Amazon Cognito.";

    });

}