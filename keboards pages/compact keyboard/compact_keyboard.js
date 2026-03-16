document.addEventListener("DOMContentLoaded", function() {
    const name = "BLINDTYPE";
    const price = 549.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("CP_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/compact photos/compact_keyboard.png";
    });

    document.getElementById("CP_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/compact photos/compact_keyboard2.png";
    });

    document.getElementById("CP_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/compact photos/compact_keyboard_noRGB.png";
    });

    document.getElementById("CP_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/compact photos/compact_keyboard2_noRGB.png";
    });

    document.getElementById("CP_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/compact photos/compact_keyboard_setup.png";
    });
});