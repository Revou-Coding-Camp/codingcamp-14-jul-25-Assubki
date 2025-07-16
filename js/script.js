const userName = prompt("Siapa namamu?");
if (userName) {
  document.getElementById("greeting").textContent = `Hi ${userName}, Welcome To Website`;
}

const form = document.getElementById("messageForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector("input[name='gender']:checked");
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !birthdate || !gender || !message) {
    alert("Harap isi semua field sebelum submit.");
    return;
  }

  const now = new Date();

  output.innerHTML = `
    <strong>Current time:</strong> ${now}<br>
    <strong>Nama:</strong> ${name}<br>
    <strong>Tanggal Lahir:</strong> ${birthdate}<br>
    <strong>Jenis Kelamin:</strong> ${gender.value}<br>
    <strong>Pesan:</strong> ${message}
  `;
});
