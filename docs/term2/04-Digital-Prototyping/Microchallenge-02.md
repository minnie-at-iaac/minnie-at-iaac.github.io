![hero](https://hackmd.io/_uploads/S1wv4qd66.jpg)
# Kinetic Trash: A Trial and Error
From our [hackMD documentation](https://hackmd.io/pQZeLblPSsyZPA83meSD_A?view). A copy is also on [this Github repo](https://github.com/kotsengkuba/mdef-microchallenge-2)

## Concept
To create a dynamic installation representing oceanic trash by using a moving surface composed of waste materials

## Intelligence
### Copernicus data
Copernicus provides a large source of marine related data. We got the forecast data for today (Mar 8) and used it to inform the speed of the movement of the sculpture.
![image](https://hackmd.io/_uploads/r1BfnF_ap.png)

Current prototype has 9 hard-coded values of today's forecast of sea surface wind wave mean period from midnight to tomorrow midnight.
![image](https://hackmd.io/_uploads/H18n6FOaa.png)
![image](https://hackmd.io/_uploads/BkL7RtOT6.png)


## How we worked

1. First quick prototype to understand the motion and the dynamics ![image](https://raw.githubusercontent.com/kotsengkuba/mdef-microchallenge-2/main/Photos/small_prototype.gif)
2. Planning of the structure 
3. CAD design ![image](https://hackmd.io/_uploads/HJ8sX5_66.png)

4. Code the motor with basic movement
5. Look for materials
6. Manufacturing
7. Assemble  
![image](https://raw.githubusercontent.com/kotsengkuba/mdef-microchallenge-2/main/Photos/strings_timelapse.gif)
8. Update code





## Problems we encountered

**Problem 1:** The structure in not stable enough

**Solution:** To do triangulations with strings

**Problem 2**: The initial assembly causes the strings to get tangled

**Solution**: Flip the direction of the motor

**Problem 3:** Burned barduino by accidentally connecting the 12v

**Solution:** Borrow another barduino, thanks Annna

**Problems 4:** Broken 3D prints: clamp and motor holder structure 

**Solution:** Hot glue

**Problem 5:** Assembly the objects in the strings 

**Solution:** Patience

**Problem 6:** Motor MDF structure bends

**Solution:** holding the structure by pulling  

**Problem 7:** Motor driver not working properly 

**Solution:** Replace the motor driver

## Reflect about future development opportunity
### Learning through creating
To view this process as the first prototype for a kinetic sculpture, where we learn through its creation. If we were to make it again, we would allocate time to simulate the movement using Grasshopper. Additionally, we would enhance the aesthetic appeal through the manufacturing process, using molds to create shapes that enhance the movement.

### Multiparameterization
Currently we can only control the speed and direction of the motor. We can also vary the distance and the number of the rotating arm, and this would vary the "amplitude" of the waves.

Because of it's triangular shape, the structure can be tiled. We can then have multiple modules creating a bigger wave effect.

### Real-time data and Sensing
Currently, the speed of the movement is based on real-world forecast from Copernicus, but the data is hard-coded. Further development can include real-time data retrieval and processing.

We can also implement more sensing inputs, like capacitive or audio, that would affect the movement - representing human disruptions to the natural environment.

# Fabrication
## BOM (Build of Materials)


| Part | Spec |
| -------- | -------- | 
| Microcontroller    | Barduino     | 
| Motor Driver     | DRV8825 Stepper Motor Driver Carrier     | 
| Stepper Motor     | NEMA17 Stepper Motor     | 
| 12v Power Supply     | LRS-100-12     |
| 5v Power Supply     | External Battery     | 
| Rods     |      |
| MDF     | 3mm     |
| Chicken Wire     |     |
| PLA filament     |      | 
| Strings |  |
| Cable ties |  |
| Nuts and Bolts | M5 |



## System Diagram
![image](https://hackmd.io/_uploads/Bk4bz_dpa.png)

## Parts
### Structure
![Captura de pantalla 2024-03-08 110848](https://hackmd.io/_uploads/HJymEvd6T.png)

### Electronics
#### Microcontroller, Motor Driver
![barduino](https://hackmd.io/_uploads/rkOCRwdTT.jpg)

#### Stepper Motor
![motor](https://hackmd.io/_uploads/ryKyt5OTp.jpg)


[3D File](https://grabcad.com/library/17hs15-1684s-pg5-nema-17-stepper-motor-with-5-18-1-gearbox-1)
#### Power Supply
![power](https://hackmd.io/_uploads/SkI3t5_TT.jpg)

## Design & Fabrication files


# References
[Ping Pong Balls Kinetic Scuplture](https://www.youtube.com/watch?v=3Be7WPVVXzU)  
[Interactive Kinetic Sculpture / Wave Machine ver. 3: FiberLab Symphony Orchestra](https://www.youtube.com/watch?v=3jfix0NnDFk)  
[Copernicus Global Ocean Waves Analysis and Forecast](https://data.marine.copernicus.eu/product/GLOBAL_ANALYSISFORECAST_WAV_001_027/download?dataset=cmems_mod_glo_wav_anfc_0.083deg_PT3H-i_202311)  

# Links
[Minnie's site](https://minnie-at-iaac.github.io/) 

# Reflection
- For the second microchallenge, motivated by what we did in the first one, Panchi and I partnered up again.
- We actually had initial ideas before the microchallenge week, which is basically to design products from the materials we developed from the first microchallenge.
- It took a sharp turn when the requirements of this challenge were revealed. Now we had to think of something that had to do with intelligences - which we did not consider before. It was disappointing to say the least, to change the direction that we were taking. We were supposed to take the opportunity to to slowly build the ideas and prototypes for each of our master thesis project.
- In the end, we did something still to be proud of. Presenting it in the Design Dialogues proved that it’s an eye-catching piece. It's hypnotizing and it create an easy way to start a conversation about ocean trash/plastics.