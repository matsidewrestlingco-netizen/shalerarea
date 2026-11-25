// Shaler Area Wrestling — shared behavior for the redesigned Home + Team pages.
// Schedule and coach data live in data/season.js.

// ---- Site settings: edit these ----
const SITE = {
  // Paste the registration form URL here. While empty, Register buttons open an email.
  registerUrl: 'https://forms.matsidesystems.com/r/shaler-area-wrestling',
  email: 'ShalerAreaWrestlingAssoc@gmail.com'
};

(() => {
  const D = window.SA_SEASON || { events: [], coaches: {}, teams: [] };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const slug = t => t.toLowerCase().replace(/\s+/g, '-');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const now = today.getTime();
  const upcoming = D.events.filter(e => e.ts >= now);

  // ---- Register links ----
  const registerHref = SITE.registerUrl || `mailto:${SITE.email}?subject=${encodeURIComponent('Wrestling registration')}`;
  $$('[data-register]').forEach(a => {
    a.href = registerHref;
    if (SITE.registerUrl) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  // ---- Mobile menu ----
  const menuBtn = $('.menu-btn');
  const mobileNav = $('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    $$('a', mobileNav).forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
    }));
  }

  const coachRows = (team, render) => (D.coaches[team] || []).map(([name, role, email]) => render(name, role, role === 'Head Coach', email)).join('');
  const coachEmail = email => email ? `<a class="coach-email" href="mailto:${esc(email)}">${esc(email)}</a>` : '';

  // ---- Home: Up Next ----
  const nextList = $('#next-list');
  if (nextList) {
    const filterBox = $('#filters');
    const filters = ['All', ...D.teams];
    let current = 'All';
    const renderNext = () => {
      const rows = upcoming.filter(e => current === 'All' || e.team === current).slice(0, 8);
      nextList.innerHTML = rows.length ? rows.map(e => `
        <div class="next-row">
          <div>
            <div class="mono mono-sm">${esc(e.dow)}</div>
            <div class="next-date">${esc(e.date)}</div>
          </div>
          <div style="min-width:0">
            <div class="next-opp">${esc(e.opp)}</div>
            <div class="mono mono-sm next-meta">${esc(e.team)} · ${esc(e.time)} · ${esc(e.loc)}</div>
          </div>
          <div class="ha${e.ha === 'Home' ? ' ha--home' : ''}">${esc(e.ha)}</div>
        </div>`).join('') : '<div class="empty">No upcoming events. See you next season.</div>';
      $$('button', filterBox).forEach(b => b.setAttribute('aria-pressed', b.dataset.team === current));
    };
    filterBox.innerHTML = filters.map(f => `<button type="button" data-team="${esc(f)}" aria-pressed="false">${esc(f)}</button>`).join('');
    filterBox.addEventListener('click', e => {
      const b = e.target.closest('button');
      if (b) { current = b.dataset.team; renderNext(); }
    });
    renderNext();
  }

  // ---- Home: team bands ----
  $$('[data-team-band]').forEach(band => {
    const team = band.dataset.teamBand;
    const n = upcoming.find(e => e.team === team);
    $('.next-match-date', band).textContent = n ? `${n.dow}, ${n.date} · ${n.time}` : 'Season complete';
    $('.next-match-opp', band).textContent = n ? n.opp : '';
    $('.coach-list', band).innerHTML = coachRows(team, (name, role, head, email) => `
      <div class="coach"><span class="coach-name">${esc(name)}</span><span class="coach-role${head ? ' coach-role--head' : ''}">${esc(role)}</span>${coachEmail(email)}</div>`);
  });

  // ---- Team: schedules ----
  const schedBody = $('#sched-body');
  if (schedBody) {
    const tabs = $('#tabs');
    const fromUrl = new URLSearchParams(location.search).get('team');
    let team = D.teams.find(t => slug(t) === fromUrl) || D.teams[0];

    tabs.innerHTML = D.teams.map(t => `
      <button type="button" class="tab" role="tab" data-team="${esc(t)}">
        <span class="tab-label">${esc(t)}</span>
        <span class="mono">${D.events.filter(e => e.team === t).length} events</span>
      </button>`).join('');

    const setTeam = t => {
      team = t;
      $$('.tab', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.team === team));
      $$('[data-team-name]').forEach(el => { el.textContent = team; });
      schedBody.innerHTML = D.events.filter(e => e.team === team).map(e => `
        <div class="sched-row${e.ts < now ? ' is-past' : ''}">
          <span class="sched-date"><span class="sched-dow">${esc(e.dow)}</span><span class="sched-day">${esc(e.date)}</span></span>
          <span class="sched-opp">${esc(e.opp)}</span>
          <span class="sched-time">${esc(e.time)}</span>
          <span class="sched-loc">${esc(e.loc)}</span>
          <span class="sched-ha${e.ha === 'Home' ? ' sched-ha--home' : ''}">${esc(e.ha)}</span>
        </div>`).join('');
    };
    const printTeam = t => { setTeam(t); setTimeout(() => window.print(), 50); };

    tabs.addEventListener('click', e => {
      const b = e.target.closest('.tab');
      if (b) setTeam(b.dataset.team);
    });
    $('#print-btn').addEventListener('click', () => window.print());

    // Printable schedule rows in the Documents section
    const printList = $('#print-docs');
    const fmtRange = evs => evs.length ? `${evs[0].date} – ${evs[evs.length - 1].date}` : '';
    printList.innerHTML = D.teams.map(t => {
      const evs = D.events.filter(e => e.team === t);
      return `
        <button type="button" class="doc" data-print="${esc(t)}">
          <span style="min-width:0"><span class="doc-name">${esc(t)} Schedule</span><span class="doc-desc">${evs.length} events · ${fmtRange(evs)}</span></span>
          <span class="doc-type">Print</span>
          <span class="doc-action">Print ↓</span>
        </button>`;
    }).join('');
    printList.addEventListener('click', e => {
      const b = e.target.closest('[data-print]');
      if (b) printTeam(b.dataset.print);
    });

    setTeam(team);
  }

  // ---- Team: coaching staff ----
  const staffGrid = $('#staff-grid');
  if (staffGrid) {
    staffGrid.innerHTML = D.teams.map(t => `
      <div>
        <div class="staff-team">${esc(t)}</div>
        ${coachRows(t, (name, role, head, email) => `<div class="staff-row"><span class="staff-person"><strong>${esc(name)}</strong>${coachEmail(email)}</span><span class="coach-role${head ? ' coach-role--head' : ''}">${esc(role)}</span></div>`)}
      </div>`).join('');
  }
})();
