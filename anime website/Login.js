let registeredUsers = [];

function registerUser() {
  const regUsername = document.getElementById('regUsername').value;
  const regEmail = document.getElementById('regEmail').value;
  const regPassword = document.getElementById('regPassword').value;
  const regConfirmPassword = document.getElementById('regConfirmPassword').value;

  // Simulate storing user data
  registeredUsers.push({ username: regUsername, email: regEmail, password: regPassword });

  // Clear registration form
  document.getElementById('registrationForm').reset();
}

function loginUser() {
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Find the user in the registeredUsers array
  const user = registeredUsers.find(u => u.username === loginUsername);

  const errorMessages = document.getElementById('errorMessages');

  if (!user) {
    errorMessages.innerText = 'User not found. Please register first.';
  } else {
    if (user.password === loginPassword) {
      errorMessages.innerText = 'Login successful!';
      // Here you might redirect to a new page or perform further actions
    } else {
      errorMessages.innerText = 'Incorrect password.';
    }
  }
}