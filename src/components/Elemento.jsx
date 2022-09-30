import '../assets/style/elemento.css';
import Inputs from "../atoms/Inputs";

function Elemento() {

    const Elementos =[
        {
            Label:"Nombre",
            type:"Text",
            id:"name"
        },
        {
            Label:"Apellido",
            type:"Text",
            id:"lastName"
        },
        {
            Label:"Mujer",
            Label2:"Sexo",
            type:"radio",
            id:"sex"
        },
        {
            Label:"Hombre",
            type:"radio",
            id:"sex"
        },
        {
            Label:"Edad",
            type:"number",
            id:"age"
        },
        {
            Label:"Fecha de nacimiento",
            type:"date",
            id:"date"
        },
        {
            
            Label:"Buscar matricula",
            type:"search",
            id:"Matricula"
        },
        {
            Label:"Regular",
            Label2:"Tipo de Alumno",
            type:"checkbox",
            id:"regular"
        },
        {
            Label:"Irregular",
            type:"checkbox",
            id:"irregular"
        },
        {
            Label2:"Documentos escolares",
            Label:"",
            type:"file",
            id:"file"
        },
        {
            Label:"Contraseña",
            type:"password",
            id:"pass"
        },
        {
            Label:"Cuanto tiempo te llevo realizar el registro",
            type:"time",
            id:"time"
        },
        {
            Label2:"Cuanto te gusto la pagina",
            Label:"",
            type:"range",
            id:"range"
        },
        {
            Label:"",
            type:"submit",
            id:"submit"
        },
        {
            Label:"",
            type:"reset",
            id:"reset"
        },

    ];
    return ( 
        <div>
            <h1>Registro Escolar</h1>
            {Elementos.map((elemet)=>(
                 <Inputs
                type={elemet.type}
                id={elemet.id}
                text={elemet.Label}
                label={elemet.Label2}
                />
            )
        )}
        </div>
     );
}
export default Elemento;