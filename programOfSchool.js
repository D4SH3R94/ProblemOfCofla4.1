let fisica = ["Raiko,Jesler,Yordi,Antonio,Roberto"];
let programacion = ["Jesler","Yordi","Mario","Fernando"];
let quimica = ["Miguel","Lixandra","Mario","Fernando"];
let logica = ["Daniela","Aliet","Miguel"];
let profesores = ["Osvaldo","Rafael","Pocho","Alain"];
let materias = [fisica,programacion,quimica,logica];
let testArrays = ["fisica","programacion","quimica","logica"];

const obtentionInfo = (signature)=>{
    if(testArrays.includes(signature) == true){
        let poscitionMater = testArrays.indexOf(signature);
        document.write(`<b>Profesor:</b> ${profesores[poscitionMater]}<br><b>Alumnos:</b> ${materias[poscitionMater]}<br>`);
    }else{
        alert("Error, por favor escriba una asignatura correcta.")
    }
}
obtentionInfo(quimica);

const funcionalArrays = (pSignature) =>{
    let materia1 = [fisica.push(pSignature),programacion.push(pSignature),quimica.push(pSignature),logica.push(pSignature)];
}

const opcionsProgramOfSchool = () =>{
    let opcionsP = prompt("Marque 1-Para obtener informacion de Clases,2-Para saber informacion personal de clases,3-Para saber Informacion docente.")    
    if(opcionsP == 1){
        let questSignature = prompt("Diga la Clase.");
        let testArrays = ["fisica","programacion","quimica","logica"]
        console.log(testArrays);
        console.log(testArrays.includes(questSignature));
        if(testArrays.includes(questSignature) == true ){
            obtentionInfo(questSignature);
        }
    }
}

opcionsProgramOfSchool();