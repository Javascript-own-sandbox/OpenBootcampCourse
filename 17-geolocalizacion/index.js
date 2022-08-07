// Initialize and add the map
function initMap() {
    // // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.031 };
    // // The map, centered at Uluru
    // const map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 4,
    //   center: uluru,
    // });
    // // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    // });
    const posicion = {
        length: -3.9271587390624276,
        lat: 38.988034851219076
    }
    const posicion2 = {
        lng: -3.765628157947501,
        lat: 43.47562544589876
    }
    const posicion3 = {
        lat: 28.122650294707572,
        lng: -15.436696818988507
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    const marker1 = new google.maps.Marker({
        position: posicion,
        map,
        title: "Ciudad Real"
    })
    const marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Santander"
    })
    const marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Las Palmas"
    })
    
  }
  
  window.initMap = initMap;