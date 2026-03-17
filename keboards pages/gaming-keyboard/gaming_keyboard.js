document.addEventListener("DOMContentLoaded", function() {
    const name = "GAMING";
    const price = 499.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("GM_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/gaming-photos/gaming_keyboard.png";
    });

    document.getElementById("GM_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/gaming-photos/gaming_keyboard2.png";
    });

    document.getElementById("GM_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/gaming-photos/gaming_keyboard_noRGB.png";
    });

    document.getElementById("GM_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/gaming-photos/gaming_keyboard2_noRGB.png";
    });

    document.getElementById("GM_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/gaming-photos/gaming_keyboard_setup.png";
    });
});