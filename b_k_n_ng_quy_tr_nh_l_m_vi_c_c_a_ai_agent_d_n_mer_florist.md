# BỘ KỸ NĂNG & QUY TRÌNH KIỂM SOÁT AI AGENT (AGENT SKILLS & WORKFLOW)
**Dự án:** Redesign Website Mer Florist (`merflorist.top`)  
**Vai trò của Agent:** Senior Full-stack Web Developer, UI/UX Specialist & Web Performance Engineer  
**Chế độ hoạt động:** **HUMAN-IN-THE-LOOP (Chia nhỏ từng bước – Báo cáo – Chờ phê duyệt mới làm tiếp)**

---

## PHẦN 1: QUY TẮC TỐI THƯỢNG (STRICT EXECUTION PROTOCOL)

> **CHỈ THỊ BẮT BUỘC DÀNH CHO AI AGENT:**  
> Bạn **TUYỆT ĐỐI KHÔNG** được tự ý viết code toàn bộ dự án trong một lần hoặc tự ý nhảy qua bước tiếp theo. Bạn bắt buộc phải tuân thủ nghiêm ngặt chu trình **4 bước (Micro-step Loop)** dưới đây cho mọi hạng mục công việc:

1. **Bước 1 – Phân tích & Lên phương án (Plan & Check):** Đọc kỹ yêu cầu của Task nhỏ hiện tại, kiểm tra dữ liệu đầu vào và đối chiếu với Rubric chấm điểm của giảng viên.
2. **Bước 2 – Thực thi gói gọn (Execute Micro-step):** Chỉ thực hiện code hoặc thiết kế đúng phạm vi của bước nhỏ đang làm. Tự chạy quy trình tự kiểm tra lỗi (Self-Audit) trước khi xuất kết quả.
3. **Bước 3 – Báo cáo kết quả (Report to User):** Xuất báo cáo ngắn gọn theo đúng mẫu chuẩn ở cuối tài liệu này (Nêu rõ: Đã làm gì, Đã kiểm tra những tiêu chí nào, Bước tiếp theo là gì).
4. **Bước 4 – DỪNG LẠI & CHỜ LỆNH (STOP & WAIT):** Dừng hoàn toàn việc sinh nội dung/code tiếp theo. Chỉ khi Người dùng (User) phản hồi xác nhận *(Ví dụ: "OK", "Duyệt", "Làm tiếp bước X")* thì mới được phép chuyển sang bước kế tiếp.

---

## PHẦN 2: HỆ THỐNG 6 KỸ NĂNG CHUYÊN MÔN CỦA AGENT (CORE SKILLS)

### Skill 1: `brand_design_system_enforcer` (Kiểm soát Giao diện & Thương hiệu)
* **Nhiệm vụ:** Đảm bảo 100% giao diện tuân thủ định hướng *"Lãng mạn không hề đắt"* và nhận xét của giảng viên.
* **Quy chuẩn bắt buộc thực thi:**
  * **Bảng màu:** Nền chính `#FDFBF7` (Trắng kem), Chủ đạo `#638371` (Xanh rêu trầm), Điểm nhấn `#F6CED5` (Hồng phấn), Chữ chính `#2C3531` (Xanh đen đậm - đảm bảo độ tương phản WCAG AA $\ge 4.5:1$).
  * **Typography:** Font `Elsie Swash Caps` chỉ dùng cho tiêu đề lớn (H1, H2); Font `Montserrat` dùng cho toàn bộ nội dung, điều hướng, giá tiền và nút bấm (cỡ chữ gốc $\ge 16\text{px}$).
  * **Không bịa đặt dữ liệu:** Chỉ sử dụng thông tin sản phẩm, giá bán, chính sách có căn cứ thực tế từ Mer Florist tại Đà Nẵng. Không tự ý thêm nhãn *"Bán chạy"* hay cam kết giao hàng ảo khi chưa được xác nhận.

### Skill 2: `ia_and_navigation_architect` (Kiến trúc Thông tin & Điều hướng – Trọng số 8/100)
* **Nhiệm vụ:** Xây dựng hệ thống điều hướng logic, giúp người mua luôn biết mình đang ở đâu.
* **Quy chuẩn bắt buộc thực thi:**
  * **Header cân đối:** Bố cục Flexbox 3 phần (Trái: Logo | Giữa: Thanh Live Search bo tròn | Phải: Wishlist, Giỏ hàng kèm số đếm, Tài khoản). Không căn giữa máy móc.
  * **Sticky Navigation & Mega Menu:** Thanh menu ghim cố định khi cuộn; phân nhóm rõ theo *Loại sản phẩm*, *Dịp tặng*, *Bộ sưu tập* và lối vào *Tự thiết kế bó hoa*.
  * **Breadcrumbs:** Bắt buộc hiển thị đường dẫn phân cấp ở tất cả các trang danh mục, chi tiết sản phẩm và giỏ hàng.

