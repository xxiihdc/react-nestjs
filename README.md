# How to setup:
- TBD

# React tip apply: :D

- https://dev.to/_ndeyefatoudiop/101-react-tips-tricks-for-beginners-to-experts-4m11

1.  Use self-closing tags to keep your code compact / Sử dụng thẻ tự đóng để mã của bạn ngắn gọn và dễ quản lý hơn.
2.  Prefer fragments over DOM nodes (e.g., div, span, etc.) to group elements / Ưu tiên sử dụng Fragment thay vì các thẻ DOM (như div, span, v.v.) để nhóm các phần tử lại với nhau.
3.  Use React fragment shorthand <></> (except if you need to set a key) / Sử dụng cú pháp rút gọn của React Fragment <></> (trừ khi bạn cần thiết lập key).
4.  Prefer spreading props over accessing each one individually / Ưu tiên sử dụng spread props thay vì truy cập từng prop một.
5.  When setting default values for props, do it while destructuring them / Khi thiết lập giá trị mặc định cho props, hãy làm điều đó ngay khi `phân rã` chúng.
6.  Drop curly braces when passing string type props / Bỏ dấu ngoặc nhọn khi truyền các props kiểu chuỗi.
7.  Ensure that value is a boolean before using value && <Component {...props}/> to prevent displaying unexpected values on the screen / Đảm bảo rằng giá trị là boolean trước khi sử dụng value && <Component {...props}/> để tránh hiển thị các giá trị không mong muốn trên màn hình.
8.  Use functions (inline or not) to avoid polluting your scope with intermediate variables / Sử dụng hàm (có thể là inline hoặc không) để tránh làm ô nhiễm phạm vi với các biến trung gian.
9.  Use curried functions to reuse logic (and properly memoize callback functions) / Sử dụng hàm currying để tái sử dụng logic (và ghi nhớ các hàm callback một cách chính xác).
10. Move data that doesn't rely on the component props/state outside of it for cleaner (and more efficient) code / Di chuyển dữ liệu không phụ thuộc vào props/state của component ra ngoài component để mã sạch hơn (và hiệu quả hơn).
11. When storing the selected item from a list, store the item ID rather than the entire item / Khi lưu trữ mục được chọn từ danh sách, hãy lưu ID của mục thay vì toàn bộ mục.
12. If you're frequently checking a prop's value before doing something, introduce a new component / Nếu bạn thường xuyên kiểm tra giá trị của một prop trước khi làm điều gì đó, hãy tạo một component mới.
13. Use the CSS :empty pseudo-class to hide elements with no children / Sử dụng pseudo-class :empty của CSS để ẩn các phần tử không có phần tử con.
14. Group all the state and context at the top of the component / Nhóm tất cả state và context ở đầu component.
15. Leverage the children props for cleaner code (and performance benefits) / Tận dụng prop children để có mã sạch hơn (và cải thiện hiệu suất).
16. Build composable code with compound components / Xây dựng mã có thể kết hợp được với các thành phần compound.
17. Make your code more extensible with render functions or component functions props / Làm cho mã của bạn dễ mở rộng hơn với các hàm render hoặc props là các hàm component.
18. When dealing with different cases, use value === case && <Component /> to avoid holding onto old state / Khi xử lý các trường hợp khác nhau, hãy sử dụng value === case && <Component /> để tránh giữ lại trạng thái cũ.
19. Always use error boundaries / Luôn sử dụng Error Boundaries.
