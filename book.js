class BookComponent{
    constructor(book){
        this.book= book
        this.template = 
        `<div class="container">
     
            <img src="header.jpg" id ="header" width = 10p;>    
        </div>
   
    <div id="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
    <p>${this.book}</p>
    <button id="btn btn-danger"> Show Description </button>
    </div>
    
    `    
    
    }
}

class BookListComponent{
    bookList= [
        {"id":1, "title":"Harry Potter", "Description": "500"},
        {"id":2,"title":"Twilight", "Description": "250"},
        {"id":3,"title":"The Giver", "Description": "650"},
        {"id":4,"title":"1984", "Description":"401"},
        {"id":5,"title":"Eragon", "Description": "100"},
    ]
    bookDescription = this.bookList.filter(title => title.Description);
    constructor(Id,title, Description){
        this.Id = Id
        this.title = title
        this.Description = Description
        this.template =
        `<div '>
        <div class="jumbotron">My Favorite Books</div>
        <h4 class="card-title">
          ${this.bookDescription.map(title => new BookComponent(title.title ).template).join(' ')}
          </h4>
        `
    }

}

class Container {
    template = `
    <div class="container">
        <h4 class="card-title">
        ${new BookListComponent().template}
        </h4>
        <div>
       
        `

}

document.getElementById("root").innerHTML = new Container().template


document.addEventListener('click', function(e) {
    if (e.target && e.target.id == "btn btn-danger") {
        if(document.getElementById("btn btn-danger").textContent == "Hide Description") {
            document.getElementById("descrition").innerText = ""
            document.getElementById("btn btn-danger").innerText = "Show Description"
        } else {
            document.getElementById("description").innerHTML =   `
            </div>
            DESCRIPTION
             </div>` 
            document.getElementById("btn btn-danger").innerText = "Hide Description"
        }
    }
})