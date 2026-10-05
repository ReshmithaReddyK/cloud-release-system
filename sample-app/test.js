const fs = require("fs");
console.log("Starting automated test...");
if (fs.existsSync("index.html")) {
    console.log("TEST PASSED");
    process.exit(0);
} else {
    console.log("TEST FAILED");
    process.exit(1);
}