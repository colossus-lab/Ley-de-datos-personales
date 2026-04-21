/* =========================================================
   Globo terráqueo · Datos BIS Working Paper 1343
   "The Geography of AI Firms" (Rishabh & Shreeti, 2026)
   Cruce con Proyecto de Ley 1625-D-2026
   ========================================================= */

const AI_GEO_DATA = [
  // iso3, jurisdiction, lat, lng, n_ai_firms, val_usd_mn, aipi (0-1), tier
  { iso: 'USA', name: 'Estados Unidos',        lat: 39.5,  lng: -98.4,  firms: 696, val: 29979728.09, aipi: 0.771, valPctGdp: 104.3 },
  { iso: 'CHN', name: 'China',                 lat: 39.9,  lng: 116.4,  firms: 244, val: 2993513.48,  aipi: 0.635, valPctGdp: 16.0 },
  { iso: 'EMU', name: 'Zona Euro',             lat: 50.1,  lng: 8.7,    firms: 59,  val: 1654690.45,  aipi: 0.670, valPctGdp: 10.0 },
  { iso: 'ISR', name: 'Israel',                lat: 32.1,  lng: 34.8,   firms: 42,  val: 106237.65,   aipi: 0.725, valPctGdp: 19.7 },
  { iso: 'GBR', name: 'Reino Unido',           lat: 51.5,  lng: -0.1,   firms: 40,  val: 309750.63,   aipi: 0.731, valPctGdp: 8.4 },
  { iso: 'JPN', name: 'Japón',                 lat: 35.7,  lng: 139.7,  firms: 26,  val: 900629.85,   aipi: 0.733, valPctGdp: 22.4 },
  { iso: 'CAN', name: 'Canadá',                lat: 45.4,  lng: -75.7,  firms: 22,  val: 160217.15,   aipi: 0.713, valPctGdp: 7.1 },
  { iso: 'IND', name: 'India',                 lat: 28.6,  lng: 77.2,   firms: 22,  val: 356024.28,   aipi: 0.493, valPctGdp: 9.1 },
  { iso: 'TWN', name: 'Chinese Taipei',        lat: 25.0,  lng: 121.5,  firms: 20,  val: 1651591.26,  aipi: null,  valPctGdp: 207.2 },
  { iso: 'KOR', name: 'Corea del Sur',         lat: 37.5,  lng: 127.0,  firms: 15,  val: 968334.55,   aipi: 0.727, valPctGdp: 51.6 },
  { iso: 'AUS', name: 'Australia',             lat: -35.3, lng: 149.1,  firms: 14,  val: 121538.59,   aipi: 0.727, valPctGdp: 6.9 },
  { iso: 'SGP', name: 'Singapur',              lat: 1.35,  lng: 103.8,  firms: 11,  val: 40055.92,    aipi: 0.801, valPctGdp: 7.3 },
  { iso: 'CHE', name: 'Suiza',                 lat: 46.9,  lng: 7.5,    firms: 8,   val: 52188.73,    aipi: 0.757, valPctGdp: 5.6 },
  { iso: 'SWE', name: 'Suecia',                lat: 59.3,  lng: 18.1,   firms: 7,   val: 24723.72,    aipi: 0.748, valPctGdp: 4.1 },
  { iso: 'ARE', name: 'Emiratos Árabes Unidos',lat: 24.5,  lng: 54.4,   firms: 5,   val: 9657.81,     aipi: 0.628, valPctGdp: null },
  { iso: 'BRA', name: 'Brasil',                lat: -15.8, lng: -47.9,  firms: 3,   val: 5307.7,      aipi: 0.501, valPctGdp: 0.24 },
  { iso: 'HKG', name: 'Hong Kong RAE',         lat: 22.3,  lng: 114.2,  firms: 2,   val: 26739.78,    aipi: 0.701, valPctGdp: 6.6 },
  { iso: 'MEX', name: 'México',                lat: 19.4,  lng: -99.1,  firms: 2,   val: 4400,        aipi: 0.532, valPctGdp: 0.24 },
  { iso: 'NOR', name: 'Noruega',               lat: 59.9,  lng: 10.8,   firms: 2,   val: 4212.49,     aipi: 0.706, valPctGdp: null },
  { iso: 'COL', name: 'Colombia',              lat: 4.7,   lng: -74.1,  firms: 1,   val: 700,         aipi: 0.489, valPctGdp: 0.17 },
  { iso: 'FRA', name: 'Francia',               lat: 48.9,  lng: 2.4,    firms: 19,  val: 63103.05,    aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'DEU', name: 'Alemania',              lat: 52.5,  lng: 13.4,   firms: 20,  val: 768450.89,   aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'NLD', name: 'Países Bajos',          lat: 52.4,  lng: 4.9,    firms: 11,  val: 800839.21,   aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'BEL', name: 'Bélgica',               lat: 50.8,  lng: 4.4,    firms: 2,   val: 6602.65,     aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'FIN', name: 'Finlandia',             lat: 60.2,  lng: 24.9,   firms: 3,   val: 5301.44,     aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'PRT', name: 'Portugal',              lat: 38.7,  lng: -9.1,   firms: 2,   val: 3250,        aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'LUX', name: 'Luxemburgo',            lat: 49.6,  lng: 6.1,    firms: 1,   val: 5643.21,     aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'EST', name: 'Estonia',               lat: 59.4,  lng: 24.8,   firms: 1,   val: 1500,        aipi: 0.670, valPctGdp: null, euro: true },
  { iso: 'DNK', name: 'Dinamarca',             lat: 55.7,  lng: 12.6,   firms: 1,   val: 2531.6,      aipi: 0.752, valPctGdp: null },
  { iso: 'HUN', name: 'Hungría',               lat: 47.5,  lng: 19.0,   firms: 1,   val: 3727.54,     aipi: null,  valPctGdp: null },
  { iso: 'POL', name: 'Polonia',               lat: 52.2,  lng: 21.0,   firms: 1,   val: 41.86,       aipi: 0.611, valPctGdp: null },
  { iso: 'TUR', name: 'Turquía',               lat: 39.9,  lng: 32.9,   firms: 1,   val: 2000,        aipi: 0.519, valPctGdp: null },
  { iso: 'VNM', name: 'Vietnam',               lat: 21.0,  lng: 105.8,  firms: 1,   val: 6204.06,     aipi: 0.477, valPctGdp: null },

  // Sin AI firms pero relevantes (contexto LATAM + Argentina destacada)
  { iso: 'ARG', name: 'Argentina',             lat: -34.6, lng: -58.4,  firms: 0,   val: 0,           aipi: 0.474, valPctGdp: 0, highlight: true },
  { iso: 'CHL', name: 'Chile',                 lat: -33.4, lng: -70.6,  firms: 0,   val: 0,           aipi: 0.586, valPctGdp: 0 },
  { iso: 'URY', name: 'Uruguay',               lat: -34.9, lng: -56.2,  firms: 0,   val: 0,           aipi: 0.488, valPctGdp: 0 },
  { iso: 'PER', name: 'Perú',                  lat: -12.1, lng: -77.0,  firms: 0,   val: 0,           aipi: 0.434, valPctGdp: 0 }
];

