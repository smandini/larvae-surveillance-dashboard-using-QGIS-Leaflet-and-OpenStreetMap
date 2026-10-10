<script>
    var map = L.map('map').setView(
        [-1.2050, 116.8529],
        12
    );

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);

    map.createPane('bufferPane');

    map.getPane('bufferPane').style.zIndex = 400;


    map.createPane('markerPane');

    map.getPane('markerPane').style.zIndex = 650;

    // batas wilayah
    const warna = [

        "#610f06",
        "#8ec6eb",
        "#fb7100",
        "#cea80f",
        "#9b59b6",
        "#e67e22",
        "#044538",
        "#fbde05",
        "#dd2440",
        "#b80056",
        "#1300a1",
        "#fd79a8"

    ];

    const warnaKelurahan = {};

    let nomorWarna = 0;

    var kelurahanLayer = L.geoJSON(
        geojson_wilayah_bpp,
        {

            style: function(feature) {

                const namaKelurahan =
                    feature.properties.DESA_KEL;

                if (
                    !warnaKelurahan[namaKelurahan]
                ) {

                    warnaKelurahan[namaKelurahan] =
                        warna[
                            nomorWarna %
                            warna.length
                        ];

                    nomorWarna++;

                }


                return {

                    color: "#ede3e3",

                    weight: 2,

                    fillColor:
                        warnaKelurahan[
                            namaKelurahan
                        ],

                    fillOpacity: 0.3

                };

            },

            onEachFeature:
                function(feature, layer) {

                    const kelurahan =
                        feature.properties.DESA_KEL
                        || "-";

                    const kecamatan =
                        feature.properties.KEC_
                        || "-";

                    // Popup
                    layer.bindPopup(`

                        <b>${kelurahan}</b><br>

                        Kecamatan:
                        ${kecamatan}<br>

                        Kota Balikpapan

                    `);

                    // Tooltip
                    layer.bindTooltip(
                        kelurahan,
                        {
                            direction: "center"
                        }
                    );

                    // Mouseover
                    layer.on(
                        "mouseover",
                        function(e) {

                            e.target.setStyle({

                                weight: 2,

                                color: "#00007d",

                                fillOpacity: 0.6

                            });

                        }
                    );
                    // Mouseout
                    layer.on(
                        "mouseout",
                        function(e) {

                            kelurahanLayer.resetStyle(
                                e.target
                            );

                        }
                    );

                }

        }
    ).addTo(map);

    map.fitBounds(
        kelurahanLayer.getBounds()
    );
</script>