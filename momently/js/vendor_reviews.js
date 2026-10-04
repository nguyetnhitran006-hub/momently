// ========================================================
// Momently – Rich & Diverse Client Reviews for All Vendors
// Supporting authentic English reviews for Foreign Clients
// & natural Vietnamese reviews for Domestic Clients
// ========================================================

const FOREIGN_CLIENTS = [
  { name: 'Arthur & Camille Laurent', origin: 'Paris, France 🇫🇷', isForeign: true, avatar: '🍷' },
  { name: 'Kenji & Yuka Takahashi', origin: 'Tokyo, Japan 🇯🇵', isForeign: true, avatar: '🎋' },
  { name: 'James & Emily Watson', origin: 'London, UK 🇬🇧', isForeign: true, avatar: '👑' },
  { name: 'Michael & Jessica Evans', origin: 'New York, USA 🇺🇸', isForeign: true, avatar: '⭐' },
  { name: 'Liam & Chloe Henderson', origin: 'Melbourne, Australia 🇦🇺', isForeign: true, avatar: '🌿' },
  { name: 'Stefan & Anna Müller', origin: 'Berlin, Germany 🇩🇪', isForeign: true, avatar: '🏰' },
  { name: 'Min-jun & Seo-yeon Park', origin: 'Seoul, South Korea 🇰🇷', isForeign: true, avatar: '✨' },
  { name: 'Chloe Zhang & Lucas Tan', origin: 'Singapore 🇸🇬', isForeign: true, avatar: '🌺' },
  { name: 'David & Sarah Jenkins', origin: 'Toronto, Canada 🇨🇦', isForeign: true, avatar: '🍁' },
  { name: 'Oliver & Charlotte Smith', origin: 'Manchester, UK 🇬🇧', isForeign: true, avatar: '🥂' },
  { name: 'Lucas & Sophie Bernard', origin: 'Lyon, France 🇫🇷', isForeign: true, avatar: '🕊️' },
  { name: 'Elena Rostova', origin: 'Zurich, Switzerland 🇨🇭', isForeign: true, avatar: '💎' }
];

const LOCAL_CLIENTS = [
  { name: 'Hoàng Nam & Mai Chi (Cặp đôi FTU)', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '💑' },
  { name: 'Trần Thu Trang', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '🌸' },
  { name: 'Lê Minh Tuấn & Bảo Ngọc', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '💍' },
  { name: 'Bùi Thanh Hương', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '👸' },
  { name: 'Đặng Quang Huy', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '🎩' },
  { name: 'Vũ Thùy Linh & Nhóm Bạn', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '🎉' },
  { name: 'Phạm Hải Đăng', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '🌟' },
  { name: 'Trịnh Gia Bảo & Lan Anh', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '❤️' },
  { name: 'Ngô Phương Anh', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '✨' },
  { name: 'Dương Minh Đức & Thảo My', origin: 'Hà Nội, Việt Nam 🇻🇳', isForeign: false, avatar: '🎈' }
];

