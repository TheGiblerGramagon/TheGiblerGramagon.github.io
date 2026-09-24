fetch('/html/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data;
});

fetch('/html/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;
});

let list = document.getElementById("project-list");
let list_filter = document.getElementById("list-dropdown");

if (list) {
    let cats = new Set([...list.children].map(child => child.dataset.category));
    console.log(cats);
    for(const cat of cats) {
        console.log(cat)
        list_filter.insertAdjacentHTML('beforeend', `<option value="${cat}">${cat}</option>`);
    }
    console.log(list_filter.children)

    list_filter.addEventListener("change", (event) => {
        if (list_filter.value == "all") {
            for(let child of list.children) {
                child.hidden = false;
            }
        } else {
            for(let child of list.children) {
                console.log(child.dataset.category)
                console.log(event.target.value)
                child.hidden = !(child.dataset.category === event.target.value)
            }
        }
    });


}