import Button from "../elements/Button"
import Input from "../elements/Input"

const Cari = ({text, onClick, classNameLabel,type, htmlFor, name, value, onChange}) => {
    return(
        <div className="d-flex flex-row mt-3">
            <Input
                classNameLabel={`me-3 ps-2 pt-1 ${classNameLabel}`}
                text={text}
                type={type}
                onChange={onChange}
                htmlFor={htmlFor}
                name={name}
                value={value}
            />
            {/* <Button
                onClick={onClick}
                className={'ms-3 ps-3 pe-3'}
                text={'Cari'}
            /> */}
        </div>
    )
}

export default Cari