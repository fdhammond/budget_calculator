import { useState } from "react";
import Message from "./Message";

const Budget = ({
    budget,
    setBudget,
    setIsValidBudget }) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault();

        if (!budget || budget < 0) {
            setMessage('Not valid budget')
            //stop function execution
            return;
        }
        setMessage('')
        setIsValidBudget(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className="campo">
                    <label>Define Budget</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Add budget'
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                    />
                    <input type="submit" value="Add" />
                    {message && <Message tipo="error">{message}</Message>}
                </div>
            </form>
        </div>
    );
};

export default Budget;