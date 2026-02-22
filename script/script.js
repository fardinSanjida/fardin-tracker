let total= document.getElementById('total-count');

let interview= document.getElementById('interview-count');

let rejected= document.getElementById('rejected-count');


const allcards = document.getElementById('allCards')

    const allbtn = document.getElementById('all-btn');
    const interviewbtn = document.getElementById('interview-btn');
    const rejectedbtn = document.getElementById('rejected-btn');     

function updateCounts() {
    total.innerText=allcards.children.length;
}
    
 updateCounts(); 
 
 function toggleStyle(id) {
    allbtn.classList.add('bg-base-200', 'text-blue-700');
    interviewbtn.classList.add('bg-base-200', 'text-blue-700');
    rejectedbtn.classList.add('bg-base-200', 'text-blue-700');

    allbtn.classList.remove('bg-blue-500', 'text-white');
    interviewbtn.classList.remove('bg-blue-500', 'text-white');
    rejectedbtn.classList.remove('bg-blue-500', 'text-white');

    const selectedBtn = document.getElementById(id);
    
    selectedBtn.classList.add('bg-blue-500', 'text-white');
    selectedBtn.classList.remove('bg-base-200', 'text-blue-700');
}
   
 