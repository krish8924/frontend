
const practicalData={
    CN:{1:"Study of Network Topologies",2:"Implementation of CRC",3:"IP Addressing"},
    DBMS:{1:"DDL Commands",2:"DML Commands",3:"Joins"},
    OS:{1:"CPU Scheduling",2:"Deadlock",3:"Memory Management"}
};

function loadPracticals(){
    const s=subject.value,p=practicalNo;
    p.innerHTML='<option value="">-- Select Practical --</option>';
    if(s) Object.keys(practicalData[s]).forEach(n=>{
        p.innerHTML+=`<option value="${n}">Practical ${n}</option>`;
    });
}
function setTitle(){
    practicalTitle.value=practicalData[subject.value]?.[practicalNo.value]||"";
}