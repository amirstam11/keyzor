document.addEventListener("DOMContentLoaded", function() {
    const name = "GAMING";
    const price = 149.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("VT_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/vintege photos/vintege_keyboard.png";
    });

    document.getElementById("VT_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/vintege photos/vintege_keyboard2_setup.png";
    });

    document.getElementById("VT_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/vintege photos/vintege_keyboardPos2_setup.png";
    });

    document.getElementById("VT_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/vintege photos/vintege_keyboard2Pos2_setup.png";
    });

    document.getElementById("VT_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/vintege photos/vintege_keyboard_setup.png";
    });
});