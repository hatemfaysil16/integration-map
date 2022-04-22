let map;

function initMap() {
    const info = document.getElementById('info');
    const cairo = { lat: 30.096780, lng: 31.298365 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: cairo,
        zoom: 15,
    });
    // fixed new market
    // const marker = new google.maps.Marker({
    //     position: { lat: 30.09624162106626, lng: 31.301669481506334 },
    //     map: map,
    // });
    // const marker2 = new google.maps.Marker({
    //     position: { lat: 30.126684443739745, lng: 31.412184983078006 },
    //     map: map,
    // });

    map.addListener('click', (mapsMouseEvent) => {
        const newMarker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
        });
        // get lat andlng
        console.log(newMarker.getPosition().toJSON());

        const newInfowindow = new google.maps.InfoWindow({
            content: info,
        });
        newMarker.addListener("click", () => {
            newInfowindow.open({
                anchor: newMarker,
                map,
                shouldFocus: false,
            });
        });

    });
    // The marker, positioned at Uluru

}