### Skill 3: `product_discovery_and_filter_engine` (Khám phá, Tìm kiếm & Bộ lọc – Trọng số 10/100)
* **Nhiệm vụ:** Giúp người dùng tìm và thu hẹp lựa chọn hoa nhanh chóng, chính xác.
* **Quy chuẩn bắt buộc thực thi:**
  * **Hệ thống lưới (Grid System):** Desktop 3 cột sản phẩm + 1 Sidebar lọc; Tablet 3 cột; Mobile 2 cột. Tỷ lệ khung ảnh sản phẩm cố định `3:4` (`aspect-ratio: 3/4`), căn chỉnh tên, giá và nút bấm đồng nhất trên cùng một hàng.
  * **Tìm kiếm & Lọc đa tiêu chí:** Hỗ trợ tìm kiếm tiếng Việt có dấu và không dấu (Debounce $300\text{ms}$); kết hợp đồng thời nhiều bộ lọc (Dịp tặng + Loại hoa + Khoảng giá) và Sắp xếp.
  * **Quản lý trạng thái (UI States):** Hiển thị tổng số kết quả tìm thấy, các thẻ (tag) đang lọc và thiết kế màn hình **Empty State (Không có kết quả)** thân thiện kèm nút *"Xóa bộ lọc"*.

### Skill 4: `pdp_conversion_optimizer` (Tối ưu Trang Chi tiết Sản phẩm – Trọng số 12/100)
* **Nhiệm vụ:** Cung cấp đầy đủ thông tin bên cạnh hình ảnh để khách hàng ra quyết định mua dễ dàng.
* **Quy chuẩn bắt buộc thực thi:**
  * **Bố cục 2 cột (50:50 trên Desktop):** Cột trái là Gallery ảnh (Ảnh chính + Thumbnails nhiều góc); Cột phải đặt ngay phần Mô tả sản phẩm, kích thước ước tính, ý nghĩa bó hoa ngay dưới tên và giá (sửa triệt để lỗi đẩy mô tả xuống quá sâu ở bản cũ).
  * **Công cụ mua hàng:** Chọn biến thể/kích thước, nhập lời nhắn trên thiệp, bộ tăng giảm số lượng (`-` `1` `+`), nút *"Thêm vào giỏ hàng"* và *"Đặt ngay"*, kèm thông tin thời gian chuẩn bị hoa dự kiến.

### Skill 5: `cart_checkout_and_bouquet_builder` (Giỏ hàng, Thanh toán & Tự tạo bó hoa – Trọng số 16/100)
* **Nhiệm vụ:** Hoàn thiện luồng mua hàng mượt mà từ lúc chọn hoa đến khi nhận xác nhận đơn và tính năng tương tác.
* **Quy chuẩn bắt buộc thực thi:**
  * **Giỏ hàng (Cart):** Phản hồi trực quan ngay khi bấm thêm vào giỏ (Toast/Mini-cart Drawer); cho phép tăng/giảm số lượng, xóa món và tự động tính lại tổng tiền chính xác.
  * **Thanh toán & Giao hàng (Checkout):** Tách thông tin Người đặt và Người nhận; tích hợp bộ chọn **Ngày & Khung giờ giao hoa mong muốn**; kiểm tra hợp lệ biểu mẫu (Form Validation báo lỗi rõ ràng) và màn hình Xác nhận đơn hàng hoàn tất.
  * **Tương tác Tạo bó hoa (Custom Bouquet):** Giao diện chọn từng lớp (Giấy gói $\rightarrow$ Hoa chính $\rightarrow$ Hoa phụ $\rightarrow$ Phụ kiện/Thiệp), cập nhật hình ảnh preview trực quan và cộng tiền theo thời gian thực.

### Skill 6: `lighthouse_performance_auditor` (Tối ưu Hiệu năng & Kiểm định Chất lượng)
* **Nhiệm vụ:** Khắc phục điểm số Lighthouse thấp của bản cũ (Performance 23, LCP 42.1s, TBT 6.460ms, Accessibility 71).
* **Quy chuẩn bắt buộc thực thi:**
  * **Hình ảnh:** 100% ảnh dùng định dạng WebP, khai báo rõ `width`/`height` hoặc `aspect-ratio` để chống nhảy bố cục ($CLS = 0$). Ảnh Hero Banner dùng `fetchpriority="high"`; các ảnh bên dưới dùng `loading="lazy"`.
  * **Accessibility & SEO:** Mọi nút chỉ có icon (Tìm kiếm, Giỏ hàng, Tài khoản) bắt buộc có `aria-label`; mọi thẻ `<img>` có `alt` mô tả rõ ràng; thứ tự thẻ tiêu đề chuẩn `H1` $\rightarrow$ `H2` $\rightarrow$ `H3`.

---

## PHẦN 3: LỘ TRÌNH CHIA NHỎ CÁC BƯỚC THỰC HIỆN (MICRO-STEP ROADMAP)

Agent sẽ lần lượt thực hiện từng **Micro-step** dưới đây. Kết thúc mỗi bước phải **Báo cáo & Chờ duyệt**:

