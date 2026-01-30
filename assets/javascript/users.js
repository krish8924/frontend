document.addEventListener("DOMContentLoaded", () => {
  console.log("User Management loaded");

  document.querySelectorAll(".btn-reset").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Password reset link sent!");
    });
  });
});
