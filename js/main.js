/* Kode tampilan & animasi. Biasanya tidak perlu diubah; isi website ada di data.js */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- teks dasar ---- */
document.querySelectorAll("[data-name]").forEach(e => e.textContent = D.name);
document.querySelectorAll("[data-title]").forEach(e => e.textContent = D.title);
const socialIcons = {
  GitHub: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  Instagram: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  LinkedIn: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
};

const clinksEl = $("clinks");
if (clinksEl) {
  clinksEl.innerHTML = D.links
    .filter(l => l.label.toLowerCase() !== "email")
    .map(l => `
      <a class="social-btn" href="${esc(l.url)}" target="_blank" rel="noopener" aria-label="${esc(l.label)}" title="${esc(l.label)}">
        ${socialIcons[l.label] || esc(l.label)}
      </a>
    `).join("");
}

const findEl = $("find");
if (findEl) {
  findEl.innerHTML = D.links.map(l => `<a href="${esc(l.url)}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`).join("");
}

/* ---- foto diri + efek Venom (aman: tidak akan jadi hitam jika foto venom belum ada) ---- */
document.querySelectorAll(".photo").forEach(p => {
  const hasVenom = Boolean(D.photo && D.photo.venom);
  p.innerHTML = `<img class="normal" src="${esc(D.photo.normal)}" alt="Foto ${esc(D.name)}" draggable="false">` +
    (hasVenom ? `<img class="venom" src="${esc(D.photo.venom)}" alt="" draggable="false">` : "");

  const normalImg = p.querySelector(".normal");
  if (normalImg) {
    normalImg.onerror = e => {
      const d = document.createElement("div");
      d.className = "ph normal";
      d.textContent = "Add photo to " + D.photo.normal;
      e.target.replaceWith(d);
    };
  }

  const venomImg = p.querySelector(".venom");
  if (venomImg) {
    venomImg.onerror = () => {
      venomImg.remove();
      p.classList.remove("has-venom");
    };
    venomImg.onload = () => {
      p.classList.add("has-venom");
    };
  }

  if (!p.closest("#card")) {
    p.onclick = () => {
      if (p.querySelector(".venom")) p.classList.toggle("on");
    };
  }
});

/* ---- FOTO ABOUT ME (CUTOUT DENGAN STIKER DESAINER & 3D PARALLAX) ---- */
(function () {
  const aboutImg = $("aboutImg");
  if (aboutImg && typeof D !== "undefined") {
    const targetSrc = (D.photo && D.photo.about) ? D.photo.about : D.photo.normal;
    aboutImg.src = esc(targetSrc);
    aboutImg.onerror = () => {
      // Fallback ke foto normal jika foto-about.png belum ditambahkan oleh user
      if (aboutImg.src !== D.photo.normal) {
        aboutImg.src = esc(D.photo.normal);
      }
    };
  }

  const aboutPortrait = $("aboutPortrait");
  if (aboutPortrait && !still) {
    const imgBox = aboutPortrait.querySelector(".portrait-img-box");
    const badges = aboutPortrait.querySelector(".portrait-badges");
    aboutPortrait.addEventListener("mousemove", e => {
      const r = aboutPortrait.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (imgBox) {
        imgBox.style.transform = `perspective(800px) rotateY(${px * 14}deg) rotateX(${-py * 12}deg) translateY(-4px)`;
      }
      if (badges) {
        badges.style.transform = `translate3d(${px * 10}px, ${py * 8}px, 0)`;
      }
    });
    aboutPortrait.addEventListener("mouseleave", () => {
      if (imgBox) imgBox.style.transform = "";
      if (badges) badges.style.transform = "";
    });
  }
})();

/* ---- education, experience, spotify ---- */
const logo = l => `<div class="logo">${l ? `<img src="${esc(l)}" alt="">` : "logo"}</div>`;
const items = a => a.map(e => `<div class="card item">${logo(e.logo)}<div class="item-info"><b>${esc(e.name)}</b><small>${esc(e.sub)}</small>${e.years ? `<i>${esc(e.years)}</i>` : ""}</div></div>`).join("");

const expItems = a => a.map((e, idx) => {
  const hasShowcase = Boolean(e.showcase);
  return `
    <div class="card item ${hasShowcase ? "is-interactive" : ""}"
         ${hasShowcase ? `data-exp-idx="${idx}" tabindex="0" role="button" aria-label="View works at ${esc(e.name)}"` : ""}>
      ${logo(e.logo)}
      <div class="item-info">
        <b>${esc(e.name)}</b>
        <small>${esc(e.sub)}</small>
        ${e.years ? `<i>${esc(e.years)}</i>` : ""}
      </div>
      ${hasShowcase ? `
        <div class="item-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </div>
      ` : ""}
    </div>
  `;
}).join("");

