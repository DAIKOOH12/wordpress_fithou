//Cac Su Kien Trên Banner
let i = 0; 
const images = document.querySelectorAll('.banner-img'); 

showImage = (index) => {
    images[index].style.display = 'block';
}

nextImage = () => {
    images[i].style.display = 'none';
    if(i < images.length - 1){
        i++
    }
    else i = 0;
    showImage(i);
}

showImage(0);
const interval = setInterval(nextImage, 5000);

const prev = document.querySelector('.banner-button-prev');
prev.addEventListener("click", () => {
    images[i].style.display = 'none';
    if(i == 0){
        i = images.length - 1;
    }
    else i--;
    showImage(i);
    clearInterval(interval);
});

const next = document.querySelector('.banner-button-next');
next.addEventListener("click", () => {
    images[i].style.display = 'none';
    if(i == images.length - 1){
        i = 0;
    }
    else i++;
    showImage(i);
    clearInterval(interval);
});
//End Cac Su Kien Tren Banner

//Cac Su Kien Tren Thanh Tim Kiêm
const txtFind = document.querySelector('.find_bar-text');
const butFind = document.querySelector('.find_bar-icon1');
const delFind = document.querySelector('.find_bar-x');

const formSearch = document.querySelector(".find_bar");
if(formSearch){
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = txtFind.value;
        if(title)
            window.location.href = '/Client/Pages/TrangTimKiem/TimThay/Finding.html?title=' + encodeURIComponent(title);
    });
}

txtFind.addEventListener("keydown", (e) => {
    if(e.key == "Enter")
        formSearch.submit();
});

butFind.addEventListener("click", () =>{
    formSearch.submit();
});

delFind.addEventListener("click", () => {
    txtFind.value = "";
});

//End Su Kien Tim Kiem

//Cac Su Kien khi click vao tieu de Tin Tuc va nut Xem Them tren Trang Chu
const setNewsTitle = (e) =>{
    for (const it of e) {
        it.addEventListener("click",function(){
            if(it.textContent == "Xem thêm"){
                const titleValue = it.parentNode.querySelector('.title-all').textContent;
                window.location.href = '/Client/Pages/TrangTinTuc/News.html?title=' + encodeURIComponent(titleValue);
            }
            else window.location.href = '/Client/Pages/TrangTinTuc/News.html?title=' + encodeURIComponent(it.textContent);
        });
    }
}

const newsTitle = document.querySelectorAll('.title-all');

setNewsTitle(newsTitle);


//Cac Su Kien khi click vào tieu de Bai Viet tren Trang Chu
const setPostTitle = (e) => {
    for (const it of e) {
        it.addEventListener("click", () =>{
            window.location.href = '/Client/Pages/TrangBaiViet/Posts.html?title=' + encodeURIComponent(it.textContent);
        });
    }
}

const postTitle = document.querySelectorAll('.post-title-all');

setPostTitle(postTitle);

//Su Kien click vao o Tin Tuc tren thanh menu
const postNews = document.querySelector("#menu-item5");
postNews.addEventListener("click", () => {
    window.location.href = "../TrangTinTuc/News.html";
});
//End Su Kien click vao o Tin Tuc tren thanh menu


//Su Kien click vao anh Elearning
const eLearning = document.querySelector('.index-item-row1-box1-img');
eLearning.addEventListener("click", () => {
    window.location.href = "https://daihocmohanoi.edu.vn/";
});
//End Su Kien click vao anh Elearning