const postTopic = document.querySelector('.row1-all-title');

const currentUrl = new URL(window.location.href);

const title = currentUrl.searchParams.get('title');

if (title) {
    postTopic.textContent = title;
}

//Cac su kien tim kiem
const txtFind = document.querySelector('.find_bar-text');
const butFind = document.querySelector('.find_bar-icon1');

const newsItemTitle = document.querySelectorAll(".news-item1-title");
const formSearch = document.querySelector(".find_bar");

const regex = new RegExp(currentUrl.searchParams.get('keyword'), "i");
    for (const it of newsItemTitle) {
        if(!it.querySelector(".post-title-all").textContent.match(regex))
            it.style.display = "none";
        else it.style.display = "block";
    }

if(formSearch){
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = txtFind.value;
        if(keyword){
            url.searchParams.set("keyword", keyword);
        }
        else
            url.searchParams.delete("keyword");

        window.location.href = url.href;
    });
}

txtFind.addEventListener("keydown", (e) => {
    if(e.key == "Enter")
        formSearch.submit();
});

butFind.addEventListener("click", () =>{
    formSearch.submit();
});



//End Cac Su Kien Tim Kiem

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

//End Cac Su Kien khi click vào tieu de Bai Viet tren Trang Chu

setPostTitle(postTitle);

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