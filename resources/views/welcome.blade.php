<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

    <title>Document</title>
</head>

<body>
    <div id="map"></div>
    <div id="info">
        <h1>Cairo</h1>
        <img src="https://picsum.photos/200/300" alt="">
    </div>

    <script src="{{ asset('assets/js/main.js') }}" defer></script>
    <script src="https://maps.googleapis.com/maps/api/js?callback=initMap&v=weekly" async></script>
</body>

</html>
