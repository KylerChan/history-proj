document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
    window.voiceflow.chat.load({
        verify: { projectID: '6905c7ab9edb189fdaacf6b7' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
        url: "https://runtime-api.voiceflow.com"
        }
    });
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');

lucide.createIcons();



// ------------------------------------------------------------

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeBorder(nameOfSection) {
    nameOfSection.classList.add("border", "border-gray-400");
    await delay(2000);
    nameOfSection.classList.remove("border", "border-gray-400");
}

const overviewNav = document.querySelector('a[href="#overview"]');
const timelineNav = document.querySelector('a[href="#timeline"]');
const innovationsNav = document.querySelector('a[href="#innovations"]');
const impactNav = document.querySelector('a[href="#impact"]');
const sourcesNav = document.querySelector('a[href="#sources"]');

const overview = document.getElementById("overview");
const timeline = document.getElementById("timeline");
const innovations = document.getElementById("innovations");
const impact = document.getElementById("impact");
const sources = document.getElementById("sources");
const rickrollbtn = document.getElementById("rickrollbtn");

if (overviewNav && overview) {
    overviewNav.addEventListener("click", () => makeBorder(overview));
}

if (timelineNav && timeline) {
    timelineNav.addEventListener("click", () => makeBorder(timeline));
}

if (innovationsNav && innovations) {
    innovationsNav.addEventListener("click", () => makeBorder(innovations));
}

if (impactNav && impact) {
    impactNav.addEventListener("click", () => makeBorder(impact));
}

if (sourcesNav && sources) {
    sourcesNav.addEventListener("click", () => makeBorder(sources));
}
