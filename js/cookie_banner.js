// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to check cookie and show/hide banner
function checkCookie() {
    const cookieConsent = getCookie("cookieConsent");
    if (cookieConsent !== "accepted") {
        document.getElementById("cookie-banner").style.display = "block";
    } else {
        loadGoogleAnalytics();
    }
}

// Event listener for the Accept button
document.getElementById("accept-cookies").addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 30);
    document.getElementById("cookie-banner").style.display = "none";
    loadGoogleAnalytics();
});

// Check cookie on page load
window.onload = function () {
    checkCookie();
};

// Function to load Google Analytics scripts
function loadGoogleAnalytics() {
    // Load the Google Analytics script
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-G6MZRGKKM4";
    document.head.appendChild(gaScript);

    // Initialize Google Analytics
    gaScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-G6MZRGKKM4');
    };
}