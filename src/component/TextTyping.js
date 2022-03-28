import {useState} from "react";
export const TextTyping = ({Type,name,label,typeValue = 'text'}) => {

    const [input,setInputValue] = useState({
        value:'',
        valid: false,
    });

    const changeValue = (event) => {
        const value = event.target.value;
        let valid;
        if (typeValue === 'email') {
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regex.test(value)) {
                valid = true;
            } else {
                valid = false;
            }
        } else {
            valid = true;
        }
        setInputValue({
            value: value,
            valid: valid,
        });
    }

    return (
        <div className={Type}>
            <label className={ input.value !== '' ? input.valid ? 'fill valid' : 'fill error' : 'error' }>{label} :</label>
            <Type required value={input.value} onChange={changeValue} type={typeValue} name={name} />
        </div>
    )
}