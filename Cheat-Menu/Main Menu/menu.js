(function() {
    // Create the cheat menu container
    var menu = document.createElement('div');
    menu.id = 'cheatMenu';
    menu.className = 'hidden'; // Initially hidden off-screen
    menu.innerHTML = `
    <h1>
        PXI Fusion X Cheat Menu
        <div class="icons">
            <a href="https://discord.gg/qZfhwNzm9P" target="_blank">
                <img src="${chrome.runtime.getURL('assets/icons/discord.png')}" alt="Discord Icon">
            </a>
            <a href="https://www.youtube.com/@PXIFusionX" target="_blank">
                <img src="${chrome.runtime.getURL('assets/icons/youtube.png')}" alt="YouTube Icon">
            </a>
        </div>
        <button id="announcementButton">Announcements</button>
    </h1>
        <p>Join our discord for hack updates & support: https://dsc.gg/pxi-fusion</p>
        <div class="section">
            <h2>Player Hacks</h2>
            <div>
                <button id="max">Max Account</button>
                <button id="setGold">Set Gold</button>
                <button id="setLevel">Set Level</button>
                <button id="permanentMorphButton">Permanent Morph</button>
                <button id="uncapLevel">Uncap Level (Client-Side Only)</button>
                <button id="memberStar">Set Member Stars</button>
                <button id="setBounty">Set Bounty Points</button>
                <button id ="dark">Set Dark Tower Floor</button>
                <button id="completeQuest">Complete Current Task In Quest</button>
                <button id="changeName">Change Name</button>
                <button id="setName">Set Name (Client-Side Only)</button>
                <button id="setGrade">Set Grade</button>
                <button id="spins">Unlimited Spins</button>
            </div>
        </div>
        <div class="section">
            <h2>Inventory Hacks</h2>
            <div>
                <button id="itemStacker">Item Stacker</button>
                <button id="clearInventory">Clear Inventory</button>
                <button id="selectorBasic">Selector (Basic)</button>
                <button id="advancedSelectorButton">Selector (Advanced)</button>
                <button id="removeItem">Remove Item</button>
                <button id="obtainFurniture">Obtain All Furniture</button>
                <button id="saveInventory">Save Inventory</button>
            </div>
        </div>
        <div class="section">
            <h2>Pet Hacks</h2>
            <div>
                <button id="getAllPets">Get All Pets</button>
                <button id="clearPets">Clear All Pets</button>
                <button id="addPet">Add Pet</button>
                <button id="deletePet">Delete Pet</button>
                <button id="editPet">Edit Pet</button>
                <button id="savePet">Save Pet Data</button>
            </div>
        </div>
        <div class="section">
            <h2>Battle Hacks (More coming soon)</h2>
            <div>
                <button id ="escape">Escape Battle</button>
                <button id ="pvpHealth">PVP Health</button>
            </div>
        </div>
        <div class="section">
            <h2>Utility Hacks</h2>
            <div>
                <label for="toggleTeleport">Toggle Click Teleporting</label>
                <div id="toggleTeleport" class="toggle-switch"></div>
                <button id="walk">Edit Walkspeed</button>
                <button id="bobby">Bobbified</button>
                <button id="reset">Reset Account</button>
                <button id="findUserId">Find the UserId of People on the Screen</button>
                <button id="dup">Duplicate an Account</button>
                <button id="teleportToWorld">Teleport To World</button>
            </div>
        </div>
        <div class="section">
            <h2>Minigame Hacks</h2>
            <div>
                <button id="speed">Edit Dino Dig Walkspeed</button>
                <button id="moreTime">Extra Time In Dino Dig</button>
                <button id="endDino">End Dino Dig</button>
            </div>
        </div>
    `;
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
            }, 300); // Match the transition duration in CSS
        }
    }

    // Create the toggle menu button
    var toggleButton = document.createElement('div');
    toggleButton.id = 'toggleMenu';
    toggleButton.innerHTML = '&#x25BC;'; // Down arrow symbol
    document.body.appendChild(toggleButton);

    // Add click event to the toggle button
    toggleButton.addEventListener('click', function() {
        toggleMenu();
        this.classList.toggle('rotated');
    });

    // Add your existing functions for button functionality below:
    // Example: 
    // document.getElementById('max').addEventListener('click', maxAccountFunction);
    // (Repeat this for each button using your existing function references)
})();
