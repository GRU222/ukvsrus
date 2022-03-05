const firebaseConfig = {
    apiKey: "AIzaSyApr9aCFe-H8zlQlGyAO0ebl4iSyF_-dQw",
    authDomain: "uk-vs-rus.firebaseapp.com",
    databaseURL: "https://uk-vs-rus-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "uk-vs-rus",
    storageBucket: "uk-vs-rus.appspot.com",
    messagingSenderId: "46068762596",
    appId: "1:46068762596:web:efdd3c4139f161d15a69f1",
    measurementId: "G-G2G91PXQFZ"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const redButton = document.querySelector("#red");
const redWidth = document.querySelector("#redTwo")
const blueButton = document.querySelector("#blue");
const blueWidth = document.querySelector("#blueTwo")

     db.collection("project").doc('battle').onSnapshot((snapshot) => {
         redButton.textContent = snapshot.data().red
         redWidth.style.width = snapshot.data().red + '%'
    })
    db.collection("project").doc('battleTwo').onSnapshot((snapshot) => {
        blueButton.textContent = snapshot.data().blue
        blueWidth.style.width = snapshot.data().blue + '%'
   })

function battle(val){
    db.collection("project").doc('battle').set({
        red:  val,
    }).then(()=> {
        console.log('data sent')
    }).catch(err => console.log(err))
}

function battleTwo(val){
    db.collection("project").doc('battleTwo').set({
        blue:  val,
    }).then(()=> {
        console.log('data sent')
    }).catch(err => console.log(err))
}

const red = async () => {
    const a=(redButton.innerHTML);
    const number = eval(a);
    // db.collection("project").doc('battle').set({
    //     red:  number+1,
    // }).then(()=> {
    //     console.log('data sent')
    // }).catch(err => console.log(err))
    battle(number+1)
    
}
const blue = async () => {
    const b=(blueButton.innerHTML);
    const number = eval(b);
    // db.collection("project").doc('battleTwo').set({
    //     blue:  number+1,
    // }).then(()=> {
    //     console.log('data sent')
    // }).catch(err => console.log(err))
    battleTwo(number+1)
}
const reset= async() => {
    redButton.innerHTML = 50;
    blueButton.innerHTML = 50;
    redWidth.style.width = 50 + '%' ;
    blueWidth.style.width = 50  + '%';
    battle(50)
    battleTwo(50)
}