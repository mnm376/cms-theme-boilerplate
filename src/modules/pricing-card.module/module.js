function equalizeCardHeights() {
  const tabletBreakpoint = 768;

  if (window.innerWidth >= tabletBreakpoint) {
    const cards = document.querySelectorAll('.moh-card_product');
    let maxHeight = 0;

    cards.forEach(card => {
      card.style.height = 'auto';
    });

    cards.forEach(card => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  }
}

function addButtonClickListener() {
  const buttons = document.querySelectorAll('.moh-card_price-button');
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);
window.addEventListener('DOMContentLoaded', addButtonClickListener);

//