import React, {useRef, useState, memo} from 'react';

function Hooks() {

    const inputRef = useRef();

const printValue1 = ()=>{
    console.log('value1', inputRef.current.value);
    inputRef.current.value = '';
};

const [value, setValue] = useState('');

const printValue2 = ()=>{
    console.log('value', value)
    setValue('');
};



const [number, setNumber] = useState(15);

const handleChange = (event)=>{
    setValue(event.target.value);
};

const changeNumber = ()=>{
    setNumber(number+1);
};

const [form , setForm] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChangeInput = (event)=>{
    const {name, value} = event.target;
    setForm({
        ...form,
         [name]: value
    });
};

    return (
        <div>
            <div>
                <input 
                type='text' 
                ref = {inputRef}
                />
                <button
                onClick = {printValue1}
                >
                Print value 1</button>
            </div>


            <div>
            <input 
            type='text' 
            value = {value}
            onChange = {handleChange}
            />
            <button
            onClick = {printValue2}
            >
            Print value 2</button>
            </div>
            <h4>{number}</h4>
            <button
            onClick = {changeNumber}
            >
            Change number
            </button>

            <div>
            <input 
            type='text' 
            name = 'name'
            value = {form.name}
            onChange = {handleChangeInput}
            />
            <input 
            type='email' 
            name = 'email'
            value = {form.email}
            onChange = {handleChangeInput}
            />
            <input 
            type='text' 
            name = 'message'
            value = {form.message}
            onChange = {handleChangeInput}
            />
            <button
            onClick = {()=>{}}
            >
            Send
            </button>
            </div>
        </div>
    );
}


export default memo(Hooks);