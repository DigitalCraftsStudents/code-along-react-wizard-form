import React, { useState } from 'react';

function WizardForm(props) {
    // We're destructuring two values out of the Array
    // returned by useState()
    // 1st value is always your state variable
    // 2nd value is always the setState function (for updating the variable)
    const [name, setName] = useState('');

    return (
        <section>
            <h1>Wizard Form</h1>
            <form>
                <input 
                    value={name} 
                    onChange={(e) => {
                        console.log(e.target.value);
                        setName(e.target.value);
                    }}
                />
            </form>
        </section>
    );
}

export default WizardForm;