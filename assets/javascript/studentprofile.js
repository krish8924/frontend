
function editProfile(){
    document.querySelectorAll(".editable").forEach(f=>{
        f.tagName==="SELECT" ? f.disabled=false : f.removeAttribute("readonly");
    });
    photoSection.classList.remove("hidden");
    saveBtn.classList.remove("hidden");
}

function changePassword(){
    passwordSection.classList.remove("hidden");
    saveBtn.classList.remove("hidden");
}

function saveChanges(){
    document.querySelectorAll(".editable").forEach(f=>{
        f.tagName==="SELECT" ? f.disabled=true : f.setAttribute("readonly",true);
    });
    photoSection.classList.add("hidden");
    passwordSection.classList.add("hidden");
    saveBtn.classList.add("hidden");
    alert("Profile updated successfully!");
}

function previewImage(e){
    const r=new FileReader();
    r.onload=()=>profileImage.src=r.result;
    r.readAsDataURL(e.target.files[0]);
}