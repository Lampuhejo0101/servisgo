document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email dan password wajib diisi!");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect ke admin setelah login berhasil
      window.location.href = "admin.html";
    })
    .catch((error) => {
      alert("Login gagal: " + error.message);
    });
});