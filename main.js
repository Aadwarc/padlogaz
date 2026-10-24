// ===== Adatok (forrás: padlogazmovar.hu, árak 2026. 07. 17-től) =====
const DOCS = 'https://vizsgakozpont.hu/uploads/2023/dokumentumok/';

const CATEGORIES = [
  {
    code: 'B', type: 'auto', icon: '🚗', name: 'Személyautó', minAge: '16,5 év',
    desc: 'Legfeljebb 3500 kg össztömegű, a vezetőn kívül max. 8 utas szállítására alkalmas gépkocsi, valamint a hozzá kapcsolt, jogszabályban meghatározott pótkocsi.',
    requirements: ['Betöltött 16 év 6 hónap', 'Érvényes személyi igazolvány és lakcímkártya', 'Legalább alapfokú iskolai végzettség', 'Érvényes orvosi alkalmassági'],
    exams: [['Elméleti vizsga', '16 év 9 hó'], ['Forgalmi vizsga', '17 év']],
    theory: '22 óra tantermi / 5 óra online', driving: '29+1 óra', km: '580 km',
    price: 394300, tuition: 377000, examFee: 17300,
    doc: 'tantervi_es_vizsgakov_b_kategoria_2023_alairt.pdf'
  },
  {
    code: 'AM', type: 'motor', icon: '🛵', name: 'Segédmotor (robogó)', minAge: '13,5 év',
    desc: 'Két- vagy háromkerekű segédmotoros kerékpár: max. 45 km/h tervezési sebesség, max. 50 cm³, elektromos motornál max. 4 kW.',
    requirements: ['Betöltött 13 év 6 hónap', 'Szülői nyilatkozat', 'Érvényes személyazonosító okmány és lakcímkártya', 'Írni, olvasni tudás'],
    exams: [['Elméleti vizsga', '13 év 9 hó'], ['Járműkezelési vizsga', '14 év'], ['Forgalmi vizsga', '14 év']],
    theory: '14 óra tantermi / 5 óra online', driving: '10+1 óra', km: '100 km',
    price: 158600, tuition: 128500, examFee: 30100,
    doc: 'tantervi_es_vizsgakov_am_kategoria_2023_alairt.pdf'
  },
  {
    code: 'A1', type: 'motor', icon: '🏍️', name: 'Kis motor (125 cm³)', minAge: '15,5 év',
    desc: 'Motorkerékpár max. 125 cm³ hengerűrtartalommal, 11 kW teljesítménnyel és 0,1 kW/kg teljesítmény/tömeg aránnyal.',
    requirements: ['Betöltött 15 év 6 hónap', 'Érvényes személyazonosító okmány és lakcímkártya', 'Legalább alapfokú iskolai végzettség', 'Érvényes orvosi alkalmassági'],
    exams: [['Elméleti vizsga', '15 év 9 hó'], ['Járműkezelési vizsga', '16 év'], ['Forgalmi vizsga', '16 év']],
    theory: '18 óra tantermi / 5 óra online', driving: '16+1 óra', km: '240 km',
    price: 242100, tuition: 189500, examFee: 52600,
    doc: 'tantervi_es_vizsgakov_a1_kategoria_2023_alairt.pdf'
  },
  {
    code: 'A2', type: 'motor', icon: '🏍️', name: 'Közepes motor (35 kW)', minAge: '17,5 év',
    desc: 'Motorkerékpár max. 35 kW teljesítménnyel és 0,2 kW/kg aránnyal, amelyet nem kétszer akkora teljesítményű járműből alakítottak át.',
    requirements: ['Betöltött 17 év 6 hónap', 'Érvényes személyazonosító okmány és lakcímkártya', 'Legalább alapfokú iskolai végzettség', 'Érvényes orvosi alkalmassági'],
    exams: [['Elméleti vizsga', '17 év 9 hó'], ['Járműkezelési vizsga', '18 év'], ['Forgalmi vizsga', '18 év']],
    theory: '18 óra tantermi / 5 óra online', driving: '16+1 óra', km: '240 km',
    price: 242100, tuition: 189500, examFee: 52600,
    doc: 'tantervi_es_vizsgakov_a2_kategoria_2023_alairt.pdf'
  },
  {
    code: 'A', type: 'motor', icon: '🏍️', name: 'Korlátlan motor', minAge: '23,5 év*',
    desc: 'Az „A” kategóriás jogosítvánnyal minden motorkerékpár vezethető.',
    requirements: ['Betöltött 23 év 6 hónap – vagy 20 év, ha legalább 2 éves A2 gyakorlatod van', 'Érvényes személyazonosító okmány és lakcímkártya', 'Legalább alapfokú iskolai végzettség', 'Érvényes orvosi alkalmassági'],
    exams: [['Elméleti vizsga', '23 év 9 hó'], ['Járműkezelési vizsga', '24 év'], ['Forgalmi vizsga', '24 év'], ['2+ év A2 gyakorlattal', '20 év']],
    theory: '18 óra tantermi / 5 óra online', driving: '26+1 óra', km: '390 km',
    price: 327100, tuition: 274500, examFee: 52600,
    doc: 'tantervi_es_vizsgakov_a_kategoria_2023_alairt.pdf'
  }
];

