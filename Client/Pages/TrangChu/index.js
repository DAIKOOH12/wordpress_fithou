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
prev.addEventListener("click", function() {
    images[i].style.display = 'none';
    if(i == 0){
        i = images.length - 1;
    }
    else i--;
    showImage(i);
    clearInterval(interval);
});

const next = document.querySelector('.banner-button-next');
next.addEventListener("click", function() {
    images[i].style.display = 'none';
    if(i == images.length - 1){
        i = 0;
    }
    else i++;
    showImage(i);
    clearInterval(interval);
});

//Cac Su Kien Tren Thanh Tim Kiêm
const txtFind = document.querySelector('.find_bar-text');
const butFind = document.querySelector('.find_bar-icon1');
const delFind = document.querySelector('.find_bar-x');

const checkFind = (str) => {
    if(str == "khanh")
        return true;
    else return false;
}

const startSearch = () => {
    const getTxtFind = txtFind.value;
    txtFind.value = "";

    if(checkFind(getTxtFind)){
        console.log(getTxtFind);
        window.location.href = "../TrangTimKiem/TimThay/Finding.html";
    }
    else{
        window.location.href = "../TrangTimKiem/KhongTimThay/CantFind.html";
    }
}

butFind.addEventListener("click", startSearch);

txtFind.addEventListener("keydown", function(e) {
    if(e.key == "Enter")
        startSearch();
});

delFind.addEventListener("click", function(){
    txtFind.value = "";
});

//Cac Su Kien khi click vao tieu de Tin Tuc va nut Xem Them tren Trang Chu
const setNewsTitle = (e) =>{
    for (const it of e) {
        it.addEventListener("click",function(){
            if(it.textContent == "Xem thêm"){
                const titleValue = it.parentNode.querySelector('p').textContent;
                localStorage.setItem("title", titleValue);
            }
            else localStorage.setItem("title", it.textContent);
            window.location.href = "../TrangTinTuc/News.html";
        });
    }
}

const newsTitle = document.querySelectorAll('.title-all');

setNewsTitle(newsTitle);


//Cac Su Kien khi click vào tieu de Bai Viet tren Trang Chu
const setPostTitle = (e) => {
    for (const it of e) {
        it.addEventListener("click",function(){
            localStorage.setItem("postTitle", it.textContent);
            window.location.href = "../TrangBaiViet/Posts.html";
        });
    }
}

const postTitle = document.querySelectorAll('.post-title-all');

setPostTitle(postTitle);

//Su Kien click vao o Tin Tuc tren thanh menu
const postNews = document.querySelector("#menu-item5");
postNews.addEventListener("click",function(){
    localStorage.setItem("title", "Tin Tức");
    window.location.href = "../TrangTinTuc/News.html";
});


//Su Kien click vao anh Elearning
const eLearning = document.querySelector('.index-item-row1-box1-img');
eLearning.addEventListener("click", function(){
    window.location.href = "https://daihocmohanoi.edu.vn/";
});