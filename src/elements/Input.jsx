// import './Input.css'

const Input = ({value, placeholder, text, htmlFor, onChange, type, className, name,id, classNameLabel}) => {
    return (
        <>
            <div className="mb-3 d-flex flex-row" >
                <label 
                    htmlFor={htmlFor} 
                    className={classNameLabel}
                >  
                    {text}
                </label>
                <input
                    type={type}                
                    name={name}
                    value = {value}
                    onChange = {onChange}
                    className ={`form-control ${className}`}
                    id={id}
                    placeholder={placeholder}
                />
            </div>   
            
        </>
    )
}

export default Input