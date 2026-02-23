let interviewList =[];
let rejectedList= [];
let currentStatus= 'all'


let total= document.getElementById('total-count');
let interview= document.getElementById('interview-count');
let rejected= document.getElementById('rejected-count');
let countJobs= document.getElementById('count-jobs')
let fillterSection =document.getElementById("filltered-section")
   

const allCards = document.getElementById('allCards')
const allbtn= document.getElementById('all-filter-btn');
const interviewbtn = document.getElementById('interview-filter-btn');
const rejectedbtn = document.getElementById('rejected-filter-btn');



// document.getElementById('delete-btn').addEventListener('click',function(event){
//      const deleteBtn = document.getElementById('delete-btn')
//      const deleteJobs = deleteBtn.parentNode.parentNode
//      console.log(deleteJobs)

// })

function updateCounts() {
    total.innerText=allCards.children.length;
    countJobs.innerText =allCards.children.length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
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
    currentStatus =id
    selectedBtn.classList.add('bg-blue-500', 'text-white');
    selectedBtn.classList.remove('bg-base-200', 'text-blue-700');

    if (id =='interview-filter-btn'){
       allCards.classList.add('hidden');
       fillterSection.classList.remove('hidden')
       renderInterview()
    }
    else if(id == 'all-filter-btn')   {
         allCards.classList.remove('hidden');
       fillterSection.classList.add('hidden')}

     else if( id =='rejected-filter-btn') {
         allCards.classList.add('hidden');
       fillterSection.classList.remove('hidden')
       renderReject()
    }}
   
 document.getElementById('mainContainer').addEventListener('click', function(event) {
    // console.log(event.target.parentNode.parentNode);
//    console.log(event.target.classList.contains('interview-btn'))

   if(event.target.classList.contains('interview-btn')){
    const parentNode=event.target.parentNode.parentNode;
    const company=parentNode.querySelector('.company').innerText;
    const post=parentNode.querySelector('.post').innerText;
    const job=parentNode.querySelector('.job').innerText;
    const period=parentNode.querySelector('.period').innerText;
    const salary=parentNode.querySelector('.salary').innerText;
    const state =parentNode.querySelector('.state').innerText;
    const bio =parentNode.querySelector('.bio').innerText;
    
     parentNode.querySelector('.state').innerHTML= 'Interview'

    const jobInfo={
        company,
        post,
        job,
        period,
        salary,
        state:'Interview',
        bio
    }

    let companyName = interviewList.find(item =>item.company == jobInfo.company)

   
    if(!companyName){

        interviewList.push(jobInfo)
    }

   rejectedList = rejectedList.filter(item => item.company != jobInfo.company)

    if(currentStatus == 'rejected-filter-btn'){
      renderReject()
    }
    updateCounts();
   
} 
else if (event.target.classList.contains('reject-btn')){
    const parentNode=event.target.parentNode.parentNode;
    const company=parentNode.querySelector('.company').innerText;
    const post=parentNode.querySelector('.post').innerText;
    const job=parentNode.querySelector('.job').innerText;
    const period=parentNode.querySelector('.period').innerText;
    const salary=parentNode.querySelector('.salary').innerText;
    const state =parentNode.querySelector('.state').innerText;
    const bio =parentNode.querySelector('.bio').innerText;
    
     parentNode.querySelector('.state').innerHTML= 'Rejected'

    const jobInfo={
        company,
        post,
        job,
        period,
        salary,
        state:'Rejected',
        bio
    }

    let companyName = rejectedList.find(item =>item.company == jobInfo.company)

   
    if(!companyName){

        rejectedList.push(jobInfo)
    }

   interviewList = interviewList.filter(item => item.company != jobInfo.company)

    if(currentStatus == 'interview-filter-btn'){
      renderInterview()
    }
    updateCounts();
  
} 
})
 
    

function renderInterview(){
       fillterSection.innerHTML= ''

        for(let interview of interviewList){
            console.log(interview)

            let div= document.createElement('div')
            div.className = ' bg-base-100 p-8 rounded-lg mb-4 border-1 border-gray-200  md:flex'
            div.innerHTML =`<div class="space-y-6">
           <div>
             <h4 class="company text-xl font-semibold">${interview.company}</h4>
             <h4 class="post text-gray-400">${interview.post} </h4>
           </div>
          
           <div class="flex gap-3 text-center text-gray-400 ">
             <p class="job">${interview.job}</p>
             <p> • </i></p>
             <p class="period">${interview.period}</p>
             <p> • </p>
             <p class="salary">${interview.salary}</p>
           </div>

           <div>
             <h4 class="state bg-violet-100 w-fit p-3 mb-2 text-center rounded-md ">Interview</h4>
             <p class="bio text-gray-600">${interview.bio}</p>
           </div>

           <div class="flex gap-3">
            <button class="interview-btn btn btn-success btn-soft border-1 border-green-400 rounded-lg py-1 px-4 w-fit">Interview</button>
            <button class="reject-btn btn  text-red-600 bg-red-100 border-1 border-red-400 rounded-lg py-1 px-4 w-fit hover:bg-red-600 hover:text-white">Rejected</button>
           </div>
        
        </div>
          <div><button class="border-1 border-gray-300 p-3 rounded-full mt-3 " ><i class="fa-solid fa-trash-can text-gray-400"></i></button></div>
         `
         fillterSection.appendChild(div);
        }
    };


    function renderReject(){
       fillterSection.innerHTML= ''

        for(let reject of rejectedList){
            console.log(reject)

            let div= document.createElement('div')
            div.className = ' bg-base-100 p-8 rounded-lg mb-4 border-1 border-gray-200  md:flex'
            div.innerHTML =`<div class="space-y-6">
           <div>
             <h4 class="company text-xl font-semibold">${reject.company}</h4>
             <h4 class="post text-gray-400">${reject.post} </h4>
           </div>
          
           <div class="flex gap-3 text-center text-gray-400 ">
             <p class="job">${reject.job}</p>
             <p> • </i></p>
             <p class="period">${reject.period}</p>
             <p> • </p>
             <p class="salary">${reject.salary}</p>
           </div>

           <div>
             <h4 class="state bg-violet-100 w-fit p-3 mb-2 text-center rounded-md ">Rejected</h4>
             <p class="bio text-gray-600">${reject.bio}</p>
           </div>

           <div class="flex gap-3">
            <button class="interview-btn btn btn-success btn-soft border-1 border-green-400 rounded-lg py-1 px-4 w-fit">Interview</button>
            <button class="reject-btn btn  text-red-600 bg-red-100 border-1 border-red-400 rounded-lg py-1 px-4 w-fit hover:bg-red-600 hover:text-white">Rejected</button>
           </div>
        
        </div>
          <div><button class="border-1 border-gray-300 p-3 rounded-full mt-3 " ><i class="fa-solid fa-trash-can text-gray-400"></i></button></div>
         `
         fillterSection.appendChild(div);
        }
    };
