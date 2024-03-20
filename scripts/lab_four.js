let dt = new Date();
document.getElementById("year").textContent = dt.getFullYear();


function goToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});

}