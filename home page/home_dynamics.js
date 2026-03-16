document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) 
        {
            document.body.classList.add("rgb");
            document.documentElement.style.setProperty("--title-color", "#456882")
        } 
        else if (!checkbox.checked)
        {
            document.body.classList.remove("rgb");
            document.documentElement.style.setProperty("--title-color", "#494949")
        }
    }); 
});