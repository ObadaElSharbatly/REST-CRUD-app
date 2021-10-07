function showObjects (jsonObjects) {
    let result;
    result = jsonObjects.replaceAll('{', "<br>{<br>");
    result = result.replaceAll('}', "<br>}<br>");
    result = result.replaceAll('",', '",<br>');
    console.log(result);
    return result
    
}

function fetchData (params) {
    const fetchData = fetch("http://localhost:5000/books/")
    fetchData
    .then( res => {
        return res.json();
    })
    .then( res => {
        const allBooksEl = document.querySelector('#all-books');
        allBooksEl.innerHTML = res.allBooks[Math.floor(Math.random() * res.allBooks.length)]["book name"];
        console.log(res.allBooks);
        console.log(allBooksEl.textContent);

    })
}

window.addEventListener("load", fetchData)