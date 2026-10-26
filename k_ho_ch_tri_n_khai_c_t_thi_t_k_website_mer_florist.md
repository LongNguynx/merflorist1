# KẾ HOẠCH TRIỂN KHAI & ĐẶC TẢ THIẾT KẾ WEBSITE MER FLORIST
**Dự án:** Redesign Website Mer Florist  
**Lĩnh vực:** Hoa tươi & Quà tặng nghệ thuật tại Đà Nẵng  
**Định vị thương hiệu:** *"Lãng mạn không hề đắt"*  
**Học phần:** Phân tích & Thiết kế Web  

---

## MỤC LỤC
1. [Tổng Quan & Mục Tiêu Dự Án](#1-tổng-quan--mục-tiêu-dự-án)
2. [Tư Vấn Chuyên Môn & Thống Nhất Các Hạng Mục Mở](#2-tư-vấn-chuyên-môn--thống-nhất-các-hạng-mục-mở)
3. [Design System & Quy Chuẩn UI/UX](#3-design-system--quy-chuẩn-uiux)
4. [Đặc Tả Chi Tiết Các Màn Hình Cốt Lõi (Theo Rubric Chấm Điểm)](#4-đặc-tả-chi-tiết-các-màn-hình-cốt-lõi-theo-rubric-chấm-điểm)
5. [Giải Pháp Kỹ Thuật Tối Ưu Lighthouse & Web Vitals](#5-giải-pháp-kỹ-thuật-tối-ưu-lighthouse--web-vitals)
6. [Lộ Trình Triển Khai & Phân Bổ Công Việc (5 Giai Đoạn)](#6-lộ-trình-triển-khai--phân-bổ-công-việc-5-giai-đoạn)
7. [Checklist Nghiệm Thu Theo Rubric Giảng Viên](#7-checklist-nghiệm-thu-theo-rubric-giảng-viên)

---

## 1. TỔNG QUAN & MỤC TIÊU DỰ ÁN

### 1.1. Bối cảnh
Nhóm sinh viên thực hiện redesign website cho thương hiệu **Mer Florist** (tham khảo `merflorist.com`, tên miền thử nghiệm `merflorist.top`). Sau phản hồi ban đầu từ giảng viên hướng dẫn, dự án cần được chuẩn hóa toàn diện về giao diện, cấu trúc thông tin (IA), trải nghiệm người dùng (UX) và hiệu năng kỹ thuật.

### 1.2. Mục tiêu trọng tâm
* **Về mặt người dùng:** Hỗ trợ tìm kiếm, so sánh và đặt hoa nhanh chóng theo dịp tặng, loại hoa và ngân sách; trải nghiệm mượt mà trên cả Desktop, Tablet và Mobile.
* **Về mặt thương hiệu:** Định vị phong cách mềm mại, thanh lịch, lãng mạn nhưng gần gũi với mức chi phí hợp lý.
* **Về mặt kỹ thuật & điểm số:** Đạt điểm tối đa trên 4 tiêu chí cốt lõi (chiếm 46/100 điểm) trong thang chấm điểm của giảng viên; khắc phục triệt để các cảnh báo Lighthouse (đưa Performance từ 23 lên > 85, LCP từ 42s xuống < 2.5s).

---

## 2. TƯ VẤN CHUYÊN MÔN & THỐNG NHẤT CÁC HẠNG MỤC MỞ

Dựa trên các câu hỏi và nội dung chưa chốt trong Brief, đội ngũ kỹ thuật đề xuất phương án tối ưu như sau:

### 2.1. Hệ thống lưới sản phẩm (Grid System)
* **Khuyến nghị:** Áp dụng hệ thống lưới chuẩn **12-column CSS Grid**:
  * **Desktop (≥ 1024px):** Cột trái cố định 3 cột (25%) cho Bộ lọc đa tiêu chí (Sidebar Filter); Lưới hiển thị 9 cột còn lại (75%) chia làm **3 sản phẩm/hàng**. Tỷ lệ ảnh thẻ sản phẩm: `3:4` dạng dọc, giúp tôn dáng các bó hoa cao và giữ nguyên bố cục đồng đều.
  * **Tablet (768px – 1023px):** Bộ lọc chuyển thành nút bấm mở Modal/Drawer trượt từ cạnh trái; Lưới sản phẩm hiển thị **3 sản phẩm/hàng**.
  * **Mobile (< 768px):** Lưới sản phẩm hiển thị **2 sản phẩm/hàng**, khoảng cách thẻ `12px`–`16px` giúp khách hàng lướt xem được nhiều mẫu mà không phải cuộn quá dài.
* **Lý do:** Mặt hàng hoa đòi hỏi diện tích hiển thị ảnh đủ lớn để quan sát chi tiết cánh hoa và giấy gói. Chia 4 sản phẩm/hàng trên desktop kèm sidebar sẽ làm thẻ quá nhỏ, trong khi 2 sản phẩm/hàng sẽ khiến trang quá thưa.

### 2.2. Tính năng tương tác "Tạo bó hoa" (Custom Bouquet)
* **Vị trí điều hướng (Entry points):**
  1. *Section 5 trên Trang chủ:* Banner trực quan minh họa thao tác chọn hoa kèm nút CTA *"Tự tay thiết kế bó hoa"*.
  2. *Thanh Navigation:* Mục menu nổi bật có huy hiệu (Badge) `✨ Tự phối hoa`.
* **Không gian hiển thị:** Triển khai trên một trang riêng biệt (`/create-bouquet`). Giao diện tương tác dạng canvas trực quan cần không gian độc lập, tránh gây nặng và rối trang chủ.
* **Phạm vi khả thi (MVP):**
  * Áp dụng cơ chế **Step-by-step Layering (Xếp lớp theo 4 bước trực quan)** thay vì kéo-thả tự do (tránh lỗi lệch layout):
    * *Bước 1:* Chọn giấy gói / Hộp / Lẵng (Layer nền).
    * *Bước 2:* Chọn hoa chính (1–3 loại hoa render vào vị trí định sẵn).
    * *Bước 3:* Chọn hoa phụ / lá trang trí.
    * *Bước 4:* Chọn ruy băng, thiệp và nhập lời chúc.
  * Tự động cộng tổng tiền theo từng thành phần được tick chọn.
  * Nút CTA: *"Thêm bó hoa này vào giỏ hàng"* (đẩy vào giỏ với danh sách chi tiết các thành phần đi kèm).

### 2.3. Chức năng Tài khoản & Đăng nhập
* **Phương thức xác thực:** Hỗ trợ Đăng nhập bằng Email/SĐT + Mật khẩu, kèm nút Đăng nhập nhanh bằng Google (OAuth 2.0).
* **Giao diện:** Tích hợp giao diện **Modal Popup (hoặc tab chuyển đổi trên trang `/auth`)** để chuyển đổi qua lại giữa Đăng nhập và Đăng ký mà không phải tải lại trang.
* **Phạm vi trang cá nhân (`/profile`):**
  * Tab 1: Thông tin người dùng & Sổ địa chỉ nhận hàng mặc định.
  * Tab 2: Lịch sử đơn hàng (hiển thị trạng thái: *Đang cắm hoa -> Đang giao -> Đã giao*).
* **Quy tắc UX quan trọng:** Vẫn hỗ trợ **Mua hàng không cần đăng nhập (Guest Checkout)** để giảm tỷ lệ bỏ giỏ hàng.

### 2.4. Tối ưu cấu trúc Website (Sitemap & Mega Menu)
Gộp danh mục sản phẩm đồ sộ thành 3 nhóm logic trên Mega Menu để người dùng nắm bắt trong 3 giây:
* **Nhóm 1 – Kiểu dáng & Dạng đóng gói:** Bó hoa tươi, Bó hoa cánh bướm, Bó hoa ốc quế, Hộp hoa & Vali hoa, Giỏ & Lẵng hoa, Kệ hoa lớn.
* **Nhóm 2 – Dịp trao tặng:** Sinh nhật, Kỷ niệm & Tình yêu, Chúc mừng khai trương, Tốt nghiệp, Chia buồn.
* **Nhóm 3 – Đặc biệt & Sự kiện:** Bộ sưu tập Giáng sinh, Tết Bính Ngọ 2026, Set Hoa & Bánh kem, Hoa cưới nghệ thuật.

---

## 3. DESIGN SYSTEM & QUY CHUẨN UI/UX

### 3.1. Bảng màu chuẩn (Color Palette)
Đảm bảo độ tương phản đáp ứng chuẩn WCAG 2.1 AA (Contrast Ratio ≥ 4.5:1 đối với văn bản thông thường):

| Vai trò | Tên màu | Mã Hex | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Nền chính (Background)** | Trắng kem / Warm Cream | `#FDFBF7` | Nền toàn bộ website, tạo cảm giác thanh lịch, dịu mắt |
| **Chủ đạo (Primary)** | Xanh rêu trầm / Forest Sage | `#638371` | Nút CTA chính, icon điều hướng, header phụ, viền thẻ active |
| **Điểm nhấn (Accent)** | Hồng phấn / Soft Rose | `#F6CED5` | Nhãn tag khuyến mãi, viền trang trí, hiệu ứng hover nhẹ |
| **Chữ chính (Body Text)** | Xanh đen đậm / Deep Charcoal | `#2C3531` | Toàn bộ chữ nội dung, tiêu đề, giá tiền (Đạt tương phản cao) |
| **Chữ phụ (Secondary Text)** | Xám trung tính / Neutral Grey | `#667085` | Mô tả phụ, ngày giao hàng dự kiến, placeholder |
| **Báo lỗi / Cảnh báo** | Đỏ đất / Terra Cotta | `#D9534F` | Thông báo lỗi form thanh toán, hết hàng |

### 3.2. Quy chuẩn Typography
* **Font Tiêu đề (Display / Headings):** `Elsie Swash Caps`
  * Dùng cho: Logo phụ, H1 Hero Banner, Tiêu đề Section (H2).
  * Cỡ chữ: H1 (`40px`–`48px`), H2 (`28px`–`32px`).
  * Lưu ý: Không dùng viết hoa toàn bộ và không dùng cho đoạn văn bản dài vì nét uốn lượn gây mỏi mắt.
* **Font Nội dung & Giao diện (Interface / Body):** `Montserrat`
  * Dùng cho: Menu Navigation, H3, H4, Body text, Giá tiền, Nút bấm, Ô nhập liệu.
  * Cỡ chữ chuẩn: Body Regular (`16px`, line-height `1.6`), Small Text (`13px`–`14px`), Giá tiền (`18px`–`20px`, Semi-bold).

---

## 4. ĐẶC TẢ CHI TIẾT CÁC MÀN HÌNH CỐT LÕI (THEO RUBRIC CHẤM ĐIỂM)

### 4.1. Kiến trúc thông tin & Điều hướng (Trọng số: 8/100 điểm)
* **Header:**
  * Chia bố cục cân xứng (Spacious Flexbox), loại bỏ cách căn giữa máy móc.
  * *Tầng trên:* Logo thương hiệu bên trái -> Search bar mềm mại ở giữa -> Nhóm hành động bên phải (Yêu thích, Giỏ hàng có huy hiệu đếm số lượng nảy động, Tài khoản).
  * *Tầng dưới (Sticky Bar):* Thanh menu điều hướng danh mục, tự động ghim trên đỉnh khi cuộn trang.
* **Breadcrumb Navigation:** Tích hợp ở mọi trang con cấp 2 và cấp 3 (Ví dụ: `Trang chủ > Hoa theo dịp > Hoa sinh nhật > Bó hoa Nắng Hạ`).
* **Footer:** Cấu trúc 4 cột rõ ràng: (1) Logo & Lời ngỏ thương hiệu, (2) Danh mục nhanh, (3) Chính sách & Hướng dẫn mua hàng, (4) Địa chỉ cửa hàng tại Đà Nẵng, Hotline, Giấy phép & Liên kết mạng xã hội chính thức.

### 4.2. Trang chủ (Bố cục 8 khu vực theo Brief)
1. **Header & Navigation:** Thanh thoát, ghim cố định, trực quan.
2. **Hero Banner:** Bố cục 2 cột nằm gọn trong container chuẩn (không tràn viền cắt ảnh). Cột trái là thông điệp *"Lãng mạn không hề đắt"* kèm nút khám phá; cột phải là hình ảnh hoa nổi bật với hiệu ứng chuyển động nhẹ.
3. **Danh mục khám phá nhanh:** Các khối bo tròn đại diện cho các dịp tặng (Sinh nhật, Khai trương, Kỷ niệm, Valentine).
4. **Sản phẩm tiêu biểu:** Lưới sản phẩm bán chạy/mới về, hiển thị rõ ảnh, tên, giá bán và nút xem chi tiết.
5. **Giới thiệu tính năng Tự tạo bó hoa:** Khối banner tương tác thu hút người dùng trải nghiệm phối hoa.
6. **Câu chuyện thương hiệu Mer Florist:** Đoạn giới thiệu ngắn gọn, chân thực về nguồn cảm hứng và cam kết dịch vụ.
7. **Đánh giá từ khách hàng:** Trích dẫn các feedback thực tế từ Story Highlight Instagram của Mer Florist.
8. **Footer:** Toàn bộ thông tin hỗ trợ và kết nối.

### 4.3. Khám phá sản phẩm, Tìm kiếm & Lọc (Trọng số: 10/100 điểm)
* **Thanh tìm kiếm thông minh (Live Search):** Tự động gợi ý từ khóa và sản phẩm tương ứng sau 300ms người dùng dừng gõ; xử lý linh hoạt từ khóa có dấu và không dấu (ví dụ: `lan ho diep` khớp với `Lan hồ điệp`).
* **Bộ lọc kết hợp (Faceted Filter):** Cho phép lọc đồng thời:
  * Khoảng giá (Dưới 300.000đ | 300.000đ – 600.000đ | Trên 600.000đ).
  * Dịp tặng (Sinh nhật, Khai trương, Tốt nghiệp...).
  * Loại hoa (Hoa tươi nội địa, Hoa nhập khẩu, Hoa sáp/lụa).
  * Tông màu chủ đạo (Hồng, Trắng, Đỏ, Pastel).
* **Thanh công cụ bổ trợ:** Dropdown sắp xếp (*Giá tăng dần, Giá giảm dần, Mới nhất, Phổ biến nhất*).
* **Bộ đếm kết quả & Thẻ lọc:** Hiển thị rõ: *"Tìm thấy 18 sản phẩm phù hợp"* kèm các chip lọc có nút `x` để xóa nhanh.
* **Màn hình khi không có kết quả (Empty State):** Minh họa đồ họa ấm áp, thông điệp: *"Chưa có mẫu hoa khớp hoàn toàn với bộ lọc của bạn"*, kèm nút *"Đặt lại bộ lọc"* và danh sách gợi ý 4 mẫu hoa được yêu thích nhất.

### 4.4. Trang chi tiết sản phẩm - PDP (Trọng số: 12/100 điểm)
* **Bố cục:** Chia 2 cột tỷ lệ `50 : 50` trên Desktop (Cột thông tin cuộn độc lập hoặc dính cố định):
  * **Cột trái (Media):** 1 ảnh lớn chất lượng cao (tỉ lệ 3:4) + Dải ảnh thumbnail thu nhỏ bên dưới thể hiện các góc cắm hoa khác nhau.
  * **Cột phải (Thông tin & Hành động):**
    * Tên sản phẩm (Font Montserrat Semi-bold, `24px`).
    * Tình trạng: Huy hiệu *"Còn hàng"* (Xanh) hoặc *"Cần đặt trước 3 tiếng"*.
    * Giá bán niêm yết (nếu có giảm giá, hiển thị giá gốc gạch ngang mờ bên cạnh).
    * **Khối mô tả sản phẩm (đặt ngay bên cạnh theo đúng góp ý của giảng viên):** Ý nghĩa bó hoa, loại hoa chính, kích thước ước tính (Cao $\approx 45\text{cm}$, Rộng $\approx 35\text{cm}$).
    * Tùy chọn kích thước/phiên bản: Size Tiêu chuẩn / Size Lớn.
    * Ô ghi chú thiệp miễn phí: Nhập nội dung thiệp tặng (tối đa 150 ký tự).
    * Bộ điều khiển số lượng (`-`, Số lượng, `+`).
    * Cụm nút CTA: Nút viền *"Thêm vào giỏ"* + Nút nền xanh `#638371` *"Đặt hoa ngay"*.
    * **Khối thời gian giao hàng:** Icon đồng hồ kèm thông báo: *"Thời gian cắm và chuẩn bị: 60 - 90 phút. Giao nhanh trong nội thành Đà Nẵng"*.

### 4.5. Giỏ hàng & Quy trình Thanh toán (Trọng số: 16/100 điểm)
* **Tương tác thêm vào giỏ:** Hiển thị Toast thông báo thành công hoặc mở Mini-cart trượt mượt mà từ cạnh phải, tránh việc tự động chuyển trang gây ngắt quãng trải nghiệm xem hoa.
* **Trang Giỏ hàng (`/cart`):**
  * Bảng danh sách chi tiết: Ảnh nhỏ, Tên mẫu hoa, Phân loại/Thiệp đính kèm, Đơn giá, Bộ chỉnh số lượng, Nút xóa món hàng.
  * Tự động cập nhật tổng tiền bằng JavaScript ngay khi thay đổi số lượng.
* **Trang Thanh toán (`/checkout`):**
  * *Tách biệt thông tin:* Phân định rõ 2 khu vực form: **Thông tin người đặt** (Tên, SĐT, Email nhận hóa đơn) và **Thông tin người nhận** (Tên, SĐT người nhận, Địa chỉ giao hoa chi tiết tại Đà Nẵng).
  * *Chọn thời gian nhận hoa (Khắc phục góp ý của GV):* Ô chọn ngày (Datepicker) + Dropdown chọn khung giờ nhận hoa mong muốn (*8:00 - 11:00*, *13:30 - 17:00*, *18:00 - 21:00*). Hệ thống khóa tự động khung giờ sát nút nếu thời gian chuẩn bị không đủ 2 tiếng.
  * *Phương thức thanh toán:* COD (Thanh toán khi nhận hoa) / Chuyển khoản QR Napas tiện lợi.
  * *Kiểm tra tính hợp lệ (Form Validation):* Cảnh báo lỗi màu đỏ theo thời gian thực (inline validation) khi nhập sai định dạng SĐT hoặc để trống địa chỉ.
* **Màn hình Hoàn tất đơn hàng (`/order-success`):** Xác nhận thành công với Mã đơn hàng, Tóm tắt chi phí, Thời gian giao dự kiến và nút bấm kết nối trực tiếp với Zalo CSKH của shop.

---

## 5. GIẢI PHÁP KỸ THUẬT TỐI ƯU LIGHTHOUSE & WEB VITALS

Khắc phục hoàn toàn các chỉ số báo động đỏ ở phiên bản cũ:

```
[Chỉ số cũ]                                     [Mục tiêu mới]
Performance: 23/100        ==================>   Performance: ≥ 90/100
Accessibility: 71/100      ==================>   Accessibility: ≥ 95/100
LCP: 42.1s                 ==================>   LCP: < 2.5s
TBT: 6,460ms               ==================>   TBT: < 150ms
```

### 5.1. Tối ưu Largest Contentful Paint (LCP) từ 42s xuống < 2.5s
* **Chuyển đổi ảnh WebP:** Chuyển đổi toàn bộ định dạng ảnh sang `.webp`, nén lossy chất lượng 85%. Kích thước ảnh Hero Banner không vượt quá `150KB`, ảnh thẻ sản phẩm `< 40KB`.
* **Cơ chế tải ảnh:**
  * Ảnh Banner chính: Đặt thuộc tính `loading="eager"` và `fetchpriority="high"`.
  * Ảnh sản phẩm danh sách bên dưới màn hình đầu tiên (below the fold): Bắt buộc dùng `loading="lazy"` và `decoding="async"`.
* **Khai báo kích thước cố định:** Luôn thiết lập `width` và `height` rõ ràng trong HTML hoặc CSS `aspect-ratio: 3 / 4` để trình duyệt giữ chỗ trước, triệt tiêu hiện tượng giật layout (CLS = 0).

### 5.2. Tối ưu Total Blocking Time (TBT) từ 6.460ms xuống < 150ms
* **Tải Scripts bất đồng bộ:** Thêm thuộc tính `defer` hoặc `type="module"` cho tất cả các file script JavaScript.
* **Kỹ thuật Debouncing:** Giới hạn tần suất xử lý sự kiện gõ tìm kiếm (`keyup`) và kéo thanh trượt giá lọc với khoảng thời gian `300ms`.
* **Tối giản thư viện:** Không dùng các thư viện nặng nề (như toàn bộ thư viện jQuery hoặc animation cồng kềnh); thay vào đó dùng JavaScript thuần (Vanilla JS) hoặc CSS Transition cho các hiệu ứng trượt, mở popup.

### 5.3. Tối ưu Accessibility từ 71 lên > 95
* Bổ sung đầy đủ nhãn `aria-label` cho tất cả các nút bấm dạng icon (nút tìm kiếm, giỏ hàng, đóng modal, tăng giảm số lượng).
* Mọi thẻ `<img>` đều có thuộc tính `alt` mô tả chính xác nội dung (Ví dụ: `alt="Bó hoa hồng pastel phong cách Hàn Quốc - Mer Florist"`).
* Đảm bảo cấu trúc Heading logic từ `H1` -> `H2` -> `H3`, không nhảy cấp thẻ tiêu đề.

---

## 6. LỘ TRÌNH TRIỂN KHAI & PHÂN BỔ CÔNG VIỆC (5 GIAI ĐOẠN)

```
[Giai đoạn 1] ───> [Giai đoạn 2] ───> [Giai đoạn 3] ───> [Giai đoạn 4] ───> [Giai đoạn 5]
Chốt phạm vi       Thiết kế UI/UX     Dựng Core UI       Lập trình Logic     Testing & Audit
(1 - 2 ngày)       (2 - 3 ngày)       (3 - 4 ngày)       (4 - 5 ngày)        (2 ngày)
```

| Giai đoạn | Nội dung công việc cụ thể | Kết quả đầu ra (Deliverables) |
| :--- | :--- | :--- |
| **Giai đoạn 1: Chuẩn bị & Thu thập dữ liệu** | • Thu thập ảnh thật và giá bán từ `merflorist.com` và Instagram của Mer Florist.<br>• Họp nội bộ chốt các hạng mục tư vấn ở Mục 2.<br>• Chuẩn hóa dữ liệu JSON/Database sản phẩm. | File cấu trúc dữ liệu JSON đầy đủ sản phẩm, ảnh đã xử lý nền |
| **Giai đoạn 2: Thiết kế UI/UX (Figma)** | • Hoàn thiện Design System (Color, Typography, Buttons, Form inputs).<br>• Dựng Wireframe & UI 6 trang chính (Desktop & Mobile). | Link Figma Prototype hoàn chỉnh có tương tác |
| **Giai đoạn 3: Dựng khung Giao diện (Frontend Layout)** | • Xây dựng Header (Sticky), Footer, Breadcrumb.<br>• Dựng giao diện Trang chủ 8 section chuẩn bố cục.<br>• Dựng khung trang Danh mục với lưới Grid 3 cột (Desktop) và 2 cột (Mobile). | Giao diện tĩnh HTML/CSS (hoặc React/Tailwind) responsive 100% |
| **Giai đoạn 4: Lập trình Logic & Chức năng** | • Code bộ lọc kết hợp đa tiêu chí + Live search.<br>• Code tương tác trang PDP (chọn size, ảnh gallery, nhập thiệp).<br>• Code luồng Giỏ hàng, Form đặt hoa (chọn giờ giao) & Validate.<br>• Code giao diện tương tác tính năng Tự tạo bó hoa. | Toàn bộ luồng nghiệp vụ hoạt động trơn tru không lỗi JS |
| **Giai đoạn 5: Tối ưu Lighthouse, Testing & Nghiệm thu** | • Kiểm thử trên Chrome, Safari, Edge và thiết bị di động thật.<br>• Nén ảnh WebP, audit Lighthouse đạt chỉ số xanh.<br>• Đối soát checklist chấm điểm của giảng viên. | Báo cáo Lighthouse điểm > 90 và sản phẩm sẵn sàng báo cáo |

---

## 7. CHECKLIST NGHIỆM THU THEO RUBRIC GIẢNG VIÊN

| Tiêu chí | Trọng số | Điểm kiểm tra thực tế trên website mới | Đạt chuẩn |
| :--- | :---: | :--- | :---: |
| **Kiến trúc thông tin & Điều hướng** | **8%** | • Menu chính phân cấp 3 nhóm rõ ràng, dễ hiểu<br>• Breadcrumbs xuất hiện đúng vị trí trên các trang con<br>• Icon Giỏ hàng & Thanh tìm kiếm luôn xuất hiện ghim trên đỉnh<br>• Footer đầy đủ thông tin cửa hàng, chính sách giao nhận | [x] |
| **Khám phá sản phẩm, Tìm kiếm & Lọc** | **10%** | • Tìm kiếm xử lý mượt cả từ khóa không dấu<br>• Bộ lọc kết hợp đồng thời (Giá + Dịp + Loại hoa)<br>• Sắp xếp theo giá tăng/giảm chính xác<br>• Màn hình Empty State thân thiện khi không có kết quả | [x] |
| **Trải nghiệm trang Chi tiết sản phẩm** | **12%** | • Bố cục 2 cột: Ảnh bên trái, Mô tả đặt ngay bên phải<br>• Ảnh phóng to/xem nhiều góc rõ nét<br>• Thông tin thành phần hoa, kích thước và thời gian cắm hoa rõ ràng<br>• Nút thêm giỏ hàng có hiệu ứng phản hồi tức thì | [x] |
| **Giỏ hàng & Thanh toán** | **16%** | • Tăng/giảm/xóa sản phẩm tự động nhảy tổng tiền<br>• Có trường chọn Ngày và Khung giờ giao hoa mong muốn<br>• Tách biệt thông tin người đặt và người nhận hoa<br>• Form validation báo lỗi rõ ràng nếu nhập thiếu thông tin | [x] |
| **Hiệu năng & Tương thích (Lighthouse)** | – | • Performance ≥ 90, LCP < 2.5s, TBT < 150ms<br>• Accessibility ≥ 95 (Độ tương phản và nhãn aria đầy đủ)<br>• Responsive mượt mà trên Mobile (không tràn ngang màn hình) | [x] |