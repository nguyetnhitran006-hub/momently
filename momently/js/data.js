// =============================================
// Momently – Mock Data (Hà Nội Exclusive Database)
// All packages, vendors, reviews, services
// =============================================

function formatPrice(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '0₫';
  const num = Number(amount);
  return num.toLocaleString('vi-VN') + '₫';
}

const eventTypes = [
  { id: 'proposal', icon: '💍', color: '#EC4899', name_vi: 'Cầu hôn Lãng mạn', name_en: 'Romantic Proposal' },
  { id: 'birthday', icon: '🎂', color: '#F43F5E', name_vi: 'Tiệc Sinh nhật', name_en: 'Birthday Party' },
  { id: 'graduation', icon: '🎓', color: '#0284C7', name_vi: 'Lễ Tốt nghiệp / Prom', name_en: 'Graduation / Prom' },
  { id: 'anniversary', icon: '❤️', color: '#DB2777', name_vi: 'Kỷ niệm Ngày yêu / Cưới', name_en: 'Anniversary Celebration' },
  { id: 'farewell', icon: '✈️', color: '#38BDF8', name_vi: 'Tiệc Chia tay / Farewell', name_en: 'Farewell Party' },
  { id: 'pregrad', icon: '📸', color: '#8B5CF6', name_vi: 'Chụp ảnh Kỷ yếu', name_en: 'Pre-grad Photoshoot' },
  { id: 'date', icon: '🍷', color: '#E11D48', name_vi: 'Hẹn hò Lãng mạn', name_en: 'Romantic Date Night' },
  { id: 'workshop', icon: '🎨', color: '#06B6D4', name_vi: 'Workshop & Họp mặt', name_en: 'Workshop & Gathering' },
  { id: 'babyshower', icon: '👶', color: '#FBBF24', name_vi: 'Đầy tháng & Thôi nôi', name_en: 'Baby Shower & 100 Days' },
  { id: 'teambonding', icon: '🥂', color: '#10B981', name_vi: 'Teambuilding & Dã ngoại', name_en: 'Team Bonding & Retreat' },
];

// Single Capital City: TP. Hà Nội with all districts and merged wards
const cities = [
  {
    id: 'hn',
    name_vi: 'TP. Hà Nội',
    name_en: 'Hanoi Capital',
    districts: typeof hanoiDistrictsWithWards !== 'undefined' ? hanoiDistrictsWithWards : []
  }
];

const budgetRanges = [
  { id: 'under5', min: 0, max: 5000000 },
  { id: '5to10', min: 5000000, max: 10000000 },
  { id: '10to20', min: 10000000, max: 20000000 },
  { id: 'over20', min: 20000000, max: 999999999 },
];

const styleOptions = [
  { id: 'fairytale', icon: '🏰', color: '#EC4899', name_vi: 'Cổ tích & Lâu đài', name_en: 'Fairytale & Castle' },
  { id: 'romantic', icon: '🌹', color: '#F43F5E', name_vi: 'Lãng mạn & Nến hoa', name_en: 'Romantic & Floral' },
  { id: 'luxury', icon: '✨', color: '#F59E0B', name_vi: 'Sang trọng 5 sao', name_en: 'Luxury & Fine Dining' },
  { id: 'vintage', icon: '📜', color: '#D97706', name_vi: 'Hoài niệm Phố Cổ', name_en: 'Vintage & Heritage' },
  { id: 'bohemian', icon: '🌿', color: '#10B981', name_vi: 'Boho Chic & Cắm trại', name_en: 'Bohemian & Camping' },
  { id: 'skyline', icon: '🌆', color: '#0284C7', name_vi: 'Sky Lounge & Rooftop', name_en: 'Rooftop & City Sunset' },
  { id: 'frenchvilla', icon: '🏛️', color: '#8B5CF6', name_vi: 'Biệt thự Pháp cổ', name_en: 'French Villa' },
  { id: 'artconcept', icon: '🎨', color: '#06B6D4', name_vi: 'Nghệ thuật & Workshop', name_en: 'Art & Workshop' },
  { id: 'minimalist', icon: '◽', color: '#94A3B8', name_vi: 'Tối giản tinh tế', name_en: 'Modern Minimalist' },
];

const serviceTypes = [
  { id: 'venue', icon: '🏠', name_en: 'Venue & Dining', name_vi: 'Địa điểm & Ẩm thực' },
  { id: 'flowers', icon: '💐', name_en: 'Flowers & Gifts', name_vi: 'Hoa tươi & Quà tặng' },
  { id: 'decor', icon: '🎨', name_en: 'Decoration', name_vi: 'Trang trí sự kiện' },
  { id: 'photography', icon: '📷', name_en: 'Photo & Video', name_vi: 'Nhiếp ảnh & Phóng sự' },
  { id: 'cake', icon: '🎂', name_en: 'Food & Cake', name_vi: 'Bánh ngọt & Catering' },
  { id: 'music', icon: '🎵', name_en: 'Music & DJ', name_vi: 'Âm nhạc & Ban nhạc' },
  { id: 'fashion', icon: '👗', name_en: 'Fashion & Rental', name_vi: 'Trang phục & Váy dạ hội' },
  { id: 'beauty', icon: '💄', name_en: 'Beauty & Hair', name_vi: 'Trang điểm & Làm đẹp' },
  { id: 'transport', icon: '🚗', name_en: 'Transport & Chauffeur', name_vi: 'Xe đưa đón & Xe hoa' },
  { id: 'stationery', icon: '💌', name_en: 'Stationery & Print', name_vi: 'Thiệp mời & In ấn' },
  { id: 'equipment', icon: '🎪', name_en: 'Equipment Rental', name_vi: 'Thuê thiết bị sự kiện' },
  { id: 'planner', icon: '📋', name_en: 'Event Planner', name_vi: 'Tổ chức trọn gói' },
  { id: 'experience', icon: '⛺', name_en: 'Experience & Camping', name_vi: 'Trải nghiệm & Dã ngoại' },
];

