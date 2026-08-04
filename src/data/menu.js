// Real menu, transcribed from the restaurant's printed menu (English + Korean).
// Prices are in Korean Won (whole numbers, no decimals). Edit freely — add,
// remove, or reprice items/categories here; the Menu page reads this file.
export const menu = [
  {
    category: 'Momo',
    categoryKo: '모모',
    note: 'Choice of chicken, pork, or veg (치킨 . 돼지 . 야채)',
    items: [
      { name: 'Steamed Momo', image: '/images/steammomo.jpg', nameKo: '찐 모모', price: 9000 },
      { name: 'Jhol Momo', image: '/images/jhol momo.jpg', nameKo: '국물 모모', price: 10000 },
      { name: 'Chili Momo', image: '/images/chillymomo.jpg', nameKo: '칠리 모모', price: 10000 },
      { name: 'Sadeko Momo', image: '/images/sadekomomo.jpg', nameKo: '양념된 모모', price: 11000 },
    ],
  },
  {
    category: 'Rolls',
    categoryKo: '롤',
    items: [
      { name: 'Veg Roll', image: '/images/vegrolls.jpg',   nameKo: '야채 롤', price: 9000 },
      { name: 'Egg Roll', image: '/images/eggrolls.jpg', nameKo: '계란 롤', price: 10000 },
      { name: 'Chicken Roll', image: '/images/chickenrolls.jpg', nameKo: '치킨 롤', price: 10000 },
      { name: 'Egg Chicken Roll', image: '/images/eggchickenrolls.jpg', nameKo: '에그 치킨 롤', price: 11000 },
    ],
  },
  {
    category: 'Khana Set',
    categoryKo: '카나 세트',
    items: [
      { name: 'Veg Khana Set', image: '/images/vegkhanaset.jpg', nameKo: '야채 정식', price: 9000 },
      { name: 'Chicken Khana Set', image: '/images/chickenkhanaset.jpg', nameKo: '치킨 정식', price: 10000 },
      { name: 'Mutton Khana Set', image: '/images/muttonkhanaset.jpg', nameKo: '양고기 정식', price: 10000 },
    ],
  },
  {
    category: 'Khaja Set',
    categoryKo: '카자 세트',
    items: [
      { name: 'Veg Khaja Set', image: '/images/vegkhajaset.jpg', nameKo: '야채 카자 세트', price: 9000 },
      { name: 'Non-Veg Khaja Set', image: '/images/nonvegkhajaset.jpg', nameKo: '고기 카자 세트', price: 10000 },
    ],
  },
  {
    category: 'Extras',
    categoryKo: '기타 메뉴',
    items: [
      { name: 'Samosa', image: '/images/samosa.jpg', nameKo: '사모사', price: 9000 },
      { name: 'Pakoda', image: '/images/pakoda.jpg', nameKo: '파코다', price: 10000 },
      { name: 'Aloo Tikki', image: '/images/Alootikki.jpg', nameKo: '알루 티키', price: 10000 },
      { name: 'Pani Puri', image: '/images/panipuri.jpg', nameKo: '파니푸리', price: 11000 },
      { name: 'Chatpate', image: '/images/chatpate.jpg', nameKo: '챗파테', price: 11000 },
      { name: 'Laphing', image: '/images/laphing.jpg', nameKo: '라핑', price: 11000 },
    ],
  },
  {
    category: 'Noodles & Soup',
    categoryKo: '면 & 수프',
    items: [
      { name: 'Veg Chawmin', image: '/images/chawmin.jpg', nameKo: '야채 짜으민', price: 9000 },
      { name: 'Chicken Chawmin', image: '/images/chickenchawmin.jpg', nameKo: '치킨 짜으민', price: 10000 },
      { name: 'Veg Thukpa', image: '/images/vegthukpa.jpg', nameKo: '특빠', price: 9000 },
      { name: 'Chicken Thukpa', image: '/images/chickenthukpa.jpg', nameKo: '치킨 특빠', price: 10000 },
      { name: 'Keema Noodles', image: '/images/keemanoodles.jpg', nameKo: '끼마 누들', price: 10000 },
    ],
  },
  {
    category: 'Chicken Curries',
    categoryKo: '치킨 커리',
    items: [
      { name: 'Butter Chicken', image: '/images/butterchicken.jpg', nameKo: '버터 치킨', price: 8000 },
      { name: 'Chicken Tikka Masala', image: '/images/chickentikkamasala.jpg', nameKo: '치킨 티카 마살라', price: 9000 },
      { name: 'Chicken Curry', image: '/images/chickencurry.jpg', nameKo: '치킨 커리', price: 9000 },
      { name: 'Chicken Korma', image: '/images/chickenkorma.jpg', nameKo: '치킨 코르마', price: 9000 },
    ],
  },
  {
    category: 'Mutton Curries',
    categoryKo: '양고기 커리',
    items: [
      { name: 'Mutton Curry', image: '/images/muttoncurry.jpg', nameKo: '머튼 커리', price: 8000 },
      { name: 'Mutton Masala', image: '/images/muttonmasala.jpg', nameKo: '머튼 마살라', price: 9000 },
    ],
  },
  {
    category: 'Veg Curries',
    categoryKo: '야채 커리',
    items: [
      { name: 'Paneer Butter Masala', image: '/images/paneerbuttermasala.jpg', nameKo: '파니르 버터 마살라', price: 8000 },
      { name: 'Palak Paneer', image: '/images/palakpaneer.jpg', nameKo: '팔락 파니르', price: 9000 },
      { name: 'Dal Tadka', image: '/images/daltadka.jpg', nameKo: '달 타드카', price: 9000 },
      { name: 'Mix Vegetable', image: '/images/mixvegetable.jpg', nameKo: '믹스 야채 커리', price: 9000 },
      { name: 'Aloo Gobi', image: '/images/aloogobi.jpg', nameKo: '알루 고비', price: 9000 },
    ],
  },
  {
    category: 'Naan',
    categoryKo: '난',
    items: [
      { name: 'Plain Naan', image: '/images/plainnaan.jpg', nameKo: '플레인 난', price: 2000 },
      { name: 'Butter Naan', image: '/images/butternaan.jpg', nameKo: '버터 난', price: 2500 },
      { name: 'Garlic Naan', image: '/images/garlicnaan.jpg', nameKo: '갈릭 난', price: 2500 },
      { name: 'Cheese Naan', image: '/images/cheesenaan.jpg', nameKo: '치즈 난', price: 2500 },
      { name: 'Garlic Cheese Naan', image: '/images/garliccheesenaan.jpg', nameKo: '갈릭 치즈 난', price: 3000 },
    ],
  },
  {
    category: 'Biryani',
    categoryKo: '비리야니',
    items: [
      { name: 'Veg Biryani', image: '/images/vegbiryani.jpg', nameKo: '야채 비리야니', price: 9000 },
      { name: 'Chicken Biryani', image: '/images/chickenbiryani.jpg', nameKo: '치킨 비리야니', price: 10000 },
      { name: 'Mutton Biryani', image: '/images/muttonbiryani.jpg', nameKo: '머튼 비리야니', price: 10000 },
    ],
  },
  {
    category: 'Drinks',
    categoryKo: '음료',
    items: [
      { name: 'Mango Lassi', image: '/images/mangolassi.jpg', nameKo: '망고 라씨', price: 3000 },
      { name: 'Sweet Lassi', image: '/images/sweetlassi.jpg', nameKo: '스위트 라씨', price: 3000 },
      { name: 'Banana Lassi', image: '/images/bananalassi.jpg', nameKo: '바나나 라씨', price: 3000 },
    ],
  },
  {
    category: 'Student Platter',
    categoryKo: '학생 플래터',
    comingSoon: true,
    items: [],
  },
]
