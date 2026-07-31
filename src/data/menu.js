// Real menu, transcribed from the restaurant's printed menu (English + Korean).
// Prices are in Korean Won (whole numbers, no decimals). Edit freely — add,
// remove, or reprice items/categories here; the Menu page reads this file.
export const menu = [
  {
    category: 'Momo',
    categoryKo: '모모',
    note: 'Choice of chicken, pork, or veg (치킨 . 돼지 . 야채)',
    items: [
      { name: 'Steamed Momo', nameKo: '찐 모모', price: 9000 },
      { name: 'Jhol Momo', nameKo: '국물 모모', price: 10000 },
      { name: 'Chili Momo', nameKo: '칠리 모모', price: 10000 },
      { name: 'Sadeko Momo', nameKo: '양념된 모모', price: 11000 },
    ],
  },
  {
    category: 'Rolls',
    categoryKo: '롤',
    items: [
      { name: 'Veg Roll', nameKo: '야채 롤', price: 9000 },
      { name: 'Egg Roll', nameKo: '계란 롤', price: 10000 },
      { name: 'Chicken Roll', nameKo: '치킨 롤', price: 10000 },
      { name: 'Egg Chicken Roll', nameKo: '에그 치킨 롤', price: 11000 },
    ],
  },
  {
    category: 'Khana Set',
    categoryKo: '카나 세트',
    items: [
      { name: 'Veg Khana Set', nameKo: '야채 정식', price: 9000 },
      { name: 'Chicken Khana Set', nameKo: '치킨 정식', price: 10000 },
      { name: 'Mutton Khana Set', nameKo: '양고기 정식', price: 10000 },
    ],
  },
  {
    category: 'Khaja Set',
    categoryKo: '카자 세트',
    items: [
      { name: 'Veg Khaja Set', nameKo: '야채 카자 세트', price: 9000 },
      { name: 'Non-Veg Khaja Set', nameKo: '고기 카자 세트', price: 10000 },
    ],
  },
  {
    category: 'Extras',
    categoryKo: '기타 메뉴',
    items: [
      { name: 'Samosa', nameKo: '사모사', price: 9000 },
      { name: 'Pakoda', nameKo: '파코다', price: 10000 },
      { name: 'Aloo Tikki', nameKo: '알루 티키', price: 10000 },
      { name: 'Pani Puri', nameKo: '파니푸리', price: 11000 },
      { name: 'Chatpate', nameKo: '챗파테', price: 11000 },
      { name: 'Laphing', nameKo: '라핑', price: 11000 },
    ],
  },
  {
    category: 'Noodles & Soup',
    categoryKo: '면 & 수프',
    items: [
      { name: 'Veg Chawmin', nameKo: '야채 짜으민', price: 9000 },
      { name: 'Chicken Chawmin', nameKo: '치킨 짜으민', price: 10000 },
      { name: 'Veg Thukpa', nameKo: '특빠', price: 9000 },
      { name: 'Chicken Thukpa', nameKo: '치킨 특빠', price: 10000 },
      { name: 'Keema Noodles', nameKo: '끼마 누들', price: 10000 },
    ],
  },
  {
    category: 'Chicken Curries',
    categoryKo: '치킨 커리',
    items: [
      { name: 'Butter Chicken', nameKo: '버터 치킨', price: 8000 },
      { name: 'Chicken Tikka Masala', nameKo: '치킨 티카 마살라', price: 9000 },
      { name: 'Chicken Curry', nameKo: '치킨 커리', price: 9000 },
      { name: 'Chicken Korma', nameKo: '치킨 코르마', price: 9000 },
    ],
  },
  {
    category: 'Mutton Curries',
    categoryKo: '양고기 커리',
    items: [
      { name: 'Mutton Curry', nameKo: '머튼 커리', price: 8000 },
      { name: 'Mutton Masala', nameKo: '머튼 마살라', price: 9000 },
    ],
  },
  {
    category: 'Veg Curries',
    categoryKo: '야채 커리',
    items: [
      { name: 'Paneer Butter Masala', nameKo: '파니르 버터 마살라', price: 8000 },
      { name: 'Palak Paneer', nameKo: '팔락 파니르', price: 9000 },
      { name: 'Dal Tadka', nameKo: '달 타드카', price: 9000 },
      { name: 'Mix Vegetable', nameKo: '믹스 야채 커리', price: 9000 },
      { name: 'Aloo Gobi', nameKo: '알루 고비', price: 9000 },
    ],
  },
  {
    category: 'Naan',
    categoryKo: '난',
    items: [
      { name: 'Plain Naan', nameKo: '플레인 난', price: 2000 },
      { name: 'Butter Naan', nameKo: '버터 난', price: 2500 },
      { name: 'Garlic Naan', nameKo: '갈릭 난', price: 2500 },
      { name: 'Cheese Naan', nameKo: '치즈 난', price: 2500 },
      { name: 'Garlic Cheese Naan', nameKo: '갈릭 치즈 난', price: 3000 },
    ],
  },
  {
    category: 'Biryani',
    categoryKo: '비리야니',
    items: [
      { name: 'Veg Biryani', nameKo: '야채 비리야니', price: 9000 },
      { name: 'Chicken Biryani', nameKo: '치킨 비리야니', price: 10000 },
      { name: 'Mutton Biryani', nameKo: '머튼 비리야니', price: 10000 },
    ],
  },
  {
    category: 'Drinks',
    categoryKo: '음료',
    items: [
      { name: 'Mango Lassi', nameKo: '망고 라씨', price: 3000 },
      { name: 'Sweet Lassi', nameKo: '스위트 라씨', price: 3000 },
      { name: 'Banana Lassi', nameKo: '바나나 라씨', price: 3000 },
    ],
  },
  {
    category: 'Student Platter',
    categoryKo: '학생 플래터',
    comingSoon: true,
    items: [],
  },
]
