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

const opcionsProgramOfSchool = () =>{
    let opcionsP = prompt("Marque 1-Para obtener informacion de Clases,2-Para saber informacion personal de clases,3-Para saber Informacion docente.")    
    if(opcionsP == 1){
        let questSignature = prompt("Diga la Clase.");
        let testArrays = ["fisica","programacion","quimica","logica"];
        if(testArrays.includes(questSignature) == true ){
            obtentionInfo(questSignature);
            opcionsProgramOfSchool();
        }else{
            alert("Esa asignatura no existe o cometio un error al escribir, por favor intente nuevamente.");
            opcionsProgramOfSchool();
        }
    }else if(opcionsP ==  2){
        let nameInOpcions = prompt("Cual es su nombre, estudiante?");
        nameOfStudent(nameInOpcions);
        opcionsProgramOfSchool();
    }else if (opcionsP == 3){
        infoDocent();
        opcionsProgramOfSchool();
    }else{
        alert("Escoja una opcion valida.");
    }
}

const nameOfStudent = (name_of_student)=>{
    let a = fisica.includes(name_of_student);
    let b = quimica.includes(name_of_student);
    let c = programacion.includes(name_of_student);
    let d = logica.includes(name_of_student);
    console.log(a,b,c,d);
    if((a||b||c||d) == true){
        let e = [a,b,c,d];
        let f = e.filter(e => e == true);
        document.write(`<b>Cantidad de Clases en las que esta inscrito/a:</b>${f.length}<br>`);
    }else{
        alert("No se encuentra registrado en ninguna clase, por favor retirese.");
    }
}

const infoDocent = ()=>{
    return document.write(`<b>Asignatura:</b> Fisica ------<b>Profesor:</b> Osvaldo <br>
    <b>Asignatura:</b> Programacion ------<b>Profesor:</b> Rafael <br>
    <b>Asignatura:</b> Quimica ------<b>Profesor:</b> Pocho <br>
    <b>Asignatura:</b> Logica ------<b>Profesor:</b> Alain <br>`);
}
opcionsProgramOfSchool();