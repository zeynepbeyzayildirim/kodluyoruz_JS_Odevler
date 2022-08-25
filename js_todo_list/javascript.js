//Html sayfasındaki elementler

let addBtnDOM = document.querySelector('#liveToastBtn') //Ekle butonunun id'si eklendi
let listDOM = document.querySelector('#list') //listenin id si
let taskDOM = document.querySelector('#task') //input id'si
let ullength = document.getElementsByTagName("li");//Tüm liste elemanları
let ClearbtnDOM = document.querySelector("#clearList");


let taskArray = [];



// check box 
function check(){
  this.classList.toggle("checked"); // check işlemi
}
//Close icon function
function removeButton(){
  this.parentElement.remove();  // maddeyi silmek için parentElement.remove kullandık
}

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  let closeButton = document.createElement("span");

  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  li.append(closeButton);
  listDOM.appendChild(li);
};

//newElement ile yeni item oluşturma fonksiyonu

function newElement(){
    if(taskDOM.value == ""){
      //input değeri boş girilirse
      $(".error").toast("show"); //Error toast mesajı çağırdı
    }
    else{
        $(".success").toast("show"); //Başarılı toast mesajı çağıdık.
        liMaker(task.value);
        
        
    }


}
// Listeyi temizlemek için close butonu
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); //close iconu için span oluşturdum.
    closeButton.textContent = "\u00D7"; // listede close iconu oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // butona close classı ekledim
    closeButton.onclick = removeButton; // remove fonk. çağırdık
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; // check fonk. çağırdık.
   
}

    //Sona eklenenn maddeleri silme işlemi
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
      
        inputElement.value = ("");

        let itemsArray = localStorage.getItem("taskArray")
  ? JSON.parse(localStorage.getItem("taskArray"))
  : [];
console.log(itemsArray);

itemsArray.forEach((item) => {
  liMaker(item);
});

        

