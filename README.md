# Wizard form:

- create a form for editing 3 attributes:
    - name
    - occupation
    - house
- when the form is submitted, save that to an array...somewhere?
    - confirm the new wizard is in the array by:
        - console.log()
        - maybe list them out?
        - or just use the inspector
- when do we need useEffect?
    - if we want to edit, which...we do!

## Steps! (aka built-in activities aka times when Chris gets more coffee)

- [X] Create a basic WizardForm.jsx
    - fill out the basics (an import, a function, an export)
    - add a section
    - add a form
    - add one input
- [X] Show the WizardForm in the App
- [X] "wire up" the input so it's a connected component
    - create some state by calling useState()
        - PS: you gotta import useState
    - set the value of your input using your state variable
    - add an onChange that calls your setState function
        - it will usually look like this: `(e) => { setState(e.target.value)}`