// [név, elméleti képzés, elméleti vizsga, óradíj, gyak. összesen, JK, F, tandíj, vizsgadíj, összesen]
const PRICE_ROWS = [
  ['AM (13,5)', 35000, 12700, 8500, 93500, 8700, 8700, 128500, 30100, 158600],
  ['A1 (15,5)', 45000, 12700, 8500, 144500, 10900, 29000, 189500, 52600, 242100],
  ['A2 (17,5)', 45000, 12700, 8500, 144500, 10900, 29000, 189500, 52600, 242100],
  ['A (23,5)', 45000, 12700, 8500, 229500, 10900, 29000, 274500, 52600, 327100],
  ['B (16,5)', 50000, 5100, 10900, 327000, null, 12200, 377000, 17300, 394300]
];
const EXTRA_ROWS = [
  ['A1(B)', 45000, 12700, 8500, 25500, null, 29000, 70500, 41700, 112200],
  ['A2(A1-2)', null, null, 8500, 110500, 10900, 29000, 110500, 39900, 150400],
  ['A2(A1+2)', 35000, 12700, 8500, 76500, 10900, 29000, 111500, 52600, 164100],
  ['A(A1-2)', null, null, 8500, 144500, 10900, 29000, 144500, 39900, 184400],
  ['A(A1+2)', 35000, 12700, 8500, 93500, 10900, 29000, 128500, 52600, 181100],
  ['A(A2-2)', null, null, 8500, 110500, 10900, 29000, 110500, 39900, 150400],
  ['A(A2+2)', 35000, 12700, 8500, 76500, 10900, 29000, 111500, 52600, 164100]
];

const TEAM = [
  ['Mencsik Máté', 'Autós-motoros szakoktató', 'Mencsik_Mt-k.jpg', 'Arra törekszem, hogy a lehető legjobb tudásom szerint felkészítsem a tanulóimat az önálló, balesetmentes, körültekintő, biztonságos közlekedésre. Tanulóimmal könnyedén megtalálom a közös hangot, így a gyakorlati órák jó hangulatban telnek. Hasznos tanácsokkal, rugalmassággal egyengetem a jogosítványhoz vezető utat.'],
  ['Zubor László', 'Autós-motoros szakoktató', 'Zubor_Lszl-k.jpg', 'Célom, hogy a tanulóim a mai megnövekedett forgalomban is nyugodt, körültekintő módon, biztonságosan közlekedjenek. Jó hangulatban és rugalmas időbeosztásban tartom az óráimat, akár hétvégi vezetési lehetőséggel is.'],
  ['Gasparovics Tamás', 'Gyakorlati szakoktató', 'Gasparovics_Tams-k.jpg', 'Több éves tapasztalatommal hivatásom, hogy megtanítsam tanulóimat a biztonságos közlekedésre. Ha szeretnéd, hogy az órák jó hangulatú, nyugodt légkörben teljenek, keress bizalommal.'],
  ['Kovács Lóránt', 'Gyakorlati szakoktató', 'Kovcs_Lrnt-k.jpg', 'Fiatalos, lendületes hangulatban tartom az óráimat, rugalmas időbeosztásban. Igyekszem, hogy tanulóim a legjobb tudásom szerint felkészüljenek a forgalmi vizsgára.'],
  ['Horváth Krisztián', 'Gyakorlati szakoktató', 'Horvth_Krisztin-k.jpg', 'Jó hangulatú gyakorlati oktatás keretében a célom, hogy megtanítsam tanulóimat a helyes, biztonságos közlekedésre. Tanulóimmal könnyen megtaláljuk a közös hullámhosszt.'],
  ['Bakler Árpád', 'Gyakorlati szakoktató · 40+ év', 'Bakler_rpd-k.jpg', 'Több mint 40 éve dolgozom gyakorlati szakoktatóként. Nyugodt, kellemes hangulatú órák keretében adom át a biztonságos és körültekintő közlekedés alapjait.'],
  ['Czenki Sándor', 'Gyakorlati szakoktató', 'Czenki_Sndor-k.jpg', 'A Padlógáz Autósiskolával együttműködve oktatok. Hivatásom a lehető legkörültekintőbb közlekedésre megtanítani a tanulóimat. Ha kiegyensúlyozott, nyugodt oktatót keresel, nálam jó helyen jársz.']
];