$("edu").innerHTML = items(D.education);
$("exp").innerHTML = expItems(D.experience);
$("spotify").innerHTML = D.spotify.playlistId
  ? `<iframe src="https://open.spotify.com/embed/playlist/${encodeURIComponent(D.spotify.playlistId)}?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Playlist Spotify"></iframe>`
  : `<div class="empty">Spotify player will appear here.<br>Set <code>spotify.playlistId</code> in js/data.js</div>`;

/* ---- tab portfolio ---- */
const thumb = (src, alt) => src ? `<div class="thumb has"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>` : `<div class="thumb">Add image here</div>`;
const simple = (a, type = "") => `<div class="grid">${a.map((c, idx) => `
  <article class="card pc ${c.image ? "is-interactive" : ""}"
           ${c.image ? `data-${type || "item"}-idx="${idx}" tabindex="0" role="button" aria-label="View ${esc(c.title)}"` : ""}>
    ${thumb(c.image, c.title)}
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.sub)}</p>
  </article>
`).join("")}</div>`;

function renderProjectCard(p, idx) {
  const hasDetail = Boolean(p.details || p.link);
  return `
    <article class="card pc ${hasDetail ? "is-interactive" : ""}" data-project-idx="${idx}" tabindex="${hasDetail ? "0" : "-1"}" role="${hasDetail ? "button" : "article"}" aria-label="${esc(p.title)}">
      ${thumb(p.image, p.title)}
      <div class="kind">${esc(p.type)}</div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="tags">
        ${p.skills.map(s => `<span>${esc(s)}</span>`).join("")}
      </div>
      <div class="pc-actions">
        ${hasDetail ? `
          <button type="button" class="btn btn-detail" data-open-idx="${idx}">
            <span>Case Study & Prototype</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
          </button>
        ` : (p.link ? `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">Details ↗</a>` : "")}
      </div>
    </article>
  `;
}

function renderAchievementCard(a) {
  return `
    <article class="card pc achieve-card">
      <div class="achieve-banner">
        <div class="achieve-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34"/>
            <path d="M18 4H6v7a6 6 0 0 0 12 0V4z"/>
          </svg>
        </div>
        ${a.role ? `<span class="achieve-badge-tag">${esc(a.role)}</span>` : ""}
      </div>
      <h3>${esc(a.title)}</h3>
      <div class="achieve-organizer">${esc(a.sub)}</div>
      ${a.project ? `<div class="achieve-work"><em>“${esc(a.project)}”</em></div>` : ""}
      <p class="achieve-desc">${esc(a.desc || "")}</p>
    </article>
  `;
}

const panels = {
  "Projects": () => `<div class="grid">${D.projects.map((p, idx) => renderProjectCard(p, idx)).join("")}</div>`,
  "Certificates": () => simple(D.certificates, "cert"),
  "Achievements": () => `<div class="grid">${D.achievements.map(a => renderAchievementCard(a)).join("")}</div>`,
  "Tech Stack": () => `<div class="stack">${D.stack.map(([n, a, img]) => `<div class="card tile">${img ? `<img src="${esc(img)}" alt="">` : `<s>${esc(a)}</s>`}${esc(n)}</div>`).join("")}</div>`
};

Object.keys(panels).forEach((name, i) => {
  const b = document.createElement("button");
  b.role = "tab"; b.textContent = name; b.setAttribute("aria-selected", i === 0);
  b.onclick = () => {
    [...$("tabs").children].forEach(x => x.setAttribute("aria-selected", x === b));
    $("panel").innerHTML = panels[name]();
    if (window.observeReveals) window.observeReveals($("panel"));
  };
  $("tabs").appendChild(b);
});
$("panel").innerHTML = panels["Projects"]();

/* ---- MODAL DETAIL PROJEK & PLAYABLE FIGMA PROTOTYPE ---- */
const projectModal = $("projectModal");
const modalClose = $("modalClose");
const modalBackdrop = $("modalBackdrop");
const modalContent = $("modalContent");

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!projectModal.classList.contains("open") && modalContent) {
      modalContent.innerHTML = "";
    }
  }, 350);
}

function openProjectModal(idx) {
  const p = D.projects[idx];
  if (!p || !projectModal || !modalContent) return;

  const d = p.details || {};
  let cleanLink = p.link || "";
  cleanLink = cleanLink.replace(/show-proto-sidebar=1/g, "show-proto-sidebar=0");
  if (!cleanLink.includes("hide-ui=1")) {
    cleanLink += (cleanLink.includes("?") ? "&" : "?") + "hide-ui=1";
  }
  if (!cleanLink.includes("show-proto-sidebar=0")) {
    cleanLink += "&show-proto-sidebar=0";
  }
  const figmaEmbed = cleanLink
    ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(cleanLink)}`
    : "";

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <header class="pm-header">
      <div class="pm-badges">
        <span class="pm-pill type">${esc(p.type)}</span>
        ${d.scope ? `<span class="pm-pill scope">📍 ${esc(d.scope)}</span>` : ""}
      </div>
      <h1 class="pm-title">${esc(p.title)}</h1>
      <p class="pm-lead">${esc(p.desc)}</p>

      ${d.role ? `
        <div class="pm-meta-grid">
          <div class="pm-meta-item">
            <span class="lbl">ROLE</span>
            <b>${esc(d.role)}</b>
          </div>
          <div class="pm-meta-item">
            <span class="lbl">TARGET AUDIENCE</span>
            <b>${esc(d.targetUsers || "Boarding House Owners & Students")}</b>
          </div>
          <div class="pm-meta-item">
            <span class="lbl">PLATFORM</span>
            <b>${esc(d.platform || "Mobile Application")}</b>
          </div>
        </div>
      ` : ""}
    </header>

    <!-- Interactive Figma Prototype Player -->
    ${figmaEmbed ? `
      <section class="pm-section pm-proto-box">
        <div class="pm-proto-bar">
          <div class="pm-proto-status">
            <span class="pm-dot"></span>
            <span>INTERACTIVE MOBILE PROTOTYPE</span>
          </div>
          <div class="pm-proto-actions">
            <button type="button" class="btn-proto-ctrl" id="btnRestartProto" title="Restart prototype flow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              <span>Restart</span>
            </button>
            <button type="button" class="btn-proto-ctrl primary" id="btnFullscreenProto" title="Expand prototype to fullscreen">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              <span>Fullscreen</span>
            </button>
          </div>
        </div>

        <div class="pm-iframe-wrap">
          <iframe
            class="pm-iframe"
            src="${figmaEmbed}"
            allowfullscreen
            loading="lazy"
            title="Interactive Prototype - ${esc(p.title)}">
          </iframe>
        </div>
        <p class="pm-proto-hint">
          🎮 <strong>Interactive Device Frame:</strong> Click, drag, and tap inside the phone screen above to test navigation, filters, and booking flows live.
        </p>
      </section>
    ` : ""}

    <!-- Problem & Solution Overview -->
    ${d.problem && d.solution ? `
      <section class="pm-section pm-grid-2">
        <div class="pm-card-box problem">
          <div class="pm-box-tag">THE CHALLENGE</div>
          <h3>The Problem</h3>
          <p>${esc(d.problem)}</p>
        </div>
        <div class="pm-card-box solution">
          <div class="pm-box-tag">THE STRATEGY</div>
          <h3>The Solution</h3>
          <p>${esc(d.solution)}</p>
        </div>
      </section>
    ` : ""}

    <!-- Key Platform Features -->
    ${d.keyFeatures && d.keyFeatures.length ? `
      <section class="pm-section">
        <h3 class="pm-sec-heading">Key Platform Features</h3>
        <div class="pm-features-grid">
          ${d.keyFeatures.map(f => `
            <div class="pm-feat-card">
              <h4>${esc(f.title)}</h4>
              <p>${esc(f.desc)}</p>
            </div>
          `).join("")}
        </div>
      </section>
    ` : ""}

    <!-- UX Design Methodology & Skills (10 Process Steps) -->
    ${d.process && d.process.length ? `
      <section class="pm-section">
        <div class="pm-sec-header">
          <h3 class="pm-sec-heading">Design Process & Applied Skills</h3>
          <p class="pm-sec-sub">10 key design thinking phases applied throughout this project:</p>
        </div>
        <div class="pm-process-grid">
          ${d.process.map(s => `
            <div class="pm-step-card">
              <div class="pm-step-head">${esc(s.step)}</div>
              <p>${esc(s.desc)}</p>
            </div>
          `).join("")}
        </div>
      </section>
    ` : ""}

    <!-- High-Fidelity UI Screens Showcase -->
    ${d.gallery && d.gallery.length ? `
      <section class="pm-section">
        <h3 class="pm-sec-heading">High-Fidelity Interface Showcase</h3>
        <div class="pm-gallery-stack" style="display:flex;flex-direction:column;gap:18px;">
          ${d.gallery.map(item => `
            <div class="pm-screens-showcase">
              <img src="${esc(item.src)}" alt="${esc(item.title || p.title)}" loading="lazy">
              ${item.caption ? `<div class="pm-screens-caption">${item.caption}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
    ` : (p.image ? `
      <section class="pm-section">
        <h3 class="pm-sec-heading">High-Fidelity Interface Screens</h3>
        <div class="pm-screens-showcase">
          <img src="${esc(p.image)}" alt="UI Design Screens for ${esc(p.title)}" loading="lazy">
          ${d.screensCaption ? `
            <div class="pm-screens-caption">${d.screensCaption}</div>
          ` : `
            <div class="pm-screens-caption">
              <span>Interactive Interface Screens</span> for ${esc(p.title)}
            </div>
          `}
        </div>
      </section>
    ` : "")}
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const restartBtn = $("btnRestartProto");
  if (restartBtn) {
    restartBtn.onclick = () => {
      const iframe = modalContent.querySelector(".pm-iframe");
      if (iframe) {
        const s = iframe.src;
        iframe.src = "";
        iframe.src = s;
      }
    };
  }

  const launchFullscreen = () => {
    const iframe = modalContent.querySelector(".pm-iframe");
    if (!iframe) return;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  const fsBtn = $("btnFullscreenProto");
  if (fsBtn) fsBtn.onclick = launchFullscreen;

  if (modalClose && typeof modalClose.focus === "function") modalClose.focus();
}

function openExperienceModal(idx) {
  const exp = D.experience[idx];
  if (!exp || !exp.showcase || !projectModal || !modalContent) return;

  const sc = exp.showcase;

  modalContent.innerHTML = `
    <!-- Experience Modal Header -->
    <header class="pm-header">
      <div class="pm-badges">
        <span class="pm-pill type">🏛️ Internship Experience</span>
        ${sc.scope ? `<span class="pm-pill scope">📍 ${esc(sc.scope)}</span>` : ""}
      </div>
      <h1 class="pm-title">${esc(exp.name)}</h1>
      <p class="pm-lead"><strong>${esc(sc.role || exp.sub)}</strong> &nbsp;•&nbsp; ${esc(sc.period || exp.years)}</p>
      <p style="color:#d4d4dc;margin-top:12px;font-size:.95rem;line-height:1.6;">${esc(sc.mission)}</p>

      ${sc.highlights && sc.highlights.length ? `
        <div class="pm-meta-grid" style="margin-top:20px;">
          ${sc.highlights.map(h => `
            <div class="pm-meta-item">
              <span class="lbl">${esc(h.label.toUpperCase())}</span>
              <b>${esc(h.value)}</b>
            </div>
          `).join("")}
        </div>
      ` : ""}

      ${sc.skills && sc.skills.length ? `
        <div class="tags" style="margin-top:18px;">
          ${sc.skills.map(s => `<span>${esc(s)}</span>`).join("")}
        </div>
      ` : ""}
    </header>

    <!-- Series 1 & 2 Infographic Galleries -->
    ${sc.series && sc.series.length ? sc.series.map(series => `
      <section class="pm-section">
        <h3 class="pm-sec-heading">${esc(series.title)}</h3>
        <p class="pm-sec-sub">${esc(series.desc)}</p>
        <div class="exp-gallery-grid">
          ${series.items.map(item => `
            <div class="exp-gallery-card ${item.wide ? "is-wide" : ""}">
              <div class="exp-gallery-img">
                <img src="${esc(item.src)}" alt="${esc(item.title)}" loading="lazy">
              </div>
              <div class="exp-gallery-info">
                <h4>${esc(item.title)}</h4>
                <p>${esc(item.desc)}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `).join("") : ""}
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (modalClose && typeof modalClose.focus === "function") modalClose.focus();
}

// Event delegation for opening experience modal
const expContainer = $("exp");
if (expContainer) {
  expContainer.addEventListener("click", e => {
    const card = e.target.closest("[data-exp-idx]");
    if (card) {
      const idx = parseInt(card.dataset.expIdx, 10);
      openExperienceModal(idx);
    }
  });
  expContainer.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-exp-idx]");
      if (card) {
        e.preventDefault();
        const idx = parseInt(card.dataset.expIdx, 10);
        openExperienceModal(idx);
      }
    }
  });
}

