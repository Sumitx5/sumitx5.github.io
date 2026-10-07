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

function active_home() {
    show("apps");
    show("apps_content");
    show("home");
}

function active_apps() { 
    show("apps");
    show("apps_content");
}

// Apps Data Handeler
async function loadApps() {
    try {
    const response = await fetch('data/apps.json');
    const apps = await response.json();
    const container = document.getElementById('cards-container');

    container.innerHTML = apps.map(app => `
        <div class="glass-card">
        <!-- Icon -->
        <div class="glass-icon-circle">
            ${app.icon ? `
            <img 
                src="${app.icon}" 
                alt="${app.title}" 
                class="app-icon-img"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            />
            ` : ''}
            <svg class="fallback-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="${app.icon ? 'display: none;' : ''}">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
            </svg>
        </div>

        <!-- Title & Version -->
        <div class="title-row">
            <h3 class="glass-heading">${app.title}</h3>
            <span class="glass-version">${app.version}</span>
        </div>

        <!-- Description -->
        <p class="glass-desc">${app.description}</p>

        <!-- Badges -->
        <div class="badge-group2">
            ${app.badges.map(b => `<span class="glass-badge">${b}</span>`).join('')}
        </div>

        <!-- Divider -->
        <hr class="glass-divider" />

        <!-- Actions -->
        <div class="glass-actions">
            <a href="${app.detailsUrl}" target="_blank" rel="noopener noreferrer" class="glass-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Details</span>
            </a>

            <a href="${app.downloadUrl}" target="_blank" rel="noopener noreferrer" class="glass-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    ${app.title === "AniTox" ? `
                    <!-- External Link / Launch Icon for Open -->
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                    ` : `
                    <!-- Arrow Icon for Download -->
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                    `}
                </svg>
                <span>${app.title === "AniTox" ? "Open" : "Download"}</span>
            </a>
        </div>
        </div>
    `).join('');
    } catch (err) {
    console.error('Error loading apps:', err);
    }
}

loadApps();