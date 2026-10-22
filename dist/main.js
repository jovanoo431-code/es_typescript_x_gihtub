"use strict";
let ott = 0;
let buo = 0;
let suf = 0;
let ins = 0;
function controllo() {
    let risposta = document.getElementById("risposta");
    let nome = document.getElementById("insnome").value.trim();
    let votos = document.getElementById("insvoto").value.trim();
    let img = document.getElementById("img");
    let lis = document.getElementById("lis");
    let ris;
    let cont_ins = document.getElementById("ins");
    let cont_suf = document.getElementById("suf");
    let cont_buo = document.getElementById("buo");
    let cont_ott = document.getElementById("ott");
    if (risposta == null) {
        console.error("la risposta non è stata trovata");
        return;
    }
    if (lis == null) {
        console.error("elemento elenco non trovato ");
        return;
    }
    if (nome == "") {
        risposta.innerHTML = ("inserisci il nome dell alunno");
        return;
    }
    if (votos == "") {
        risposta.innerHTML = ("inserisci il voto");
        return;
    }
    let voto = Number(votos);
    if (Number.isNaN(voto) || !Number.isInteger(voto) || voto < 1 || voto > 10) {
        risposta.innerHTML = ("inserisci un voto da 1 a 10 che sia un numero intero");
        return;
    }
    if (voto >= 1 && voto < 6) {
        risposta.innerHTML = ("INSUFFICIENTE");
        img.src = "img/insuff.jpg";
        img.alt = "Semaforo Rosso";
        ris = ("(insufficiente)");
        ins = ins + 1;
    }
    else if (voto == 6) {
        risposta.innerHTML = ("SUFFICIENTE");
        img.src = "img/suff.jpg";
        img.alt = "Semaforo Giallo";
        ris = ("(sufficiente)");
        suf = suf + 1;
    }
    else if (voto <= 8) {
        risposta.innerHTML = ("BUONO");
        img.src = "img/buono.jpg";
        img.alt = "Semaforo verde";
        ris = ("(buono)");
        buo = buo + 1;
    }
    else if (voto <= 10) {
        risposta.innerHTML = ("OTTIMO");
        img.src = "img/stella.png";
        img.alt = "Stella";
        ris = ("(ottimo)");
        ott = ott + 1;
    }
    else {
        return;
    }
    if (cont_ins == null || cont_suf == null || cont_buo == null || cont_ott == null) {
        console.error("i contatori non sono stati trovati");
        return;
    }
    lis.innerHTML += ("<br>" + nome + " - " + voto + " " + ris);
    cont_ins.innerHTML = String(ins);
    cont_suf.innerHTML = String(suf);
    cont_buo.innerHTML = String(buo);
    cont_ott.innerHTML = String(ott);
}
//# sourceMappingURL=main.js.map