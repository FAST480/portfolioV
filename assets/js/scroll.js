const arrow = document.querySelector('.arrow-down-link');

arrow.addEventListener('click', (e) => {
    e.preventDefault();

    const id = arrow.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    if(section)
    {
        seamless.scrollIntoView((section), {
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    }
});
