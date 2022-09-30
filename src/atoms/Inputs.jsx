import '../assets/style/inputs.css';

function InputText({type,text,id,label}) {
    return (
        <div>
        <p>{label}</p>
        <label>{text}</label>
        <input type={type} id={id}/><br />
        </div>
    );
}
export default InputText;