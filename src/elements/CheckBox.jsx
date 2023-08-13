const CheckBox = ({className, value, id, htmlFor, text}) => {
    return(
        <>
            <div className={`form-check ${className}`}>
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value={value} 
                    id={id}/>
                <label 
                    className="form-check-label" 
                    htmlFor={htmlFor}
                >
                    {text}
                </label>
            </div>
        </>
    )
}

export default CheckBox