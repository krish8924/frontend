document.addEventListener("DOMContentLoaded", () => {
  console.log("Academic Setup loaded");

  document.querySelectorAll(".btn-disable").forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("Are you sure you want to disable this subject?")) {
        alert("Subject disabled successfully");
      }
    });
  });
});

