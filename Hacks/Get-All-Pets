javascript:(function() {
    document.getElementById('getAllPets').onclick = async function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(script);

    script.onload = function() {
        var Player = Boot.prototype.game._state._current.user.source;
        var GameData = Boot.prototype.game._state._states.get("Boot")._gameData;

        function WipePets() {
            Player.kennel._petData = [];
            Player.appearanceChanged = true;
        }

        function CreatePet(id, level) {
            Player.kennel._encounterInfo._data.pets = [];
            GameData.pet[id];
            Player.kennel._encounterInfo._data.pets.push({
                firstSeenDate: Date.now(),
                ID: id,
                timesBattled: 1,
                timesRescued: 1
            });
            Player.kennel.petTeam.forEach(v => {
                if (v && v.assignRandomSpells) {
                    v.assignRandomSpells();
                }
            });
            Player.appearanceChanged = true;
            return Player.kennel.addPet(id.toString(), 9007199254740991, 26376, level);
        }

        function GetAllPets(level) {
            WipePets();
            GameData.pet.forEach(x => {
                CreatePet(x.ID, level);
            });
        }

        Swal.fire({
            title: 'Enter Pet Level',
            input: 'number',
            inputAttributes: {
                min: 1,
                max: 475,
                step: 1
            },
            inputValue: 1,
            showCancelButton: true,
            confirmButtonText: 'Set Level',
            preConfirm: (level) => {
                if (level < 1 || level > 475) {
                    Swal.showValidationMessage('Level must be between 1 and 475');
                    return false;
                }
                return level;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let level = result.value;
                GetAllPets(level);
                Swal.fire('Success', `All pets have been set to level ${level}`, 'success');
            }
        });
    };
}})();