function openCertificateModal(idx) {
  const cert = D.certificates[idx];
  if (!cert || !projectModal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Certificate Modal Header -->
    <header class="pm-header" style="margin-bottom:20px;">
      <div class="pm-badges">
        <span class="pm-pill type">📜 Verified Certificate</span>
        ${cert.issuer ? `<span class="pm-pill scope">🏢 ${esc(cert.issuer)}</span>` : ""}
      </div>
      <h1 class="pm-title">${esc(cert.title)}</h1>
      <p class="pm-lead" style="color:var(--muted);">${esc(cert.sub || "")}</p>

      ${cert.credential || cert.date ? `
        <div class="pm-meta-grid" style="margin-top:16px;">
          ${cert.date ? `
            <div class="pm-meta-item">
              <span class="lbl">ISSUE DATE</span>
              <b>${esc(cert.date)}</b>
            </div>
          ` : ""}
          ${cert.credential ? `
            <div class="pm-meta-item">
              <span class="lbl">CREDENTIAL ID</span>
              <b><code>${esc(cert.credential)}</code></b>
            </div>
          ` : ""}
        </div>
      ` : ""}
    </header>

    <!-- Certificate Full Image Preview -->
    ${cert.image ? `
      <section class="pm-section" style="margin-top:16px!important;">
        <div class="pm-screens-showcase" style="background:#0c0c10;border-radius:18px;">
          <img src="${esc(cert.image)}" alt="${esc(cert.title)}" style="max-height:75vh;width:100%;object-fit:contain;display:block;" loading="lazy">
        </div>
      </section>
    ` : ""}
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  if (modalClose && typeof modalClose.focus === "function") modalClose.focus();
}

// Event delegation for opening project modal and certificate preview
$("panel").addEventListener("click", e => {
  const pCard = e.target.closest("[data-project-idx]");
  if (pCard) {
    const idx = parseInt(pCard.dataset.projectIdx, 10);
    openProjectModal(idx);
    return;
  }
  const certCard = e.target.closest("[data-cert-idx]");
  if (certCard) {
    const idx = parseInt(certCard.dataset.certIdx, 10);
    openCertificateModal(idx);
    return;
  }
});
$("panel").addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    const pCard = e.target.closest("[data-project-idx]");
    if (pCard) {
      e.preventDefault();
      const idx = parseInt(pCard.dataset.projectIdx, 10);
      openProjectModal(idx);
      return;
    }
    const certCard = e.target.closest("[data-cert-idx]");
    if (certCard) {
      e.preventDefault();
      const idx = parseInt(certCard.dataset.certIdx, 10);
      openCertificateModal(idx);
      return;
    }
  }
});

