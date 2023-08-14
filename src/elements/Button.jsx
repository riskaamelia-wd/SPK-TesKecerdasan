const Button = ({text, className, onClick, type}) => {
    return(
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-primary ${className}`}
        >
            {text}
        </button>
    )
}
export default Button