// Coincidencias específicas proyecto de ley ↔ data BIS por país
const LAW_CROSSES = {
  USA: [
    { art: 'Cap. III · Transf. internacionales', text: 'EEUU concentra el 64% del valor AI global (USD 29,9B). Buena parte de datos de argentinos termina en infraestructura norteamericana. La ley exige garantías adecuadas o consentimiento explícito.' },
    { art: 'Art. 19 · Decisiones automatizadas', text: 'El 64% de los deals de IA quedan en la misma jurisdicción (home bias). El usuario argentino enfrenta decisiones automatizadas diseñadas con datos y sesgos foráneos.' }
  ],
  CHN: [
    { art: 'Cap. III · Transf. internacionales', text: 'China: 244 firms AI, valuación USD 2,99B, 74% de sus deals quedan dentro del país. Jurisdicción no adecuada por la UE → transferencias requieren garantías reforzadas bajo la ley.' }
  ],
  EMU: [
    { art: 'Título XII · Articulación GDPR', text: 'Argentina mantiene desde 2003 (renovada enero 2024) el estatus de "nivel adecuado" UE. La ley preserva ese puente: USD 9.685M exportados en conocimiento en 2024-25.' }
  ],
  GBR: [
    { art: 'Art. 52 · Sandbox regulatorio', text: 'Reino Unido inspiró el modelo de sandbox propuesto. Tiene 40 AI firms y AIPI 0,73. El sandbox argentino busca replicar su efecto atractor.' }
  ],
  SGP: [
    { art: 'Art. 52 · Sandbox regulatorio', text: 'Singapur lidera el ranking AIPI (0,80) con sólo 11 firms pero gran densidad per cápita. Referencia directa de nuestra propuesta.' },
    { art: 'Art. 17 · Portabilidad', text: 'El marco de portabilidad de datos singapurense es el benchmark técnico citado en el proyecto.' }
  ],
  KOR: [
    { art: 'Art. 52 · Sandbox regulatorio', text: 'Corea del Sur: 15 AI firms, AIPI 0,73, sandbox vigente. Tercer modelo citado en el proyecto junto con Reino Unido y Singapur.' }
  ],
  ISR: [
    { art: 'Tít. VII · PyMEs e innovación', text: 'Israel: 42 AI firms pese a su tamaño (19,7% de su PBI). Demuestra que un ecosistema PyME robusto + datos protegidos escala. Modelo implícito para Argentina.' }
  ],
  BRA: [
    { art: 'Tít. XII · Coop. regional', text: 'Brasil (LGPD 2020): 3 AI firms, AIPI 0,50. La articulación con el régimen argentino facilita flujos regionales sin perder adecuación UE.' }
  ],
  ARG: [
    { art: 'TODO EL PROYECTO', text: 'Argentina hoy: 0 AI firms de USD 500M+, AIPI 0,47 (por debajo de Brasil, Chile, México). El proyecto apunta a cerrar esa brecha sin resignar derechos.' },
    { art: 'Art. 52 · Sandbox regulatorio', text: 'La evidencia BIS muestra que las jurisdicciones con mejor score en "regulación y ética" del AIPI atraen firms. Argentina necesita el sandbox para revertir su posición.' },
    { art: 'Art. 11 · Seudonimización', text: 'Habilita que datos argentinos participen en entrenamiento de IA sin perder protección — sin esa figura el país queda fuera del circuito.' }
  ]
};

