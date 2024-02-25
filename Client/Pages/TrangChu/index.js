//BANNER IMG START
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
//BANNER IMG END

//NAVBAR START
    const divNavs = document.querySelectorAll(".menu-item")
    const navTeaching = document.querySelector("#menu-item4");
    divNavs.forEach(item => {
        if(item != navTeaching){
            item.addEventListener("click", () => {
                const nextLink = item.querySelector("a");
                window.location.href = `${nextLink.getAttribute("href")}`;
            })
        }
    });
//NAVBAR END

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

const buttonSider = document.querySelector('.find_bar-sider');
const main = document.querySelector("main");
const sider = document.querySelector(".sider");

console.log(buttonSider)
buttonSider.addEventListener("click", () => {
    if(sider.style.display == "none"){
        sider.style.display = "block";
        main.style.opacity = "0.3";
    }
    else{
        sider.style.display = "none";
        main.style.opacity = "1";
    }
})

main.addEventListener("click", () => {
    if(sider.style.display == "block"){
        sider.style.display = "none";
        main.style.opacity = "1";
    }
})


const buttonCategory = document.querySelector(".find_bar-icon2");
const subMenu = document.querySelector(".sub-menu");

buttonCategory.addEventListener("click", () => {
    if(subMenu.style.display == "none"){
        subMenu.style.display = "block";
        subMenu.style.zIndex = "9999";
    }
    else{
        subMenu.style.display = "none";
    }
})

//Can chinh kich thuoc cac item co phan "xem them"
window.addEventListener("resize", () => {
    if(window.innerWidth <= 950 && window.innerWidth >= 479){
        const itemRow2 = document.querySelectorAll('.index-item-row2-boxs-text');
        let maxHeight = 0;
        
        for (let i = 0; i < itemRow2.length; i++) {
            const height = itemRow2[i].clientHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        
        for (let i = 0; i < itemRow2.length; i++) {
            itemRow2[i].style.height = maxHeight + 'px';
        }
        
    } else {
        location.reload();
    }
})
//Can chinh kich thuoc cac item co phan "xem them"