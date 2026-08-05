/**
 * Dutch FC landing-page configuration.
 *
 * EDIT THIS FILE ONLY when the gallery link, prices, contact details,
 * social links, or featured photographs change.
 */
window.DUTCH_FC_CONFIG = Object.freeze({
  galleryUrl: "https://nylenses.pixieset.com/dutchfcmatchphotos/",
  galleryStatus: "Photos from each covered match are added after editing. If the gallery is not ready yet, please check back soon.",

  contact: Object.freeze({
    phoneDisplay: "(214) 283-7683",
    phoneDigits: "2142837683",
    preferredMethod: "text",
    helpMessage: "Ready to order? Heart your photos in Pixieset, share the Favorites list, then tap Text My Order. NY Lenses confirms your photos and total before payment.",
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

/* Keep early visitors informed before a covered match gallery is published. */
(function addGalleryStatus() {
  const config = window.DUTCH_FC_CONFIG;
  if (!config || !config.galleryStatus) return;

  const galleryActions = document.querySelector('#gallery .gallery-actions');
  if (!galleryActions) return;

  const status = document.createElement('p');
  status.className = 'gallery-status';
  status.setAttribute('role', 'status');
  status.textContent = config.galleryStatus;
  status.style.cssText = 'flex-basis:100%;margin:4px 0 0;padding:14px 16px;border-left:4px solid #EF5604;border-radius:10px;background:#FFFFFF;color:#172E7A;font-weight:700;line-height:1.55;box-shadow:0 10px 26px rgba(23,46,122,.08)';
  galleryActions.appendChild(status);
})();
