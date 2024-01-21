const postTopic = document.querySelector('.row1-all-title');

const currentUrl = new URL(window.location.href);

const title = currentUrl.searchParams.get('title');

if (title) {
    const topic = postTopic.querySelector("p");
    topic.textContent = title;
}

//NAVBAR START
const divNavs = document.querySelectorAll(".menu-item")
divNavs.forEach(item => {
    item.addEventListener("click", () => {
        const nextLink = item.querySelector("a");
        window.location.href = `${nextLink.getAttribute("href")}`;
    })
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


//POST TITLE EVENT START
const setPostTitle = (e) => {
    for (const it of e) {
        it.addEventListener("click", () =>{
            window.location.href = '/Client/Pages/TrangBaiViet/Posts.html?title=' + encodeURIComponent(it.textContent);
        });
    }
}

const postTitle = document.querySelectorAll('.post-title-all');
setPostTitle(postTitle);

const postTitleMain = document.querySelectorAll(".news-item-title-topic");
setPostTitle(postTitleMain);
//POST TITLE EVENT END

//Cac su kien chan trang
const paginations = document.querySelectorAll(".page-item");

const page = currentUrl.searchParams.get('page');

if(page){
    const firstPage = document.querySelector("#page-item1");
    firstPage.style.borderBottom = "none";
    const newPage = document.querySelector(`#page-item${page}`);
    newPage.style.borderBottom = "1px solid #135FAB";
}

if(paginations){
    let url = new URL(window.location.href);

    paginations.forEach((pagination) => {
        pagination.addEventListener("click", () => {
            for(it of paginations){
                it.style.borderBottom = "none"; 
            }

            const pageIndex = pagination.textContent;
            console.log(pageIndex);
            if(pageIndex){
                url.searchParams.set("page",pageIndex);
            } else {
                url.searchParams.delete("page");
            }

            window.location.href = url.href;

            pagination.style.borderBottom = "1px solid #135FAB";
        });
    });
}
//End Cac Su Kien Chan Trang