// ===== Segédek =====
const $ = (s, el = document) => el.querySelector(s);
const ft = n => n == null ? '–' : n.toLocaleString('hu-HU').replace(/ /g, ' ') + ' Ft';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ===== Navigáció =====
const nav = $('.nav');
$('#navToggle').addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  $('#navToggle').setAttribute('aria-expanded', open);
});
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('is-open');
  $('#navToggle').setAttribute('aria-expanded', 'false');
}));

// ===== Kategóriák =====
const catsEl = $('#cats');
const detailEl = $('#catDetail');
const ORDER = ['AM', 'A1', 'A2', 'A', 'B'];
const byCode = Object.fromEntries(CATEGORIES.map(c => [c.code, c]));

catsEl.innerHTML = ORDER.map(code => {
  const c = byCode[code];
  return `<button class="cat" data-code="${c.code}" data-type="${c.type}">
    <span class="cat__type">${c.icon}</span>
    <div class="cat__code">${c.code}</div>
    <div class="cat__name">${c.name}</div>
    <div class="cat__age">Min. ${c.minAge}</div>
    <div class="cat__price">${ft(c.price)}</div>
  </button>`;
}).join('');

function showCat(code) {
  const c = byCode[code];
  catsEl.querySelectorAll('.cat').forEach(b => b.classList.toggle('is-active', b.dataset.code === code));
  detailEl.innerHTML = `
    <div>
      <p class="eyebrow">${c.icon} ${c.type === 'auto' ? 'Autó' : 'Motor'}</p>
      <h3>„${c.code}” kategória</h3>
      <p>${c.desc}</p>
      <h4>Jelentkezés feltételei</h4>
      <ul>${c.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
      <h4>Óraszámok</h4>
      <div class="hours">
        <div><b>${c.driving}</b><span>vezetési óra (50 perc) · min. ${c.km}</span></div>
        <div><b>Elmélet</b><span>${c.theory}</span></div>
      </div>
    </div>
    <div>
      <h4 style="margin-top:0">Legkorábban vizsgázhatsz</h4>
      <ul class="timeline">${c.exams.map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('')}</ul>
      <div class="cat-detail__price">
        <div><span class="small">Teljes képzés</span><br><b>${ft(c.price)}</b><br><span class="small">tandíj ${ft(c.tuition)} + vizsgadíj ${ft(c.examFee)}</span></div>
        <a href="#jelentkezes" class="btn btn--red" data-pick="${c.code}">Jelentkezem ${c.code}-ra</a>
      </div>
      <p><a class="doc" href="${DOCS}${c.doc}" target="_blank" rel="noopener">Tantervi és vizsgakövetelmények (PDF) ↗</a></p>
    </div>`;
}

catsEl.addEventListener('click', e => {
  const b = e.target.closest('.cat');
  if (!b) return;
  showCat(b.dataset.code);
  if (innerWidth < 880) detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelectorAll('.mode__btn').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.mode__btn').forEach(b => {
    b.classList.toggle('is-active', b === btn);
    b.setAttribute('aria-selected', b === btn);
  });
  const mode = btn.dataset.mode;
  catsEl.querySelectorAll('.cat').forEach(c => c.classList.toggle('is-hidden', mode !== 'all' && c.dataset.type !== mode));
  const first = catsEl.querySelector('.cat:not(.is-hidden)');
  if (first && (!catsEl.querySelector('.cat.is-active:not(.is-hidden)'))) showCat(first.dataset.code);
}));
showCat('B');

