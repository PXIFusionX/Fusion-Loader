// Teleport To World button functionality
        document.getElementById('teleportToWorld').onclick = async function() {
            const getWorld = () => {
                const hack = getHack();
                return hack._state._current._world;
            };

            const world = getWorld();
            const locationNames = Object.values(world.zones).map((zone) => zone.name);
            const locationIds = Object.keys(world.zones);

            const locationResult = await Swal.fire({
                title: 'Select Location',
                input: 'select',
                inputOptions: locationNames,
                inputPlaceholder: 'Select a location',
                showCancelButton: true
            });

            if (locationResult.isDismissed) return;

            const location = locationResult.value;
            const locationId = locationIds[location];
            const locationName = locationNames[location];

            const zone = world.zones[locationId];
            const maps = Object.keys(zone.maps);

            const mapResult = await Swal.fire({
                title: 'Select Map',
                input: 'select',
                inputOptions: maps,
                inputPlaceholder: 'Select a map',
                showCancelButton: true
            });

            if (mapResult.isDismissed) return;

            const map = mapResult.value;

            zone.teleport(maps[map], 500, 500, {}, {});

            Swal.fire({
                icon: 'success',
                title: 'Teleported',
                text: `You have been teleported to ${locationName} - ${maps[map]}.`,
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        };

        function getHack() {
            // Assuming you have a function to get the current hack instance
            // Replace this with your actual method of getting the hack instance
            return Boot.prototype.game;
        }
