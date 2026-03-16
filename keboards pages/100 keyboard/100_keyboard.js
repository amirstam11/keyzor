document.addEventListener("DOMContentLoaded", function() {
    const name = "100%";
    const price = 699.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("100_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/100 photos/100_keyboard.png";
    });

    document.getElementById("100_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/100 photos/100_keyboard2.png";
    });

    document.getElementById("100_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/100 photos/100_keyboard_noRGB.png";
    });

    document.getElementById("100_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/100 photos/100_keyboard2_noRGB.png";
    });

    document.getElementById("100_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/100 photos/100_keyboard_setup.png";
    });
});