if (modalClose) modalClose.onclick = closeProjectModal;
if (modalBackdrop) modalBackdrop.onclick = closeProjectModal;
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && projectModal && projectModal.classList.contains("open")) {
    closeProjectModal();
  }
});


/* ---- teks mengetik ---- */
(function () {
  const el = $("role");
  if (still) { el.textContent = D.roles.join(" · "); return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = D.roles[r]; el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % D.roles.length; }
    c += del ? -1 : 1; setTimeout(tick, del ? 40 : 80);
  })();
})();

/* ---- menu aktif saat scroll ---- */
const links = [...document.querySelectorAll("nav a")];
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
["home", "about", "portfolio", "contact"].forEach(id => io.observe($(id)));

/* ---- ANIMASI SCROLL REVEAL (DARI AGAK BLUR KE JELAS KETIKA SCROLL) ---- */
(function () {
  if (still) return;

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -7% 0px",
    threshold: 0.05
  });

  window.observeReveals = (scope = document) => {
    const selectors = [
      "section > h2",
      ".about > div",
      ".about-portrait",
      ".cols > div",
      ".card.music",
      ".tabs",
      "#panel .grid > article",
      "#panel .grid > .card",
      "#panel .stack > .tile",
      "footer h2",
      "footer p",
      "footer .row",
      "footer .copy"
    ];

    const elements = scope.querySelectorAll(selectors.join(", "));
    elements.forEach(el => {
      if (!el.classList.contains("scroll-reveal")) {
        el.classList.add("scroll-reveal");

        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(c => c.matches && c.matches(selectors.join(", ")));
          const idx = siblings.indexOf(el);
          if (idx > 0) {
            el.style.setProperty("--reveal-delay", `${Math.min(idx * 0.09, 0.45)}s`);
          }
        }
        revealObserver.observe(el);
      }
    });
  };

  window.observeReveals();
})();

