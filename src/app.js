import "bootstrap";
import "./style.css";

window.onload = function()
 {
  let element=document.querySelector(".excuse")
  console.log("Any string");
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com'];
  console.log("Hello Rigo from the console!");
  const getRanInt=(array)=>{
    return Math.floor(Math.random() * array.length);
  }
  element.innerHTML= pronoun [getRanInt(pronoun)] +adj[getRanInt(adj)] +noun[getRanInt(noun)] +end[getRanInt(end)];

  const button = document.getElementById("btn btn-primary");
  button.addEventListener('click', () =>{
      alert('Button was clicked!');
  })
};
