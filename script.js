let startTime, elapsedTime = 0, timerInterval;

function startStop() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("startStopButton").innerText = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
        document.getElementById("startStopButton").innerText = "Stop";
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let formattedTime = new Date(elapsedTime).toISOString().substr(11, 8); // Format: hh:mm:ss
    document.getElementById("minutes").innerText = formattedTime.substr(3, 2);
    document.getElementById("seconds").innerText = formattedTime.substr(6, 2);
    document.getElementById("milliseconds").innerText = formattedTime.substr(9, 2) * 10;
}

function lapReset() {
    if (timerInterval) {
        let lapTime = new Date(elapsedTime).toISOString().substr(11, 8);
        let lapItem = document.createElement("li");
        lapItem.innerText = lapTime;
        
        // Add delete button to lap item
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {
            lapItem.remove();
        };
        lapItem.appendChild(deleteButton);
        
        document.getElementById("laps").appendChild(lapItem);
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        document.getElementById("milliseconds").innerText = "000";
        document.getElementById("startStopButton").innerText = "Start";
        document.getElementById("laps").innerHTML = "";
    }
}

function clearLaps() {
    let lapsList = document.getElementById("laps");
    lapsList.innerHTML = "";
}
