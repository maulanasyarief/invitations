// nama table nya (Node nya di firebase)
var NodeFirebaseName = "Tbl-Ucapan";

// Initialize Firebase
var prmTotaldata = document.getElementById("txt_totalData");
const btnSend = document.getElementById("btn-senducapan");
var prmNama = document.getElementById("namaTamu");
var prmUcapan = document.getElementById("ucapanTamu");
var currentdate = Date();
let prmDataUCapan = [];

// lsit dataUcapan
let prmListDataUcapan = [];

//var list data coment
const listComment = document.getElementById("list-comment");


function getCurentDatetime() {
    var date = new Date()
    return date.toISOString().replace("T", " ").substring(0, 19);
}

function showAlert(prmNama, prmIsError = false) {
    const alertType = document.getElementById("alert-version");
    const alert = document.getElementById("alertUcapan");
    const alertNama = document.getElementById("namaTamu-alert");

    if (prmIsError) {
        alertType.classList.remove("alert-success");
        alertType.classList.add("alert-danger");
    } else {
        alertType.classList.add("alert-success");
        alertType.classList.remove("alert-danger");
    }


    alertNama.innerHTML = `<b> Hallo ` + prmNama + `</b>`
    alert.style.display = "block";

    setTimeout(function () {
        //hide laaert 3 detik
        alert.style.display = "none";

    }, 8000);
}

function sendUcapan() {

    if ((prmNama.value == null || prmNama.value == "") && (prmUcapan.value == null || prmUcapan.value == "")) {
        console.log(" tidak boleh kirim ")
        showAlert("Maaf silahkan masukan Nama dan Ucapan ..", true)
    } else {
        console.log(" boleh kirim ")

        btnSend.textContent = "Sending ...";
        btnSend.disabled = true;
        prmDataUCapan = {
            f01NamaUser: prmNama.value,
            f02cNotes: prmUcapan.value,
            f03dDate: getCurentDatetime(),
        };

        firebase.database().ref("Tbl-Ucapan/").push(prmDataUCapan)
            .then(() => {
                showAlert(prmNama.value)
                prmNama.value = "";
                prmUcapan.value = "";
                btnSend.textContent = "Kirim Ucapan";
                btnSend.disabled = false;
                //alert("Data Inserted");
            })
            .catch((error) => {
                showAlert(error, true)
            });
    }


}

function getDataUcapan() {
    var objData = firebase.database().ref("Tbl-Ucapan");
    prmListDataUcapan = [];
    objData.on("value", function (snapshot) {

        console.log("datalistawal = ", prmListDataUcapan.length);
        //Semua data
        snapshot.forEach(function (childSnapshot) {
            var prmData = childSnapshot.val();

            //get id data
            //.log("id = ", childSnapshot.key);

            prmListDataUcapan.push({
                k01cIdComment: childSnapshot.key,
                f01NamaUser: prmData.f01NamaUser,
                f02cNotes: prmData.f02cNotes,
                f03dDate: prmData.f03dDate,
                bCheck: 0
            });

        });


        //console.log("datalist = ", prmListDataUcapan.length);
        // console.log("data = ", JSON.stringify(prmListDataUcapan));
        prmTotaldata.textContent = "Total Data " + prmListDataUcapan.length
        DisplayComment(prmListDataUcapan)
    });

}

function DisplayComment(prmListData) {

    for (var key in prmListData) {
        listComment.innerHTML += `<div class="card mt-3">
                                        <div class="card-body">
                                            <p class="card-title">
                                            <input id="prmCheck" type="checkbox" value="${ prmListData[key].key }" /> <b> ${prmListData[key].f01NamaUser} </b></p>
                                            <h6 class="card-subtitle mb-2 text-muted">${prmListData[key].f03dDate}</h6>
                                            <p class="card-text">${prmListData[key].f02cNotes}</p>
                                            <p class="card-text">${ prmListData[key].k01cIdComment}</p>
                                        </div>
                                    </div>`;
    }

}

function RemoveComent() {
    var prmIDComment = document.getElementById("k01cIdComment");

    var objData = firebase.database().ref("Tbl-Ucapan");
    objData.child(prmIDComment.value).remove();
    console.log("id Di hapus = ", prmIDComment.value)
}