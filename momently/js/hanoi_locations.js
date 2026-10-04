// =============================================
// Momently – Danh mục Phường & Quận Hà Nội (Sau sáp nhập 2024-2025)
// =============================================

const hanoiDistrictsWithWards = [
  {
    id: 'hoankiem',
    name_vi: 'Quận Hoàn Kiếm',
    name_en: 'Hoan Kiem District',
    description: 'Trung tâm Phố Cổ, Hồ Gươm, không gian văn hóa & ẩm thực di sản',
    wards: [
      { id: 'hangbac', name_vi: 'Phường Hàng Bạc', name_en: 'Hang Bac Ward' },
      { id: 'hangbo', name_vi: 'Phường Hàng Bồ', name_en: 'Hang Bo Ward' },
      { id: 'hangbong', name_vi: 'Phường Hàng Bông', name_en: 'Hang Bong Ward' },
      { id: 'hangbuom', name_vi: 'Phường Hàng Buồm', name_en: 'Hang Buom Ward' },
      { id: 'hangdao', name_vi: 'Phường Hàng Đào', name_en: 'Hang Dao Ward' },
      { id: 'hanggai', name_vi: 'Phường Hàng Gai', name_en: 'Hang Gai Ward' },
      { id: 'hangma', name_vi: 'Phường Hàng Mã', name_en: 'Hang Ma Ward' },
      { id: 'hangtrong', name_vi: 'Phường Hàng Trống', name_en: 'Hang Trong Ward' },
      { id: 'cuadong', name_vi: 'Phường Cửa Đông', name_en: 'Cua Dong Ward' },
      { id: 'cuanam', name_vi: 'Phường Cửa Nam', name_en: 'Cua Nam Ward' },
      { id: 'dongxuan', name_vi: 'Phường Đồng Xuân', name_en: 'Dong Xuan Ward' },
      { id: 'lythaito', name_vi: 'Phường Lý Thái Tổ', name_en: 'Ly Thai To Ward' },
      { id: 'phanchutrinh', name_vi: 'Phường Phan Chu Trinh', name_en: 'Phan Chu Trinh Ward' },
      { id: 'trangtien', name_vi: 'Phường Tràng Tiền', name_en: 'Trang Tien Ward' },
      { id: 'chuongduong', name_vi: 'Phường Chương Dương', name_en: 'Chuong Duong Ward' },
      { id: 'phuctan', name_vi: 'Phường Phúc Tân', name_en: 'Phuc Tan Ward' },
      { id: 'tranhungdao', name_vi: 'Phường Trần Hưng Đạo', name_en: 'Tran Hung Dao Ward' }
    ]
  },
  {
    id: 'badinh',
    name_vi: 'Quận Ba Đình',
    name_en: 'Ba Dinh District',
    description: 'Trung tâm chính trị, biệt thự Pháp cổ, Lotte Center & hồ Trúc Bạch',
    wards: [
      { id: 'dienbien', name_vi: 'Phường Điện Biên', name_en: 'Dien Bien Ward' },
      { id: 'doican', name_vi: 'Phường Đội Cấn', name_en: 'Doi Can Ward' },
      { id: 'giangvo', name_vi: 'Phường Giảng Võ', name_en: 'Giang Vo Ward' },
      { id: 'kimma', name_vi: 'Phường Kim Mã', name_en: 'Kim Ma Ward' },
      { id: 'lieugiai', name_vi: 'Phường Liễu Giai', name_en: 'Lieu Giai Ward' },
      { id: 'ngocha', name_vi: 'Phường Ngọc Hà', name_en: 'Ngoc Ha Ward' },
      { id: 'ngockhanh', name_vi: 'Phường Ngọc Khánh', name_en: 'Ngoc Khanh Ward' },
      { id: 'nguyentrungtruc', name_vi: 'Phường Nguyễn Trung Trực', name_en: 'Nguyen Trung Truc Ward' },
      { id: 'phucxa', name_vi: 'Phường Phúc Xá', name_en: 'Phuc Xa Ward' },
      { id: 'quanthanh', name_vi: 'Phường Quán Thánh', name_en: 'Quan Thanh Ward' },
      { id: 'thanhcong', name_vi: 'Phường Thành Công', name_en: 'Thanh Cong Ward' },
      { id: 'trucbach', name_vi: 'Phường Trúc Bạch', name_en: 'Truc Bach Ward' },
      { id: 'vinhphuc', name_vi: 'Phường Vĩnh Phúc', name_en: 'Vinh Phuc Ward' },
      { id: 'congvi', name_vi: 'Phường Cống Vị', name_en: 'Cong Vi Ward' }
    ]
  },
  {
    id: 'tayho',
    name_vi: 'Quận Tây Hồ',
    name_en: 'Tay Ho District',
    description: 'Không gian lãng mạn ven Hồ Tây, resort, sky bar & villa xanh',
    wards: [
      { id: 'quangan', name_vi: 'Phường Quảng An', name_en: 'Quang An Ward' },
      { id: 'nhattan', name_vi: 'Phường Nhật Tân (Bãi đá Sông Hồng)', name_en: 'Nhat Tan Ward' },
      { id: 'phuthuong', name_vi: 'Phường Phú Thượng', name_en: 'Phu Thuong Ward' },
      { id: 'tulien', name_vi: 'Phường Tứ Liên', name_en: 'Tu Lien Ward' },
      { id: 'xuanla', name_vi: 'Phường Xuân La', name_en: 'Xuan La Ward' },
      { id: 'yenphu', name_vi: 'Phường Yên Phụ', name_en: 'Yen Phu Ward' },
      { id: 'thuykhue', name_vi: 'Phường Thụy Khuê', name_en: 'Thuy Khue Ward' },
      { id: 'buoi', name_vi: 'Phường Bưởi', name_en: 'Buoi Ward' }
    ]
  },
  {
    id: 'dongda',
    name_vi: 'Quận Đống Đa',
    name_en: 'Dong Da District',
    description: 'Trung tâm văn hóa, tổ hợp sáng tạo COMPLEX 01, phố ẩm thực sầm uất (Sau sáp nhập)',
    wards: [
      { id: 'catlinh', name_vi: 'Phường Cát Linh', name_en: 'Cat Linh Ward' },
      { id: 'hangbot', name_vi: 'Phường Hàng Bột', name_en: 'Hang Bot Ward' },
      { id: 'khamthien_trungphung', name_vi: 'Phường Khâm Thiên (sáp nhập Trung Phụng)', name_en: 'Kham Thien Ward' },
      { id: 'khuongthuong', name_vi: 'Phường Khương Thượng', name_en: 'Khuong Thuong Ward' },
      { id: 'kimlien', name_vi: 'Phường Kim Liên', name_en: 'Kim Lien Ward' },
      { id: 'langha', name_vi: 'Phường Láng Hạ', name_en: 'Lang Ha Ward' },
      { id: 'langthuong', name_vi: 'Phường Láng Thượng', name_en: 'Lang Thuong Ward' },
      { id: 'namdong', name_vi: 'Phường Nam Đồng', name_en: 'Nam Dong Ward' },
      { id: 'ngatuso', name_vi: 'Phường Ngã Tư Sở', name_en: 'Nga Tu So Ward' },
      { id: 'ochodua', name_vi: 'Phường Ô Chợ Dừa', name_en: 'O Cho Dua Ward' },
      { id: 'phuongmai', name_vi: 'Phường Phương Mai', name_en: 'Phuong Mai Ward' },
      { id: 'quangtrung', name_vi: 'Phường Quang Trung', name_en: 'Quang Trung Ward' },
      { id: 'vanmieu_quoctugiam', name_vi: 'Phường Văn Miếu - Quốc Tử Giám (sáp nhập)', name_en: 'Van Mieu - Quoc Tu Giam Ward' },
      { id: 'thinhquang', name_vi: 'Phường Thịnh Quang', name_en: 'Thinh Quang Ward' },
      { id: 'thoquan', name_vi: 'Phường Thổ Quan', name_en: 'Tho Quan Ward' },
      { id: 'trungliet', name_vi: 'Phường Trung Liệt', name_en: 'Trung Liet Ward' },
      { id: 'phuonglien_trungtu', name_vi: 'Phường Phương Liên - Trung Tự (sáp nhập)', name_en: 'Phuong Lien - Trung Tu Ward' },
      { id: 'vanchuong', name_vi: 'Phường Văn Chương', name_en: 'Van Chuong Ward' }
    ]
  },
  {
    id: 'caugiay',
    name_vi: 'Quận Cầu Giấy',
    name_en: 'Cau Giay District',
    description: 'Khu vực giới trẻ, đại học, studio chụp ảnh nghệ thuật & ẩm thực',
    wards: [
      { id: 'dichvong', name_vi: 'Phường Dịch Vọng', name_en: 'Dich Vong Ward' },
      { id: 'dichvonghau', name_vi: 'Phường Dịch Vọng Hậu', name_en: 'Dich Vong Hau Ward' },
      { id: 'maidich', name_vi: 'Phường Mai Dịch', name_en: 'Mai Dich Ward' },
      { id: 'nghiado', name_vi: 'Phường Nghĩa Đô', name_en: 'Nghia Do Ward' },
      { id: 'nghiatan', name_vi: 'Phường Nghĩa Tân', name_en: 'Nghia Tan Ward' },
      { id: 'quanhoa', name_vi: 'Phường Quan Hoa', name_en: 'Quan Hoa Ward' },
      { id: 'trunghoa', name_vi: 'Phường Trung Hòa', name_en: 'Trung Hoa Ward' },
      { id: 'yenhoa', name_vi: 'Phường Yên Hòa', name_en: 'Yen Hoa Ward' }
    ]
  },
  {
    id: 'haibatrung',
    name_vi: 'Quận Hai Bà Trưng',
    name_en: 'Hai Ba Trung District',
    description: 'Khu ẩm thực thanh tao, hồ Thiền Quang, công viên Thống Nhất (Sau sáp nhập)',
    wards: [
      { id: 'bachkhoa', name_vi: 'Phường Bách Khoa', name_en: 'Bach Khoa Ward' },
      { id: 'bachdang', name_vi: 'Phường Bạch Đằng', name_en: 'Bach Dang Ward' },
      { id: 'bachmai', name_vi: 'Phường Bạch Mai', name_en: 'Bach Mai Ward' },
      { id: 'dongnhan_dongmac', name_vi: 'Phường Đồng Nhân - Đống Mác (sáp nhập)', name_en: 'Dong Nhan - Dong Mac Ward' },
      { id: 'dongtam', name_vi: 'Phường Đồng Tâm', name_en: 'Dong Tam Ward' },
      { id: 'ledaihanh', name_vi: 'Phường Lê Đại Hành', name_en: 'Le Dai Hanh Ward' },
      { id: 'minhkhai', name_vi: 'Phường Minh Khai', name_en: 'Minh Khai Ward' },
      { id: 'nguyendu', name_vi: 'Phường Nguyễn Du', name_en: 'Nguyen Du Ward' },
      { id: 'phamdinhho', name_vi: 'Phường Phạm Đình Hổ', name_en: 'Pham Dinh Ho Ward' },
      { id: 'pho_hue', name_vi: 'Phường Phố Huế', name_en: 'Pho Hue Ward' },
      { id: 'quynhloi', name_vi: 'Phường Quỳnh Lôi', name_en: 'Quynh Loi Ward' },
      { id: 'quynhmai', name_vi: 'Phường Quỳnh Mai', name_en: 'Quynh Mai Ward' },
      { id: 'thanhluong', name_vi: 'Phường Thanh Lương', name_en: 'Thanh Luong Ward' },
      { id: 'thanhnhan', name_vi: 'Phường Thanh Nhàn', name_en: 'Thanh Nhan Ward' },
      { id: 'truongdinh', name_vi: 'Phường Trương Định', name_en: 'Truong Dinh Ward' },
      { id: 'vinhtuy', name_vi: 'Phường Vĩnh Tuy', name_en: 'Vinh Tuy Ward' }
    ]
  },
  {
    id: 'thanhxuan',
    name_vi: 'Quận Thanh Xuân',
    name_en: 'Thanh Xuan District',
    description: 'Khu vực trung tâm mới, dịch vụ trang trí & sự kiện năng động',
    wards: [
      { id: 'hadinh', name_vi: 'Phường Hạ Đình', name_en: 'Ha Dinh Ward' },
      { id: 'khuongdinh', name_vi: 'Phường Khương Đình', name_en: 'Khuong Dinh Ward' },
      { id: 'khuongmai', name_vi: 'Phường Khương Mai', name_en: 'Khuong Mai Ward' },
      { id: 'khuongtrung', name_vi: 'Phường Khương Trung', name_en: 'Khuong Trung Ward' },
      { id: 'kimgiang', name_vi: 'Phường Kim Giang', name_en: 'Kim Giang Ward' },
      { id: 'nhanchinh', name_vi: 'Phường Nhân Chính', name_en: 'Nhan Chinh Ward' },
      { id: 'phuongliet', name_vi: 'Phường Phương Liệt', name_en: 'Phuong Liet Ward' },
      { id: 'thanhxuanbac', name_vi: 'Phường Thanh Xuân Bắc', name_en: 'Thanh Xuan Bac Ward' },
      { id: 'thanhxuannam', name_vi: 'Phường Thanh Xuân Nam', name_en: 'Thanh Xuan Nam Ward' },
      { id: 'thanhxuantrung', name_vi: 'Phường Thanh Xuân Trung', name_en: 'Thanh Xuan Trung Ward' },
      { id: 'thuongdinh', name_vi: 'Phường Thượng Đình', name_en: 'Thuong Dinh Ward' }
    ]
  },
  {
    id: 'namtuliem',
    name_vi: 'Quận Nam Từ Liêm',
    name_en: 'Nam Tu Liem District',
    description: 'Khách sạn 5 sao JW Marriott, Trung tâm Hội nghị Quốc gia, SVĐ Mỹ Đình',
    wards: [
      { id: 'metri', name_vi: 'Phường Mễ Trì', name_en: 'Me Tri Ward' },
      { id: 'mydinh1', name_vi: 'Phường Mỹ Đình 1', name_en: 'My Dinh 1 Ward' },
      { id: 'mydinh2', name_vi: 'Phường Mỹ Đình 2', name_en: 'My Dinh 2 Ward' },
      { id: 'caudien', name_vi: 'Phường Cầu Diễn', name_en: 'Cau Dien Ward' },
      { id: 'phudo', name_vi: 'Phường Phú Đô', name_en: 'Phu Do Ward' },
      { id: 'trungvan', name_vi: 'Phường Trung Văn', name_en: 'Trung Van Ward' },
      { id: 'taymo', name_vi: 'Phường Tây Mỗ', name_en: 'Tay Mo Ward' },
      { id: 'daimo', name_vi: 'Phường Đại Mỗ', name_en: 'Dai Mo Ward' },
      { id: 'phuongcanh', name_vi: 'Phường Phương Canh', name_en: 'Phuong Canh Ward' },
      { id: 'xuanphuong', name_vi: 'Phường Xuân Phương', name_en: 'Xuan Phuong Ward' }
    ]
  },
  {
    id: 'bactuliem',
    name_vi: 'Quận Bắc Từ Liêm',
    name_en: 'Bac Tu Liem District',
    description: 'Khu đô thị sinh thái Ngoại Giao Đoàn, công viên Hòa Bình',
    wards: [
      { id: 'xuanla_xuantao', name_vi: 'Phường Xuân Tảo', name_en: 'Xuan Tao Ward' },
      { id: 'xuandinh', name_vi: 'Phường Xuân Đỉnh', name_en: 'Xuan Dinh Ward' },
      { id: 'conhue1', name_vi: 'Phường Cổ Nhuế 1', name_en: 'Co Nhue 1 Ward' },
      { id: 'conhue2', name_vi: 'Phường Cổ Nhuế 2', name_en: 'Co Nhue 2 Ward' },
      { id: 'dongngac', name_vi: 'Phường Đông Ngạc', name_en: 'Dong Ngac Ward' },
      { id: 'ducthang', name_vi: 'Phường Đức Thắng', name_en: 'Duc Thang Ward' },
      { id: 'phudien', name_vi: 'Phường Phú Diễn', name_en: 'Phu Dien Ward' },
      { id: 'phucdien', name_vi: 'Phường Phúc Diễn', name_en: 'Phuc Dien Ward' },
      { id: 'minhkhai_btl', name_vi: 'Phường Minh Khai (BTL)', name_en: 'Minh Khai Ward' },
      { id: 'taytuu', name_vi: 'Phường Tây Tựu (Làng hoa)', name_en: 'Tay Tuu Ward' }
    ]
  },
  {
    id: 'longbien',
    name_vi: 'Quận Long Biên',
    name_en: 'Long Bien District',
    description: 'Bên kia cầu Long Biên, Vinhomes Riverside, không gian tiệc sân vườn thoáng đãng',
    wards: [
      { id: 'bode', name_vi: 'Phường Bồ Đề', name_en: 'Bo De Ward' },
      { id: 'ngoclam', name_vi: 'Phường Ngọc Lâm', name_en: 'Ngoc Lam Ward' },
      { id: 'ngocthuy', name_vi: 'Phường Ngọc Thụy', name_en: 'Ngoc Thuy Ward' },
      { id: 'giathuy', name_vi: 'Phường Gia Thụy', name_en: 'Gia Thuy Ward' },
      { id: 'viethung', name_vi: 'Phường Việt Hưng', name_en: 'Viet Hung Ward' },
      { id: 'longbien_w', name_vi: 'Phường Long Biên', name_en: 'Long Bien Ward' },
      { id: 'thachban', name_vi: 'Phường Thạch Bàn', name_en: 'Thach Ban Ward' },
      { id: 'phucdong', name_vi: 'Phường Phúc Đồng', name_en: 'Phuc Dong Ward' },
      { id: 'saidong', name_vi: 'Phường Sài Đồng', name_en: 'Sai Dong Ward' }
    ]
  },
  {
    id: 'hoangmai',
    name_vi: 'Quận Hoàng Mai',
    name_en: 'Hoang Mai District',
    description: 'Công viên Yên Sở xanh ngát, Gamuda City, picnic & teambuilding ngoài trời',
    wards: [
      { id: 'yenso', name_vi: 'Phường Yên Sở (Công viên Yên Sở)', name_en: 'Yen So Ward' },
      { id: 'hoangliet', name_vi: 'Phường Hoàng Liệt', name_en: 'Hoang Liet Ward' },
      { id: 'dinhcong', name_vi: 'Phường Định Công', name_en: 'Dinh Cong Ward' },
      { id: 'daikim', name_vi: 'Phường Đại Kim', name_en: 'Dai Kim Ward' },
      { id: 'giapbat', name_vi: 'Phường Giáp Bát', name_en: 'Giap Bat Ward' },
      { id: 'tanmai', name_vi: 'Phường Tân Mai', name_en: 'Tan Mai Ward' },
      { id: 'tuongmai', name_vi: 'Phường Tương Mai', name_en: 'Tuong Mai Ward' },
      { id: 'maidong', name_vi: 'Phường Mai Động', name_en: 'Mai Dong Ward' }
    ]
  },
  {
    id: 'hadong',
    name_vi: 'Quận Hà Đông',
    name_en: 'Ha Dong District',
    description: 'Làng lụa Vạn Phúc, trung tâm văn hóa Hà Tây cũ, đô thị Mỗ Lao',
    wards: [
      { id: 'vanphuc', name_vi: 'Phường Vạn Phúc (Làng lụa)', name_en: 'Van Phuc Ward' },
      { id: 'vanquan', name_vi: 'Phường Văn Quán', name_en: 'Van Quan Ward' },
      { id: 'molao', name_vi: 'Phường Mộ Lao', name_en: 'Mo Lao Ward' },
      { id: 'phuc_la', name_vi: 'Phường Phúc La', name_en: 'Phuc La Ward' },
      { id: 'quangtrung_hd', name_vi: 'Phường Quang Trung', name_en: 'Quang Trung Ward' },
      { id: 'hacau', name_vi: 'Phường Hà Cầu', name_en: 'Ha Cau Ward' },
      { id: 'duongnoi', name_vi: 'Phường Dương Nội', name_en: 'Duong Noi Ward' }
    ]
  },
  {
    id: 'donganh',
    name_vi: 'Huyện Đông Anh',
    name_en: 'Dong Anh District',
    description: 'Phim trường Smiley Ville, không gian tiệc cưới lâu đài châu Âu cổ tích',
    wards: [
      { id: 'donghoi', name_vi: 'Xã Đông Hội (Smiley Ville)', name_en: 'Dong Hoi Commune' },
      { id: 'tienduong', name_vi: 'Xã Tiên Dương', name_en: 'Tien Duong Commune' },
      { id: 'uyno', name_vi: 'Xã Uy Nỗ', name_en: 'Uy No Commune' },
      { id: 'vinhngoc', name_vi: 'Xã Vĩnh Ngọc', name_en: 'Vinh Ngoc Commune' }
    ]
  },
  {
    id: 'gialam',
    name_vi: 'Huyện Gia Lâm',
    name_en: 'Gia Lam District',
    description: 'Vinhomes Ocean Park, biển hồ nhân tạo, làng gốm Bát Tràng',
    wards: [
      { id: 'daton', name_vi: 'Xã Đa Tốn (Vinhomes Ocean Park)', name_en: 'Da Ton Commune' },
      { id: 'battrang', name_vi: 'Xã Bát Tràng (Làng gốm)', name_en: 'Bat Trang Commune' },
      { id: 'trauquy', name_vi: 'Thị trấn Trâu Quỳ', name_en: 'Trau Quy Town' },
      { id: 'kieuky', name_vi: 'Xã Kiêu Kỵ', name_en: 'Kieu Ky Commune' }
    ]
  },
  {
    id: 'sontay',
    name_vi: 'Thị xã Sơn Tây',
    name_en: 'Son Tay Town',
    description: 'Khu du lịch Sơn Tinh Camp Đồng Mô, cắm trại dã ngoại teambuilding ven hồ',
    wards: [
      { id: 'sondong', name_vi: 'Xã Sơn Đông (Sơn Tinh Camp Đồng Mô)', name_en: 'Son Dong Commune' },
      { id: 'duonglam', name_vi: 'Xã Đường Lâm (Làng cổ)', name_en: 'Duong Lam Commune' }
    ]
  }
];

// Helper: Lấy danh sách toàn bộ các phường tại Hà Nội (phẳng)
function getAllHanoiWardsFlat() {
  const flat = [];
  hanoiDistrictsWithWards.forEach(dist => {
    dist.wards.forEach(w => {
      flat.push({
        id: w.id,
        name_vi: w.name_vi,
        name_en: w.name_en,
        districtId: dist.id,
        districtName_vi: dist.name_vi,
        districtName_en: dist.name_en
      });
    });
  });
  return flat;
}

const hanoiMergedWards = getAllHanoiWardsFlat();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { hanoiDistrictsWithWards, getAllHanoiWardsFlat, hanoiMergedWards };
}

