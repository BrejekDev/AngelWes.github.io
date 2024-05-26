const nama = "darrell yasma";
let usia = 14;

const biodata = document.getElementById('biodata')

function generateBiodata() {
    let generasi;

    if (usia > 13 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi tua";
    }
    else if (usia < 13 && usia > 3) {
        generasi = "generasi alpha";
    }
    else {
        generasi = "generasi alpha";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();