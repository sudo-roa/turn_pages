document.getElementById("r2").addEventListener("click", toggle);

function toggle(){
    console.log("clicked");
    var childcontent = this.firstElementChild;
    var nextcontent = this.nextElementSibling;
    var nextchildcontent = nextcontent.firstElementChild;
    this.classList.toggle("is-turned");
    childcontent.classList.toggle("is-turned");
    nextcontent.classList.toggle("is-turned");
    nextchildcontent.classList.toggle("is-turned");
}

console.log(number)