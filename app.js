let removebtn = document.querySelectorAll('.remove');
removebtn.forEach(btn=>btn.addEventListener('click', removeBook));
function removeBook(){
    this.parentElement.remove();
}

let statusbtn = document.querySelectorAll('.statusChange');
statusbtn.forEach(btn=>btn.addEventListener('click', changeStatus));
function changeStatus(){
    console.log(this.parentElement.querySelector('.statusText').innerText)
    if (this.innerHTML == '<i class="green material-icons">check_circle</i>') {
        this.parentElement.className = "red status";
        this.innerHTML = '<i class="grey material-icons">check_circle</i>';
        this.parentElement.querySelector('.statusText').innerText = "Haven't read yet"
    }
    else if (this.innerHTML == '<i class="grey material-icons">check_circle</i>') {
        this.parentElement.className = "green status";
        this.innerHTML = '<i class="green material-icons">check_circle</i>';
        this.parentElement.querySelector('.statusText').innerText = "Already read"
    }
}