// Hiragana data: { kana, romaji, group }
const HIRAGANA = [
  // Vowels
  { kana: 'あ', romaji: 'a',  group: 'vowels' },
  { kana: 'い', romaji: 'i',  group: 'vowels' },
  { kana: 'う', romaji: 'u',  group: 'vowels' },
  { kana: 'え', romaji: 'e',  group: 'vowels' },
  { kana: 'お', romaji: 'o',  group: 'vowels' },
  // K-row
  { kana: 'か', romaji: 'ka', group: 'k-row' },
  { kana: 'き', romaji: 'ki', group: 'k-row' },
  { kana: 'く', romaji: 'ku', group: 'k-row' },
  { kana: 'け', romaji: 'ke', group: 'k-row' },
  { kana: 'こ', romaji: 'ko', group: 'k-row' },
  // S-row
  { kana: 'さ', romaji: 'sa', group: 's-row' },
  { kana: 'し', romaji: 'shi', group: 's-row' },
  { kana: 'す', romaji: 'su', group: 's-row' },
  { kana: 'せ', romaji: 'se', group: 's-row' },
  { kana: 'そ', romaji: 'so', group: 's-row' },
  // T-row
  { kana: 'た', romaji: 'ta',  group: 't-row' },
  { kana: 'ち', romaji: 'chi', group: 't-row' },
  { kana: 'つ', romaji: 'tsu', group: 't-row' },
  { kana: 'て', romaji: 'te',  group: 't-row' },
  { kana: 'と', romaji: 'to',  group: 't-row' },
  // N-row
  { kana: 'な', romaji: 'na', group: 'n-row' },
  { kana: 'に', romaji: 'ni', group: 'n-row' },
  { kana: 'ぬ', romaji: 'nu', group: 'n-row' },
  { kana: 'ね', romaji: 'ne', group: 'n-row' },
  { kana: 'の', romaji: 'no', group: 'n-row' },
  // H-row
  { kana: 'は', romaji: 'ha', group: 'h-row' },
  { kana: 'ひ', romaji: 'hi', group: 'h-row' },
  { kana: 'ふ', romaji: 'fu', group: 'h-row' },
  { kana: 'へ', romaji: 'he', group: 'h-row' },
  { kana: 'ほ', romaji: 'ho', group: 'h-row' },
  // M-row
  { kana: 'ま', romaji: 'ma', group: 'm-row' },
  { kana: 'み', romaji: 'mi', group: 'm-row' },
  { kana: 'む', romaji: 'mu', group: 'm-row' },
  { kana: 'め', romaji: 'me', group: 'm-row' },
  { kana: 'も', romaji: 'mo', group: 'm-row' },
  // Y-row
  { kana: 'や', romaji: 'ya', group: 'y-row' },
  { kana: 'ゆ', romaji: 'yu', group: 'y-row' },
  { kana: 'よ', romaji: 'yo', group: 'y-row' },
  // R-row
  { kana: 'ら', romaji: 'ra', group: 'r-row' },
  { kana: 'り', romaji: 'ri', group: 'r-row' },
  { kana: 'る', romaji: 'ru', group: 'r-row' },
  { kana: 'れ', romaji: 're', group: 'r-row' },
  { kana: 'ろ', romaji: 'ro', group: 'r-row' },
  // W-row + n
  { kana: 'わ', romaji: 'wa', group: 'w-row' },
  { kana: 'を', romaji: 'wo', group: 'w-row' },
  { kana: 'ん', romaji: 'n',  group: 'w-row' },
  // Dakuten (voiced)
  { kana: 'が', romaji: 'ga',  group: 'dakuten' },
  { kana: 'ぎ', romaji: 'gi',  group: 'dakuten' },
  { kana: 'ぐ', romaji: 'gu',  group: 'dakuten' },
  { kana: 'げ', romaji: 'ge',  group: 'dakuten' },
  { kana: 'ご', romaji: 'go',  group: 'dakuten' },
  { kana: 'ざ', romaji: 'za',  group: 'dakuten' },
  { kana: 'じ', romaji: 'ji',  group: 'dakuten' },
  { kana: 'ず', romaji: 'zu',  group: 'dakuten' },
  { kana: 'ぜ', romaji: 'ze',  group: 'dakuten' },
  { kana: 'ぞ', romaji: 'zo',  group: 'dakuten' },
  { kana: 'だ', romaji: 'da',  group: 'dakuten' },
  { kana: 'ぢ', romaji: 'ji',  group: 'dakuten' },
  { kana: 'づ', romaji: 'zu',  group: 'dakuten' },
  { kana: 'で', romaji: 'de',  group: 'dakuten' },
  { kana: 'ど', romaji: 'do',  group: 'dakuten' },
  { kana: 'ば', romaji: 'ba',  group: 'dakuten' },
  { kana: 'び', romaji: 'bi',  group: 'dakuten' },
  { kana: 'ぶ', romaji: 'bu',  group: 'dakuten' },
  { kana: 'べ', romaji: 'be',  group: 'dakuten' },
  { kana: 'ぼ', romaji: 'bo',  group: 'dakuten' },
  // Handakuten (p-sounds)
  { kana: 'ぱ', romaji: 'pa',  group: 'handakuten' },
  { kana: 'ぴ', romaji: 'pi',  group: 'handakuten' },
  { kana: 'ぷ', romaji: 'pu',  group: 'handakuten' },
  { kana: 'ぺ', romaji: 'pe',  group: 'handakuten' },
  { kana: 'ぽ', romaji: 'po',  group: 'handakuten' },
];