// Tailored comments by vendor category
const CATEGORY_REVIEW_TEMPLATES = {
  venue: {
    foreign: [
      "The atmosphere at {name} was nothing short of magical. Booking through Momently made everything effortless from abroad. The private candlelight dining, panoramic view, and attentive staff speaking fluent English exceeded all our expectations!",
      "A truly five-star dining experience in Hanoi. Fresh ingredients, exquisite wine pairings, and a serene ambiance. Our wedding anniversary here felt like stepping into an enchanted European fairytale.",
      "Flawless coordination between Momently and {name}! The rooftop skyline view at sunset was breathtaking, and the acoustic violinist made our proposal unforgettable. 10/10 recommendation for any foreign traveler visiting Hanoi."
    ],
    local: [
      "Không gian tại {name} thực sự sang trọng và ấm cúng vượt ngoài mong đợi! Nhân viên phục vụ rất tinh tế, đồ ăn chuẩn vị và decor nến hoa cực kỳ có gu.",
      "Tổ chức tiệc kỷ niệm tại đây là quyết định đúng đắn nhất của hai vợ chồng mình. Momently đã hỗ trợ kết nối và giữ chỗ view đẹp nhất, giá cả minh bạch không phát sinh.",
      "View ngắm cảnh thành phố tuyệt đẹp, âm thanh ánh sáng vừa vặn tạo cảm giác lãng mạn nhẹ nhàng. Bạn bè ai đến dự cũng khen ngợi hết lời!"
    ],
    events: [
      { vi: "Tiệc Cầu hôn lãng mạn", en: "Romantic Proposal Dinner" },
      { vi: "Kỷ niệm ngày cưới 5 sao", en: "5-Star Wedding Anniversary" },
      { vi: "Tiệc tối thân mật", en: "Intimate Private Dining" },
      { vi: "Gala tiệc gia đình", en: "Family Celebration Gala" }
    ]
  },
  flowers: {
    foreign: [
      "The floral styling from {name} was absolute perfection! Lush imported Dutch peonies and David Austin roses that stayed radiant throughout our 3-day event. Superb artistic craftsmanship!",
      "Ordered a surprise bridal bouquet for my fiancée in Hanoi. Delivered punctually with beautiful pastel wrapping and personalized calligraphy card. World-class floral boutique!",
      "Exceptional flower quality and English communication! The flower arch and table centerpieces matched our fairytale color scheme flawlessly. Truly impressed!"
    ],
    local: [
      "Hoa tươi nhập khẩu rất bền màu và thơm ngát, bó hoa cưới cầm tay đúng chuẩn mẫu thiết kế mình ưng ý nhất trên Pinterest.",
      "Đội ngũ cắm hoa rất có tâm, hoa nở đều đẹp và đóng gói quà tặng vô cùng chỉn chu sang trọng. Sẽ luôn ủng hộ {name}!",
      "Set hoa trang trí tiệc cưới và xe hoa của shop làm ai cũng phải trầm trồ. Cảm ơn Momently đã giới thiệu tiệm hoa uy tín này!"
    ],
    events: [
      { vi: "Hoa cưới cầm tay & Xe hoa", en: "Bridal Bouquet & Car Flowers" },
      { vi: "Hộp quà hoa tươi sinh nhật", en: "Luxury Birthday Floral Box" },
      { vi: "Trang trí hoa bàn tiệc", en: "Table Floral Centerpieces" }
    ]
  },
  decor: {
    foreign: [
      "The custom fairytale backdrop and balloon styling by {name} was breathtaking! Every color tone and lighting accent felt like something straight out of a Studio Ghibli scene.",
      "Superb professionalism, punctual setup, and high-grade materials. Our international wedding guests couldn't stop taking photos by the photo wall!",
      "Outstanding creative concept! {name} transformed the venue into a dreamy wonderland on time and within our budget. Highly recommend!"
    ],
    local: [
      "Concept trang trí bohemian kết hợp ánh sáng lung linh đẹp mê ly! Từng chi tiết nhỏ đều được chăm chút kỹ càng, lên ảnh góc nào cũng đẹp.",
      "Thi công backdrop rất nhanh chóng, đúng tiến độ và nhân viên hỗ trợ nhiệt tình đến tận lúc tàn tiệc.",
      "Ý tưởng decor sinh nhật cho bé vừa dễ thương vừa sang chảnh, giá thành hợp lý so với chất lượng cao cấp."
    ],
    events: [
      { vi: "Backdrop tiệc cổ tích", en: "Fairytale Stage Backdrop" },
      { vi: "Trang trí sinh nhật chủ đề", en: "Themed Birthday Styling" },
      { vi: "Decor tiệc cưới ngoài trời", en: "Outdoor Wedding Styling" }
    ]
  },
  photo: {
    foreign: [
      "{name} captured our most precious moments with pure cinematic brilliance! Natural lighting, candid emotional portraits, and prompt delivery of edited highlights.",
      "The 360 photo booth and instant film cameras were the ultimate highlight of our evening! Our guests loved the custom video overlays and instant digital sharing.",
      "Top-tier photography crew! Very patient in guiding poses, friendly English communication, and the photo album quality was spectacular."
    ],
    local: [
      "Nhiếp ảnh gia có tâm số 1 Hà Nội! Bắt trọn những khoảnh khắc xúc động tự nhiên nhất của hai đứa, màu ảnh trong trẻo rất sang.",
      "Video phóng sự cưới ngắn gọn, giàu cảm xúc, âm nhạc lồng ghép mượt mà chạm tới trái tim người xem.",
      "Photobooth chụp lấy ngay sắc nét, phụ kiện chụp hình đa dạng vui nhộn, ai cũng có ảnh kỷ niệm mang về."
    ],
    events: [
      { vi: "Phóng sự cưới điện ảnh", en: "Cinematic Wedding Film" },
      { vi: "Bục quay video 360 độ", en: "360 Spin Video Booth" },
      { vi: "Chụp ảnh tiệc kỷ niệm", en: "Event Highlights Photoshoot" }
    ]
  },
  music: {
    foreign: [
      "The live acoustic band and bilingual MC from {name} brought our entire celebration alive! Soulful vocals, great repertoire of international love songs, and seamless timing.",
      "Phenomenal musical performance! The violin and saxophone duet during our sunset vows gave everyone goosebumps. An unforgettable evening!",
      "High-energy DJ and pristine acoustic sound system! Kept our diverse guests from around the world dancing all night long."
    ],
    local: [
      "Ban nhạc chơi live mộc mạc và truyền cảm xúc cực kỳ! Giọng ca sĩ ấm áp, tạo nên bầu không khí lãng mạn khó quên.",
      "MC dẫn chương trình duyên dáng, xử lý tình huống khéo léo và điều phối không khí buổi tiệc rất tự nhiên.",
      "Dàn âm thanh ánh sáng chuyên nghiệp, không bị hú rít, tiếng đàn violin du dương làm bừng sáng cả không gian tiệc."
    ],
    events: [
      { vi: "Ban nhạc Acoustic & Violin", en: "Live Acoustic & Violin Duo" },
      { vi: "MC song ngữ sự kiện", en: "Bilingual Host & MC" },
      { vi: "DJ & Âm thanh biểu diễn", en: "DJ Night & Sound Performance" }
    ]
  },
  cake: {
    foreign: [
      "As someone with French culinary background, I was blown away by {name}! The delicate sweetness, layered mousse texture, and artistic sugar flowers were world-class.",
      "Our custom 3-tier anniversary cake was not only a showstopper visually, but also moist and delicious! Guests devoured every single slice.",
      "The luxury teabreak canapés and pastries delivered to our event were fresh, elegantly packaged, and delicious. Exceptional catering!"
    ],
    local: [
      "Cốt bánh mềm xốp, kem béo ngậy thanh nhẹ không hề ngọt gắt. Tạo hình bánh sinh nhật theo concept đúng y mẫu mình yêu cầu!",
      "Tiệc teabreak finger food trình bày bắt mắt, các món bánh mặn ngọt phong phú, đối tác công ty ai cũng khen ngon.",
      "Bánh kem bơ hoa nghệ thuật đẹp như một bức tranh, bảo quản và vận chuyển nguyên vẹn đến tận nơi tổ chức."
    ],
    events: [
      { vi: "Bánh cưới nghệ thuật 3 tầng", en: "Bespoke 3-Tier Wedding Cake" },
      { vi: "Tiệc Teabreak & Canapés", en: "Luxury Teabreak & Canapés" },
      { vi: "Bánh sinh nhật thủ công", en: "Handcrafted Birthday Cake" }
    ]
  },
  default: {
    foreign: [
      "Exceptional service and seamless communication! Booking {name} through Momently saved us so much time in Hanoi. Everything was delivered on time with supreme quality.",
      "Very trustworthy and professional team. Dedicated attention to detail, transparent pricing, and courteous support throughout our celebration in Vietnam.",
      "High international standards! The staff went above and beyond to ensure our requirements were met. Will definitely recommend to friends visiting Hanoi."
    ],
    local: [
      "Dịch vụ tại {name} vô cùng chuyên nghiệp và chu đáo. Giá cả minh bạch, hợp đồng rõ ràng và tư vấn rất tận tâm.",
      "Rất hài lòng với chất lượng phục vụ và sự nhiệt tình của đội ngũ. Sự kiện diễn ra suôn sẻ và trọn vẹn đúng ý muốn.",
      "Trải nghiệm tuyệt vời từ khâu tư vấn ban đầu tới khi hoàn thành sự kiện. Cảm ơn Momently đã liên kết cùng đối tác chất lượng cao!"
    ],
    events: [
      { vi: "Dịch vụ sự kiện trọn gói", en: "Bespoke Event Service" },
      { vi: "Tiệc kỷ niệm cao cấp", en: "Premium Celebration" },
      { vi: "Hợp tác sự kiện uy tín", en: "Verified Partner Service" }
    ]
  }
};

