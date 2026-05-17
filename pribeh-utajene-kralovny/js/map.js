/* ── Leaflet mapa cesty (o-karoline.html) ── */
/* Načítá se dynamicky až po DOMContentLoaded */

document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('journey-map');
  if (!mapEl || typeof L === 'undefined') return;

  const journeyPoints = [
    { name: 'Hannover', lat: 52.3759, lng: 9.7320, description: 'Rodné město · 1772' },
    { name: 'Londýn',   lat: 51.5074, lng: -0.1278, description: 'Setkání s princem · 90. léta 18. stol.' },
    { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, description: 'Léta vyhnanství · počátek 19. stol.' },
    { name: 'Blansko',  lat: 49.3648, lng: 16.6445, description: 'Domov a klid · po 1820' },
  ];

  const map = L.map('journey-map', {
    center: [50.5, 5.0],
    zoom: 5,
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap, &copy; CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Zlatý custom marker (SVG korunka)
  const crownIcon = L.divIcon({
    html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L20 10L26 6L22 18H6L2 6L8 10L14 2Z" fill="#C9A84C" stroke="#1A0F2E" stroke-width="1.5"/>
      <rect x="5" y="19" width="18" height="4" rx="1" fill="#C9A84C"/>
      <circle cx="14" cy="28" r="3" fill="#C9A84C"/>
    </svg>`,
    className: '',
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -38]
  });

  const latlngs = journeyPoints.map((p) => [p.lat, p.lng]);

  // Animovaná polyline pomocí CSS stroke-dashoffset
  const polyline = L.polyline(latlngs, {
    color: '#C9A84C',
    weight: 2.5,
    opacity: 0.7,
    dashArray: '8 6'
  }).addTo(map);

  journeyPoints.forEach((p) => {
    const marker = L.marker([p.lat, p.lng], { icon: crownIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family:'Playfair Display',serif;min-width:150px;">
        <strong style="color:#6B1F3A;font-size:1.1rem;">${p.name}</strong><br>
        <span style="font-size:0.85rem;color:#555;">${p.description}</span>
      </div>
    `, { maxWidth: 220 });
  });

  // IntersectionObserver: animuj polyline při zobrazení
  const mapSection = document.getElementById('map-section');
  if (mapSection) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          map.invalidateSize();
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(mapSection);
  }
});