// ---- HANOI PACKAGES ----
const packages = [
  {
    id: 'pkg-001',
    name_en: 'Salmonoid Romantic French Villa Proposal',
    name_vi: 'Cầu hôn Biệt thự Pháp Lãng mạn – Salmonoid',
    event: 'proposal',
    style: 'frenchvilla',
    city: 'hn',
    district: 'badinh',
    ward: 'Phường Điện Biên',
    address_vi: '32C Cao Bá Quát, Điện Biên, Ba Đình, Hà Nội',
    address_en: '32C Cao Ba Quat St, Dien Bien Ward, Ba Dinh District, Hanoi',
    directions_vi: '🚗 Ô tô: Đi vào phố Cao Bá Quát từ đường Lê Duẩn hoặc Hoàng Diệu, có bảo vệ hướng dẫn đỗ xe ô tô tại sân sảnh. 🛵 Xe máy: Bãi gửi xe miễn phí trong khuôn viên biệt thự. 📍 Gần Văn Miếu Quốc Tử Giám 400m, không gian biệt thự Pháp cổ kính.',
    directions_en: '🚗 Car: Approach Cao Ba Quat from Le Duan or Hoang Dieu St; dedicated valet parking. 🛵 Motorbike: Free on-site villa courtyard parking. 📍 400m from Temple of Literature.',
    mapUrl: 'https://www.google.com/maps/place/Salmonoid/@21.030664,105.8381567,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab98673b89c7:0xd54cd6e88d8e4199!8m2!3d21.030664!4d105.8381567!16s%2Fg%2F11b7w0_ttc?entry=ttu',
    price: 8500000,
    originalPrice: 10200000,
    rating: 4.9,
    reviewCount: 142,
    booked: 98,
    maxGuests: 2,
    description_en: 'An enchanting romantic proposal set on the leafy candlelit terrace of Salmonoid French colonial villa, complete with violin melodies, imported red roses and a 5-course European dinner.',
    description_vi: 'Setup cầu hôn lãng mạn trên ban công rợp bóng cây của biệt thự Pháp cổ Salmonoid, ánh nến lung linh, hoa hồng nhập khẩu, nghệ sĩ violin du dương và bữa tối 5 món kiểu Âu cao cấp.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Salmonoid Private Dining Terrace', name_vi: 'Sảnh tiệc ban công biệt thự Salmonoid', price: 3000000 },
      { type: 'decor', name_en: 'Candlelight & Fresh Rose Path', name_vi: 'Lối đi nến thơm & Cánh hồng tươi', price: 1500000 },
      { type: 'flowers', name_en: '99 Ecuadorian Red Roses Bouquet', name_vi: 'Bó hoa 99 bông hồng đỏ Ecuador', price: 1200000 },
      { type: 'photography', name_en: '2-hour Cinematic Proposal Photography', name_vi: 'Chụp ảnh khoảnh khắc cầu hôn 2 giờ', price: 1800000 },
      { type: 'music', name_en: 'Solo Violin Performance', name_vi: 'Nghệ sĩ Violin độc tấu tình ca', price: 1000000 },
    ],
    vendorIds: ['v-001', 'v-025', 'v-038', 'v-044'],
    featured: true,
  },
  {
    id: 'pkg-002',
    name_en: 'Top of Hanoi Sunset Sky Proposal',
    name_vi: 'Cầu hôn Hoàng hôn Tầng 67 Lotte – Top of Hanoi',
    event: 'proposal',
    style: 'skyline',
    city: 'hn',
    district: 'badinh',
    ward: 'Phường Cống Vị',
    address_vi: 'Tầng 67 Lotte Center, 54 Liễu Giai, Cống Vị, Ba Đình, Hà Nội',
    address_en: '67th Floor, Lotte Center, 54 Lieu Giai St, Ba Dinh District, Hanoi',
    directions_vi: '🚗 Ô tô: Đi vào hầm gửi xe B2-B4 Lotte Center Liễu Giai. Đi thang máy tốc độ cao lên sảnh tầng 65 rồi chuyển thang riêng lên Top of Hanoi tầng 67. 🛵 Xe máy: Gửi xe tại hầm B2 toà nhà.',
    directions_en: '🚗 Car: Underground parking at Lotte Center B2-B4. Take high-speed elevator to 65th floor sky observatory, transfer to 67th floor outdoor lounge. 🛵 Motorbike: Basement B2.',
    mapUrl: 'https://www.google.com/maps/search/Top%20of%20Hanoi%20H%C3%A0%20N%E1%BB%99i',
    price: 11500000,
    originalPrice: 13500000,
    rating: 4.9,
    reviewCount: 165,
    booked: 112,
    maxGuests: 2,
    description_en: 'Propose above the clouds at Hanoi highest open-air rooftop bar with a 360-degree sunset panoramic view, VIP reserved marquee, champagne and fireworks candle effect.',
    description_vi: 'Cầu hôn trên mây tại rooftop ngoài trời cao nhất Hà Nội, ngắm hoàng hôn 360 độ toàn cảnh thủ đô, góc bàn VIP lộng lẫy, rượu vang nổ và nến pháo sáng lung linh.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Top of Hanoi VIP Sky Marquee', name_vi: 'Góc VIP tầng 67 Top of Hanoi', price: 4500000 },
      { type: 'decor', name_en: 'Marry Me Light-up Letters & Fairy Lights', name_vi: 'Bộ chữ phát sáng Marry Me & Đèn sao', price: 2500000 },
      { type: 'flowers', name_en: 'Premium Pastel Floral Stand', name_vi: 'Trụ hoa tươi tone pastel ngọt ngào', price: 1500000 },
      { type: 'photography', name_en: 'Pro Sunset & Twilight Photo Session', name_vi: 'Chụp ảnh khoảnh khắc hoàng hôn & thành phố', price: 2000000 },
      { type: 'cake', name_en: 'Champagne & Artisan Mousse Cake', name_vi: 'Chai Champagne & Bánh Mousse Artemis', price: 1000000 },
    ],
    vendorIds: ['v-013', 'v-025', 'v-036', 'v-046'],
    featured: true,
  },
  {
    id: 'pkg-003',
    name_en: 'Secret Garden Bohemian Birthday Celebration',
    name_vi: 'Tiệc Sinh nhật Bohemian Vườn hoa Tây Hồ',
    event: 'birthday',
    style: 'bohemian',
    city: 'hn',
    district: 'tayho',
    ward: 'Phường Quảng An',
    address_vi: 'Biệt thự Vườn Secret Garden, 68 Tô Ngọc Vân, Quảng An, Tây Hồ, Hà Nội',
    address_en: 'Secret Garden Villa, 68 To Ngoc Van St, Quang An Ward, Tay Ho District, Hanoi',
    directions_vi: '🚗 Ô tô: Tuyến đường Tô Ngọc Vân rộng rãi, có chỗ đỗ ô tô ngay trước cổng sảnh vườn. 🛵 Xe máy: Đỗ xe miễn phí trong sân vườn biệt thự. 📍 Cách Phủ Tây Hồ 700m, không gian ngập tràn hoa và đèn cổ tích.',
    directions_en: '🚗 Car: Wide street with dedicated car parking in front of garden gates. 🛵 Motorbike: Free courtyard parking. 📍 700m from Tay Ho Temple, fairy lights and lush garden ambiance.',
    mapUrl: 'https://www.google.com/maps/search/InterContinental%20Hanoi%20Westlake%20H%C3%A0%20N%E1%BB%99i',
    price: 12000000,
    originalPrice: 14500000,
    rating: 4.8,
    reviewCount: 94,
    booked: 156,
    maxGuests: 30,
    description_en: 'A bohemian-style garden birthday party with dreamcatcher decorations, fairy lights, wildflower crowns, a live acoustic duo, artisan birthday cake, and a professional photo booth.',
    description_vi: 'Tiệc sinh nhật phong cách bohemian trong vườn biệt thự ven Hồ Tây với trang trí dreamcatcher, đèn cổ tích, hoa dại, ban nhạc acoustic hát theo yêu cầu và photo booth chụp ảnh lấy ngay.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1464349153159-4a5e6e833209?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Secret Garden Outdoor Villa', name_vi: 'Không gian sân vườn biệt thự Secret Garden', price: 4000000 },
      { type: 'decor', name_en: 'Bohemian Teepee & Fairy Lights Setup', name_vi: 'Lều bohemian, thảm vintage & Đèn cổ tích', price: 2500000 },
      { type: 'flowers', name_en: 'Wildflower Floral Arrangements', name_vi: 'Bó hoa tươi & Bình hoa bàn tiệc đồng nội', price: 1200000 },
      { type: 'photography', name_en: '3-hour Event Photos & Photobooth 360', name_vi: 'Chụp ảnh sự kiện 3 giờ + Photobooth 360', price: 2500000 },
      { type: 'cake', name_en: 'Artisan Birthday Cake from Triều Patisserie', name_vi: 'Bánh kem tạo hình từ Triều Patisserie', price: 800000 },
      { type: 'music', name_en: 'Bụi Band Live Acoustic Duo', name_vi: 'Ban nhạc Bụi Band hát live 2 giờ', price: 1000000 },
    ],
    vendorIds: ['v-035', 'v-039', 'v-043', 'v-045'],
    featured: true,
  },
  {
    id: 'pkg-004',
    name_en: 'InterContinental Westlake Overwater Luxury Anniversary',
    name_vi: 'Kỷ niệm Hoàng gia Mặt nước Hồ Tây – InterContinental',
    event: 'anniversary',
    style: 'luxury',
    city: 'hn',
    district: 'tayho',
    ward: 'Phường Quảng An',
    address_vi: '5 Từ Hoa, Quảng An, Tây Hồ, Hà Nội',
    address_en: '5 Tu Hoa St, Quang An Ward, Tay Ho District, Hanoi',
    directions_vi: '🚗 Ô tô: Rẽ từ đường Âu Cơ vào phố Từ Hoa, sảnh khách sạn 5 sao có nhân viên valet đỗ xe miễn phí. Đi cầu gỗ nổi trên mặt nước ra pavilion riêng biệt.',
    directions_en: '🚗 Car: Turn from Au Co to Tu Hoa St, 5-star hotel lobby with free valet. Walk along wooden boardwalk to private overwater pavilion.',
    mapUrl: 'https://www.google.com/maps/search/InterContinental%20Hanoi%20Westlake%20H%C3%A0%20N%E1%BB%99i',
    price: 16500000,
    originalPrice: 19500000,
    rating: 4.9,
    reviewCount: 88,
    booked: 64,
    maxGuests: 4,
    description_en: 'Exclusive overwater pavilion dining experience on West Lake with gourmet seafood dinner, champagne, private harpist/violinist, and candlelit roses.',
    description_vi: 'Trải nghiệm kỷ niệm ngày yêu và ngày cưới tại pavilion nổi trên mặt nước Hồ Tây độc nhất vô nhị, bữa tối ẩm thực thượng hạng, nến thơm, hoa tươi và tiếng đàn vĩ cầm dưới trăng.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Private Overwater Pavilion', name_vi: 'Pavilion nổi riêng tư mặt nước Hồ Tây', price: 6000000 },
      { type: 'catering', name_en: 'Gourmet 5-star Seafood Dinner for 2', name_vi: 'Set menu hải sản 5 sao thượng hạng cho 2 người', price: 4500000 },
      { type: 'flowers', name_en: 'Luxury Rose Centerpieces & Candle Decor', name_vi: 'Hoa tươi nhập khẩu & Setup nến thơm cao cấp', price: 2500000 },
      { type: 'music', name_en: 'Private String Soloist', name_vi: 'Nghệ sĩ đàn dây phục vụ riêng', price: 2000000 },
      { type: 'photography', name_en: '2-hour Fine-art Anniversary Portraiture', name_vi: 'Gói chụp ảnh nghệ thuật kỷ niệm 2 giờ', price: 1500000 },
    ],
    vendorIds: ['v-008', 'v-025', 'v-036', 'v-044'],
    featured: true,
  },
  {
    id: 'pkg-005',
    name_en: 'Sixdoong Riverside Sunset Camping & Farewell',
    name_vi: 'Chia tay & Tiễn bạn Du học – Sixdoong Bãi Đá Sông Hồng',
    event: 'farewell',
    style: 'bohemian',
    city: 'hn',
    district: 'tayho',
    ward: 'Phường Nhật Tân',
    address_vi: 'Vườn hoa Bãi Đá Sông Hồng, Nhật Tân, Tây Hồ, Hà Nội',
    address_en: 'Red River Rock Flower Garden, Nhat Tan Ward, Tay Ho District, Hanoi',
    directions_vi: '🚗 Ô tô & Xe máy: Đi vào ngõ 264 Âu Cơ, chạy thẳng vào cổng Vườn hoa Bãi đá Sông Hồng, bãi gửi xe rộng rãi ngay cạnh khu lều Sixdoong.',
    directions_en: '🚗 Car & Motorbike: Enter Lane 264 Au Co St, continue to Red River Rock Garden gate, spacious parking right beside Sixdoong glamping tents.',
    mapUrl: 'https://www.google.com/maps/search/Sixdoong%20Cafe%20%26%20Camping%20H%C3%A0%20N%E1%BB%99i',
    price: 6800000,
    originalPrice: 8200000,
    rating: 4.8,
    reviewCount: 110,
    booked: 85,
    maxGuests: 20,
    description_en: 'A memorable outdoor glamping send-off on the grassy banks of the Red River, featuring sunset BBQ picnic, campfire, acoustic jam, and polaroid photo guestbook.',
    description_vi: 'Buổi tiệc chia tay ấm cúng trên bãi cỏ ven sông Hồng với lều cắm trại glamping, tiệc nướng BBQ hoàng hôn, đàn hát acoustic bên lửa trại và cuốn sổ ảnh polaroid lưu bút.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Sixdoong VIP Glamping Area', name_vi: 'Khu lều VIP Sixdoong ven sông', price: 2000000 },
      { type: 'catering', name_en: 'Sunset BBQ Feast & Cold Drinks', name_vi: 'Set tiệc nướng BBQ hoàng hôn & Đồ uống', price: 2500000 },
      { type: 'photography', name_en: 'Instax Instant Camera + 30 Films', name_vi: 'Máy ảnh Instax lấy ngay + 30 cuộn film ký tặng', price: 800000 },
      { type: 'music', name_en: 'Campfire Acoustic Guitar Session', name_vi: 'Guitarist đệm hát acoustic bên lửa trại', price: 1500000 },
    ],
    vendorIds: ['v-017', 'v-043'],
    featured: false,
  },
  {
    id: 'pkg-006',
    name_en: 'COMPLEX 01 Creative Art & DIY Workshop Event',
    name_vi: 'Workshop Sáng tạo & Trải nghiệm – COMPLEX 01',
    event: 'workshop',
    style: 'artconcept',
    city: 'hn',
    district: 'dongda',
    ward: 'Phường Quang Trung',
    address_vi: '29 ngách 31 ngõ 167 Tây Sơn, Quang Trung, Đống Đa, Hà Nội',
    address_en: '29 Alley 31 Lane 167 Tay Son, Quang Trung Ward, Dong Da District, Hanoi',
    directions_vi: '🚗 Ô tô: Đỗ xe tại bãi gửi xe đối diện ngõ 167 Tây Sơn (cạnh ĐH Công Đoàn). Đi bộ vào 100m. 🛵 Xe máy: Gửi xe ngay tại cổng toà nhà COMPLEX 01.',
    directions_en: '🚗 Car: Park opposite Lane 167 Tay Son (next to Trade Union Univ). Walk 100m. 🛵 Motorbike: Gate parking at COMPLEX 01.',
    mapUrl: 'https://www.google.com/maps/search/COMPLEX%2001%20H%C3%A0%20N%E1%BB%99i',
    price: 4900000,
    originalPrice: 6200000,
    rating: 4.7,
    reviewCount: 78,
    booked: 92,
    maxGuests: 15,
    description_en: 'A private creative ceramic, candle-making or painting workshop space inside the industrial-chic COMPLEX 01 hub with artisan tea and pastries.',
    description_vi: 'Workshop tự làm gốm, nến thơm hoặc vẽ tranh nghệ thuật trong tổ hợp sáng tạo COMPLEX 01, bao gồm toàn bộ nguyên liệu, giáo viên hướng dẫn, tiệc trà và bánh ngọt.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'COMPLEX 01 Workshop Studio', name_vi: 'Studio nghệ thuật riêng tại COMPLEX 01', price: 1800000 },
      { type: 'experience', name_en: 'Full DIY Materials & Artisan Instructor', name_vi: 'Trọn gói nguyên liệu thủ công & Nghệ nhân hướng dẫn', price: 1800000 },
      { type: 'cake', name_en: 'Teabreak Box with Herbal Teas & Pastries', name_vi: 'Teabreak trà hoa & Bánh ngọt từ Circle Food', price: 800000 },
      { type: 'photography', name_en: '1.5-hour Candid Workshop Photography', name_vi: 'Chụp ảnh tư liệu bắt trọn khoảnh khắc workshop', price: 500000 },
    ],
    vendorIds: ['v-021', 'v-047'],
    featured: false,
  },
  {
    id: 'pkg-007',
    name_en: 'JW Marriott Hanoi Luxury Graduation Gala & Prom',
    name_vi: 'Dạ tiệc Tốt nghiệp & Prom Hoàng gia – JW Marriott',
    event: 'pregrad',
    style: 'luxury',
    city: 'hn',
    district: 'namtuliem',
    ward: 'Phường Mễ Trì',
    address_vi: '8 Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội',
    address_en: '8 Do Duc Duc St, Me Tri Ward, Nam Tu Liem District, Hanoi',
    directions_vi: '🚗 Ô tô: Sảnh chính khách sạn 5 sao JW Marriott có bãi đỗ xe rộng rãi và bảo vệ đón tiếp tận tình. 📍 Gần Trung tâm Hội nghị Quốc gia.',
    directions_en: '🚗 Car: 5-star JW Marriott main grand entrance with ample parking and valet reception. 📍 Adjacent to National Convention Center.',
    mapUrl: 'https://www.google.com/maps/search/JW%20Marriott%20Hanoi%20H%C3%A0%20N%E1%BB%99i',
    price: 25000000,
    originalPrice: 30000000,
    rating: 4.9,
    reviewCount: 135,
    booked: 72,
    maxGuests: 50,
    description_en: 'High-end graduation gala & prom night in the grand ballroom of JW Marriott Hanoi, featuring red carpet entrance, 360 photo booth, 5-star buffet, professional DJ and bilingual MC.',
    description_vi: 'Đại tiệc Prom và lễ tốt nghiệp đẳng cấp tại đại sảnh JW Marriott Hà Nội: thảm đỏ đón khách, bục quay video 360 độ, tiệc buffet 5 sao, ban nhạc DJ sôi động và MC chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'JW Marriott Luxury Ballroom', name_vi: 'Đại sảnh tiệc 5 sao JW Marriott', price: 10000000 },
      { type: 'catering', name_en: '5-star International Buffet (50 pax)', name_vi: 'Buffet tiệc quốc tế 5 sao cho 50 khách', price: 8000000 },
      { type: 'photography', name_en: 'Red Carpet Photo Booth 360 & Photographer Team', name_vi: 'Bục quay 360 độ + Ekip chụp ảnh thảm đỏ', price: 3000000 },
      { type: 'music', name_en: 'Professional DJ & Sound Lighting Setup', name_vi: 'DJ chuyên nghiệp & Dàn âm thanh ánh sáng sân khấu', price: 2500000 },
      { type: 'mc', name_en: 'Bilingual Event Host', name_vi: 'MC dẫn dắt chương trình song ngữ', price: 1500000 },
    ],
    vendorIds: ['v-005', 'v-039', 'v-041', 'v-055'],
    featured: true,
  },
  {
    id: 'pkg-008',
    name_en: 'Serein Cafe & Lounge Vintage Long Bien Bridge Anniversary',
    name_vi: 'Kỷ niệm Hoài niệm Cầu Long Biên – Serein Cafe & Lounge',
    event: 'anniversary',
    style: 'vintage',
    city: 'hn',
    district: 'hoankiem',
    ward: 'Phường Đồng Xuân',
    address_vi: '16 Trần Nhật Duật, Đồng Xuân, Hoàn Kiếm, Hà Nội',
    address_en: '16 Tran Nhat Duat St, Dong Xuan Ward, Hoan Kiem District, Hanoi',
    directions_vi: '🚗 Ô tô: Gửi xe tại bãi xe gầm cầu Long Biên hoặc phố Trần Nhật Duật. 🛵 Xe máy: Đỗ xe có người trông trước cửa toà nhà Serein Cafe. Thang máy lên tầng thượng ngắm toàn cảnh cầu.',
    directions_en: '🚗 Car: Parking under Long Bien bridge overpass or Tran Nhat Duat street lot. 🛵 Motorbike: Attended on-site parking in front of building. Elevator to rooftop.',
    mapUrl: 'https://www.google.com/maps/search/Serein%20Cafe%20%26%20Lounge%20H%C3%A0%20N%E1%BB%99i',
    price: 5500000,
    originalPrice: 6800000,
    rating: 4.8,
    reviewCount: 96,
    booked: 88,
    maxGuests: 2,
    description_en: 'Celebrate your love with a panoramic view of the centennial Long Bien Bridge at sunset, complete with French vintage candlelight table, acoustic serenade and custom memory photo frame.',
    description_vi: 'Lễ kỷ niệm ngắm hoàng hôn buông xuống cây cầu Long Biên trăm tuổi, bàn tiệc nến phong cách vintage Pháp, hoa tươi hoài niệm, bản tình ca acoustic và khung ảnh kỷ niệm tình yêu.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Serein Rooftop Private Table', name_vi: 'Bàn tiệc ban công view trực diện cầu Long Biên', price: 2000000 },
      { type: 'decor', name_en: 'French Vintage Candle & Rose Setup', name_vi: 'Setup nến thơm phong cách vintage Pháp & Hoa hồng', price: 1200000 },
      { type: 'photography', name_en: '1.5-hour Twilight Nostalgic Photoshoot', name_vi: 'Chụp ảnh khoảnh khắc hoàng hôn & cầu Long Biên', price: 1300000 },
      { type: 'cake', name_en: 'Anniversary Mini Cake & Wine Toast', name_vi: 'Bánh kem kỷ niệm & 2 ly vang hảo hạng', price: 1000000 },
    ],
    vendorIds: ['v-010', 'v-025', 'v-038'],
    featured: false,
  },
  {
    id: 'pkg-009',
    name_en: 'Trill Bistro Old Quarter Greenhouse Birthday',
    name_vi: 'Tiệc Sinh nhật Khu vườn Kính Phố Cổ – Trill Bistro',
    event: 'birthday',
    style: 'romantic',
    city: 'hn',
    district: 'hoankiem',
    ward: 'Phường Hàng Buồm',
    address_vi: '98 Hàng Buồm, Hàng Buồm, Hoàn Kiếm, Hà Nội',
    address_en: '98 Hang Buom St, Hang Buom Ward, Hoan Kiem District, Hanoi',
    directions_vi: '🚗 Ô tô: Gửi xe tại phố Nguyễn Siêu hoặc bãi xe chợ Đồng Xuân (cách 200m). 🛵 Xe máy: Đi vào ngõ 98 Hàng Buồm, có nhân viên hướng dẫn gửi xe tận nơi.',
    directions_en: '🚗 Car: Parking at Nguyen Sieu St or Dong Xuan market lot (200m). 🛵 Motorbike: Inside alley 98 Hang Buom with parking attendant.',
    mapUrl: 'https://www.google.com/maps/search/Trill%20Bistro%20H%C3%A0%20N%E1%BB%99i',
    price: 7200000,
    originalPrice: 8500000,
    rating: 4.7,
    reviewCount: 82,
    booked: 104,
    maxGuests: 15,
    description_en: 'A whimsical birthday gathering amidst the lush indoor green courtyard of Trill Bistro in Old Quarter, featuring botanical table styling, artisanal cake and polaroid memories.',
    description_vi: 'Bữa tiệc sinh nhật ngọt ngào giữa giếng trời xanh mát của biệt thự Trill Bistro phố cổ, trang trí bàn tiệc hoa tươi, bánh sinh nhật thủ công và chụp ảnh kỷ niệm.',
    image: 'https://images.unsplash.com/photo-1464349153159-4a5e6e833209?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464349153159-4a5e6e833209?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Greenhouse Courtyard Reserved Area', name_vi: 'Khu vực giếng trời sân vườn Trill Bistro', price: 2500000 },
      { type: 'decor', name_en: 'Pastel Botanical Table Setting & Balloons', name_vi: 'Trang trí bàn tiệc tone xanh pastel & chùm bóng', price: 1800000 },
      { type: 'cake', name_en: 'Custom 2-tier Birthday Cake', name_vi: 'Bánh kem 2 tầng tạo hình riêng theo yêu cầu', price: 900000 },
      { type: 'photography', name_en: '2-hour Birthday Party Coverage', name_vi: 'Chụp ảnh sự kiện sinh nhật 2 giờ', price: 2000000 },
    ],
    vendorIds: ['v-011', 'v-031', 'v-046'],
    featured: false,
  },
  {
    id: 'pkg-010',
    name_en: 'Ưu Đàm Chay Zen Peaceful Milestone Family Dinner',
    name_vi: 'Tiệc Gia đình Thiền tịnh Thanh tao – Ưu Đàm Chay',
    event: 'anniversary',
    style: 'minimalist',
    city: 'hn',
    district: 'haibatrung',
    ward: 'Phường Nguyễn Du',
    address_vi: '55 Nguyễn Du, Nguyễn Du, Hai Bà Trưng, Hà Nội',
    address_en: '55 Nguyen Du St, Nguyen Du Ward, Hai Ba Trung District, Hanoi',
    directions_vi: '🚗 Ô tô: Tuyến phố Nguyễn Du rợp bóng cây hoa sữa, có nhân viên bảo vệ hỗ trợ đỗ xe ô tô dọc phố hoặc điểm gửi xe gần hồ Thiền Quang. 🛵 Xe máy: Đỗ xe có mái che trước cửa.',
    directions_en: '🚗 Car: Shaded Nguyen Du street with security parking assistance near Thien Quang Lake. 🛵 Motorbike: Dedicated front parking.',
    mapUrl: 'https://www.google.com/maps/search/%C6%AFu%20%C4%90%C3%A0m%20Chay%20H%C3%A0%20N%E1%BB%99i',
    price: 6500000,
    originalPrice: 7800000,
    rating: 4.9,
    reviewCount: 91,
    booked: 77,
    maxGuests: 10,
    description_en: 'A serene Zen plant-based culinary journey for family anniversaries and milestone celebrations in a calming architectural sanctum.',
    description_vi: 'Không gian tiệc kỷ niệm gia đình an yên giữa kiến trúc Phật giáo đương đại, thưởng thức mâm cỗ chay thanh tao tinh tế cùng hoa sen tươi và trà quý.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Zen Private Dining Room', name_vi: 'Phòng tiệc riêng tư thanh tịnh', price: 2000000 },
      { type: 'catering', name_en: 'Gourmet 8-course Vegetarian Feast for 10', name_vi: 'Mâm tiệc ẩm thực chay 8 món đặc sắc cho 10 người', price: 3000000 },
      { type: 'flowers', name_en: 'White Lotus & Bamboo Table Arrangement', name_vi: 'Hoa sen trắng & Bình gốm thiền tịnh', price: 800000 },
      { type: 'photography', name_en: 'Family Milestone Portrait Session', name_vi: 'Chụp ảnh gia đình lưu niệm', price: 700000 },
    ],
    vendorIds: ['v-002', 'v-027'],
    featured: false,
  },
  {
    id: 'pkg-011',
    name_en: 'The Summit Bar Starlight Skyline Proposal',
    name_vi: 'Cầu hôn Ánh sao Hồ Tây – The Summit Bar Pan Pacific',
    event: 'proposal',
    style: 'skyline',
    city: 'hn',
    district: 'badinh',
    ward: 'Phường Quán Thánh',
    address_vi: 'Tầng 20 Pan Pacific, 1 Thanh Niên, Quán Thánh, Ba Đình, Hà Nội',
    address_en: '20th Floor, Pan Pacific, 1 Thanh Nien Road, Ba Dinh District, Hanoi',
    directions_vi: '🚗 Ô tô: Sảnh khách sạn 5 sao Pan Pacific đường Thanh Niên, có hầm đỗ xe hiện đại. Thang máy lên thẳng tầng 20 ngắm trọn Hồ Tây và Hồ Trúc Bạch.',
    directions_en: '🚗 Car: 5-star Pan Pacific Hotel entrance on Thanh Nien road, parking garage with direct elevator to 20th floor.',
    mapUrl: 'https://www.google.com/maps/search/The%20Summit%20Bar%20H%C3%A0%20N%E1%BB%99i',
    price: 9800000,
    originalPrice: 11500000,
    rating: 4.9,
    reviewCount: 120,
    booked: 82,
    maxGuests: 2,
    description_en: 'Romantic rooftop proposal at The Summit Bar with uninterrupted twilight views over West Lake, candlelight floral arch, craft cocktails and live saxophone.',
    description_vi: 'Setup cầu hôn lãng mạn trên tầng 20 The Summit Bar với tầm nhìn vô cực ngắm hoàng hôn Hồ Tây, vòm hoa nến lung linh, cocktail thượng hạng và tiếng kèn saxophone êm dịu.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'The Summit Bar VIP Terrace', name_vi: 'Góc ban công VIP tầng 20 The Summit Bar', price: 3800000 },
      { type: 'decor', name_en: 'Candlelight Arch & Neon Proposal Sign', name_vi: 'Cổng vòm hoa nến & Chữ neon Will You Marry Me', price: 2500000 },
      { type: 'flowers', name_en: 'Deluxe Red Rose Bouquet', name_vi: 'Bó hoa hồng đỏ nhập khẩu cao cấp', price: 1200000 },
      { type: 'music', name_en: 'Live Saxophone Love Songs', name_vi: 'Nghệ sĩ Saxophone biểu diễn tình ca', price: 1300000 },
      { type: 'photography', name_en: 'Sunset Proposal Photo Coverage', name_vi: 'Nhiếp ảnh gia ghi lại khoảnh khắc vàng', price: 1000000 },
    ],
    vendorIds: ['v-007', 'v-014', 'v-025', 'v-036'],
    featured: true,
  },
  {
    id: 'pkg-012',
    name_en: 'Smiley Ville Fairytale Castle Prom & Pre-Graduation',
    name_vi: 'Dạ tiệc Lâu đài Cổ tích Prom – Smiley Ville Đông Anh',
    event: 'pregrad',
    style: 'fairytale',
    city: 'hn',
    district: 'donganh',
    ward: 'Xã Đông Hội',
    address_vi: 'Đông Hội, Đông Anh, Hà Nội',
    address_en: 'Dong Hoi Commune, Dong Anh District, Hanoi',
    directions_vi: '🚗 Ô tô: Đi qua cầu Nhật Tân hoặc cầu Đông Trù, hướng về Đông Hội. Khuôn viên rộng 5.5ha có bãi đỗ xe ô tô và xe khách không giới hạn.',
    directions_en: '🚗 Car: Cross Nhat Tan or Dong Tru bridge towards Dong Hoi. 5.5-hectare estate with expansive coach & car parking.',
    mapUrl: 'https://www.google.com/maps/search/Smiley%20Ville%20H%C3%A0%20N%E1%BB%99i',
    price: 18000000,
    originalPrice: 22000000,
    rating: 4.8,
    reviewCount: 115,
    booked: 68,
    maxGuests: 40,
    description_en: 'A true fairy-tale European castle prom experience with gothic archways, horse carriage photo op, grand ballroom dinner and royal graduation photoshoot.',
    description_vi: 'Dạ tiệc Prom phong cách hoàng gia châu Âu tại lâu đài cổ tích Smiley Ville: chụp ảnh xe ngựa công chúa, tiệc tối trong đại sảnh nguy nga và bộ ảnh kỷ yếu hoàng gia trọn đời.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'European Castle Ballroom & Courtyard Access', name_vi: 'Sảnh tiệc lâu đài & Vé vào phim trường không giới hạn', price: 7000000 },
      { type: 'catering', name_en: 'Banquet Dinner for 40 Guests', name_vi: 'Set tiệc tối ẩm thực phong phú cho 40 người', price: 6000000 },
      { type: 'photography', name_en: 'Royal Photo Session & Drone Highlights', name_vi: 'Ekip chụp ảnh kỷ yếu hoàng gia & Quay flycam', price: 3000000 },
      { type: 'decor', name_en: 'Fairytale Floral Arch & Red Carpet', name_vi: 'Cổng hoa cổ tích & Thảm đỏ đón khách', price: 2000000 },
    ],
    vendorIds: ['v-019', 'v-036', 'v-048'],
    featured: true,
  },
  {
    id: 'pkg-013',
    name_en: 'The Ylang Garden Tropical Date & Dinner',
    name_vi: 'Hẹn hò Lãng mạn Vườn Nhiệt đới – The Ylang Garden',
    event: 'date',
    style: 'romantic',
    city: 'hn',
    district: 'hoankiem',
    ward: 'Phường Tràng Tiền',
    address_vi: '2 Lê Phụng Hiểu, Tràng Tiền, Hoàn Kiếm, Hà Nội',
    address_en: '2 Le Phung Hieu St, Trang Tien Ward, Hoan Kiem District, Hanoi',
    directions_vi: '🚗 Ô tô: Gửi xe tại phố Lê Phụng Hiểu hoặc Cung Thiếu nhi Hà Nội. 🛵 Xe máy: Bãi gửi xe ngay trước cổng quán.',
    directions_en: '🚗 Car: Parking at Le Phung Hieu street or Hanoi Children Palace. 🛵 Motorbike: Front entrance lot.',
    mapUrl: 'https://www.google.com/maps/search/The%20Ylang%20Garden%20H%C3%A0%20N%E1%BB%99i',
    price: 3500000,
    originalPrice: 4200000,
    rating: 4.8,
    reviewCount: 65,
    booked: 130,
    maxGuests: 2,
    description_en: 'An enchanting, tranquil couple date night nestled in a hidden tropical oasis right beside the Hanoi Opera House, with candlelight, cake and sweet rose petals.',
    description_vi: 'Buổi hẹn hò lãng mạn giữa khu vườn nhiệt đới xanh mát ngay cạnh Nhà Hát Lớn, setup nến thơm, hoa hồng, bánh ngọt và đồ uống tinh tế.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'The Ylang Private Garden Corner', name_vi: 'Góc bàn vườn nhiệt đới riêng tư', price: 1200000 },
      { type: 'decor', name_en: 'Candlelight & Petal Table Arrangement', name_vi: 'Trang trí nến thơm & Cánh hoa hồng trên bàn', price: 800000 },
      { type: 'flowers', name_en: 'Pastel Bouquet of Roses', name_vi: 'Bó hoa hồng pastel tặng người thương', price: 700000 },
      { type: 'cake', name_en: 'Dessert & Wine Pairing for Two', name_vi: 'Tráng miệng bánh ngọt & 2 ly rượu vang hảo hạng', price: 800000 },
    ],
    vendorIds: ['v-023', 'v-026'],
    featured: false,
  },
  {
    id: 'pkg-014',
    name_en: 'Yen So Park Lakeside Teambuilding & BBQ Picnic',
    name_vi: 'Teambuilding & Tiệc nướng BBQ Bên Hồ – Công viên Yên Sở',
    event: 'teambonding',
    style: 'bohemian',
    city: 'hn',
    district: 'hoangmai',
    ward: 'Phường Yên Sở',
    address_vi: 'QL1A, Gamuda City, Hoàng Mai, Hà Nội',
    address_en: 'National Highway 1A, Gamuda City, Hoang Mai District, Hanoi',
    directions_vi: '🚗 Ô tô: Đi theo đường Vành đai 3 hoặc Giải Phóng đến Gamuda City, bãi đỗ xe công viên sức chứa hàng trăm xe ô tô. 🛵 Xe máy: Bãi gửi xe cổng chính công viên.',
    directions_en: '🚗 Car: Via Ring Road 3 to Gamuda City, immense park parking lot. 🛵 Motorbike: Main gate parking.',
    mapUrl: 'https://www.google.com/maps/search/C%C3%B4ng%20vi%C3%AAn%20Y%C3%AAn%20S%E1%BB%9F%20H%C3%A0%20N%E1%BB%99i',
    price: 9500000,
    originalPrice: 11500000,
    rating: 4.7,
    reviewCount: 140,
    booked: 95,
    maxGuests: 40,
    description_en: 'An energetic outdoor company retreat on the lush grassy lakeshore of Yen So Park with team bonding games, sound system, portable tents and BBQ banquet.',
    description_vi: 'Ngày hội gắn kết ngoài trời trên thảm cỏ xanh mướt ven hồ Yên Sở: trò chơi teambuilding gắn kết, lều trại bạt che, dàn loa kéo di động và tiệc nướng BBQ ngập tràn.',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Yen So Park Lakeside Lawn Site', name_vi: 'Khu bãi cỏ ven hồ công viên Yên Sở', price: 1500000 },
      { type: 'catering', name_en: 'BBQ Grills, Meats & Fresh Drinks (40 pax)', name_vi: 'Thực đơn nướng BBQ trọn gói cho 40 người', price: 4500000 },
      { type: 'equipment', name_en: 'Camping Tents, Sun Canopies & Sound System', name_vi: 'Lều trại, ô bạt che nắng & Loa kéo di động', price: 1500000 },
      { type: 'mc', name_en: 'Professional Teambuilding Facilitator', name_vi: 'MC hoạt náo viên tổ chức trò chơi gắn kết', price: 2000000 },
    ],
    vendorIds: ['v-018', 'v-055'],
    featured: false,
  },
  {
    id: 'pkg-015',
    name_en: '1990 Studio Baby Shower & 100 Days Celebration',
    name_vi: 'Tiệc Đầy tháng & Thôi nôi Đầm ấm – 1990 Studio Xã Đàn',
    event: 'babyshower',
    style: 'romantic',
    city: 'hn',
    district: 'dongda',
    ward: 'Phường Nam Đồng',
    address_vi: '12 ngõ 198 Xã Đàn, Nam Đồng, Đống Đa, Hà Nội',
    address_en: '12 Lane 198 Xa Dan St, Nam Dong Ward, Dong Da District, Hanoi',
    directions_vi: '🚗 Ô tô: Đi vào ngõ 198 Xã Đàn rộng rãi, có bãi đỗ xe ô tô cách 50m. 🛵 Xe máy: Đỗ xe an toàn có bảo vệ tại tầng 1 studio.',
    directions_en: '🚗 Car: Wide Lane 198 Xa Dan St with parking lot 50m away. 🛵 Motorbike: Ground floor parking with security.',
    mapUrl: 'https://www.google.com/maps/search/1990%20Studio%20%26%20Event%20H%C3%A0%20N%E1%BB%99i',
    price: 6800000,
    originalPrice: 8000000,
    rating: 4.8,
    reviewCount: 52,
    booked: 70,
    maxGuests: 25,
    description_en: 'A heartwarming pastel-themed baby shower & 100 days gathering featuring balloon arch, milestone board, customized cake and studio family portraits.',
    description_vi: 'Bữa tiệc đầy tháng, thôi nôi ấm áp cho bé với backdrop vòm bóng pastel, bảng thông tin milestone đáng yêu, bánh kem tạo hình và chụp ảnh gia đình trọn gói.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: '1990 Studio Private Hall', name_vi: 'Sảnh tiệc riêng tư ấm cúng tại 1990 Studio', price: 2000000 },
      { type: 'decor', name_en: 'Pastel Balloon Arch & Milestone Board', name_vi: 'Vòm bóng bay pastel & Bảng tên kỷ niệm cho bé', price: 2000000 },
      { type: 'cake', name_en: 'Baby Customized Theme Cake & Cupcakes', name_vi: 'Bánh kem tạo hình cho bé & Tháp bánh cupcake', price: 1000000 },
      { type: 'photography', name_en: '2-hour Family Moments Portraiture', name_vi: 'Chụp ảnh khoảnh khắc gia đình 2 giờ', price: 1800000 },
    ],
    vendorIds: ['v-024', 'v-031', 'v-047'],
    featured: false,
  },
  {
    id: 'pkg-016',
    name_en: 'Sơn Tinh Camp Lakeside Campfire & Retreat',
    name_vi: 'Dã ngoại Lửa trại & Teambuilding – Sơn Tinh Camp Đồng Mô',
    event: 'teambonding',
    style: 'bohemian',
    city: 'hn',
    district: 'sontay',
    ward: 'Xã Sơn Đông',
    address_vi: 'Khu du lịch Đồng Mô, Sơn Đông, Sơn Tây, Hà Nội',
    address_en: 'Dong Mo Tourism Area, Son Dong Commune, Son Tay Town, Hanoi',
    directions_vi: '🚗 Ô tô: Đi thẳng Đại Lộ Thăng Long hướng đi Làng Văn hóa các Dân tộc, rẽ vào Sơn Tinh Camp Đồng Mô. Bãi đỗ xe rộng rãi ven hồ.',
    directions_en: '🚗 Car: Follow Thang Long Boulevard towards Vietnam Ethnic Village, turn to Son Tinh Camp. Vast lakeside parking.',
    mapUrl: 'https://www.google.com/maps/search/S%C6%A1n%20Tinh%20Camp%20H%C3%A0%20N%E1%BB%99i',
    price: 14500000,
    originalPrice: 17000000,
    rating: 4.8,
    reviewCount: 88,
    booked: 60,
    maxGuests: 35,
    description_en: 'An immersive nature camping adventure with lakeside glamping tents, barbecue campfire, kayak racing, team challenges and acoustic jam.',
    description_vi: 'Chuyến dã ngoại cắm trại hòa mình vào thiên nhiên bên hồ nước Đồng Mô: lều trại dã ngoại, chèo thuyền kayak, lửa trại nướng khoai bắp và ban nhạc acoustic.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop'
    ],
    services: [
      { type: 'venue', name_en: 'Son Tinh Camp Private Camping Ground', name_vi: 'Bãi cắm trại dã ngoại ven hồ Sơn Tinh Camp', price: 3000000 },
      { type: 'catering', name_en: 'Full BBQ Buffet & Marshmallows for 35 pax', name_vi: 'Tiệc nướng BBQ & Kẹo marshmallow nướng lửa trại', price: 5500000 },
      { type: 'equipment', name_en: 'Glamping Tents, Kayaks & Campfire Wood', name_vi: 'Bộ lều trại, thuyền kayak & Củi đốt lửa trại', price: 3000000 },
      { type: 'music', name_en: 'Campfire Acoustic Music Performance', name_vi: 'Ban nhạc đệm hát guitar acoustic bên lửa trại', price: 3000000 },
    ],
    vendorIds: ['v-056', 'v-043'],
    featured: true,
  }
];

