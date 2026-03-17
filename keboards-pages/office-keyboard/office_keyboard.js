document.addEventListener("DOMContentLoaded", function() {
    const name = "GAMING";
    const price = 149.90

    let main_img = document.getElementById("main_photo");

    document.getElementById("OF_1_img").addEventListener("click", function() {
        main_img.src = "../../photos/office-photos/office_keyboard.png";
    });

    document.getElementById("OF_2_img").addEventListener("click", function() {
        main_img.src = "../../photos/office-photos/office_keyboard2.png";
    });

    document.getElementById("OF_1noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/office-photos/office_keyboard_second.png";
    });

    document.getElementById("OF_2noRgb_img").addEventListener("click", function() {
        main_img.src = "../../photos/office-photos/office_keyboard2_second.png";
    });

    document.getElementById("OF_setup_img").addEventListener("click", function() {
        main_img.src = "../../photos/office-photos/office_keyboard_setup.png";
    });
});