const DECKS = {
  hiragana: HIRAGANA,
};

// ─── <flash-card> ────────────────────────────────────────────────────────────

class FlashCard extends HTMLElement {
  #flipped = false;

  connectedCallback() {
    this.render();
  }

  get flipped() { return this.#flipped; }

  flip() {
    this.#flipped = !this.#flipped;
    this.querySelector('.card-inner')?.classList.toggle('flipped', this.#flipped);
    return this.#flipped;
  }

  reset() {
    this.#flipped = false;
    this.querySelector('.card-inner')?.classList.remove('flipped');
  }

  render() {
    const kana   = this.getAttribute('kana')   ?? '';
    const romaji = this.getAttribute('romaji') ?? '';
    const group  = this.getAttribute('group')  ?? '';
    this.innerHTML = `
      <div class="card-inner">
        <div class="card-face front">
          <div class="card-kana">${kana}</div>
          <div class="card-hint">tap to reveal</div>
        </div>
        <div class="card-face back">
          <div class="card-romaji">${romaji}</div>
          <div class="card-group">${group}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('flash-card', FlashCard);

// ─── <flash-deck> ────────────────────────────────────────────────────────────

class FlashDeck extends HTMLElement {
  #cards = [];
  #index = 0;
  #known = 0;
  #unknown = 0;
  #shuffled = false;

  connectedCallback() {
    const category = this.getAttribute('category') ?? 'hiragana';
    this.#cards = [...(DECKS[category] ?? DECKS.hiragana)];
    this.render();
    this.#bindEvents();
  }

  get #current() { return this.#cards[this.#index]; }
  get #total()   { return this.#cards.length; }

  #shuffle() {
    for (let i = this.#cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.#cards[i], this.#cards[j]] = [this.#cards[j], this.#cards[i]];
    }
  }

  #updateCard() {
    const card = this.querySelector('flash-card');
    const c = this.#current;
    card.setAttribute('kana',   c.kana);
    card.setAttribute('romaji', c.romaji);
    card.setAttribute('group',  c.group);
    card.render();
    card.reset();

    this.querySelector('.mark-buttons').classList.remove('visible');
    this.#updateProgress();
  }

  #updateProgress() {
    const pct = (this.#index / this.#total) * 100;
    this.querySelector('.progress-fill').style.width = `${pct}%`;
    this.querySelector('.card-counter').textContent = `${this.#index + 1} / ${this.#total}`;
    const answered = this.#known + this.#unknown;
    this.querySelector('.score').innerHTML =
      answered > 0
        ? `<span>${this.#known}</span> / ${answered}`
        : '—';
    this.querySelector('.btn-nav.prev').disabled = this.#index === 0;
    this.querySelector('.btn-nav.next').disabled = this.#index === this.#total - 1;
  }

  #showSummary() {
    this.querySelector('.deck-view').classList.add('hidden');
    const summary = this.querySelector('.summary');
    summary.classList.add('visible');
    const total = this.#known + this.#unknown;
    const pct = total > 0 ? Math.round((this.#known / total) * 100) : 0;
    summary.querySelector('.summary-score').textContent = `${pct}%`;
    summary.querySelector('.summary-label').textContent =
      `${this.#known} of ${this.#total} cards known`;
  }

  #bindEvents() {
    // Card flip
    this.querySelector('.card-wrapper').addEventListener('click', () => {
      const card = this.querySelector('flash-card');
      const nowFlipped = card.flip();
      if (nowFlipped) {
        this.querySelector('.mark-buttons').classList.add('visible');
      }
    });

    // Mark know
    this.querySelector('.btn-mark.know').addEventListener('click', (e) => {
      e.stopPropagation();
      this.#known++;
      this.#advance();
    });

    // Mark don't know
    this.querySelector('.btn-mark.dontknow').addEventListener('click', (e) => {
      e.stopPropagation();
      this.#unknown++;
      this.#advance();
    });

    // Nav previous
    this.querySelector('.btn-nav.prev').addEventListener('click', () => {
      if (this.#index > 0) {
        this.#index--;
        this.#updateCard();
      }
    });

    // Nav next
    this.querySelector('.btn-nav.next').addEventListener('click', () => {
      if (this.#index < this.#total - 1) {
        this.#index++;
        this.#updateCard();
      }
    });

    // Shuffle toggle
    this.querySelector('.btn-shuffle').addEventListener('click', () => {
      this.#shuffled = !this.#shuffled;
      this.querySelector('.btn-shuffle').classList.toggle('active', this.#shuffled);
      if (this.#shuffled) this.#shuffle();
      else this.#cards = [...(DECKS[this.getAttribute('category') ?? 'hiragana'])];
      this.#index = 0;
      this.#known = 0;
      this.#unknown = 0;
      this.#updateCard();
    });

    // Restart
    this.querySelector('.btn-restart').addEventListener('click', () => {
      this.#index = 0;
      this.#known = 0;
      this.#unknown = 0;
      if (this.#shuffled) this.#shuffle();
      else this.#cards = [...(DECKS[this.getAttribute('category') ?? 'hiragana'])];
      this.querySelector('.summary').classList.remove('visible');
      this.querySelector('.deck-view').classList.remove('hidden');
      this.#updateCard();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        if (this.#index < this.#total - 1) { this.#index++; this.#updateCard(); }
      } else if (e.key === 'ArrowLeft') {
        if (this.#index > 0) { this.#index--; this.#updateCard(); }
      } else if (e.key === ' ') {
        e.preventDefault();
        const card = this.querySelector('flash-card');
        const nowFlipped = card.flip();
        if (nowFlipped) this.querySelector('.mark-buttons').classList.add('visible');
      }
    });
  }

  #advance() {
    if (this.#index < this.#total - 1) {
      this.#index++;
      this.#updateCard();
    } else {
      this.#showSummary();
    }
  }

  render() {
    const c = this.#current;
    const category = this.getAttribute('category') ?? 'hiragana';
    this.innerHTML = `
      <div class="deck-view">
        <div class="deck-header">
          <span class="category-label">${category}</span>
          <span class="score">—</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:0%"></div>
        </div>
        <div class="card-wrapper">
          <flash-card kana="${c.kana}" romaji="${c.romaji}" group="${c.group}"></flash-card>
        </div>
        <div class="mark-buttons">
          <button class="btn-mark dontknow">Still learning</button>
          <button class="btn-mark know">Got it</button>
        </div>
        <div class="deck-controls">
          <button class="btn-nav prev" disabled>← Prev</button>
          <span class="card-counter">1 / ${this.#total}</span>
          <button class="btn-shuffle">Shuffle</button>
          <button class="btn-nav next">Next →</button>
        </div>
      </div>
      <div class="summary">
        <h2>Session complete</h2>
        <div class="summary-score">0%</div>
        <p class="summary-label"></p>
        <button class="btn-restart">Start over</button>
      </div>
    `;
  }
}

customElements.define('flash-deck', FlashDeck);
