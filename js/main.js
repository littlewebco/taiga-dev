



document.addEventListener("DOMContentLoaded", function () {
    loadTemplatePart("template-part/navbar.html", "navbar-container");
    loadTemplatePart("template-part/header.html", "header-container");
    loadTemplatePart("template-part/hero-section.html", "hero-section-container");
    loadTemplatePart("template-part/about-section.html", "about-section-container");
    loadTemplatePart("template-part/clothing-section.html", "clothing-section-container");
    loadTemplatePart("template-part/brand-section.html", "brand-section");
    loadTemplatePart("template-part/painting-buttons.html", "painting-buttons");
    loadTemplatePart("template-part/cbd-container.html", "cbd-container");
    loadTemplatePart("template-part/mainContext.html", "mainContext");
    loadTemplatePart("template-part/footer.html", "footer-container");
});

function loadTemplatePart(path, containerId) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok" + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => {
            console.error("There has been a problem with your fetch operation:", error);
        });
}


// List containing the paths for each script
const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    "https://code.jquery.com/jquery-3.6.0.min.js",
    "js/custom.js",
    "js/vendor.min.js",
    "https://kit.fontawesome.com/5005d91504.js",
    "js/apps.js",
];

function loadScripts(scriptArr) {
    scriptArr.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true; // defer non-critical scripts
        script.addEventListener('load', () => {
            console.log(`${src} loaded successfully`);
        });
        script.addEventListener('error', () => {
            console.error(`Failed to load script: ${src}`);
        });
        document.head.appendChild(script);
    });
}

// You can then have a separate array for critical scripts and load them without defer.

// Call the function to load the scripts
loadScripts(scripts);
