// Single source of truth for venue details. Update these placeholders to brand the site.
export const venue = {
  name: "Aurelia Grand",
  tagline: "Convention & Banquet",
  city: "Hyderabad",
  fullAddress: "Plot 24, Jubilee Hills Road No. 36, Hyderabad, Telangana 500033",
  phoneDisplay: "+91 98XXX XXXXX",
  phoneHref: "+919800000000",
  whatsappHref: "919800000000",
  email: "hello@aureliagrand.com",
  hours: "Mon – Sun · 9:00 AM – 9:00 PM",
  mapsQuery: "Aurelia+Grand+Convention+Hyderabad",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
  stats: {
    events: "4,200+",
    years: "18",
    capacity: "1,500",
    rating: "4.9",
  },
} as const;

export const waLink = (msg = "Hello, I'd like to enquire about booking the venue.") =>
  `https://wa.me/${venue.whatsappHref}?text=${encodeURIComponent(msg)}`;

export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${venue.mapsQuery}`;
