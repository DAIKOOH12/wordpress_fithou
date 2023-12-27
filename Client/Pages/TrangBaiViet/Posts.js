const titleLocal = localStorage.getItem("postTitle");

const postTitle = document.querySelector('.post-title');

postTitle.textContent = titleLocal;