import { useState } from 'react'
import Header from './components/Header';
import NewBudgetIcon from './img/nuevo-gasto.svg'
import NewBudget from './components/NewBudget';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(false);

  const handleNewBudget = () => {
    setNewBudget(true)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

        { isValidBudget && (
      <div className="nuevo-gasto">
        <img
          src={NewBudgetIcon}
          alt="new budget icon"
          onClick={handleNewBudget}
        />
      </div>
        )}
        {newBudget &&  <NewBudget />  }
    </div>
  )
}

export default App