/* ---- bintang latar ---- */
(function () {
  const c = $("stars"), x = c.getContext("2d"); let w, h, s = [];
  function size() {
    w = c.width = innerWidth; h = c.height = innerHeight;
    s = Array.from({ length: Math.min(160, Math.floor(w * h / 9000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.2 + .2, p: Math.random() * 6.28, v: Math.random() * .02 + .005 }));
    draw(0);
  }
  function draw(t) {
    x.clearRect(0, 0, w, h);
    for (const a of s) { x.fillStyle = `rgba(255,255,255,${still ? .5 : .3 + .35 * Math.sin(a.p + t * a.v)})`; x.beginPath(); x.arc(a.x, a.y, a.r, 0, 6.28); x.fill(); }
    if (!still) requestAnimationFrame(draw);
  }
  addEventListener("resize", size); size();
})();

/* ---- LANYARD DENGAN FISIKA VERLET & 3D INTERACTIVE BADGE ----
   Tali menggunakan simulasi kain/tali multi-segmen (Verlet integration) sehingga lentur & dinamis.
   Kartu memiliki inersia rotasi 3D, efek holografik yang bereaksi terhadap gerakan,
   dan tali tersambung rapi dari bagian paling atas web. */
(function () {
  const box = $("lan"), card = $("card");
  if (!box || !card) return;

  const photo = card.querySelector(".photo");
  const anchorEl = box.querySelector(".lan-anchor");
  const strapShadow = $("strapShadow");
  const strapBase = $("strapBase");
  const strapPattern = $("strapPattern");
  const stitchL = $("stitchL");
  const stitchR = $("stitchR");
  const strapPath = $("strapPath");
  const strapText = $("strapText");

  // Atur teks pada tali lanyard sesuai nama & judul pemilik portofolio
  if (strapText && typeof D !== "undefined") {
    const nameStr = (D.name || "SASA").toUpperCase();
    const titleStr = (D.title || "CREATIVE PORTFOLIO").toUpperCase();
    strapText.textContent = `✦ ${nameStr} ✦ ${titleStr} ✦ TELKOM UNIVERSITY ✦`;
  }

  // Dynamic Physics State: Lambat, Berbobot & Ekstra Smooth
  let A = { x: 0, y: 0 };
  let restY = 58;
  let targetL = 220;
  let pos = { x: 0, y: 0 };
  let vel = { x: 0, y: 0 };
  let cardAngle = 0, cardAngVel = 0;
  let cardTiltX = 0, cardTiltY = 0;
  let hoverTiltX = 0, hoverTiltY = 0;

  let drag = false;
  let mouseTarget = { x: 0, y: 0 };
  let off = { x: 0, y: 0 };
  let moved = 0;
  let velHistory = [];
  let lastTime = performance.now();

  function updateAnchor() {
    const r = box.getBoundingClientRect();
    const distToTop = r.top + window.scrollY;
    A.x = box.clientWidth / 2;
    // Nyambung menembus batas paling atas layar / ceiling dokumen
    A.y = -Math.max(distToTop, 120) - 20;

    if (anchorEl) {
      anchorEl.style.top = `${(A.y + 16).toFixed(1)}px`;
    }

    // Posisikan kartu tinggi di area Hero agar tidak turun menyentuh About Me
    restY = box.clientHeight > 480 ? 58 : 40;
    targetL = Math.max(160, (restY - 26) - A.y);
  }

  function init() {
    updateAnchor();
    pos.x = A.x;
    pos.y = restY;
    vel.x = 0;
    vel.y = 0;
    cardAngle = 0;
    cardAngVel = 0;
    cardTiltX = 0;
    cardTiltY = 0;
    hoverTiltX = 0;
    hoverTiltY = 0;
    mouseTarget = { x: pos.x, y: pos.y };
    draw();
  }

  // Menghasilkan kurva Bezier analitik C-inf yang halus tanpa patah-patah
  function getRibbonCurves(anchor, hook, angle, L0, w = 11.8) {
    const dx = hook.x - anchor.x;
    const dy = hook.y - anchor.y;
    const dist = Math.hypot(dx, dy) || 1;

    // Tangen pangkal atas (menjuntai lurus ke bawah dari ceiling)
    const cp1 = {
      x: anchor.x + dx * 0.16,
      y: anchor.y + Math.max(45, dy * 0.42)
    };

    // Tangen ujung bawah (masuk tegak lurus ke klip logam kartu sesuai sudut rotasi)
    const rad = (angle * Math.PI) / 180;
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);
    const handle = Math.min(dist * 0.44, 150);

    // Lenturan halus bila kartu didorong ke atas (slack/kendur)
    const slack = Math.max(0, L0 - dist);
    const sag = Math.sin(Math.min(Math.PI, (slack / L0) * Math.PI)) * 16 * (angle >= 0 ? 1 : -1);

    const cp2 = {
      x: hook.x + sin * handle + sag,
      y: hook.y - cos * handle
    };

    // Jalur tengah pita
    const center = `M ${anchor.x.toFixed(1)} ${anchor.y.toFixed(1)} C ${cp1.x.toFixed(1)} ${cp1.y.toFixed(1)}, ${cp2.x.toFixed(1)} ${cp2.y.toFixed(1)}, ${hook.x.toFixed(1)} ${hook.y.toFixed(1)}`;

    // Jahitan kiri & kanan dengan offset vektor normal yang presisi & stabil
    const left = `M ${(anchor.x - w).toFixed(1)} ${anchor.y.toFixed(1)} C ${(cp1.x - w).toFixed(1)} ${cp1.y.toFixed(1)}, ${(cp2.x - w * cos).toFixed(1)} ${(cp2.y - w * sin).toFixed(1)}, ${(hook.x - w * cos).toFixed(1)} ${(hook.y - w * sin).toFixed(1)}`;
    const right = `M ${(anchor.x + w).toFixed(1)} ${anchor.y.toFixed(1)} C ${(cp1.x + w).toFixed(1)} ${cp1.y.toFixed(1)}, ${(cp2.x + w * cos).toFixed(1)} ${(cp2.y + w * sin).toFixed(1)}, ${(hook.x + w * cos).toFixed(1)} ${(hook.y + w * sin).toFixed(1)}`;

    return { center, left, right };
  }

  function step(dt, now) {
    if (drag) {
      // Langsung 1:1 mengikuti kursor/jari tanpa lag (responsif seketika, zero delay)
      pos.x = mouseTarget.x;
      pos.y = mouseTarget.y;

      // Sudut kartu menyelaraskan diri dengan arah tarikan tali dengan cepat & gesit
      const dx = pos.x - A.x;
      const dy = Math.max(80, pos.y - A.y);
      const ropeAngle = -Math.atan2(dx, dy) * 180 / Math.PI;
      const targetAngle = Math.max(-38, Math.min(38, ropeAngle));
      cardAngle += (targetAngle - cardAngle) * 0.45;

      // Kemiringan 3D saat ditarik
      cardTiltY += ((off.x / 140) * 16 - cardTiltY) * 0.35;
      cardTiltX += (-(off.y / 200) * 14 - cardTiltX) * 0.35;
    } else {
      // 2 Sub-langkah per frame untuk kestabilan numerik mutlak
      const subSteps = 2;
      const sdt = dt / subSteps;

      // Frekuensi kenyal & gesit (pantulan mantul cepat, tidak lambat/telat)
      const wx = 7.2;  // frekuensi ayun horizontal gesit
      const wy = 8.2;  // frekuensi pantulan vertikal gesit
      const zx = 0.48; // rasio redaman kenyal & snappy
      const zy = 0.50;
      const cx = 2 * zx * wx;
      const cy = 2 * zy * wy;

      for (let s = 0; s < subSteps; s++) {
        const t = (now * 0.001) + s * sdt;

        // TARGET AYUNAN IDLE YANG HIDUP (Lissajous sway ~16-20px)
        const idleTargetX = A.x + Math.sin(t * 1.5) * 16 + Math.sin(t * 0.75) * 6;
        const idleTargetY = restY + Math.cos(t * 3.0) * 3.5;

        // Gaya pemulih pegas bandul menuju target dinamis
        const errX = pos.x - idleTargetX;
        const errY = pos.y - idleTargetY;

        let ax = - (wx * wx) * errX - cx * vel.x;
        let ay = - (wy * wy) * errY - cy * vel.y;

        // Integrasi kecepatan & posisi
        vel.x += ax * sdt;
        vel.y += ay * sdt;
        pos.x += vel.x * sdt;
        pos.y += vel.y * sdt;

        // Batas atas agar kartu tidak menembus langit-langit
        if (pos.y < A.y + 35) {
          pos.y = A.y + 35;
          vel.y = Math.max(0, vel.y);
        }

        // Torsi inersia bandul kartu yang dinamis
        const dx = pos.x - A.x;
        const dy = Math.max(80, pos.y - A.y);
        const ropeAngle = -Math.atan2(dx, dy) * 180 / Math.PI;
        const targetAngle = Math.max(-36, Math.min(36, ropeAngle));
        const wTheta = 6.5;
        const cTheta = 2 * 0.55 * wTheta;
        const aTheta = - (wTheta * wTheta) * (cardAngle - targetAngle) - cTheta * cardAngVel - vel.x * 0.08;
        cardAngVel += aTheta * sdt;
        cardAngle += cardAngVel * sdt;
        cardAngle = Math.max(-42, Math.min(42, cardAngle));
      }

      // Kemiringan 3D mulus (menggabungkan hover kursor & inersia kecepatan)
      const targetTiltX = hoverTiltX + Math.max(-18, Math.min(18, vel.y * 0.03));
      const targetTiltY = hoverTiltY - Math.max(-24, Math.min(24, vel.x * 0.04));
      cardTiltX += (targetTiltX - cardTiltX) * 0.14;
      cardTiltY += (targetTiltY - cardTiltY) * 0.14;
    }

    // Kilau holografik interaktif
    const speed = Math.hypot(vel.x, vel.y);
    const glareAngle = 115 + cardAngle * 0.8 + cardTiltY * 1.3;
    card.style.setProperty("--glare-angle", `${glareAngle.toFixed(1)}deg`);
    card.style.setProperty("--glare-opacity", `${Math.min(0.85, 0.42 + speed * 0.001).toFixed(2)}`);
  }

  function draw() {
    const cardWidth = card.offsetWidth || 236;
    const cardX = pos.x - cardWidth / 2;
    const cardY = pos.y + 26;

    card.style.transform = `translate3d(${cardX.toFixed(1)}px, ${cardY.toFixed(1)}px, 0) rotateZ(${cardAngle.toFixed(2)}deg) rotateX(${cardTiltX.toFixed(2)}deg) rotateY(${cardTiltY.toFixed(2)}deg)`;

    const curves = getRibbonCurves(A, pos, cardAngle, targetL, 11.8);

    if (strapShadow) strapShadow.setAttribute("d", curves.center);
    if (strapBase) strapBase.setAttribute("d", curves.center);
    if (strapPattern) strapPattern.setAttribute("d", curves.center);
    if (strapPath) strapPath.setAttribute("d", curves.center);
    if (stitchL) stitchL.setAttribute("d", curves.left);
    if (stitchR) stitchR.setAttribute("d", curves.right);
  }

  function loop(time) {
    const now = time || performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;

    // Klem dt agar aman saat tab diminimalkan atau frame drop sesaat
    if (dt > 0.04) dt = 0.04;
    if (dt < 0.001) dt = 0.001;

    step(dt, now);
    draw();
    requestAnimationFrame(loop);
  }

  init();
  addEventListener("resize", () => {
    updateAnchor();
    draw();
  });
  addEventListener("load", () => {
    updateAnchor();
    draw();
  });

  if (still) {
    card.onclick = () => photo && photo.classList.toggle("on");
    return;
  }

  // Efek kemiringan 3D magnetik yang tenang saat kursor mendekat
  box.addEventListener("pointermove", e => {
    if (drag) return;
    const r = box.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const dist = Math.hypot(mx - pos.x, my - pos.y);
    if (dist < 320) {
      const influence = 1 - dist / 320;
      hoverTiltY = ((mx - pos.x) / 320) * 12 * influence;
      hoverTiltX = (-(my - pos.y) / 320) * 10 * influence;
    } else {
      hoverTiltX = 0;
      hoverTiltY = 0;
    }
  });

  box.addEventListener("pointerleave", () => {
    hoverTiltX = 0;
    hoverTiltY = 0;
  });

  card.addEventListener("pointerdown", e => {
    drag = true;
    moved = 0;
    card.setPointerCapture(e.pointerId);
    const r = box.getBoundingClientRect();
    off = {
      x: (e.clientX - r.left) - pos.x,
      y: (e.clientY - r.top) - pos.y
    };
    mouseTarget = {
      x: e.clientX - r.left - off.x,
      y: e.clientY - r.top - off.y
    };
    velHistory = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
  });

  card.addEventListener("pointermove", e => {
    if (!drag) return;
    const r = box.getBoundingClientRect();
    const rawTargetX = e.clientX - r.left - off.x;
    const rawTargetY = e.clientY - r.top - off.y;

    // Hambatan elastis lembut bila ditarik melebihi panjang tali
    const dxA = rawTargetX - A.x;
    const dyA = rawTargetY - A.y;
    const distA = Math.hypot(dxA, dyA) || 1;
    const maxReach = targetL * 1.6;

    let effX = rawTargetX;
    let effY = rawTargetY;
    if (distA > maxReach) {
      const excess = distA - maxReach;
      const softExcess = Math.log(1 + excess * 0.03) * 35;
      const effDist = maxReach + softExcess;
      effX = A.x + (dxA / distA) * effDist;
      effY = A.y + (dyA / distA) * effDist;
    }

    const prevTarget = { ...mouseTarget };
    mouseTarget = { x: effX, y: effY };
    pos.x = effX; // Responsif seketika, zero delay
    pos.y = effY;
    moved += Math.hypot(mouseTarget.x - prevTarget.x, mouseTarget.y - prevTarget.y);

    const now = performance.now();
    velHistory.push({ x: e.clientX, y: e.clientY, t: now });
    if (velHistory.length > 6) velHistory.shift();

    // Render frame langsung untuk kelancaran mutlak
    draw();
  });

  const onPointerUp = () => {
    if (!drag) return;
    drag = false;

    // Transfer momentum lemparan sesaat (fling velocity) yang mantul & gesit
    if (velHistory.length >= 2) {
      const pFirst = velHistory[0];
      const pLast = velHistory[velHistory.length - 1];
      const dt = (pLast.t - pFirst.t) / 1000;
      if (dt > 0.006) {
        let throwVx = ((pLast.x - pFirst.x) / dt) * 0.8;
        let throwVy = ((pLast.y - pFirst.y) / dt) * 0.8;
        const spd = Math.hypot(throwVx, throwVy);
        const maxV = 850; // px/s max
        if (spd > maxV) {
          throwVx = (throwVx / spd) * maxV;
          throwVy = (throwVy / spd) * maxV;
        }
        vel.x = throwVx;
        vel.y = throwVy;
      }
    }
    velHistory = [];

    // Ketukan singkat (tanpa drag) = ganti foto Venom jika venom ada & termuat
    if (moved < 7 && photo && photo.querySelector(".venom")) {
      photo.classList.toggle("on");
    }
  };

  card.addEventListener("pointerup", onPointerUp);
  card.addEventListener("pointercancel", onPointerUp);

  requestAnimationFrame(loop);
})();
