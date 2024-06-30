// Selector (Advanced) button functionality
        document.getElementById('advancedSelectorButton').onclick = async function() {
            const names = ["Boots", "Buddies", "Fossils", "Hats", "Items", "Key Items", "Tower Town Frames", "Tower Town Interiors", "Mounts", "Outfits", "Relics", "Weapons", "Currencies"];
            const ids = ["boots", "follow", "fossil", "hat", "item", "key", "mathTownFrame", "mathTownInterior", "mount", "outfit", "spellRelic", "weapon", "currency"];

            const gameData = Boot.prototype.game._state._states.get("Boot")._gameData;
            const player = Boot.prototype.game._state._current.user.source;

            const InputTypes = {
                select: async function(message, options) {
                    return new Promise((resolve) => {
                        let selectHTML = `<select id="inputSelect">`;
                        options.forEach((option, index) => {
                            selectHTML += `<option value="${index}">${option}</option>`;
                        });
                        selectHTML += `</select>`;
                        
                        Swal.fire({
                            title: message,
                            html: selectHTML,
                            preConfirm: () => {
                                return document.getElementById('inputSelect').value;
                            }
                        }).then((result) => {
                            resolve(parseInt(result.value));
                        });
                    });
                },
                integer: async function(message, min, max) {
                    return new Promise((resolve) => {
                        Swal.fire({
                            title: message,
                            input: 'number',
                            inputAttributes: {
                                min: min,
                                max: max
                            },
                            preConfirm: (value) => {
                                return parseInt(value);
                            }
                        }).then((result) => {
                            resolve(result.value);
                        });
                    });
                }
            };

            const hack = async (name, description, func) => {
                console.log(`Hack: ${name} - ${description}`);
                await func();
            };

            hack("Selector (Advanced)", "Precisely pick the amount of an individual item you want to receive.", async () => {
                const itemCategoryIndex = await InputTypes.select("Please select the category of items you want to get.", names);
                const itemCategoryId = ids[itemCategoryIndex];
                const itemCategoryOptions = gameData[itemCategoryId];
                const itemIndex = await InputTypes.select("Please select the item you want to get.", itemCategoryOptions.map(e => e.data.name));
                const itemData = itemCategoryOptions[itemIndex];
                const amount = await InputTypes.integer(`Please enter the amount of ${itemData.data.name} you want to get.`, 0, 9999);
                const indexOfItem = player.backpack.data[itemCategoryId].findIndex(i => i.ID === itemData.ID);
                if (indexOfItem === -1) {
                    player.backpack.data[itemCategoryId].push({ ID: itemData.ID, N: amount });
                } else {
                    player.backpack.data[itemCategoryId][indexOfItem].N = amount;
                }
                Swal.fire({
                    title: 'Success',
                    text: `You now have ${amount} of ${itemData.data.name}.`,
                    icon: 'success',
                    toast: true,
                    position: 'bottom',
                    showConfirmButton: false,
                });
            });
        };
