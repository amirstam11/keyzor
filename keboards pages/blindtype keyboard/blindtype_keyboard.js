document.addEventListener("DOMContentLoaded", function() {
    const name = "BLINDTYPE";
    const price = 549.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("BT_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/blindtype photos/blindtype_keyboard.png";
    });

    document.getElementById("BT_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/blindtype photos/blindtype_keyboard2.png";
    });

    document.getElementById("BT_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/blindtype photos/blindtype_keyboard_noRGB.png";
    });

    document.getElementById("BT_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/blindtype photos/blindtype_keyboard2_noRGB.png";
    });

    document.getElementById("BT_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/blindtype photos/blindtype_keyboard_setup.png";
    });
});