// semua movie yang ingin ditampilkan ada di sini
const tipsntricks =[
    {tipName: "Tip One", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://media.istockphoto.com/photos/broccoli-picture-id147060621?b=1&k=20&m=147060621&s=170667a&w=0&h=AwFK8R6drXZRUGGKEXKWtgpwTaz_6HD4R_Nd7xE9VJ8=",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Two", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Three", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Four", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Five", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Six", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Seven", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Eight", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Nine", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check

    {tipName: "Tip Ten", tip: "Lorem ipsum", shelf: "Lorem ipsum", fridge:"Lorem ipsum",
    tipImage: "https://cdn.britannica.com/39/187439-050-35BA4DCA/Broccoli-florets.jpg",
    cont:"Lorem Ipsum",
    link:""}, //masukin link inventory check
]

// looping untuk memberikan judul di mainpage
for (let x = 0; x < tipsntricks.length; x++){
    document.getElementById(x+1).innerHTML = (x+1) + ". " + tipsntricks[x].tipName;
}

for (let x = 0; x < tipsntricks.length; x++){
    document.getElementById("img" + (x+1)).src = tipsntricks[x].tipImage;
}

// saat diclick popup akan aktif dan mengubah data seusai movie yg diclick
function togglePopup(movie_num){
    document.getElementById("popup-1").classList.toggle("active");
    document.getElementById("popup_poster1").src = tipsntricks[movie_num-1].tipImage
    document.getElementById("tips_title").innerHTML = tipsntricks[movie_num-1].tipName;
    document.getElementById("tipInfo").innerHTML = "TIP: " + tipsntricks[movie_num-1].tip + ", brought to you by XPire";
    document.getElementById("shelfLife").innerHTML = "Average Shelf Life: " + tipsntricks[movie_num-1].tip;
    document.getElementById("fridgeLife").innerHTML = "Average Fridge Life: " + tipsntricks[movie_num-1].fridge;
    document.getElementById("container").innerHTML = "Recommended Container: " + tipsntricks[movie_num-1].cont;
    document.getElementById("link").href = tipsntricks[movie_num-1].link;     

}

// search filter
const list = document.querySelector("#tips-list");
const searchBar = document.forms["search-tips"].querySelector('input')
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const tips = list.getElementsByTagName('li');
    Array.from(tips).forEach(function(tip){
        const title = tip.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            tip.style.display = '';
        }
        else{
            tip.style.display = 'none';
        };
    })
})
