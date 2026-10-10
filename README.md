First of all, search for the city boundaries based on the city prefectures that you need from the government website (if you are too lazy to create them from scratch).
_This project used the subdistricts from the Balikpapan government website._

Check the features to make sure all the boundaries are correct in the QGIS Open Attribute Table (F6).

<img width="1565" height="722" alt="Screenshot 2026-10-10 120617" src="https://github.com/user-attachments/assets/c5afe2d7-529c-4ff7-b189-917ad03e8704" />



Prepare the coordinates data, including other variables. Import the data from a CSV / Excel table. 
Choose the CSV file and map the X field (longitude) and Y field (latitude). We can also change the coordinate points to images from our computer library.

<img width="1920" height="1080" alt="Portfolio SM (3)" src="https://github.com/user-attachments/assets/1cd8a6d7-a6d2-4bda-b502-52c4465b4fcf" />

After that, the coordinates layer is ready. How does it look after we add the coordinates data? Here is the result. The image shows the coordinates on the map.

<img width="833" height="511" alt="image" src="https://github.com/user-attachments/assets/8ff06e65-64c1-4713-9c02-2a2d6a160e67" />


Furthermore, the buffer zone marks the area around each larvae breeding site where mosquitoes can spread, so health officers can target preventive actions like fogging, larvicide, and house inspections before cases appear. Thus we do need the buffer zone.


