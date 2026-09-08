
       const navlinks = document.querySelectorAll('.filter-button');
       const images = document.querySelectorAll('.project-image');

       navlinks.forEach(button => {

       button.addEventListener("click", (event) => {

        event.preventDefault();

        const category = button.getAttribute("data-category");

        images.forEach(image => {

            if (category === "all" || image.getAttribute("data-category") === category) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }

        });

    });

});


