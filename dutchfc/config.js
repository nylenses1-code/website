/**
 * Dutch FC landing-page configuration.
 *
 * EDIT THIS FILE ONLY when the gallery link, prices, contact details,
 * social links, or featured photographs change.
 */
window.DUTCH_FC_CONFIG = Object.freeze({
  galleryUrl: "", // REQUIRED: paste the published Pixieset gallery URL here.

  contact: Object.freeze({
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
