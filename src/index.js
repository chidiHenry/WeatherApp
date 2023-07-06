import Fetch from "./Fetch";

const submitButton = document.querySelector('#form');

submitButton.onsubmit = function(e){
e.preventDefault();

Fetch();

}
