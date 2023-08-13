const Button = ({text, className, onClick}) => {
    return(
        <button
            onClick={onClick}
            className={`btn btn-primary ${className}`}
        >
            {text}
        </button>
    )
}
export default Button