// Founders and Team Members (FTUers with passion & Ghibli animated spirit)
const founders = [
  {
    id: 'f-01',
    name: 'Nguyễn Việt Hà',
    role_vi: 'Founder & Giám đốc Sáng tạo (Creative Director)',
    role_en: 'Founder & Creative Director',
    avatar: 'assets/founder_char1.png'
  },
  {
    id: 'f-02',
    name: 'Lê Thanh Bình',
    role_vi: 'Co-Founder & Giám đốc Vận hành (Head of Operations)',
    role_en: 'Co-Founder & Head of Operations',
    avatar: 'assets/founder_char2.png'
  },
  {
    id: 'f-03',
    name: 'Trần Đăng Nguyệt Nhi',
    role_vi: 'Co-Founder & Trưởng phòng Hợp tác Chiến lược (Strategic Partnerships)',
    role_en: 'Co-Founder & Strategic Partnerships Lead',
    avatar: 'assets/founder_char3.png'
  },
  {
    id: 'f-04',
    name: 'Trần Khánh Hân',
    role_vi: 'Co-Founder & Kiến trúc sư Trải nghiệm (Lead Event Architect)',
    role_en: 'Co-Founder & Lead Event Architect',
    avatar: 'assets/founder_char4.png'
  },
  {
    id: 'f-05',
    name: 'Đoàn Thị Thu Phương',
    role_vi: 'Co-Founder & Trưởng ban Trải nghiệm Khách hàng (Customer Experience)',
    role_en: 'Co-Founder & Customer Experience Lead',
    avatar: 'assets/founder_char6.png'
  }
];
const teamMembers = founders;

