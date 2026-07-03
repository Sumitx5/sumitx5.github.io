function hide(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add("hidden");
    }
}

function show(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove("hidden");
    }
}

hide("aboutme");
hide("aboutme_content");
hide("help_page")

function active_home() {
    show("apps");
    show("apps_content");
    hide("help_page");
    hide("help_content");
    show("home");
    hide("aboutme");
    hide("aboutme_content");
}

function active_apps() {
    hide("aboutme");
    hide("aboutme_content");
    hide("help_page");
    hide("help_content");
    
    show("apps");
    show("apps_content");
}

function active_aboutme() {
    hide("apps");
    hide("apps_content");
    hide("help_page");
    hide("help_content");
    hide("home");
    
    show("aboutme");
    show("aboutme_content");
}

function active_help() {
    hide("aboutme");
    hide("aboutme_content");
    hide("apps");
    hide("apps_content");
    hide("home");
    
    show("help_page");
    show("help_content");
}