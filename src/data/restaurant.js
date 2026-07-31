// Central place for restaurant info shown across Navbar, Footer, Home, and
// Contact. Edit the placeholder values below with real details.
export const restaurant = {
  name: 'Nepres',
  tagline: 'Himalayan & Indian flavors, made with heart',
  taglineKo: '정성을 담은 히말라야 · 인도 요리',
  currency: '₩',
  phone: '(+82) 10-9484-5838',
  phoneHref: 'tel:+821094845838',
  email: 'nepresrestro@gmail.com',
  address: {
    line1: 'Nepres',
    line2: 'Ganjeo-ro 189, Naju, South Korea',
  },
  // Standard Google Maps "embed via search query" URL — no API key required.
  mapEmbedSrc: 'https://www.google.com/maps?q=Ganjeo-ro+189,+Naju,+South+Korea&output=embed',
  hours: [
    { day: 'Monday – Thursday', dayKo: '월 – 목', time: '11:00 AM – 9:00 PM' },
    { day: 'Friday – Saturday', dayKo: '금 – 토', time: '11:00 AM – 11:00 PM' },
    { day: 'Sunday', dayKo: '일요일', time: '12:00 PM – 9:00 PM' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
}
