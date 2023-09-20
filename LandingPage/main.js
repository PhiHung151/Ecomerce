// Tạo một hàm để hiển thị popup
function showPopup() {
    // Tạo một div mới cho popup
    var popup = document.createElement('div');
    
    // Thiết lập các thuộc tính cho popup
    popup.style.position = 'fixed';
    popup.style.width = '200px';
    popup.style.height = '200px';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #000';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    
    // Thêm nội dung vào popup
    var content = '<select><option>USD</option><option>EUR</option><option>UAH</option><option>GBP</option><option>CHF</option></select>';
    popup.innerHTML = content;
    
    // Thêm popup vào trang
    document.body.appendChild(popup);
}

// Gán hàm showPopup cho sự kiện click của tất cả các thẻ <a>
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();  // Ngăn chặn hành vi mặc định của thẻ <a>
        showPopup();  // Hiển thị popup
    });
}



