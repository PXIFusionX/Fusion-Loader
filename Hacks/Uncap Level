(async function() {
    document.getElementById('uncapLevel').onclick = function() {
    // Check if SweetAlert library is loaded; if not, load it
    if (typeof Swal === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        script.onload = main;
        document.head.appendChild(script);
    } else {
        main();
    }

    async function main() {
        const value = await Swal.fire({
            title: "Set Player Level",
            input: "number",
            inputLabel: "Enter the level you want to set:",
            inputAttributes: {
                min: 1,
                step: 1
            },
            showCancelButton: true,
            confirmButtonText: "Set Level",
            inputValidator: (value) => {
                if (!value || value < 1) {
                    return "Please enter a valid level (minimum 1).";
                }
            }
        });

        if (value.isConfirmed) {
            const level = parseInt(value.value);
            const player = Boot.prototype.game._state._current.user.source;
            player.getLevel = () => level;
            Swal.fire({
                icon: "success",
                title: `Level Set Successfully!`,
                text: `You are now level ${level}.`,
                toast: true,
                position: 'bottom',
                showConfirmButton: true
            });
        }
    }
}})();
