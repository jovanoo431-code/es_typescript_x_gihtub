let ott:number = 0;
let buo:number = 0;
let suf:number = 0;
let ins:number = 0;
function controllo(): void{
    let risposta:HTMLElement | null = document.getElementById("risposta");
    let nome:string = (document.getElementById("insnome") as HTMLInputElement).value.trim();
    let votos:string = (document.getElementById("insvoto") as HTMLInputElement).value.trim();
    let img = document.getElementById("img") as HTMLImageElement;
    let lis:HTMLElement | null = document.getElementById("lis");
    let ris:string;
    let cont_ins:HTMLElement | null = document.getElementById("ins");
    let cont_suf:HTMLElement | null = document.getElementById("suf");
    let cont_buo:HTMLElement | null = document.getElementById("buo");
    let cont_ott:HTMLElement | null = document.getElementById("ott");
    
    if(risposta==null){
        console.error("la risposta non è stata trovata");
        return;
    }
    if(lis==null){
        console.error("elemento elenco non trovato ");
        return;
    }
    if(nome==""){
        risposta.innerHTML = ("inserisci il nome dell alunno");
        return;
    }
    if(votos==""){
        risposta.innerHTML = ("inserisci il voto");
        return;
    }
    let voto:number = Number(votos);
    if(Number.isNaN(voto) || !Number.isInteger(voto) || voto<1 || voto>10){
        risposta.innerHTML = ("inserisci un voto da 1 a 10 che sia un numero intero");
        return;
    }
    if(voto>=1 && voto<6){
        risposta.innerHTML = ("INSUFFICIENTE");
        img.src="img/insuff.jpg";
        img.alt="Semaforo Rosso";
        ris = ("(insufficiente)");
        ins = ins+1;
    }
    else if(voto==6){
        risposta.innerHTML = ("SUFFICIENTE");
        img.src="img/suff.jpg";
        img.alt="Semaforo Giallo";
        ris = ("(sufficiente)");
        suf = suf+1;
    }
    else if(voto<=8){
        risposta.innerHTML = ("BUONO");
        img.src="img/buono.jpg";
        img.alt="Semaforo verde";
        ris = ("(buono)");
        buo = buo+1;
    }
    else if(voto<=10){
        risposta.innerHTML = ("OTTIMO");
        img.src="img/stella.png";
        img.alt="Stella";
        ris = ("(ottimo)");
        ott = ott+1;
    }
    else{
        return;
    }
    if(cont_ins==null || cont_suf==null || cont_buo==null || cont_ott==null){
        console.error("i contatori non sono stati trovati");
        return;
    }
    lis.innerHTML += ("<br>" + nome + " - " + voto + " " + ris);
    cont_ins.innerHTML = String(ins);
    cont_suf.innerHTML = String(suf);
    cont_buo.innerHTML = String(buo);
    cont_ott.innerHTML = String(ott);
}