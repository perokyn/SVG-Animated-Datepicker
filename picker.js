document.addEventListener("DOMContentLoaded", () => {
  const pickDate = document.querySelector("#date");

  /*SETUP DATE PICKER-------------------------*/
  $(function () {
    $("#date").datepicker();
  });

  /*SET SVG IMAGE TO TRIGGER DATE PICKER ON CLIK*/
  $("#svg").click(function () {
    $("#date").datepicker("show");
  });
}); //end DOMContent Load listener
