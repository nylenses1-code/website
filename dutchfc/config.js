/**
 * Dutch FC landing-page configuration.
 *
 * EDIT THIS FILE ONLY when the gallery link, prices, contact details,
 * social links, or featured photographs change.
 */
window.DUTCH_FC_CONFIG = Object.freeze({
  galleryUrl: "https://nylenses.pixieset.com/dutchfcmatchphotos/",

  contact: Object.freeze({
    phoneDisplay: "(469) 319-2644",
    phoneDigits: "4693192644",
    preferredMethod: "text",
    helpMessage: "To order, text your name, the player’s name and team, your package, and the shared Pixieset Favorites link. NY Lenses will confirm the photos and total before payment.",
    email: "nylenses1@gmail.com",
    instagramHandle: "@ny_.lenses",
    instagramUrl: "https://www.instagram.com/ny_.lenses/"
  }),

  prices: Object.freeze([
    Object.freeze({ name: "Single Photo", price: "$10", description: "One professionally edited, high-resolution digital photograph." }),
    Object.freeze({ name: "5 Photo Pack", price: "$35", description: "Five edited digital photographs selected from the match gallery.", featured: true }),
    Object.freeze({ name: "10 Photo Pack", price: "$55", description: "Ten edited digital photographs for a wider set of game-day moments." }),
    Object.freeze({ name: "20 Photo Pack", price: "$85", description: "Twenty edited digital photographs from the available match coverage." }),
    Object.freeze({ name: "Full Player Gallery", price: "$100", description: "All available edited photographs of one player from the match." })
  ]),

  /**
   * Add real Dutch FC photographs after the first shoot.
   * Example:
   * Object.freeze({ src: "/dutchfc/photos/dutch-fc-match-01.webp", alt: "Dutch FC player controlling the ball during a match" })
   *
   * Keep this array empty until real, approved photographs are available.
   */
  featuredPhotos: Object.freeze([])
});

/*
 * Contact enhancement for the static Dutch FC page.
 * The page loads this file after its HTML, so these links can be added
 * without introducing another dependency or changing the portfolio pages.
 */
(function addPhoneContact() {
  const config = window.DUTCH_FC_CONFIG;
  const contact = config && config.contact;
  if (!contact || !contact.phoneDigits || !contact.phoneDisplay) return;

  const panel = document.querySelector('#contact .contact-panel');
  const links = document.querySelector('#contact .contact-links');
  const intro = panel && panel.querySelector('div:first-child p');
  if (!panel || !links) return;

  if (intro && contact.helpMessage) {
    intro.textContent = contact.helpMessage;
  }

  const textLink = document.createElement('a');
  textLink.href = 'sms:' + contact.phoneDigits;
  textLink.textContent = 'Text NY Lenses: ' + contact.phoneDisplay + ' (Preferred)';
  textLink.setAttribute('aria-label', 'Text NY Lenses at ' + contact.phoneDisplay + ', preferred contact method');
  links.prepend(textLink);

  const callLink = document.createElement('a');
  callLink.href = 'tel:' + contact.phoneDigits;
  callLink.textContent = 'Call NY Lenses: ' + contact.phoneDisplay;
  callLink.setAttribute('aria-label', 'Call NY Lenses at ' + contact.phoneDisplay);
  textLink.insertAdjacentElement('afterend', callLink);

  const footerLinks = document.querySelector('footer .footer-links');
  if (footerLinks) {
    const footerText = document.createElement('a');
    footerText.href = 'sms:' + contact.phoneDigits;
    footerText.textContent = 'Text';
    footerText.setAttribute('aria-label', 'Text NY Lenses at ' + contact.phoneDisplay);
    footerLinks.prepend(footerText);
  }
})();