// Insights globales (cruces macro ley ↔ BIS)
const GLOBAL_INSIGHTS = [
  {
    icon: '🌐',
    title: 'Transferencias internacionales — Cap. III',
    stat: '95% del valor AI global en 10 jurisdicciones',
    text: 'Rishabh & Shreeti (2026) muestran una concentración extrema. La ley actualiza el régimen de transferencias con garantías adecuadas, cláusulas tipo y decisiones de adecuación — clave cuando los datos de argentinos inevitablemente cruzan fronteras.'
  },
  {
    icon: '🤖',
    title: 'Decisiones automatizadas — Art. 19',
    stat: '64% de los deals son home-biased',
    text: 'Los modelos de IA se entrenan con datos locales del país donde está la firma. Un argentino evaluado por un sistema automatizado enfrenta decisiones construidas con sesgos ajenos. El proyecto garantiza revisión humana y explicabilidad.'
  },
  {
    icon: '🇪🇺',
    title: 'Adecuación UE — Tít. XII',
    stat: 'Renovada 15·01·2024',
    text: 'Argentina es uno de los pocos países fuera de la UE con nivel adecuado. La ley blinda ese estatus: sin él, se perderían USD 9.685M de exportaciones de conocimiento (2024-25).'
  },
  {
    icon: '⚖️',
    title: 'Autoridad independiente — AAIP preservada',
    stat: 'AIPI · "Regulation & Ethics"',
    text: 'El índice IMF AIPI muestra que los países con mayor score regulatorio atraen firms. Singapur 0,80; EEUU 0,77; Suiza 0,76. La ley preserva autonomía de la AAIP: elemento central para escalar sin improvisar.'
  },
  {
    icon: '🧪',
    title: 'Sandbox regulatorio — Art. 52',
    stat: 'Modelos: UK · Singapur · Corea',
    text: 'Las tres jurisdicciones de referencia del proyecto tienen sandbox vigente y AIPI > 0,72. Argentina está en 0,47: el sandbox es el puente entre protección e innovación.'
  },
  {
    icon: '📊',
    title: 'PyMEs e innovación — Categorización tripartita',
    stat: '76 jurisdicciones · obligaciones proporcionales',
    text: 'Israel (42 firms) demuestra que el ecosistema PyME puede escalar si las reglas son proporcionales. La ley propone tres niveles (básico/intermedio/avanzado) para no ahogar a las PyMEs argentinas.'
  }
];

