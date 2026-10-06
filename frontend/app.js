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

        window.location.href = "dashboard.html";

    });

}


// New Version popup

const newVersionBtn = document.getElementById("newVersionBtn");
const versionModal = document.getElementById("versionModal");
const saveVersionBtn = document.getElementById("saveVersionBtn");
const cancelVersionBtn = document.getElementById("cancelVersionBtn");
const versionInput = document.getElementById("versionInput");

if (newVersionBtn && versionModal) {

    newVersionBtn.addEventListener("click", function() {

        versionModal.style.display = "flex";

        versionInput.value = "";

        versionInput.focus();

    });

}

if (cancelVersionBtn) {

    cancelVersionBtn.addEventListener("click", function() {

        versionModal.style.display = "none";

    });

}

if (saveVersionBtn) {

    saveVersionBtn.addEventListener("click", function() {

        const version = versionInput.value.trim();

        if (version === "") {

            alert("Please enter a version number.");

            return;

        }

        alert("Version " + version + " created successfully!");

        versionModal.style.display = "none";

    });

}
// New Release popup

const newReleaseBtn = document.getElementById("newReleaseBtn");
const releaseModal = document.getElementById("releaseModal");
const saveReleaseBtn = document.getElementById("saveReleaseBtn");
const cancelReleaseBtn = document.getElementById("cancelReleaseBtn");

if (newReleaseBtn && releaseModal) {

    newReleaseBtn.addEventListener("click", function() {

        releaseModal.style.display = "flex";

        document.getElementById("releaseIdInput").value = "";
        document.getElementById("releaseVersionInput").value = "";

        document.getElementById("releaseIdInput").focus();

    });

}

if (cancelReleaseBtn) {

    cancelReleaseBtn.addEventListener("click", function() {

        releaseModal.style.display = "none";

    });

}

if (saveReleaseBtn) {

    saveReleaseBtn.addEventListener("click", function() {

        const releaseId =
            document.getElementById("releaseIdInput").value.trim();

        const version =
            document.getElementById("releaseVersionInput").value.trim();

        if (releaseId === "" || version === "") {

            alert("Please enter both Release ID and Version.");

            return;

        }

        alert(
            "Release " + releaseId +
            " for version " + version +
            " created successfully!"
        );

        releaseModal.style.display = "none";

    });

}
// View History button

const historyBtn = document.getElementById("historyBtn");

if (historyBtn) {

    historyBtn.addEventListener("click", function() {

        const historySection = document.querySelector("h2");

        if (historySection) {

            historySection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}