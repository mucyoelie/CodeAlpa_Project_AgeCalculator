function calculateAge() {
    const birthDateInput = document.querySelector('input[type="date"]');
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You are ${age} years old.`;
  }
  
  document.querySelector('button').addEventListener('click', calculateAge);