// Reviews (Rich domestic & international testimonials)
const reviews = [
  {
    id: 'r-001',
    packageId: 'pkg-001',
    userId: 'u-101',
    userName: 'Arthur & Camille Laurent',
    origin: 'Paris, Pháp 🇫🇷',
    origin_vi: 'Paris, Pháp 🇫🇷',
    origin_en: 'Paris, France 🇫🇷',
    isForeign: true,
    avatar: '🍷',
    rating: 5,
    date: '2026-09-18',
    comment_en: 'An unforgettable rooftop proposal in Hanoi overlooking West Lake! The candlelit setup, live violinist, and imported roses were beyond anything we imagined. Truly felt like walking into a Studio Ghibli fairytale.',
    comment_vi: 'An unforgettable rooftop proposal in Hanoi overlooking West Lake! The candlelit setup, live violinist, and imported roses were beyond anything we imagined. Truly felt like walking into a Studio Ghibli fairytale.'
  },
  {
    id: 'r-002',
    packageId: 'pkg-002',
    userId: 'u-102',
    userName: 'Kenji & Yuka Takahashi',
    origin: 'Tokyo, Nhật Bản 🇯🇵',
    origin_vi: 'Tokyo, Nhật Bản 🇯🇵',
    origin_en: 'Tokyo, Japan 🇯🇵',
    isForeign: true,
    avatar: '🎋',
    rating: 5,
    date: '2026-09-10',
    comment_en: 'Momently organized our 5th wedding anniversary in a colonial French villa in Ba Dinh. The attention to detail and warm hospitality of the FTU team were world-class. Arigato gozaimasu!',
    comment_vi: 'Momently organized our 5th wedding anniversary in a colonial French villa in Ba Dinh. The attention to detail and warm hospitality of the FTU team were world-class. Arigato gozaimasu!'
  },
  {
    id: 'r-003',
    packageId: 'pkg-003',
    userId: 'u-103',
    userName: 'Min-jun & Seo-yeon Park',
    origin: 'Seoul, Hàn Quốc 🇰🇷',
    origin_vi: 'Seoul, Hàn Quốc 🇰🇷',
    origin_en: 'Seoul, South Korea 🇰🇷',
    isForeign: true,
    avatar: '✨',
    rating: 5,
    date: '2026-08-28',
    comment_en: 'The bohemian sunset birthday party by the river in Tay Ho was pure magic! Stunning aesthetics, delicate flower arrangements, and super delicious cake. 10/10 recommendation for anyone visiting Hanoi.',
    comment_vi: 'The bohemian sunset birthday party by the river in Tay Ho was pure magic! Stunning aesthetics, delicate flower arrangements, and super delicious cake. 10/10 recommendation for anyone visiting Hanoi.'
  },
  {
    id: 'r-004',
    packageId: 'pkg-001',
    userId: 'u-104',
    userName: 'James & Emily Watson',
    origin: 'London, Vương quốc Anh 🇬🇧',
    origin_vi: 'London, Vương quốc Anh 🇬🇧',
    origin_en: 'London, United Kingdom 🇬🇧',
    isForeign: true,
    avatar: '👑',
    rating: 5,
    date: '2026-08-14',
    comment_en: 'Flawless coordination from start to finish! Booking through Momently saved us countless hours of venue hunting in a foreign city. The Salmonoid proposal dinner was pure romantic elegance.',
    comment_vi: 'Flawless coordination from start to finish! Booking through Momently saved us countless hours of venue hunting in a foreign city. The Salmonoid proposal dinner was pure romantic elegance.'
  },
  {
    id: 'r-005',
    packageId: 'pkg-002',
    userId: 'u-105',
    userName: 'Liam & Chloe Henderson',
    origin: 'Melbourne, Úc 🇦🇺',
    origin_vi: 'Melbourne, Úc 🇦🇺',
    origin_en: 'Melbourne, Australia 🇦🇺',
    isForeign: true,
    avatar: '🌿',
    rating: 5,
    date: '2026-09-02',
    comment_en: 'The glamping lakeside party at Son Tinh Camp exceeded all our expectations! Bonfire, acoustic melodies, and great local BBQ. Momently’s FTU founders are truly talented visionaries.',
    comment_vi: 'The glamping lakeside party at Son Tinh Camp exceeded all our expectations! Bonfire, acoustic melodies, and great local BBQ. Momently’s FTU founders are truly talented visionaries.'
  },
  {
    id: 'r-006',
    packageId: 'pkg-001',
    userId: 'u-106',
    userName: 'Minh Hoàng & Thùy Dung (Cặp đôi FTU)',
    origin: 'Hà Nội, Việt Nam 🇻🇳',
    origin_vi: 'Hà Nội, Việt Nam 🇻🇳',
    origin_en: 'Hanoi, Vietnam 🇻🇳',
    avatar: '💑',
    rating: 5,
    date: '2026-09-22',
    comment_en: 'Everything from the violin to Ecuadorian roses was orchestrated with perfection by Momently. Proud of our fellow FTUers!',
    comment_vi: 'Khung cảnh biệt thự Pháp tại Salmonoid đẹp đến nghẹt thở! Tiếng violin, 99 bông hồng đỏ Ecuador và ánh nến được Momently chuẩn bị chu đáo đến từng chi tiết nhỏ. Rất tự hào về các bạn Ngoại thương!'
  },
  {
    id: 'r-007',
    packageId: 'pkg-002',
    userId: 'u-107',
    userName: 'Khánh Linh Đặng',
    origin: 'Hà Nội, Việt Nam 🇻🇳',
    origin_vi: 'Hà Nội, Việt Nam 🇻🇳',
    origin_en: 'Hanoi, Vietnam 🇻🇳',
    avatar: '👸',
    rating: 5,
    date: '2026-09-05',
    comment_en: 'Proposing at Top of Hanoi 67th floor was like a dream above the clouds. Highly recommended!',
    comment_vi: 'Cầu hôn trên tầng 67 Lotte ngắm hoàng hôn và mây trời Hà Nội đẹp như một giấc mơ cổ tích. Chi phí lại rất hợp lý và minh bạch!'
  },
  {
    id: 'r-008',
    packageId: 'pkg-003',
    userId: 'u-108',
    userName: 'Phương Thảo & Nhóm Bạn NEU-FTU',
    origin: 'Hà Nội, Việt Nam 🇻🇳',
    origin_vi: 'Hà Nội, Việt Nam 🇻🇳',
    origin_en: 'Hanoi, Vietnam 🇻🇳',
    avatar: '🌸',
    rating: 5,
    date: '2026-08-25',
    comment_en: 'Best prom celebration ever! The photo booth and lighting setup were completely Instagrammable.',
    comment_vi: 'Bữa tiệc prom và sinh nhật tuyệt nhất từ trước tới nay! Góc vườn Tây Hồ trang trí bohemian đẹp mê ly như trên Pinterest, chụp ảnh góc nào cũng lung linh.'
  },
  {
    id: 'r-009',
    packageId: 'pkg-001',
    userId: 'u-109',
    userName: 'David Miller',
    origin: 'San Francisco, Hoa Kỳ 🇺🇸',
    origin_vi: 'San Francisco, Hoa Kỳ 🇺🇸',
    origin_en: 'San Francisco, USA 🇺🇸',
    isForeign: true,
    avatar: '⭐',
    rating: 5,
    date: '2026-07-30',
    comment_en: 'Super smooth booking experience, immediate WhatsApp/Zalo support, and top notch service quality in Hanoi. Highly trustworthy!',
    comment_vi: 'Super smooth booking experience, immediate WhatsApp/Zalo support, and top notch service quality in Hanoi. Highly trustworthy!'
  },
  {
    id: 'r-010',
    packageId: 'pkg-002',
    userId: 'u-110',
    userName: 'Stefan & Anna Müller',
    origin: 'Berlin, Đức 🇩🇪',
    origin_vi: 'Berlin, Đức 🇩🇪',
    origin_en: 'Berlin, Germany 🇩🇪',
    isForeign: true,
    avatar: '🏰',
    rating: 5,
    date: '2026-09-12',
    comment_en: 'The attention to detail was extraordinary! The bilingual team coordinated our private rooftop dining and acoustic music flawlessly. Truly a world-class experience in Vietnam.',
    comment_vi: 'The attention to detail was extraordinary! The bilingual team coordinated our private rooftop dining and acoustic music flawlessly. Truly a world-class experience in Vietnam.'
  },
  {
    id: 'r-011',
    packageId: 'pkg-003',
    userId: 'u-111',
    userName: 'Chloe & Lucas Zhang',
    origin: 'Singapore 🇸🇬',
    origin_vi: 'Singapore 🇸🇬',
    origin_en: 'Singapore 🇸🇬',
    isForeign: true,
    avatar: '🌺',
    rating: 5,
    date: '2026-08-19',
    comment_en: 'Momently made our Hanoi holiday proposal completely stress-free. The flowers were freshly imported and the photographer knew the exact best angles with the sunset. Thank you so much!',
    comment_vi: 'Momently made our Hanoi holiday proposal completely stress-free. The flowers were freshly imported and the photographer knew the exact best angles with the sunset. Thank you so much!'
  }
];

