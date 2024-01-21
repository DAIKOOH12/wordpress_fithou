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
            window.location.href = '/Client/Pages/TrangTimKiem/Finding.html?title=' + encodeURIComponent(title);
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

//NAVBAR START
const divNavs = document.querySelectorAll(".menu-item")
divNavs.forEach(item => {
    item.addEventListener("click", () => {
        const nextLink = item.querySelector("a");
        window.location.href = `${nextLink.getAttribute("href")}`;
    })
});
//NAVBAR END