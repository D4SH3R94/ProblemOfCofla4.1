let fisica = ["Raiko,Jesler,Yordi,Antonio,Roberto"];
let programacion = ["Jesler","Yordi","Mario","Fernando"];
let quimica = ["Miguel","Lixandra","Mario","Fernando"];
let logica = ["Daniela","Aliet","Miguel"];
let profesores = ["Osvaldo","Rafael","Pocho","Alain"];

const obtentionInfo = (signature)=>{
    let materias = [fisica,programacion,quimica,logica];
    
    if(materias.includes(signature) == true){
        let poscitionMater = materias.indexOf(signature);
        document.write(`<b>Profesor:</b> ${profesores[poscitionMater]}<br><b>Alumnos:</b> ${materias[poscitionMater]}<br>`);
    }else{
        alert("Error, por favor escriba una asignatura correcta.")
    }
}

obtentionInfo(quimica);