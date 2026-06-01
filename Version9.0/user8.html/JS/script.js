// 1. REQUIRED custom function
function lebronGOATScore(points, assists, rebounds) {
    return points + (assists * 1.5) + (rebounds * 1.2);
}

// 2. Random fact generator
function randomFact() {
    let facts = [
        "LeBron was drafted #1 in 2003",
        "He has 4 NBA championships",
        "He is the all-time leading scorer",
        "He played for Cavs, Heat, and Lakers"
    ];
    let rand = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[rand];
}

// 3. Change theme color
function changeTheme() {
    document.body.style.backgroundColor = "darkred";
}

// 4. Show current time
function showTime() {
    document.getElementById("time").innerText = new Date();
}

// 5. Toggle stats visibility
function toggleStats() {
    let box = document.getElementById("statsBox");
    box.style.display = (box.style.display === "none") ? "block" : "none";
}

// API CALL (required)
async function getLeBronStats() {
    let response = await fetch("https://api.sampleapis.com/futurama/characters");
    let data = await response.json();

    document.getElementById("apiData").innerText =
        "API Loaded: " + data[0].name.first;
}