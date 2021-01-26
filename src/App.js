import { useState } from "react";
import WizardForm from "./components/WizardForm";

function App() {

  const [wizards, setWizards] = useState([]);

  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={(wizard) => {
        console.log('==============================');
        console.log('here is the new wizard');
        console.log(wizard);
        // how do we .push() into a state variable????
        // why not .push? because that changes the variable
        // To _correctly_ setState on an Array:
        const newWizardArray = [
          ...wizards, // copy the existing elements from the OLD array
          wizard      // include the element
        ];
        // ask React to store the new array as the wizards
        setWizards(newWizardArray);
        // setWizards([
        //   ...wizards,
        //   wizard
        // ]);
      }} />      
    </div>
  );
}

export default App;
