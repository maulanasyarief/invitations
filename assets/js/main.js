/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const objMainext = document.getElementById("maintext");
const objCover = document.getElementById("cover");
const objMenu = document.getElementById("header");

//variabel counterdown
const objHari = document.getElementById("hari");
const objJam = document.getElementById("jam");
const objMenit = document.getElementById("menit");
const objDetik = document.getElementById("detik");

const objMusik = document.getElementById("myMusic");
const objGaleri = document.getElementById("img_geleri");

const btnCover = document.getElementById("btnCover");
const iconSound = document.getElementById("icon-sound");
var delayInMilliseconds = 100; //1 second

var prmISplayMusic = false;

window.addEventListener('load', () => {

    //Lib aimation on Scroll
    AOS.init();

    counterdown();
    ShowImageGaleri();
    objMainext.style.display = "none";
    objMenu.style.display = "none";
});

function openUdangan() {
    btnCover.textContent = "Loading...";
    setTimeout(function () {
        // runing after delay finish
        objCover.style.cssText = `
            animation: swing-left-fwd 4s ease 1 normal forwards;
            `;

        objMainext.style.display = "block";
        objMenu.style.display = "block";
        playAudio();
    }, delayInMilliseconds);

}


function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (sectionId != 'cover') {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        }


    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function counterdown() {

    // *************** Mengatur waktu akhir perhitungan mundur *****************8s
    var countDownDate = new Date("jul 13, 2023 09:00:00").getTime();

    // Memperbarui hitungan mundur setiap 1 detik
    var x = setInterval(function () {

        // Untuk mendapatkan tanggal dan waktu hari ini
        var now = new Date().getTime();

        // Temukan jarak antara sekarang dan tanggal hitung mundur
        var distance = countDownDate - now;

        // Perhitungan waktu untuk hari, jam, menit dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Keluarkan hasil dalam elemen dengan id = "demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        //     minutes + "m " + seconds + "s ";

        objHari.innerHTML = days;
        objJam.innerHTML = hours;
        objMenit.innerHTML = minutes;
        objDetik.innerHTML = seconds;

        // Jika hitungan mundur selesai, tulis beberapa teks 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

function playAudio() {
    objMusik.play();
    prmISplayMusic = true;
}

function pauseAudio() {
    objMusik.pause();
    prmISplayMusic = false;
}

function ShowImageGaleri() {
    let counter = 10; // jumlah gambar nya

    for (var i = 1; i <= counter; i++) {
        //console.log(i);
        objGaleri.innerHTML += `
        <div class="col-md-4 mt-2">
            <a class="example-image-link" href="./assets/img/my/img_` + i + `.jpeg"
                data-lightbox="example-set"
                data-title="klik sisi kanan / kiri foto untuk next foto."><img
                class="img-thumbnail" src="./assets/img/my/img_` + i + `.jpeg" alt="" /></a>
        </div>
        `;
    }

}

function OnOffMusic() {


    if (prmISplayMusic) {
        pauseAudio();
        iconSound.classList.remove('bx-pasue');
        iconSound.classList.toggle('bx-play');
    } else {
        playAudio();
        iconSound.classList.remove('bx-play');
        iconSound.classList.toggle('bx-pasue');
    }
}