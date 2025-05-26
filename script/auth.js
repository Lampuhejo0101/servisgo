firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Login sukses
    window.location.href = "admin.html";
  })
  .catch((error) => {
    alert("Login gagal: " + error.message);
  });
// Custom auth scripts if needed
