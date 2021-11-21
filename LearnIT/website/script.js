//SIDE NAVIGATION PANEL
function openNav() {
    document.getElementById("mainNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mainNav").style.width = "0";
}


function scanCode() {
    let qr = document.getElementById('qr-result');
    let qrBlank = document.getElementById('qr-blank');
    qr.classList.remove('d-none');
    qr.style.display = "block"
    qrBlank.style.display = "none"
    console.log(qr)
    
    console.log(qrBlank)
    // qr.classList.add('d-none');

}