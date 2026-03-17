function checkAndRedirect() {
    const href = window.location.href;
    const path = window.location.pathname;

    if (path === "/" || path === "/home" || path.startsWith("/shorts/")) {
        window.location.replace("https://www.youtube.com/feed/subscriptions");
    }
}

checkAndRedirect();

const observer = new MutationObserver(() => {
    checkAndRedirect();
});

observer.observe(document.documentElement, { childList: true, subtree: true });

window.addEventListener("yt-navigate-finish", checkAndRedirect);
window.addEventListener("popstate", checkAndRedirect);