// ===== Árak =====
$('#prices').innerHTML = PRICE_ROWS.map(r => {
  const code = r[0].split(' ')[0];
  const featured = code === 'B';
  return `<article class="price${featured ? ' price--featured' : ''}">
    ${featured ? '<span class="price__badge">Legnépszerűbb</span>' : ''}
    <h3>${code}</h3>
    <div class="price__age">Min. életkor: ${r[0].match(/\((.*)\)/)[1]} év</div>
    <div class="price__total">${ft(r[9])}<small>teljes képzési költség</small></div>
    <dl>
      <div><dt>Elméleti képzés</dt><dd>${ft(r[1])}</dd></div>
      <div><dt>Gyakorlati óra</dt><dd>${ft(r[3])}/óra</dd></div>
      <div><dt>Gyakorlat összesen</dt><dd>${ft(r[4])}</dd></div>
      <div><dt>Vizsgadíjak</dt><dd>${ft(r[8])}</dd></div>
    </dl>
  </article>`;
}).join('');

$('#extraPrices').innerHTML = `
  <thead><tr><th>Képzés</th><th>Elm. képzés</th><th>Elm. vizsga</th><th>Óradíj</th><th>Gyakorlat</th><th>JK</th><th>F</th><th>Tandíj</th><th>Vizsgadíj</th><th>Összesen</th></tr></thead>
  <tbody>${EXTRA_ROWS.map(r => `<tr>${r.map((v, i) => `<td>${i === 0 ? v : ft(v)}</td>`).join('')}</tr>`).join('')}</tbody>`;

// ===== Csapat =====
const IMG = 'https://padlogazmovar.hu/images/csapat/';
$('#team').innerHTML = TEAM.map(([name, role, img], i) => `
  <button class="member" data-i="${i}">
    <div class="member__img"><img src="${IMG}${img}" alt="${name}" loading="lazy"></div>
    <b>${name}</b><span>${role}</span>
  </button>`).join('');

// ===== Modal (galéria + oktatók) =====
const modal = $('#modal');
const modalBody = $('#modalBody');
const openModal = html => { modalBody.innerHTML = html; modal.showModal(); };
$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

$('#team').addEventListener('click', e => {
  const b = e.target.closest('.member');
  if (!b) return;
  const [name, role, img, bio] = TEAM[b.dataset.i];
  openModal(`<div class="bio"><img src="${IMG}${img}" alt="${name}"><div>
    <p class="eyebrow">${role}</p><h3>${name}</h3><p>${bio}</p>
    <a href="#jelentkezes" class="btn btn--red" onclick="document.getElementById('modal').close()">Jelentkezem</a></div></div>`);
});
$('#gallery').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) openModal(`<img class="full" src="${b.dataset.src}" alt="${esc(b.querySelector('img').alt)}">`);
});

// ===== Jelentkezés =====
// Nincs szerveroldal: az űrlap előre kitöltött e-mailt nyit az iskola címére.
const form = $('#signupForm');
const msg = $('#formMsg');

document.addEventListener('click', e => {
  const a = e.target.closest('[data-pick]');
  if (!a) return;
  const r = form.querySelector(`input[name="kat"][value="${a.dataset.pick}"]`);
  if (r) r.checked = true;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  form.querySelectorAll('.field').forEach(f => f.classList.remove('is-invalid'));
  const missing = [];
  if (!d.get('kat')) missing.push('kategória');
  ['nev', 'tel'].forEach(n => {
    if (!String(d.get(n) || '').trim()) {
      missing.push(n === 'nev' ? 'név' : 'telefon');
      form.elements[n].closest('.field').classList.add('is-invalid');
    }
  });
  if (!d.get('gdpr')) missing.push('adatkezelési hozzájárulás');
  if (missing.length) {
    msg.className = 'form-msg is-error';
    msg.textContent = 'Hiányzik: ' + missing.join(', ') + '.';
    return;
  }
  const body = [
    `Kategória: ${d.get('kat')}`,
    `Elméleti képzés: ${d.get('elmelet')}`,
    `Név: ${d.get('nev')}`,
    `Telefon: ${d.get('tel')}`,
    `E-mail: ${d.get('email') || '-'}`,
    '', String(d.get('uzenet') || '')
  ].join('\n');
  location.href = `mailto:padlogazmovar@gmail.com?subject=${encodeURIComponent('Jelentkezés – ' + d.get('kat') + ' kategória')}&body=${encodeURIComponent(body)}`;
  msg.className = 'form-msg is-ok';
  msg.textContent = 'Megnyílt a leveleződ az előre kitöltött jelentkezéssel – csak küldd el! Ha nem nyílt meg, hívj minket: +36 70 729 9999.';
});

$('#year').textContent = new Date().getFullYear();
