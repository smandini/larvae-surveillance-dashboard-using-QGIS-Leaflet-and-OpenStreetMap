## Simple-Larvae-Monitoring-Dashboard

**A simple larval surveillance monitoring dashboard designed to support environmental health monitoring and preventive public health issue.**

**Software**
1. QGIS (open source)
2. Visual studio for web programming

## Working with QGIS 🗺️
First of all, search for the city boundaries based on the city subdistricts that you need from the government website (if you are too lazy to create them from scratch).

_**This project used the subdistricts from the Balikpapan government website.**
Administrative boundary data for Balikpapan City were sourced from the Balikpapan City Government’s Satu Data Open Data Portal. The data were used for geographic visualization in this larval surveillance monitoring dashboard._

Check the features to make sure all the boundaries are correct in the QGIS Open Attribute Table (F6).

<img width="1565" height="722" alt="Screenshot 2026-10-10 120617" src="https://github.com/user-attachments/assets/c5afe2d7-529c-4ff7-b189-917ad03e8704" />


Prepare the coordinates data, including other variables. Import the data from a CSV / Excel table. 
Choose the CSV file and map the X field (longitude) and Y field (latitude). We can also change the coordinate points to images from our computer library. Do not worry about these numbers; this is just dummy data.

<img width="1920" height="1080" alt="Portfolio SM (3)" src="https://github.com/user-attachments/assets/1cd8a6d7-a6d2-4bda-b502-52c4465b4fcf" />

After that, the coordinates layer is ready. How does it look after we add the coordinates data? Here is the result. The image shows the coordinates on the map.

<img width="833" height="511" alt="image" src="https://github.com/user-attachments/assets/8ff06e65-64c1-4713-9c02-2a2d6a160e67" />


Furthermore, the buffer zone marks the area around each larvae breeding site where mosquitoes can spread, so health officers can target preventive actions like fogging, larvicide, and house inspections before cases appear. Thus we do need the buffer zone.

Most of our layers use the WGS84 (EPSG:4326) coordinate system, whose unit is degrees, so the buffer distance could not be set in meters. To fix this, we reprojected the layers to UTM (EPSG:32750), which uses meters, so the buffer distance could be set accurately.

<img width="1920" height="1080" alt="Portfolio SM (4)" src="https://github.com/user-attachments/assets/6423fb8d-9333-41aa-b01d-be5f0b954291" />

<img width="1920" height="1080" alt="Portfolio SM (5)" src="https://github.com/user-attachments/assets/6043cadf-6836-4f17-899d-104d07026e46" />

The next step is to export each layer individually as a GeoJSON file.

In QGIS, we have three layers:
1. Subdistrict Boundary Layer (the administrative map of the subdistricts)
2. Coordinates Layer (the point data containing the surveillance locations)
3. Buffer Zone Layer (the buffer areas generated around the surveillance points)

Export each layer separately and save it as a GeoJSON file. After exporting, open each GeoJSON file in a text editor, such as Notepad or Visual Studio Code. Then, modify the first line of the code as shown in the following example and save the new file as JS (javascript) file format.
```
var your_file_name = {
```
## Configuring the Dashboard 💻 
### Preparing your page ^_^
The next part, begin with the introduce of Leaflet as open source JavaScript library for building powerful interactive maps. Please go to the Leaflet website for futher information, especially for [Using GeoJSON with Leaflet](https://leafletjs.com/examples/geojson/).

Include Leaflet CSS file in the head section of your document and include Leaflet JavaScript file after Leaflet’s CSS. The example:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>
<script src="geojson_wilayah_bpp.js"></script>
<script src="geojson_titikkoordinat.js"></script>
<script src="contoh_buffered.js"></script>
```
We will initialize the map and set its view to our chosen geographical coordinates and a zoom level. For this project, I chose a zoom level of 12.
```
var map = L.map('map').setView(
        [-1.2050, 116.8529],
        12
    );
```
The next step, we need to color the subdistricts. Also mmake the subdistricts highlighted visually in some way when they are hovered with a mouse. 
```
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
```
The result looks much better now, with colored subdistricts and a mouseover effect for improved interactivity.

<img width="1847" height="867" alt="Screenshot 2026-10-10 194338" src="https://github.com/user-attachments/assets/4d755df4-aebb-441a-a4c4-c338b0e0efe7" />

Next, let's edit the markers, buffer zones, and popups using the GeoJSON data stored in the JavaScript files we have uploaded. 
Also let’s give our buffer zones different colors based on the larval density classification, so it’s easier to spot which areas have higher or lower larval density.
Popups are usually used when we want to attach some information to a particular object on a map. Here is the result:

<img width="1871" height="872" alt="Screenshot 2026-10-10 200617" src="https://github.com/user-attachments/assets/380bbb6a-fa43-45fe-9224-d5c18af93f13" />

If you want to add Layer Groups and Layers Control on your Leaflet interactive maps, go on. Leaflet allows the users to control which layers they see on our map. Adding a map legend to help users understand the meaning of each buffer color and identify the corresponding larval density classification.
The code of Layer Groups:
```
var rawanJentik =
        L.layerGroup();
    rawanJentik.addLayer(
        bufferLarva
    );
    rawanJentik.addLayer(
        titikLarva
    );
    rawanJentik.addTo(map);    
```
The code of a map Legend to explain the buffer color:
```
var legend =
        L.control({
            position:
                "bottomright"
        });

    legend.onAdd =
        function(map) {
                style
                style
                style
        }
 return div;
};
legend.addTo(map);
```
Here is the final result: 
<img width="1870" height="867" alt="Screenshot 2026-10-10 205224" src="https://github.com/user-attachments/assets/85eeddb4-aa1d-414b-bb74-3cebb790ee6c" />


---------- I will work on the data visualization using a CSS framework. Just scroll down the page, and you will find some charts to make the data easier to explore ----------
I still need to update the original dataset ✨ ----------











