# 🌤 Weather App (React + Vite)

Ứng dụng thời tiết đơn giản được xây dựng bằng **React + Vite**, sử dụng **OpenWeatherMap API** để lấy dữ liệu thời tiết theo tên thành phố.  
Ngoài ra còn có hiệu ứng chữ **ShinyText** hiển thị trạng thái thời tiết.

---

## 🚀 Công nghệ sử dụng
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Font Awesome](https://fontawesome.com/) (icon tìm kiếm)
- [jQuery](https://jquery.com/) (xử lý sự kiện input)

---

## ⚡ Tính năng
- Nhập tên thành phố để xem:
  - Nhiệt độ hiện tại (°C)
  - Mô tả trạng thái thời tiết (có hiệu ứng shiny text ✨)
  - Thời gian mặt trời mọc / lặn
  - Tốc độ gió
  - Độ ẩm
  - Icon minh họa thời tiết
- Giao diện tối giản, responsive, bo tròn thẻ hiển thị.

---

## 📂 Cấu trúc thư mục

src/
│── App.jsx # Component chính
│── App.css # CSS chung
│── assets/
│ └── reactBits/
│ └── ShinyText.jsx # Component hiệu ứng shiny text
│── main.jsx # Entry point Vite

---

## 🔑 Cấu hình API
Ứng dụng sử dụng API key từ [OpenWeatherMap](https://openweathermap.org/api).  
Trong `App.jsx` bạn cần thay:

const APP_ID = "YOUR_API_KEY_HERE";


🛠 Cài đặt & Chạy dự án
# Cài dependencies
npm install

# Chạy ở chế độ dev (có HMR)
npm run dev

# Build production
npm run build

# Preview bản build
npm run preview


Hiệu ứng ShinyText

Hiệu ứng shine được định nghĩa trong App.css:

.animate-shine {
  animation: shine 3s linear infinite;
}

@keyframes shine {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}


Và được áp dụng trong ShinyText.jsx để hiển thị trạng thái thời tiết:

<ShinyText
  text="Trời nhiều mây"
  disabled={false}
  speed={3}
  className="weather-state"
/>

📸 Demo giao diện


![alt text](image.png)

📜 Giấy phép

Dự án chỉ dùng cho mục đích học tập.
Bạn có thể thoải mái chỉnh sửa và mở rộng thêm tính năng. 🚀