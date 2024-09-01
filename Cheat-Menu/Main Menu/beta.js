(function() {
    // Create the Beta section for the Pet Slot button
    var betaSection = document.createElement('div');
    betaSection.className = 'section';
    betaSection.innerHTML = `
        <h2>Beta</h2>
        <div>
            <button id="petSlot">Pet Slot</button>
        </div>
    `;
    betaSection.style.display = 'none'; // Initially hidden

    var menu = document.getElementById('cheatMenu');
    menu.appendChild(betaSection);

    // Function to check the beta status and show/hide the Beta section
    function checkBetaStatus() {
        if (fusion.beta === 1) {
            betaSection.style.display = 'block'; // Show the Beta section
        } else {
            betaSection.style.display = 'none'; // Hide the Beta section
        }
    }

    // Check the beta status every second
    setInterval(checkBetaStatus, 1000);
})();
