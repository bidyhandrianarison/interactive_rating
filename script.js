let ratingButtons=document.querySelectorAll('button');
let submitButton=document.querySelector('input[type="button"]');
let selectedRatingDisplay=document.querySelector('.select small');
let thankingSection=document.querySelector('.thanking');
let selectedRating=0;
ratingButtons.forEach(button => {
    button.addEventListener('click',function(){
        selectedRating=this.textContent;
    });
});
submitButton.addEventListener('click',function(){
    thankingSection.style.display='flex';
    selectedRatingDisplay.textContent= selectedRating;
});