function calculateBMI() {
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var heightInMeter = height / 100;
    var bmi = weight / (heightInMeter * heightInMeter);
    var result = document.getElementById("result");
    result.innerHTML = "BMI Anda: " + bmi.toFixed(1);

    var status = "";
    if (gender === "male" && age >= 19) {
        if (bmi < 18.5) {
            status = "Kurus";
        } else if (bmi >= 18.5 && bmi < 23.9) {
            status = "Normal";
        } else if (bmi >= 24 && bmi < 29.9) {
            status = "Berlebihan Berat Badan";
        } else {
            status = "Obesitas";
        }
    } else {
        status = "Perhitungan BMI untuk umur di bawah 19 tahun belum didukung.";
    }

    result.innerHTML += "<br>Status Berat Badan: " + status;
}