/* ---------- GLOBE RENDERER ---------- */
(function mapamundiTab() {
  const TAB_ID = 'mapamundi';
  let initialized = false;
  let disposed = false;

  // Esperar a que el tab se active por primera vez
  document.addEventListener('tab:activated', (e) => {
    if (e.detail.tab === TAB_ID && !initialized) {
      initialized = true;
      boot();
    }
  });

  async function boot() {
    const panel = document.getElementById('globePanel');
    const insightsGrid = document.getElementById('globeInsights');
    if (insightsGrid && !insightsGrid.dataset.filled) {
      insightsGrid.dataset.filled = '1';
      insightsGrid.innerHTML = GLOBAL_INSIGHTS.map(i => `
        <article class="globe-insight" data-reveal>
          <div class="globe-insight-icon" aria-hidden="true">${i.icon}</div>
          <div class="globe-insight-body">
            <div class="globe-insight-stat">${i.stat}</div>
            <h4>${i.title}</h4>
            <p>${i.text}</p>
          </div>
        </article>
      `).join('');
    }

    // Inicializar panel lateral con default
    renderDefaultPanel();

    // Render top ranking (fallback si WebGL falla o reduced-motion)
    renderTopList();

    // Three.js lazy-load
    const canvasHost = document.getElementById('globeCanvas');
    if (!canvasHost) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      canvasHost.classList.add('static-mode');
      renderStaticFallback(canvasHost);
      return;
    }

    try {
      const THREE = await loadThree();
      initGlobe(THREE, canvasHost);
    } catch (err) {
      console.warn('[mapamundi] Three.js no disponible, usando fallback estático', err);
      canvasHost.classList.add('static-mode');
      renderStaticFallback(canvasHost);
    }
  }

  function renderDefaultPanel() {
    const panel = document.getElementById('globePanel');
    if (!panel) return;
    panel.innerHTML = `
      <div class="globe-panel-default">
        <span class="globe-panel-eyebrow">Explorá el mapa</span>
        <h3>El mundo según BIS 1343</h3>
        <p>Cada punto es una jurisdicción analizada por Rishabh & Shreeti (2026). Tamaño y color reflejan el número de firms de IA con valuación ≥ USD 500M.</p>
        <p class="globe-panel-hint">Hacé clic o pasá el mouse sobre un punto para ver su cruce con el proyecto de ley.</p>
        <ul class="globe-legend">
          <li><span class="dot dot-gold"></span> 40+ firms (hubs dominantes)</li>
          <li><span class="dot dot-orange"></span> 10-40 firms</li>
          <li><span class="dot dot-blue"></span> 1-10 firms</li>
          <li><span class="dot dot-celeste"></span> Argentina (0 firms · AIPI 0,47)</li>
          <li><span class="dot dot-grey"></span> Sin firms</li>
        </ul>
      </div>
    `;
  }

  function renderCountryPanel(d) {
    const panel = document.getElementById('globePanel');
    if (!panel) return;
    const crosses = LAW_CROSSES[d.iso] || [];
    const valStr = d.val > 0
      ? (d.val >= 1000000 ? `USD ${(d.val/1000000).toFixed(2)}B` : `USD ${(d.val/1000).toFixed(1)}B`)
      : '—';
    const aipiStr = d.aipi != null ? d.aipi.toFixed(2) : '—';
    const valPctStr = d.valPctGdp != null ? `${d.valPctGdp.toFixed(1)}%` : '—';
    panel.innerHTML = `
      <div class="globe-panel-country">
        <button class="globe-panel-close" type="button" aria-label="Cerrar detalle">×</button>
        <span class="globe-panel-eyebrow">${d.iso}${d.euro ? ' · miembro Zona Euro' : ''}</span>
        <h3>${d.name}</h3>
        <div class="globe-kpis">
          <div class="globe-kpi"><span class="k-label">Firms IA</span><span class="k-val">${d.firms}</span></div>
          <div class="globe-kpi"><span class="k-label">Valuación</span><span class="k-val">${valStr}</span></div>
          <div class="globe-kpi"><span class="k-label">AIPI</span><span class="k-val">${aipiStr}</span></div>
          <div class="globe-kpi"><span class="k-label">% PBI</span><span class="k-val">${valPctStr}</span></div>
        </div>
        ${crosses.length ? `
          <div class="globe-crosses">
            <h4>Cruce con el proyecto 1625-D-2026</h4>
            ${crosses.map(c => `
              <div class="globe-cross">
                <span class="globe-cross-art">${c.art}</span>
                <p>${c.text}</p>
              </div>
            `).join('')}
          </div>
        ` : `<p class="globe-no-cross">Esta jurisdicción no tiene cruce directo destacado. Fuente: BIS Working Paper 1343.</p>`}
      </div>
    `;
    const closeBtn = panel.querySelector('.globe-panel-close');
    if (closeBtn) closeBtn.addEventListener('click', renderDefaultPanel);
  }

  function renderTopList() {
    const el = document.getElementById('globeTopList');
    if (!el || el.dataset.filled) return;
    el.dataset.filled = '1';
    const top = [...AI_GEO_DATA].sort((a,b) => (b.firms - a.firms)).slice(0, 15);
    el.innerHTML = top.map((d, i) => `
      <li class="top-item" data-iso="${d.iso}">
        <span class="top-rank">${String(i+1).padStart(2,'0')}</span>
        <span class="top-flag">${flagFromIso(d.iso)}</span>
        <span class="top-name">${d.name}</span>
        <span class="top-firms">${d.firms}</span>
      </li>
    `).join('');
    el.querySelectorAll('.top-item').forEach(li => {
      li.addEventListener('click', () => {
        const iso = li.dataset.iso;
        const d = AI_GEO_DATA.find(x => x.iso === iso);
        if (d) renderCountryPanel(d);
      });
    });
  }

  function flagFromIso(iso) {
    const map = {
      USA:'🇺🇸', CHN:'🇨🇳', EMU:'🇪🇺', ISR:'🇮🇱', GBR:'🇬🇧', JPN:'🇯🇵',
      CAN:'🇨🇦', IND:'🇮🇳', TWN:'🇹🇼', KOR:'🇰🇷', AUS:'🇦🇺', SGP:'🇸🇬',
      CHE:'🇨🇭', SWE:'🇸🇪', ARE:'🇦🇪', BRA:'🇧🇷', HKG:'🇭🇰', MEX:'🇲🇽',
      NOR:'🇳🇴', COL:'🇨🇴', FRA:'🇫🇷', DEU:'🇩🇪', NLD:'🇳🇱', BEL:'🇧🇪',
      FIN:'🇫🇮', PRT:'🇵🇹', LUX:'🇱🇺', EST:'🇪🇪', DNK:'🇩🇰', HUN:'🇭🇺',
      POL:'🇵🇱', TUR:'🇹🇷', VNM:'🇻🇳', ARG:'🇦🇷', CHL:'🇨🇱', URY:'🇺🇾', PER:'🇵🇪'
    };
    return map[iso] || '🏳️';
  }

  /* ---- Fallback estático (sin WebGL / reduced-motion) ---- */
  function renderStaticFallback(host) {
    host.innerHTML = `
      <div class="globe-static">
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" class="globe-static-svg">
          <rect x="0" y="0" width="800" height="400" fill="#0A1F3D"/>
          <!-- dot grid -->
          ${staticDots()}
          ${AI_GEO_DATA.map(d => {
            const x = (d.lng + 180) / 360 * 800;
            const y = (90 - d.lat) / 180 * 400;
            const r = d.firms === 0 ? 3 : Math.max(4, Math.min(22, Math.log2(d.firms + 1) * 3.5));
            const cls = d.highlight ? 'celeste' : (d.firms >= 40 ? 'gold' : d.firms >= 10 ? 'orange' : d.firms > 0 ? 'blue' : 'grey');
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" class="mk mk-${cls}" data-iso="${d.iso}" tabindex="0" role="button" aria-label="${d.name}: ${d.firms} firms IA"><title>${d.name} · ${d.firms} firms</title></circle>`;
          }).join('')}
        </svg>
      </div>
    `;
    host.querySelectorAll('.mk').forEach(c => {
      const handler = () => {
        const d = AI_GEO_DATA.find(x => x.iso === c.dataset.iso);
        if (d) renderCountryPanel(d);
      };
      c.addEventListener('click', handler);
      c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
    });
  }
  function staticDots() {
    let out = '';
    for (let lat = -80; lat <= 80; lat += 8) {
      for (let lng = -180; lng <= 180; lng += 8) {
        const x = (lng + 180) / 360 * 800;
        const y = (90 - lat) / 180 * 400;
        out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="0.9" fill="#1a3357" opacity="0.7"/>`;
      }
    }
    return out;
  }

  /* ---- Three.js lazy loader ---- */
  function loadThree() {
    if (window.THREE) return Promise.resolve(window.THREE);
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js';
      s.onload = () => window.THREE ? resolve(window.THREE) : reject(new Error('THREE not defined'));
      s.onerror = () => reject(new Error('Failed to load three.min.js'));
      document.head.appendChild(s);
    });
  }

  /* ---- Three.js globe ---- */
  function initGlobe(THREE, host) {
    host.innerHTML = '';
    const w = host.clientWidth;
    const h = host.clientHeight || 520;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    host.appendChild(renderer.domElement);

    // Earth sphere con textura procedural (dot grid continentes aproximados)
    const R = 1.8;
    const earthTex = generateEarthTexture(THREE);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(R, 64, 64),
      new THREE.MeshBasicMaterial({ map: earthTex, transparent: true })
    );
    scene.add(earth);

    // Wireframe subtle overlay
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.001, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0x1a3a66, wireframe: true, transparent: true, opacity: 0.15 })
    );
    scene.add(wire);

    // Glow atmosphere
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.08, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x3a6ae0, transparent: true, opacity: 0.08, side: THREE.BackSide
      })
    );
    scene.add(glow);

    // Markers group
    const markersGroup = new THREE.Group();
    scene.add(markersGroup);
    const markerObjs = [];

    AI_GEO_DATA.forEach(d => {
      const pos = latLngToVec3(d.lat, d.lng, R * 1.015);
      const size = d.firms === 0 ? 0.022 : Math.min(0.09, 0.022 + Math.log2(d.firms + 1) * 0.012);
      const color = d.highlight ? 0x5DB7D6 : (d.firms >= 40 ? 0xC9A24B : d.firms >= 10 ? 0xE07A3A : d.firms > 0 ? 0x3A6AE0 : 0x4a5f7f);

      const mk = new THREE.Mesh(
        new THREE.SphereGeometry(size, 14, 14),
        new THREE.MeshBasicMaterial({ color })
      );
      mk.position.copy(pos);
      mk.userData = d;
      markersGroup.add(mk);
      markerObjs.push(mk);

      // Beam (línea hacia afuera) para top firms
      if (d.firms >= 10 || d.highlight) {
        const beamLen = d.highlight ? 0.22 : Math.min(0.5, 0.12 + Math.log2(d.firms) * 0.05);
        const beamGeo = new THREE.CylinderGeometry(size * 0.15, size * 0.45, beamLen, 8);
        const beamMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        // orient beam from surface outward
        const outward = pos.clone().normalize();
        beam.position.copy(pos.clone().add(outward.clone().multiplyScalar(beamLen / 2)));
        beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), outward);
        markersGroup.add(beam);
      }
    });

    // Argentina pulse ring
    const arg = AI_GEO_DATA.find(d => d.iso === 'ARG');
    if (arg) {
      const argPos = latLngToVec3(arg.lat, arg.lng, R * 1.015);
      const ringGeo = new THREE.RingGeometry(0.06, 0.085, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x5DB7D6, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(argPos);
      ring.lookAt(argPos.clone().multiplyScalar(2));
      markersGroup.add(ring);
      ring.userData.pulse = true;
    }

    // Connection arcs: Argentina → hubs top
    const arcTargets = ['USA', 'CHN', 'EMU', 'GBR', 'SGP'];
    if (arg) {
      arcTargets.forEach(iso => {
        const t = AI_GEO_DATA.find(d => d.iso === iso);
        if (!t) return;
        const arc = createArc(THREE, arg.lat, arg.lng, t.lat, t.lng, R);
        scene.add(arc);
      });
    }

    // Controls (drag rotation manual)
    let isDragging = false, prevX = 0, prevY = 0;
    let rotY = 0, rotX = 0.2;
    let autoRotate = true;
    const dom = renderer.domElement;

    dom.style.cursor = 'grab';
    dom.addEventListener('pointerdown', (e) => {
      isDragging = true; autoRotate = false;
      prevX = e.clientX; prevY = e.clientY;
      dom.style.cursor = 'grabbing';
      dom.setPointerCapture(e.pointerId);
    });
    dom.addEventListener('pointermove', (e) => {
      if (!isDragging) { handleHover(e); return; }
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      rotY += dx * 0.005;
      rotX += dy * 0.005;
      rotX = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, rotX));
      prevX = e.clientX; prevY = e.clientY;
    });
    dom.addEventListener('pointerup', (e) => {
      isDragging = false;
      dom.style.cursor = 'grab';
      dom.releasePointerCapture(e.pointerId);
    });
    dom.addEventListener('pointerleave', () => { isDragging = false; dom.style.cursor = 'grab'; });

    // Zoom
    dom.addEventListener('wheel', (e) => {
      e.preventDefault();
      camera.position.z = Math.max(3.2, Math.min(8, camera.position.z + e.deltaY * 0.003));
    }, { passive: false });

    // Click detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    dom.addEventListener('click', (e) => {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(markerObjs, false);
      if (hits.length > 0) {
        const d = hits[0].object.userData;
        if (d && d.iso) renderCountryPanel(d);
      }
    });

    function handleHover(e) {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(markerObjs, false);
      dom.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    }

    // Resize
    const ro = new ResizeObserver(() => {
      const nw = host.clientWidth;
      const nh = host.clientHeight || 520;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    });
    ro.observe(host);

    // Animate
    let t0 = performance.now();
    let running = true;
    function animate() {
      if (!running) return;
      const now = performance.now();
      const t = (now - t0) / 1000;

      if (autoRotate && !isDragging) rotY += 0.0015;

      earth.rotation.y = rotY;
      earth.rotation.x = rotX;
      wire.rotation.y = rotY;
      wire.rotation.x = rotX;
      markersGroup.rotation.y = rotY;
      markersGroup.rotation.x = rotX;

      // pulse ring
      markersGroup.children.forEach(c => {
        if (c.userData && c.userData.pulse) {
          const s = 1 + Math.sin(t * 2.2) * 0.22;
          c.scale.set(s, s, 1);
          c.material.opacity = 0.35 + Math.sin(t * 2.2) * 0.35;
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Pause cuando el tab no está activo
    document.addEventListener('tab:activated', (e) => {
      running = (e.detail.tab === TAB_ID);
      if (running) { t0 = performance.now(); animate(); }
    });
  }

  function latLngToVec3(lat, lng, R) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lng + 180) * Math.PI / 180;
    const x = -R * Math.sin(phi) * Math.cos(theta);
    const y =  R * Math.cos(phi);
    const z =  R * Math.sin(phi) * Math.sin(theta);
    return new window.THREE.Vector3(x, y, z);
  }

  function createArc(THREE, lat1, lng1, lat2, lng2, R) {
    const p1 = latLngToVec3(lat1, lng1, R * 1.015);
    const p2 = latLngToVec3(lat2, lng2, R * 1.015);
    const mid = p1.clone().add(p2).multiplyScalar(0.5);
    const dist = p1.distanceTo(p2);
    mid.normalize().multiplyScalar(R + dist * 0.35);
    const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48));
    const mat = new THREE.LineBasicMaterial({
      color: 0x5DB7D6, transparent: true, opacity: 0.35
    });
    return new THREE.Line(geo, mat);
  }

  /* ---- Textura procedural Earth: grid de puntos que aproxima continentes ----
     Estrategia simple: usar fondo oscuro + grid de puntos más densos sobre tierra.
     Aproximamos tierra con latitud-longitud bounding boxes de continentes. */
  function generateEarthTexture(THREE) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048; canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0A1F3D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // sutil gradiente radial oscuro
    const grad = ctx.createRadialGradient(1024, 512, 0, 1024, 512, 1200);
    grad.addColorStop(0, '#0E2950');
    grad.addColorStop(1, '#081630');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Continentes aproximados (bounding boxes muy simplificados)
    // lat_min, lat_max, lng_min, lng_max
    const landBoxes = [
      // América del Norte
      [25, 70, -170, -55],
      // América Central
      [8, 25, -105, -60],
      // América del Sur
      [-55, 12, -82, -35],
      // Europa
      [36, 71, -10, 40],
      // África
      [-35, 37, -18, 52],
      // Asia central/este
      [10, 78, 40, 145],
      // Sudeste Asiático / Indonesia
      [-10, 10, 95, 141],
      // Oceanía (Australia)
      [-44, -10, 113, 154],
      // Nueva Zelanda
      [-47, -34, 166, 179],
      // Japón
      [30, 46, 129, 146],
      // Reino Unido / Irlanda
      [50, 61, -11, 2],
      // Groenlandia
      [60, 83, -60, -20],
      // India
      [8, 35, 68, 92],
      // Península Arábiga
      [13, 30, 35, 55],
      // Madagascar
      [-26, -12, 43, 51]
    ];

    function inLand(lat, lng) {
      return landBoxes.some(b => lat >= b[0] && lat <= b[1] && lng >= b[2] && lng <= b[3]);
    }

    // Grid de puntos
    const step = 2.4; // grados
    for (let lat = -89; lat <= 89; lat += step) {
      for (let lng = -179; lng <= 179; lng += step) {
        const land = inLand(lat, lng);
        const x = (lng + 180) / 360 * canvas.width;
        const y = (90 - lat) / 180 * canvas.height;
        if (land) {
          ctx.fillStyle = 'rgba(201, 162, 75, 0.55)'; // gold
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // puntos oceánicos más sutiles
          ctx.fillStyle = 'rgba(58, 106, 224, 0.12)';
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 4;
    return tex;
  }

})();
