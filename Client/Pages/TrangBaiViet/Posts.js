const postTopic = document.querySelector('.post-title');

const currentUrl = new URL(window.location.href);

const title = currentUrl.searchParams.get('title');

if (title) {
    const topic = postTopic.querySelector("p");
    topic.textContent = title;
}

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

//NAVBAR START
const divNavs = document.querySelectorAll(".menu-item")
divNavs.forEach(item => {
    item.addEventListener("click", () => {
        const nextLink = item.querySelector("a");
        window.location.href = `${nextLink.getAttribute("href")}`;
    })
});
//NAVBAR END

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
//Cac Su Kien khi click vào tieu de Bai Viet tren Trang Chu