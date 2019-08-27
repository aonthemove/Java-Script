
const book1 = "Twilight";
const book2 = "Akira";
const book3 = "1984";
const book4 = "Harry Potter";

const description1 = "In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.";
const description2 = "Welcome to Neo-Tokyo, built on the ashes of a Tokyo annihilated by a blast of unknown origin that triggered World War III. The lives of two streetwise teenage friends, Tetsuo and Kaneda, change forever when paranormal abilities begin to waken in Tetsuo, making him a target for a shadowy agency that will stop at nothing to prevent another catastrophe like the one that leveled Tokyo. At the core of the agency's motivation is a raw, all-consuming fear of an unthinkable, monstrous power known only as Akira. Katsuhiro Otomo's stunning science fiction masterpiece is considered by many to be the finest work of graphic fiction ever produced, and Otomo's brilliant animated film version is regarded worldwide as a classic.";
const description3 = "George Orwell's Nineteen Eighty-Four is set in a society terrorised by a totalitarian ideology propagated by The Party. Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101.";
const description4 = "The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags Harry receives a warning from a strange impish creature named Dobby who says that if Harry Potter returns to Hogwarts disaster will strike. And strike it does. For in Harry's second year at Hogwarts fresh torments and horrors arise including an outrageously stuck-up new professor Gilderoy Locheart a spirit named Moaning Myrtle who haunts the girls' bathroom and the unwanted attentions of Ron Weasley's younger sister Ginny. But each of these seem minor annoyances when the real trouble begins and someone--or something--starts turning Hogwarts students to stone.";

const image1 = `<img src="./assets/images/twilight.jpg">`;
const image2 = `<img src="./assets/images/akira.jpg">`;
const image3 = `<img src="./assets/images/1984.jpg">`;
const image4 = `<img src="./assets/images/harrypotter.jpg">`;

let htmlString = "";

htmlString += `<div class="col-sm-2"><div class="card" style="width: 18rem;">
${image1}
<div class="card-body">
  <h5 class="card-title">${book1}</h5>
  <button class="btn btn-primary btn-lg" id="title1">Show Description</button>
</div>
</div>
</div>`
htmlString += `<div class="col-sm-2"><div class="card" style="width: 18rem;">
${image2}
<div class="card-body">
  <h5 class="card-title">${book2}</h5>
  <button class="btn btn-primary btn-lg" id="title2">Show Description</button>
</div>
</div>
</div>`
htmlString += `<div class="col-sm-2"><div class="card" style="width: 18rem;">
${image3}
<div class="card-body">
  <h5 class="card-title">${book3}</h5>
  <button class="btn btn-primary btn-lg" id="title3">Show Description</button>
</div>
</div>
</div>`
htmlString += `<div class="col-sm-2"><div class="card" style="width: 18rem;">
${image4}
<div class="card-body">
  <h5 class="card-title">${book4}</h5>
  <button class="btn btn-primary btn-lg" id="title4">Show Description</button>
</div>
</div>
</div>`


htmlString += `<h1 id="description">Description:</h1>`


document.getElementById("root").innerHTML = htmlString;

document.addEventListener("click",function(e){
if(e.target && e.target.id == "title1"){ 
        if(document.getElementById("title1").innerText == "Hide Description") {
            document.getElementById("description").innerText = "Description:"
            document.getElementById("title1").innerText = "Show Description"
        } else {
            document.getElementById("description").innerHTML =   
            `<h1 id="description">Description:</h1>
            <h3 style="font-size: 16pt;">${description1}</h3>`
            document.getElementById("title1").innerText = "Hide Description"
            document.getElementById("title2").innerText = "Show Description"
            document.getElementById("title3").innerText = "Show Description"
            document.getElementById("title4").innerText = "Show Description"

        }   
    
} else if(e.target && e.target.id == "title2") {
            if(document.getElementById("title2").innerText == "Hide Description") {
                document.getElementById("description").innerText = "Description:"
                document.getElementById("title2").innerText = "Show Description"
            } else {
                document.getElementById("description").innerHTML =  
                `<h1 id="description">Description:</h1>
                <h3 style="font-size: 16pt;">${description2}</h3>`
                document.getElementById("title2").innerText = "Hide Description"
                document.getElementById("title1").innerText = "Show Description"
                document.getElementById("title3").innerText = "Show Description"
                document.getElementById("title4").innerText = "Show Description"
            }     
}else if(e.target && e.target.id == "title3") {
    if(document.getElementById("title3").innerText == "Hide Description") {
        document.getElementById("description").innerText = "Description:"
        document.getElementById("title3").innerText = "Show Description"
    } else {
        document.getElementById("description").innerHTML =   
        `<h1 id="description">Description:</h1>
        <h3 style="font-size: 16pt;">${description3}</h3>`                    
        document.getElementById("title3").innerText = "Hide Description"
        document.getElementById("title2").innerText = "Show Description"
        document.getElementById("title4").innerText = "Show Description"
        document.getElementById("title1").innerText = "Show Description"
    }  

}else if(e.target && e.target.id == "title4") {
                if(document.getElementById("title4").innerText == "Hide Description") {
                    document.getElementById("description").innerText = "Description:"
                    document.getElementById("title4").innerText = "Show Description"
                } else {
                    document.getElementById("description").innerHTML =   
                    `<h1 id="description">Description:</h1>
                    <h3 style="font-size: 16pt;">${description4}</h3>`                    
                    document.getElementById("title4").innerText = "Hide Description"
                    document.getElementById("title2").innerText = "Show Description"
                    document.getElementById("title3").innerText = "Show Description"
                    document.getElementById("title1").innerText = "Show Description"
                }  
    }
});

