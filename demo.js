function Clock() {
    this.updateClock = function() {
        // Update clock logic here
        var clockDiv = document.createElement("div");
        clockDiv.className = "upiteclock";
        clockDiv.innerHTML = new Date().toLocaleTimeString();
        document.body.appendChild(clockDiv);
        setTimeout(this.updateClock.bind(this), 1000);
    
    };
}
