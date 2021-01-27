import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import WizardForm from "./components/WizardForm";
import WizardList from "./components/WizardList";
function App() {

  const [wizards, setWizards] = useState([]);
  // Normally, we store an "empty" version of the thing
  // we're storing. But, 
  const [wizardToEdit, setWizardToEdit] = useState({});

  const chooseWizard = (wizard) => {
    console.log(`App sees ${wizard.name}`);
    // save it in state so we can "trick" react
    // into passing it to the WizardForm
    setWizardToEdit(wizard);
  };

  const onSubmit = (wizard) => {
    console.log('==============================');
    console.log('here is the new wizard');
    console.log(wizard);

    // do they already have an ID?
    if (wizard.id) {  // existing wizard
      // find the wizard in the array with a matching id
      //const existingWizard = wizards.find(w => w.id === wizard.id);
      // do I loop through the wizards array and replace the old wizard?
      const updatedWizards = wizards.map(w => {
        // as I'm looping using .map:
        // if this is the same wizard (same id)
        if (w.id === wizard.id) {
          // I found the one I want to replace!
          // return the wizard from the form -- they've got the new info
          return wizard;
        } else {
          // otherwise, return the wizard from the loop
          return w;
        }
      });
      setWizards(updatedWizards);
    } else {          // new wizard
      // if not...
      // stamp it with a UUID!
      wizard.id = uuidv4();
  
      // otherwise, update the existing wizard
  
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

    }
  };

  return (
    <div>
      <WizardForm 
        title="Add New Wizard"
        onSubmit={onSubmit}
        wizard={wizardToEdit}
      />    
      <WizardList 
        wizards={wizards}
        chooseWizard={chooseWizard}
      />
    </div>
  );
}

export default App;
