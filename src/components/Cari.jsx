import Button from "../elements/Button"
import Input from "../elements/Input"

const Cari = ({text, onClick}) => {
    return(
        <div className="d-flex flex-row mt-3 mb-3">
            <Input
                classNameLabel={'me-3 ps-2 pt-1'}
                text={text}
                // htmlFor={''}
                // name={''}
                // value={''}
            />
            <Button
                onClick={onClick}
                className={'ms-3 ps-3 pe-3'}
                text={'Cari'}
            />
        </div>
    )
}

export default Cari