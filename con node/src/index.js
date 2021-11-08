import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import { getFirebaseConfig } from './firebase-config'

// inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//ejemplo
function registrarEstudiante(nuevoEstudiante){
    //obtener la base de datos
    const db = getDatabase();
    const dbRef = ref(db, 'nuevoEstudiante');
    set(dbRef, nuevoEstudiante);
    //escribir un nuevo usuario
    
}

const database=firebaseApp.database();
const estudiante = document.getElementById("estudiante");
const codigo = document.getElementById("codigo");
const curso = document.getElementById("curso");
const matriculaBtn = document.getElementById("matriculaBtn");
const sinBonoContainer = document.getElementById("sinBonoContainer");
const bonoPlataContainer = document.getElementById("bonoPlataContainer");
const bonoOroContainer = document.getElementById("bonoOroContainer");

const nuevoEstudiante = ()=>{
    console.log("ejecuto evento");

    if(estudiante.value===''){
        alert("Ingrese el nombre del estudiante");
        return;
    }
    if(codigo.value===''){
        alert("Ingrese el código del estudiante");
        return;
    }
    if(curso.value===''){
        alert("Ingrese el curso al que pertenece el estudiante");
        return;
    }

      

      let tipo = "sinBono";
      
      let reference = database.ref("estudiantes/sinBono").push();
      let estudianteNuevo={
          id: reference.key,
          estudiante: estudiante.value,
          codigo: codigo.value,
          curso: curso.value,
          puntaje: 0,
          tipo: tipo
      };

      const jsonObject = JSON.stringify(estudianteNuevo);
      console.log(jsonObject);
  
      reference.set(estudianteNuevo);
      estudiante.value='';
      codigo.value='';
      curso.value='';

      
};

matriculaBtn.addEventListener("click", nuevoEstudiante);

database.ref("estudiantes/sinBono").on('value', function(data){
    sinBonoContainer.innerHTML="";
    data.forEach((id)=>{
        let valor = id.val();
        let estudiante = new Estudiante(valor);
        sinBonoContainer.appendChild(estudiante.render());
    })
});

database.ref("estudiantes/bonoPlata").on('value', function(data){
    bonoPlataContainer.innerHTML="";
    data.forEach((id)=>{
        let valor = id.val();
        let estudiante = new Estudiante(valor);
        bonoPlataContainer.appendChild(estudiante.render());
    })
});

database.ref("estudiantes/bonoOro").on('value', function(data){
    bonoOroContainer.innerHTML="";
    data.forEach((id)=>{
        let valor = id.val();
        let estudiante = new Estudiante(valor);
        bonoOroContainer.appendChild(estudiante.render());
    })
});