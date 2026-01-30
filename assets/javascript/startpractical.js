
/* TIMER */
function formatTime(sec){
    let h = String(Math.floor(sec/3600)).padStart(2,'0');
    let m = String(Math.floor((sec%3600)/60)).padStart(2,'0');
    let s = String(sec%60).padStart(2,'0');
    return `${h}:${m}:${s}`;
}

document.getElementById("startTime").value = new Date().toLocaleTimeString();

let elapsed = 0;
let timerInterval = setInterval(()=>{
    elapsed++;
    timer.innerText = formatTime(elapsed);
    duration.value = formatTime(elapsed);
    progress.style.width = Math.min((elapsed/7200)*100,100)+"%";
},1000);

/* CAMERA */
let stream;
async function startCamera(){
    try{
        stream = await navigator.mediaDevices.getUserMedia({video:true});
        video.srcObject = stream;
    }catch{
        alert("Camera permission denied!");
        endSession();
    }
}
startCamera();

/* MODAL */
function openModal(){ modal.style.display="flex"; }
function closeModal(){ modal.style.display="none"; }

function endSession(){
    clearInterval(timerInterval);
    if(stream) stream.getTracks().forEach(t=>t.stop());
    alert("Session Ended Successfully!");
    closeModal();
}
