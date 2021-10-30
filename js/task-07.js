const radioInput = document.querySelector("#font-size-control");
const radioText = document.querySelector("#text");
radioInput.addEventListener("input", (event) => {
    
    const radioTextCurrentFontSize = event.currentTarget.value ;
    
    radioText.style.fontSize = `${radioTextCurrentFontSize}px`;

    console.log(radioText.style.fontSize);  
    
    
});