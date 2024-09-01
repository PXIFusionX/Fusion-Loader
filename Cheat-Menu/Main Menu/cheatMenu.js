// cheatMenu.js
(function() {
    // Load the CSS styles
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles.css';
    document.head.appendChild(link);

    // Create the cheat menu container
    var menu = document.createElement('div');
    menu.id = 'cheatMenu';
    menu.className = 'hidden';
    menu.innerHTML = `
    <h1>
        PXI Fusion X Cheat Menu
        <button id="announcementButton">Announcements</button>
    </h1>
    <p>Join our discord for hack updates & support: https://dsc.gg/pxi-fusion</p>
    <div class="section">
        <h2>Player Hacks</h2>
        <div>
            <button id="max">Max Account</button>
        </div>
    </div>
    <div class="section">
        <h2>Inventory Hacks</h2>
        <div>
            <button id="itemStacker">Item Stacker</button>
        </div>
    </div>
    <div class="section">
        <h2>Pet Hacks</h2>
        <div>
            <button id="getAllPets">Get All Pets</button>
        </div>
    </div>
    <div class="section">
        <h2>Battle Hacks (More coming soon)</h2>
        <div>
            <button id="escape">Escape Battle</button>
        </div>
    </div>
    <div class="section">
        <h2>Utility Hacks</h2>
        <div>
            <label for="toggleTeleport">Toggle Click Teleporting</label>
            <div id="toggleTeleport" class="toggle-switch"></div>
        </div>
    </div>
    <div class="section">
        <h2>Minigame Hacks</h2>
        <div>
            <button id="speed">Edit Dino Dig Walkspeed</button>
        </div>
    </div>
    <div class="section" id="betaSection">
        <h2>Beta</h2>
        <div>
            <button id="petSlot">Pet Slot</button>
        </div>
    </div>
    `;
    menu.querySelector('#betaSection').style.display = 'none';
    document.body.appendChild(menu);

    // Function to show or hide the cheat menu
    function toggleMenu() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('visible');
        } else {
            menu.classList.remove('visible');
            menu.classList.add('hiding');
            setTimeout(function() {
                menu.classList.remove('hiding');
                menu.classList.add('hidden');
            }, 300);
        }
    }

    // Create the toggle menu button
    var toggleButton = document.createElement('div');
    toggleButton.id = 'toggleMenu';
    toggleButton.innerHTML = '&#x25BC;';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        toggleMenu();
        this.classList.toggle('rotated');
    });

    // Function to check the beta status and show/hide the Beta section
    function checkBetaStatus() {
        if (typeof fusion !== 'undefined' && fusion.beta === 1) {
            document.querySelector('#betaSection').style.display = 'block';
        } else {
            document.querySelector('#betaSection').style.display = 'none';
        }
    }

    setInterval(checkBetaStatus, 1000);
})();
