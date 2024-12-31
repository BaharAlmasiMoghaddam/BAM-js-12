//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

function displayOutputs() {
  const action = "Action";
  const potential = "Potential";
  const signals = "Signals";

  function showAction() {
    console.log(action);
    showPotential();
  }

  function showPotential() {
    console.log(potential);
    showSignals();
  }

  function showSignals() {
    console.log(signals);
  }

  showAction();
}

displayOutputs();