/**
 * Generate a deterministic, rich list of 5-6 reviews for any vendor
 * Guarantees foreign reviews are in English and local reviews in Vietnamese
 */
function getReviewsForVendor(vendor) {
  if (!vendor) return [];

  // Check if vendor already has custom clientReviews attached
  if (Array.isArray(vendor.clientReviews) && vendor.clientReviews.length >= 4) {
    return vendor.clientReviews;
  }

  // Derive pseudo-random seed from vendor ID
  const seedNum = (vendor.id || 'v-001').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const catKey = CATEGORY_REVIEW_TEMPLATES[vendor.category] ? vendor.category : 'default';
  const tmpl = CATEGORY_REVIEW_TEMPLATES[catKey];
  const vName = vendor.name || 'Đối tác';
  const vNameEn = vendor.name_en || vName;

  const datesVi = ["Hôm qua", "3 ngày trước", "Tuần trước", "2 tuần trước", "1 tháng trước", "2 tháng trước"];
  const datesEn = ["Yesterday", "3 days ago", "Last week", "2 weeks ago", "1 month ago", "2 months ago"];
  const ratings = [5.0, 4.9, 5.0, 4.8, 5.0, 4.9];

  const generated = [];

  // Review 1: Foreign Client 1 (English)
  const fc1 = FOREIGN_CLIENTS[seedNum % FOREIGN_CLIENTS.length];
  const ev1 = tmpl.events[0 % tmpl.events.length];
  generated.push({
    name: fc1.name,
    origin: fc1.origin,
    isForeign: true,
    avatar: fc1.avatar,
    rating: ratings[0],
    date_vi: datesVi[1],
    date_en: datesEn[1],
    event_vi: ev1.vi,
    event_en: ev1.en,
    comment_en: tmpl.foreign[0].replace(/\{name\}/g, vNameEn),
    comment_vi: tmpl.foreign[0].replace(/\{name\}/g, vNameEn), // In English as requested!
    verified: true
  });

  // Review 2: Local Client 1 (Vietnamese)
  const lc1 = LOCAL_CLIENTS[(seedNum + 1) % LOCAL_CLIENTS.length];
  const ev2 = tmpl.events[1 % tmpl.events.length];
  generated.push({
    name: lc1.name,
    origin: lc1.origin,
    isForeign: false,
    avatar: lc1.avatar,
    rating: ratings[1],
    date_vi: datesVi[2],
    date_en: datesEn[2],
    event_vi: ev2.vi,
    event_en: ev2.en,
    comment_vi: tmpl.local[0].replace(/\{name\}/g, vName),
    comment_en: "Exceptional quality and thoughtful service from " + vNameEn + ". Highly recommended by Momently!",
    verified: true
  });

  // Review 3: Foreign Client 2 (English)
  const fc2 = FOREIGN_CLIENTS[(seedNum + 3) % FOREIGN_CLIENTS.length];
  const ev3 = tmpl.events[2 % tmpl.events.length];
  generated.push({
    name: fc2.name,
    origin: fc2.origin,
    isForeign: true,
    avatar: fc2.avatar,
    rating: ratings[2],
    date_vi: datesVi[3],
    date_en: datesEn[3],
    event_vi: ev3.vi,
    event_en: ev3.en,
    comment_en: tmpl.foreign[1 % tmpl.foreign.length].replace(/\{name\}/g, vNameEn),
    comment_vi: tmpl.foreign[1 % tmpl.foreign.length].replace(/\{name\}/g, vNameEn), // In English as requested!
    verified: true
  });

  // Review 4: Local Client 2 (Vietnamese)
  const lc2 = LOCAL_CLIENTS[(seedNum + 4) % LOCAL_CLIENTS.length];
  const ev4 = tmpl.events[0 % tmpl.events.length];
  generated.push({
    name: lc2.name,
    origin: lc2.origin,
    isForeign: false,
    avatar: lc2.avatar,
    rating: ratings[3],
    date_vi: datesVi[4],
    date_en: datesEn[4],
    event_vi: ev4.vi,
    event_en: ev4.en,
    comment_vi: tmpl.local[1 % tmpl.local.length].replace(/\{name\}/g, vName),
    comment_en: "Everything went smoothly and beautifully. We had an unforgettable experience with " + vNameEn + ".",
    verified: true
  });

  // Review 5: Foreign Client 3 (English)
  const fc3 = FOREIGN_CLIENTS[(seedNum + 5) % FOREIGN_CLIENTS.length];
  const ev5 = tmpl.events[1 % tmpl.events.length];
  generated.push({
    name: fc3.name,
    origin: fc3.origin,
    isForeign: true,
    avatar: fc3.avatar,
    rating: ratings[4],
    date_vi: datesVi[0],
    date_en: datesEn[0],
    event_vi: ev5.vi,
    event_en: ev5.en,
    comment_en: tmpl.foreign[2 % tmpl.foreign.length].replace(/\{name\}/g, vNameEn),
    comment_vi: tmpl.foreign[2 % tmpl.foreign.length].replace(/\{name\}/g, vNameEn), // In English as requested!
    verified: true
  });

  // Review 6: Local Client 3 (Vietnamese)
  const lc3 = LOCAL_CLIENTS[(seedNum + 6) % LOCAL_CLIENTS.length];
  const ev6 = tmpl.events[2 % tmpl.events.length];
  generated.push({
    name: lc3.name,
    origin: lc3.origin,
    isForeign: false,
    avatar: lc3.avatar,
    rating: ratings[5],
    date_vi: datesVi[5],
    date_en: datesEn[5],
    event_vi: ev6.vi,
    event_en: ev6.en,
    comment_vi: tmpl.local[2 % tmpl.local.length].replace(/\{name\}/g, vName),
    comment_en: "Outstanding coordination and transparent pricing. 10/10 recommendation!",
    verified: true
  });

  // Check for any user-submitted local storage reviews for this vendor
  try {
    const savedKey = 'momently_vendor_reviews_' + vendor.id;
    const userReviews = JSON.parse(localStorage.getItem(savedKey) || '[]');
    if (Array.isArray(userReviews) && userReviews.length > 0) {
      return [...userReviews, ...generated];
    }
  } catch (e) {
    console.warn('Could not read user vendor reviews', e);
  }

  return generated;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getReviewsForVendor, FOREIGN_CLIENTS, LOCAL_CLIENTS };
}
