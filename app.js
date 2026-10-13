// Kartlar words.js ("words") ve grammer.js ("grammer") dizilerinden okunur
const card = document.getElementById("card");
const wordEl = document.getElementById("word");
const translateEl = document.getElementById("translate");
const sentenceEl = document.getElementById("sentence");
const counterEl = document.getElementById("counter");
const modeBtn = document.getElementById("modeBtn");

// Her mod: veri + kartın ön yüzü, arka yüzü ve alt metni
const decks = {
  words: {
    data: words,
    front: (w) => w.word,
    back: (w) => w.translate,
    extra: (w) => w.cumle,
    button: "Grammer Soruları",
  },
  grammar: {
    data: grammer,
    front: (g) => g.soru,
    back: (g) => g.cevap,
    extra: (g) => g.translate.soru + "\n\n→ " + g.translate.cevap,
    button: "Kelimeler",
  },
};

const STORAGE_KEY = "kelimeKartlari.state";
let state = { mode: "words", index: { words: 0, grammar: 0 } };

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saved && decks[saved.mode]) {
    state.mode = saved.mode;
    for (const m in decks) {
      const i = saved.index && saved.index[m];
      if (i >= 0 && i < decks[m].data.length) state.index[m] = i;
    }
  }
} catch (e) {}

function deck() {
  return decks[state.mode];
}

function render() {
  const d = deck();
  const index = state.index[state.mode];
  const item = d.data[index];

  // Yeni kart her zaman ön yüzle (animasyonsuz) açılır
  card.classList.add("no-anim");
  card.classList.remove("flipped");
  card.classList.toggle("grammar", state.mode === "grammar");
  void card.offsetWidth;
  card.classList.remove("no-anim");

  wordEl.textContent = d.front(item);
  translateEl.textContent = d.back(item);
  sentenceEl.textContent = d.extra(item);
  counterEl.textContent = index + 1 + " / " + d.data.length;
  modeBtn.textContent = d.button;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function move(step) {
  const len = deck().data.length;
  state.index[state.mode] = (state.index[state.mode] + step + len) % len;
  render();
}

function next() {
  move(1);
}

function prev() {
  move(-1);
}

function flip() {
  card.classList.toggle("flipped");
}

function toggleMode() {
  state.mode = state.mode === "words" ? "grammar" : "words";
  render();
}

document.getElementById("nextBtn").addEventListener("click", next);
document.getElementById("prevBtn").addEventListener("click", prev);
modeBtn.addEventListener("click", toggleMode);
card.addEventListener("click", flip);

// Klavye: sağ/sol ok kart değiştirir, boşluk/enter çevirir
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
  else if ((e.key === " " || e.key === "Enter") && e.target.tagName !== "BUTTON") {
    e.preventDefault();
    flip();
  }
});

// Telefonda sağa/sola kaydırma
let touchX = null;
card.addEventListener(
  "touchstart",
  (e) => {
    touchX = e.touches[0].clientX;
  },
  { passive: true },
);
card.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) > 50) {
    e.preventDefault();
    dx < 0 ? next() : prev();
  }
});

render();
