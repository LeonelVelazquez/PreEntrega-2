import "./button.css"
export default function Button(props){
console.log(props);

return <button className="boton">{props.text}</button>
}

function ButtonChild(props){
    console.log(props);

    return (
        <button style={{ backgraundColor: props.color }} className='botonn'>
            {props.text}
        </button>
    );
} 