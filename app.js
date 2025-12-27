/* ---------- check existing session ---------- */
fetch('/me', { credentials: 'include' })
  .then(r => r.ok && r.json())
  .then(user => {
    if (user) {
      document.querySelector('.card').innerHTML = `
        <h1>Hi ${user.name}</h1>
        <img src="${user.picture}" style="border-radius:50%;width:80px;margin-bottom:1rem">
        <p>${user.email}</p>
        <button onclick="logout()">Sign out</button>`;
    }
  });

window.logout = () =>
  fetch('/logout', { method: 'POST', credentials: 'include' })
    .then(() => location.reload());