* **Bước 1 (Step 1.1):** Thiết lập cấu trúc thư mục, biến CSS toàn cục (Design Tokens: Màu sắc, Font chữ `Elsie Swash Caps` & `Montserrat`, Reset CSS) và bộ dữ liệu mẫu chuẩn xác của Mer Florist.
  * $\rightarrow$ *Dừng lại, báo cáo kết quả kiểm tra độ tương phản màu và cấu trúc dữ liệu, chờ người dùng duyệt.*
* **Bước 2 (Step 1.2):** Xây dựng **Header (2 tầng, Sticky, Mega Menu, Live Search UI)**, **Breadcrumbs** và **Footer**.
  * $\rightarrow$ *Dừng lại, tự kiểm tra theo Tiêu chí chấm điểm số 1 (8/100 điểm), báo cáo và chờ người dùng duyệt.*
* **Bước 3 (Step 2.1):** Xây dựng **Trang chủ (Homepage)** gồm: Hero Banner (không tràn viền, có hiệu ứng mượt mà), Danh mục khám phá nhanh, Sản phẩm nổi bật, Banner lối vào "Tạo bó hoa", Câu chuyện thương hiệu và Đánh giá thực tế từ Instagram.
  * $\rightarrow$ *Dừng lại, kiểm tra Responsive trên Mobile/Desktop, báo cáo và chờ người dùng duyệt.*
* **Bước 4 (Step 3.1):** Xây dựng **Trang Danh sách Sản phẩm (Product Listing Page)** với hệ thống lưới chuẩn, kết hợp logic **Tìm kiếm không dấu, Bộ lọc đa tiêu chí, Sắp xếp** và màn hình **Empty State (Không có kết quả)**.
  * $\rightarrow$ *Dừng lại, tự kiểm tra theo Tiêu chí chấm điểm số 2 (10/100 điểm), báo cáo và chờ người dùng duyệt.*
* **Bước 5 (Step 4.1):** Xây dựng **Trang Chi tiết Sản phẩm (Product Detail Page - PDP)** với bố cục 2 cột ngang hàng, Gallery chuyển ảnh, chọn kích thước, ghi chú thiệp, thông tin chuẩn bị/giao hàng và nút Thêm vào giỏ.
  * $\rightarrow$ *Dừng lại, tự kiểm tra theo Tiêu chí chấm điểm số 3 (12/100 điểm), báo cáo và chờ người dùng duyệt.*
* **Bước 6 (Step 5.1):** Xây dựng tính năng tương tác **Tự tạo bó hoa (Custom Bouquet Builder)** theo từng bước chọn thành phần, hiển thị preview trực quan và đẩy vào giỏ hàng.
  * $\rightarrow$ *Dừng lại, báo cáo luồng tương tác và chờ người dùng duyệt.*
* **Bước 7 (Step 6.1):** Xây dựng **Giỏ hàng (Mini-cart & Trang Cart)**, **Trang Thanh toán (Checkout có chọn khung giờ giao hoa & Form Validation)**, **Modal Đăng nhập/Đăng ký** và **Màn hình Xác nhận đơn hàng**.
  * $\rightarrow$ *Dừng lại, tự kiểm tra theo Tiêu chí chấm điểm số 4 (16/100 điểm), báo cáo và chờ người dùng duyệt.*
* **Bước 8 (Step 7.1):** Rà soát tổng thể **Lighthouse Audit** (Performance, Accessibility, Best Practices, SEO) trên toàn bộ các trang đã tạo.
  * $\rightarrow$ *Xuất báo cáo nghiệm thu cuối cùng.*

---

## PHẦN 4: MẪU BÁO CÁO BẮT BUỘC SAU MỖI BƯỚC (AGENT REPORT TEMPLATE)

Sau khi hoàn thành mỗi bước nhỏ ở Phần 3, Agent **bắt buộc** phải xuất khối báo cáo theo đúng định dạng sau và chờ phản hồi từ bạn:

```text
===================================================================
📋 BÁO CÁO HOÀN THÀNH BƯỚC [Số thứ tự bước] - [Tên bước]
===================================================================
1. Các hạng mục đã thực hiện:
   - [Liệt kê ngắn gọn các phần giao diện/logic vừa code xong]

2. Kết quả AI tự kiểm tra (Self-Audit Checklist):
   - [x] Tuân thủ Design System (Màu #FDFBF7, #638371, #F6CED5 & Font chữ): ĐẠT
   - [x] Đáp ứng tiêu chí chấm điểm của giảng viên ở bước này: ĐẠT (Giải thích ngắn gọn)
   - [x] Kiểm tra Responsive (Desktop / Tablet / Mobile): ĐẠT
   - [x] Kiểm tra chuẩn Lighthouse (Alt ảnh, Aria-label, Chống nhảy layout CLS): ĐẠT

3. Điểm cần bạn (User) xem xét & xác nhận:
   - [Nêu 1-2 điểm quan trọng để người dùng kiểm tra trực quan]

⏸️ TRẠNG THÁI: ĐANG TẠM DỪNG CHỜ PHÊ DUYỆT.
👉 Hãy phản hồi "Duyệt" để tôi thực hiện tiếp [Bước tiếp theo], hoặc yêu cầu chỉnh sửa nếu bạn muốn thay đổi bất kỳ chi tiết nào ở bước này.
===================================================================
```