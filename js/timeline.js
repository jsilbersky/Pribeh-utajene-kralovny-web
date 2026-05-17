/* ── Časová osa (o-karoline.html) ── */

const timelineEvents = [
  {
    year: '1768',
    title: 'Narození Karoliny von Linsingen',
    text: '27. listopadu 1768 se v Hildesheim narodila Karolina Charlotta Dorothea von Linsingen, dcera hannoverského barona Johanna von Linsingen a Louisy von Schrader. ',
    mood: 'peace'
  },
  {
    year: '1780 – 1788',
    title: 'Dívka vychovaná pro dvůr',
    text: 'Po smrti matky je Karolina dál vychovávána pod dohledem britské královny Charlotty Mecklenburg-Strelitz. Učí se jazykům, hudbě, kresbě i literatuře. Pohybuje se mezi evropskou aristokracií a vyrůstá v mimořádně vzdělanou a citlivou ženu.',
    mood: 'peace'
  },
  {
    year: '1790',
    title: 'Osudové setkání',
    location: 'Hannover',
    text: 'Do lázeňského města Pyrmont v Hannoveru přijíždí princ William, vévoda z Clarence. Mladý britský princ má být pod dohledem rodiny Linsingenových. Mezi Williamem a Karolinou vzniká silný vztah, který rychle přeroste v hlubokou lásku.',
    mood: 'peace'
  },
  {
    year: '21. srpna 1791',
    title: 'Tajná svatba',
    location: 'Londýn',
    text: 'Karolina a William uzavírají za úsvitu tajný sňatek v lesní kapli u Welsede poblíž Pyrmontu. Obřad probíhá v přísném utajení pouze za přítomnosti několika svědků. ',
    mood: 'peace'
  },
  {
    year: '1792',
    title: 'Královský skandál',
    location: 'Kontinent',
    text: 'Když se o sňatku dozví britský dvůr, propuká skandál. Manželství prince s neurozenou nevěstou ohrožuje dynastické zájmy monarchie. Pod tlakem královny Charlotty je Karolina donucena souhlasit s rozvodem.',
    mood: 'peace'
  },
  {
    year: '12. listopadu 1792',
    title: 'Ztracený syn',
    location: 'Blansko, Morava',
    text: 'V lázních Driburg Karolina předčasně porodí syna. Je jí oznámeno, že dítě zemřelo. Ve skutečnosti však chlapec přežil a byl tajně odvezen do pěstounské péče. Karolina se pravdu nikdy nedozví.',
    mood: 'peace'
  },
  {
    year: '1794-1795',
    title: 'Smrt a návrat k životu',
    location: 'Blansko, Morava',
    text: 'Po psychickém i fyzickém zhroucení upadá Karolina do stavu připomínajícího smrt. Lékaři ji prohlásí za mrtvou. Mladý lékař Adolph Meineke však odmítne diagnózu přijmout, přesvědčí truchlící rodinu, aby pozastavila přípravy na pohřeb a po několika dnech ji skutečně přivede zpět k životu. Událost vyvolá senzaci.',
    mood: 'peace'
  },
    {
    year: '1795',
    title: 'Nový život s Adolfem Meinekem',
    location: 'Blansko, Morava',
    text: 'Karolina si bere lékaře a chemika Adolpha Meinekeho. Nejde o romantickou lásku, ale o pokus začít znovu s mužem, k němuž pociťuje především vděk a úctu.',
    mood: 'peace'
  },
    {
    year: '1796-1809',
    title: 'Život v Berlíně',
    location: 'Blansko, Morava',
    text: 'Novomanželé se přesouvají do Berlína, kde se jim narodí dcera Henrietta a syn Heinrich. Adolph zde zakládá vlastní podnik, který však neustále balancuje na hraně bankrotu i kvůli neutěšené mezinárodní situaci spojené s napoleonskými válkami.',
    mood: 'peace'
  },
    {
    year: '12. listopadu 1809',
    title: 'Ztráta druhého syna',
    location: 'Blansko, Morava',
    text: 'Ve výroční den jejího předčasného porodu umírá i její druhý syn Heinrich. Tato rána osudu se odráží na Karolinině už tak chatrném psychickém i fyzickém zdraví.',
    mood: 'peace'
  },
    {
    year: 'Konec roku 1809',
    title: 'Příjezd do Blanska',
    location: 'Blansko, Morava',
    text: 'Po osobních tragédiích a finančních problémech přijíždí rodina Meineke do jihomoravského města Blansko, kam byl Adolph přijat na lukrativní pracovní pozici v hutích Huga Františka starohraběte Salma. Karolina zde prožívá dosud nejklidnější období svého života. Na blanenském zámku vzniká její silné přátelství s Carlem Teubnerem, jemuž jako jedinému svěřuje svá tajemství.',
    mood: 'peace'
  },
    {
    year: '1811',
    title: 'Odchod z Blanska',
    location: 'Blansko, Morava',
    text: 'Kvůli své podivínské povaze si Meineke v hutích během roku nadělal řadu nepřátel. Otevřený konflikt s pokladním železáren Götzem nakonec vyústí v nucený odchod z Blanska. Rodina se stěhuje do Moravské Třebové, kde se Meineke pokouší opět neúspěšně podnikat.',
    mood: 'peace'
  },
    {
    year: '1812',
    title: 'William hledá Karolinu na Moravě',
    location: 'Blansko, Morava',
    text: 'Princ William přicestuje na Moravu ve snaze Karolinu znovu najít. K jejich setkání však nikdy nedojde. Okolnosti jeho neúspěchu dodnes zůstávají nejasné.',
    mood: 'peace'
  },
    {
    year: '1813-1814',
    title: 'Poslední radosti',
    location: 'Blansko, Morava',
    text: 'Karolina se dožívá svatby své dcery Henrietty s Carlem Teubnerem i narození své první vnučky. Přes zhoršující se zdraví prožívá krátké období rodinného štěstí.',
    mood: 'peace'
  },
    {
    year: '31. ledna 1815',
    title: 'Smrt v Blansku',
    location: 'Blansko, Morava',
    text: 'Karolina Meineke umírá na blanenském zámku, kam přijela strávit se svou dcerou Vánoce, ve věku 46 let. V úmrtním listu je jako příčina smrti uvedeno jediné slovo: „vysílení“. Pohřbena je u kostela sv. Martina v Blansku. Přesné místo jejího hrobu dnes neznáme.',
    mood: 'peace'
  }
];

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;

  timelineEvents.forEach((ev, i) => {
    const isRight = i % 2 === 0; // liché položky vpravo, sudé vlevo

    const item = document.createElement('div');
    item.className = `timeline-item mood-${ev.mood} tl-${isRight ? 'right' : 'left'}`;
    item.style.transitionDelay = `${i * 60}ms`;

    const content = `
      <div class="timeline-content">
        <span class="tl-year">${ev.year}</span>
        <h3 class="tl-title">${ev.title}</h3>
        <p class="tl-text">${ev.text}</p>
      </div>`;

    const dot = `<div class="tl-dot-wrap"><div class="tl-dot"></div></div>`;

    item.innerHTML = isRight
      ? content + dot + `<div class="tl-spacer"></div>`
      : `<div class="tl-spacer"></div>` + dot + content;

    container.appendChild(item);
  });

  // IntersectionObserver — slide in ze strany
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  container.querySelectorAll('.timeline-item').forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', renderTimeline);