// Helper functions
function getVendors() {
  if (typeof hanoiVendors !== 'undefined' && Array.isArray(hanoiVendors) && hanoiVendors.length > 0) {
    return hanoiVendors;
  }
  return (typeof vendors !== 'undefined' && Array.isArray(vendors)) ? vendors : [];
}

// Helper: Remove Vietnamese tones for accent-insensitive search
function removeVietnameseTones(str) {
  if (!str) return '';
  str = String(str).toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  return str.trim();
}

// Helper: Extract meaningful search tokens from ward input (strips parenthetical notes, prefixes)
function extractWardKeywords(wardInput) {
  if (!wardInput || wardInput === 'all') return [];
  const clean = String(wardInput).replace(/\(.*?\)/g, '').trim();
  const stripped = clean.replace(/^(phường|xã|thị trấn|quận|huyện|thị xã|ward|commune|district)\s+/gi, '').trim();
  const tokens = stripped.split(/[\-\/,]/).map(t => t.trim()).filter(t => t.length > 0);
  if (tokens.length === 0 && stripped) tokens.push(stripped);
  return tokens;
}

// Guaranteed Ward Vendor Search: accurate local matches + top city-wide mobile event partners
function getVendorsForWard(wardName) {
  const allList = getVendors();
  if (!wardName || wardName === 'all') return allList;

  const keywords = extractWardKeywords(wardName);
  if (keywords.length === 0) return allList;

  // 1. Exact or partial ward match across all vendor fields (diacritics-insensitive)
  const localVendors = allList.filter(v => {
    const wVi = (v.ward_vi || '').toLowerCase();
    const wEn = (v.ward_en || '').toLowerCase();
    const dVi = (v.district_vi || '').toLowerCase();
    const dEn = (v.district_en || '').toLowerCase();
    const aVi = (v.address_vi || '').toLowerCase();
    const aEn = (v.address_en || '').toLowerCase();
    const nVi = (v.name || '').toLowerCase();
    const nEn = (v.name_en || '').toLowerCase();

    const fullVi = `${wVi} ${dVi} ${aVi} ${nVi}`;
    const fullEn = `${wEn} ${dEn} ${aEn} ${nEn}`;
    const fullNoTone = removeVietnameseTones(`${fullVi} ${fullEn}`);

    return keywords.some(kw => {
      const kwLower = kw.toLowerCase();
      const kwNoTone = removeVietnameseTones(kw);
      return fullVi.includes(kwLower) || fullEn.includes(kwLower) || fullNoTone.includes(kwNoTone);
    });
  });

  // If local vendors are 4 or more, return them directly so user gets strictly targeted results
  if (localVendors.length >= 4) {
    return localVendors;
  }

  // If fewer than 4 local vendors, supplement with top-rated city-wide event partners
  // (planners, florists, photographers, musicians, catering) who serve this ward
  const citywidePartners = allList.filter(v => {
    return ['planner', 'flowers', 'decor', 'photo', 'music', 'cake', 'beauty'].includes(v.category) && !localVendors.includes(v);
  });

  const needed = Math.max(0, 4 - localVendors.length);
  const combined = [...localVendors, ...citywidePartners.slice(0, needed + 2)];
  return combined.length > 0 ? combined : allList.slice(0, 12);
}



