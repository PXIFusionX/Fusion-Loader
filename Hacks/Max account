(function() {
    document.getElementById('max').onclick = function() {
    // Include SweetAlert library
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    document.head.appendChild(script);

    script.onload = () => {
        // Function to generate a random integer within a specified range
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Function to calculate pet HP based on level and game data
        function getHpFromPet(level, petGameData) {
            const statValue = petGameData.data.statHealth;
            const level1Hp = (500 / 1.25) * Math.pow((Math.pow(1.25, 0.25)), statValue - 1);
            const hpInc = (100 / 1.25) * Math.pow((Math.pow(1.25, 0.25)), statValue - 1);

            return Math.ceil(level1Hp + (level - 1) * hpInc);
        }

        // Function to calculate XP based on level
        function getXP(level) {
            if (level === 1) {
                return 0;
            } else if (level === 2) {
                return 10;
            }
            const offsetLevel = level - 2;
            const xpConstant = 1.042;
            return Math.round((((1 - Math.pow(xpConstant, offsetLevel)) / (1 - xpConstant)) * 20) + 10);
        }

        // Function to add all pets to player's kennel
        function getAllPets(gameData, player) {
            const level = 100;
            const xp = getXP(level);
            const pets = gameData.pet;
            pets.forEach(pet => {
                player.kennel.addPet(pet.data.member === 0 ? pet.ID : pet.ID.toString(), getHpFromPet(level, pet), xp, level);
            });
            player.kennel._encounterInfo._data.pets = pets.map(pet => ({
                firstSeenDate: Date.now() - randomIntFromInterval(20000, 120000),
                ID: pet.ID,
                timesBattled: 1,
                timesRescued: 1,
                rescueAttempts: 1
            }));
        }

        // Function to change player level
        function changeLevel(player) {
            const level = 120;
            if (level === 1) {
                player.data.stars = 0;
            } else if (level === 2) {
                player.data.stars = 10;
            } else {
                const offsetLevel = level - 2;
                const xpConstant = 1.042;
                player.data.stars = Math.round((((1 - Math.pow(xpConstant, offsetLevel)) / (1 - xpConstant)) * 20) + 10);
            }
            player.data.level = level;
        }

        // Function to itemify an item array with a specific amount
        function itemify(item, amount) {
            return item.map(i => ({
                ID: i.ID,
                N: amount
            })).filter(v => v !== undefined);
        }

        // Function to get all items and stack them
        function getAllItems(player, gameData) {
            const value = 999;
            const ids = ['item', 'currency', 'boots', 'hat', 'outfit', 'mount', 'relic', 'follow', 'weapon'];
            ids.forEach(id => {
                player.backpack.data[id] = itemify(gameData[id].filter(l => id === "follow" ? ![125, 126, 127, 128, 129, 134, 135, 136, 137].includes(l.ID) : l), value);
            });
            gameData.dorm.forEach(x => {
                player.house.data.items[x.ID] = { A: [], N: value };
            });
            const bountyIndex = () => player.backpack.data.item.findIndex(v => v.ID === 84 || v.ID === 85 || v.ID === 86);
            while (bountyIndex() > -1) {
                player.backpack.data.item.splice(bountyIndex(), 1);
            }
            player.backpack.updated = true;
        }

        // Function to show success message using SweetAlert
        function success(message) {
            Swal.fire({
                icon: "success",
                title: `${message}`,
                text: `${message}.`,
                toast: true,
                position: 'bottom',
                showConfirmButton: true
            });
        }

        const hack = (title, message, action) => {
            Swal.fire({
                title: title,
                text: message,
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Proceed',
            }).then((result) => {
                if (result.isConfirmed) {
                    const player = Boot.prototype.game._state._current.user.source;
                    const gameData = Boot.prototype.game._state._states.get("Boot")._gameData;
                    action(hack, player, gameData);
                }
            });
        };

        hack("Max Account", "Complete your account. *Warning This Hack Takes Up To 1 Minute Due To All The Pets That Our Being Added*", async (hack, player, gameData) => {
            player.data.gold = 9000000;
            player.data.storedMemberStars = 9999999;
            player.data.bountyScore = 100;
            player.data.win = 1000;
            player.data.loss = 0;
            player.data.tower = 100;
            for (let i = 0; i < 100; i++) {
                player.achievements.data.progress[i] = 10;
            }
            player.achievements.updated = true;
            changeLevel(player);
            getAllPets(gameData, player);
            getAllItems(player, gameData);
            success('Your account is now maxed out.');
        });
    };
}})();
