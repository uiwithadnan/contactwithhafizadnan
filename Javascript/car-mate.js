document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("myForm");
   const toast = document.getElementById("toast");

   form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Your form submission logic here

      // Display the toast
      toast.classList.remove("hidden");

      // Hide the toast after a few seconds (e.g., 3 seconds)
      setTimeout(function () {
         toast.classList.add("hidden");
      }, 3000);
      form.reset();
   });
});