const verstuur = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let bericht = document.getElementById("bericht").value;

  if (fname && lname && email && bericht) {
    let conf = confirm("Wil je dit formulier versturen?");

    if (conf) {
      alert(
        `Dank je wel voor je contact verzoek ${fname} ${lname}. Er wordt zo snel mogelijk contact met je opgenomen.`
      );
    }
  }
};
