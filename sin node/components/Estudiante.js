class Estudiante{
    constructor(estudiante){
        this.estudiante=estudiante;
    }

    render=()=>{

        let component = document.createElement("div");
        component.className= "Estudiante";

        let curso = document.createElement("div");
        curso.className = "cursoCont";
        curso.innerHTML = this.estudiante.curso;

        let estudiante = document.createElement("div");
        estudiante.className = "estudiante";
        estudiante.innerHTML = this.estudiante.estudiante;

        let codigo = document.createElement("div");
        codigo.className = "codigo";
        codigo.innerHTML = this.estudiante.codigo;

        let puntaje = document.createElement("div");
        codigo.className = "puntaje";
        codigo.innerHTML = this.estudiante.puntaje;

        let eliminarBtn = document.createElement("button");
        eliminarBtn.className="eliminarBtn";

        let avanceBtn = document.createElement("button");
        avanceBtn.className="avanceBtn";

        let buttonDiv = document.createElement("div");
        buttonDiv.className="buttonDiv";
        buttonDiv.appendChild(eliminarBtn);
        buttonDiv.appendChild(avanceBtn);

        component.appendChild(estudiante);
        component.appendChild(curso);
        component.appendChild(codigo);
        component.appendChild(puntaje);
        component.appendChild(buttonDiv);
        

        
        eliminarBtn.addEventListener('click', ()=>{

            if(this.tarea.tipo==="sinBono" ){
                let reference = database.ref("estudiantes/sinBono/"+this.estudiante.id).remove();
            }

            if(this.tarea.tipo==="bonoPlata"){
                let reference = database.ref("estudiantes/bonoPlata"+this.estudiante.id).remove();
            }

            if(this.tarea.tipo==="bonoOro"){
                let reference = database.ref("estudiantes/bonoOro"+this.estudiante.id).remove();
            }
        });

        avanceBtn.addEventListener('click', ()=>{

            let tipoPlata="bonoPlata";
            let tipoOro="bonoOro";

            if(this.estudiante.tipo==="sinBono" && puntaje>5){
                let reference = database.ref("estudiantes/bonoPlata").push();

                let estudianteNuevo={
                    id: reference.key,
                    estudiante: this.estudiante.estudiante,
                    codigo: this.estudiante.codigo,
                    curso: this.estudiante.curso,
                    puntaje: this.estudiante.puntaje+1,
                    tipo: tipoPlata
                };
            
                reference.set(estudianteNuevo);
                database.ref("estudiantes/sinBono/"+this.estudiante.id).remove();

            }else if (this.estudiante.tipo==="sinBono" && puntaje<=5){
                let reference = database.ref("estudiantes/sinBono").push();

                let estudianteNuevo={
                    id: reference.key,
                    estudiante: this.estudiante.estudiante,
                    codigo: this.estudiante.codigo,
                    curso: this.estudiante.curso,
                    puntaje: this.estudiante.puntaje+1,
                    tipo: this.estudiante.tipo                };
            
                reference.set(estudianteNuevo);
                database.ref("estudiantes/sinBono/"+this.estudiante.id).remove();
            }
            
            if(this.tarea.tipo==="bonoPlata"  && puntaje>10){

                let reference = database.ref("estudiantes/bonoOro").push();

                let estudianteNuevo={
                    id: reference.key,
                    estudiante: this.estudiante.estudiante,
                    codigo: this.estudiante.codigo,
                    curso: this.estudiante.curso,
                    puntaje: this.estudiante.puntaje+1,
                    tipo: tipoOro
                };
            
                reference.set(estudianteNuevo);
                database.ref("estudiantes/bonoPlata/"+this.estudiante.id).remove();
            }else if (this.estudiante.tipo==="bonoPlata" && puntaje<=10 && puntaje >5 ){
                let reference = database.ref("estudiantes/bonoPlata").push();

                let estudianteNuevo={
                    id: reference.key,
                    estudiante: this.estudiante.estudiante,
                    codigo: this.estudiante.codigo,
                    curso: this.estudiante.curso,
                    puntaje: this.estudiante.puntaje+1,
                    tipo: this.estudiante.tipo               
                 };
            
                reference.set(estudianteNuevo);
                database.ref("estudiantes/bonoPlata/"+this.estudiante.id).remove();
            }
            if(this.estudiante.tipo==="bonoOro"){

                let reference = database.ref("estudiantes/bonoOro").push();

                let estudianteNuevo={
                    id: reference.key,
                    estudiante: this.estudiante.estudiante,
                    codigo: this.estudiante.codigo,
                    curso: this.estudiante.curso,
                    puntaje: this.estudiante.puntaje+1,
                    tipo: tipoOro
                };
            
                reference.set(estudianteNuevo);
                database.ref("estudiantes/bonoOro/"+this.estudiante.id).remove();
            }
            
        });
        return component;
    }
}