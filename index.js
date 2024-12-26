<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Name Picker</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Random Name Picker Or Spin</h1>
    <p>1 A, 2 B, 3 C, 4 D, 5 E:</p>
    <textarea id="names" placeholder="Contoh: John, Lisa, Siti"></textarea><br>
    <button onclick="pickName()">choose a name </button>
    <h2 id="result"></h2>

    <script>
        function pickName() {
            let names = document.getElementById("names").value.split(',');
            let randomIndex = Math.floor(Math.random() * names.length);
            document.getElementById("result").innerText = `Nama Terpilih: ${names[randomIndex].trim()}`;
        }
    </script>
</body>
</html>
