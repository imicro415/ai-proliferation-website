async function loadText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    return await res.text();
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function setImg(id, {src, alt, title }) {
    const img = document.getElementById(id);
    if (!img) return;
    if (src) img.src = src;
    if (alt) img.alt = alt;
    if (title) img.title = title;
}

function txtToParagraphs(text) {
    return text
        .trim()
        .split(/\n\s*\n/)
        .map(p => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`)
        .join("");
}

export async function renderPage(cfg) {
    setText("slot-title", cfg.title);
    setText("slot-section-heading", cfg.sectionHeading);

    setImg("img-hero", cfg.heroImage);
    setImg("img-secondary", cfg.secondaryImage);

    const intro = await loadText(cfg.introTxt);
    setHTML("slot-intro", txtToParagraphs(intro));

    const body = await loadText(cfg.bodyTxt);
    setHTML("slot-body", txtToParagraphs(body));
}