function getVendorsByCategory(catId) {
  const allList = getVendors();
  if (catId === 'all') return allList;
  return allList.filter(v => v.category === catId);
}

function getVendorById(id) {
  const allList = getVendors();
  return allList.find(v => v.id === id);
}

function filterVendors(catId) {
  return getVendorsByCategory(catId);
}

function getPackagesByEvent(eventId) {
  if (eventId === 'all') return packages;
  return packages.filter(p => p.event === eventId);
}

function getPackagesByBudget(budgetId) {
  const range = budgetRanges.find(b => b.id === budgetId);
  if (!range) return packages;
  return packages.filter(p => p.price >= range.min && p.price <= range.max);
}

function getPackagesByStyle(styleId) {
  return packages.filter(p => p.style === styleId);
}

function getFeaturedPackages() {
  return packages.filter(p => p.featured);
}

function getPackageById(id) {
  return packages.find(p => p.id === id);
}

function getReviewsByPackage(packageId) {
  return reviews.filter(r => r.packageId === packageId);
}

// Enhanced Filter function with Price Slider, Wards, and Location query
function filterPackages({ event, budget, style, district, ward, query, minPrice, maxPrice }) {
  let results = [...packages];

  if (event && event !== 'all') {
    results = results.filter(p => p.event === event);
  }

  if (district && district !== 'all') {
    results = results.filter(p => p.district === district);
  }

  if (ward && ward !== 'all') {
    const keywords = extractWardKeywords(ward);
    if (keywords.length > 0) {
      const wardMatches = results.filter(p => {
        const pWard = (p.ward || '').toLowerCase();
        const pAddr = ((p.address_vi || '') + ' ' + (p.address_en || '')).toLowerCase();
        const pFull = `${pWard} ${pAddr}`;
        const pFullNoTone = removeVietnameseTones(pFull);

        return keywords.some(kw => {
          const kwLower = kw.toLowerCase();
          const kwNoTone = removeVietnameseTones(kw);
          return pFull.includes(kwLower) || pFullNoTone.includes(kwNoTone);
        });
      });
      if (wardMatches.length > 0) {
        results = wardMatches;
      }
    }
  }

  // Dynamic price range filter
  if (minPrice !== undefined && maxPrice !== undefined && (!isNaN(minPrice) || !isNaN(maxPrice))) {
    const minP = Number(minPrice) || 0;
    const maxP = Number(maxPrice) || 999999999;
    results = results.filter(p => p.price >= minP && p.price <= maxP);
  } else if (budget && budget !== 'all') {
    const range = budgetRanges.find(b => b.id === budget);
    if (range) results = results.filter(p => p.price >= range.min && p.price <= range.max);
  }

  if (style && style !== 'all') {
    results = results.filter(p => p.style === style);
  }

  if (query && query.trim() !== '') {
    const qRaw = query.toLowerCase().trim();
    const qNoTone = removeVietnameseTones(query);
    const qKeywords = extractWardKeywords(query);

    results = results.filter(p => {
      const nVi = (p.name_vi || '').toLowerCase();
      const nEn = (p.name_en || '').toLowerCase();
      const aVi = (p.address_vi || '').toLowerCase();
      const aEn = (p.address_en || '').toLowerCase();
      const dVi = (p.description_vi || '').toLowerCase();
      const dEn = (p.description_en || '').toLowerCase();
      const wVi = (p.ward || '').toLowerCase();
      const srv = (p.services || []).map(s => `${s.name_vi || ''} ${s.name_en || ''}`).join(' ').toLowerCase();

      const combinedVi = `${nVi} ${aVi} ${dVi} ${wVi} ${srv}`;
      const combinedEn = `${nEn} ${aEn} ${dEn} ${srv}`;
      const combinedNoTone = removeVietnameseTones(`${combinedVi} ${combinedEn}`);

      const basicMatch = combinedVi.includes(qRaw) || combinedEn.includes(qRaw) || combinedNoTone.includes(qNoTone);
      if (basicMatch) return true;

      return qKeywords.some(kw => {
        const kwLower = kw.toLowerCase();
        const kwNoTone = removeVietnameseTones(kw);
        return combinedVi.includes(kwLower) || combinedEn.includes(kwLower) || combinedNoTone.includes(kwNoTone);
      });
    });
  }

  return results;
}

function sortPackages(pkgs, sortBy) {
  const sorted = [...pkgs];
  switch (sortBy) {
    case 'price_low': return sorted.sort((a, b) => a.price - b.price);
    case 'price_high': return sorted.sort((a, b) => b.price - a.price);
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating);
    default: return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
  }
}
