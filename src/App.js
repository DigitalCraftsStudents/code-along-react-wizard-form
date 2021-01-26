import WizardForm from "./components/WizardForm";


function App() {
  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={(wizard) => {
        console.log('==============================');
        console.log('here is the new wizard');
        console.log(wizard);
      }} />      
    </div>
  );
}

export default App;
