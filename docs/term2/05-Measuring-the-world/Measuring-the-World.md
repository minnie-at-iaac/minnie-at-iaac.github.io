[Hackmd Page](https://hackmd.io/@usaestoparadescargar/ryR2UAlsp)


## CONNECT WITH OTHERS
> 🧐: G stand for what? Gangstar?
> 
> 😇: NO! G stand for GEEK	


:::info
 :nerd_face: Welcome to the **Geek Team:** 
 
Qianyin Du/ Ana Lozano/ Jorge Muñoz/ Dhrishya Ramadass/ Emmanuelle Pangilinan
:::
 ![WhatsApp 图像2024-02-08于11.39.54_b33bc488](https://hackmd.io/_uploads/Sks4eEzip.jpg)
 
 
 ![WhatsApp 图像2024-02-08于11.40.03_c4cae48e](https://hackmd.io/_uploads/SyQSx4Gop.jpg)



### Brainstorming Our Area of Interest

![01](https://hackmd.io/_uploads/ByHFRXzia.png)



We define connectivity as shared spaces, whether physical or within cyberspace. Therefore, we decided to measure these common spaces by finding the different WiFi points in the Poblenou neighborhood. To detect the different WiFis in the neighborhood, we decided to use the Barduino.







### Project Goals: 

**Leading Inquiry:** 
How does the availability of shared spaces, both physically and digitally, impact community connectivity and collaboration?

**Objective:** 

#### *We want to be more :revolving_hearts:*CONNECTE*D:revolving_hearts:.*

To detect  community connectivity and collaboration by assessing the accessibility and quality of shared spaces, both online and offline.


**Question(s):** 

1. Are there more spaces to be connected?
2. Is it harder to be more connected?

**Hypotesis:**

Our hypothesis is that by employing the Barduino to detect WiFi points in the Poblenou neighborhood and utilizing multiple reference points, we will uncover varying levels of connectivity within the area. We anticipate finding a diverse range of WiFi networks, including both open and password-protected networks, reflecting the diverse usage patterns and security practices of residents and businesses in the neighborhood. Additionally, we expect that certain locations will exhibit higher concentrations of active WiFi points, indicating areas of higher connectivity and potential community engagement.

## From hypotesis to Data:  
Measurement of Connectivity in the Poblenou Neighborhood using (B)arduino:

### Tool Selected: (B)arduino 

![image](https://hackmd.io/_uploads/SyNbH4zsp.png)



### What is MQTT?

MQTT is a lightweight, publish-subscribe, machine to machine network protocol for message queue/message queuing service. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth, such as in the Internet of Things (IoT).

![image](https://hackmd.io/_uploads/rJT2yHGsa.png)

:::warning

![image](https://hackmd.io/_uploads/Bk3be4zsT.png)

:::

## Tool Usage Documentation: 
## How?

```mermaid
graph LR

Location --> PressButton  --> CollectData-- .txt/.csv -->SaveFile

```


![03](https://hackmd.io/_uploads/SkFgAXfip.png)

#### GPS: 
Using a GPS module to record the geographical coordinates of each reference point along with the number of active WiFis present.

To measure the location, we use  [GPS Logger](https://gpslogger.app/) to save location data to a GPX file.

![image](https://hackmd.io/_uploads/rJGAkVMsp.png)


![image](https://hackmd.io/_uploads/rkHkxEfi6.png)

We transfer the GPX data to an Excel document, and then automatically place them on the map.

At first, we chose different locations in Poblenou that we considered to be gathering spots and hubs of connectivity.

Chosen sites: 
https://docs.google.com/spreadsheets/d/111GFvo0vGYvQlp7txalfSbmiVxKoMT-6N0aR0naJF_Q/edit#gid=0 
Google Sheet 

![image](https://hackmd.io/_uploads/r19ijLMjp.png)

1. Valkiria Hub Space: Coworking Space  https://www.google.com/maps/place/Valkiria+Hub+Space/@41.4020517,2.1948465,19z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a317ad56bf65:0x60e0b5fdcde837a4!8m2!3d41.3984358!4d2.1966413!15sCgEqWgMiASqSAQ9jb3dvcmtpbmdfc3BhY2XgAQA!16s%2Fg%2F1pp2xb9tn?entry=ttu 
![image alt](https://lh3.googleusercontent.com/pw/ABLVV86CxPUX5jIz4Yij83W3zhgvM_Ls-P0eYHnAngvatOAV9Sxqe8pmLZYQBnXI528qfn6p92iyjJCNnyV-TxzsPdl0rz4AipwCki7otFvrx1J7eNqN6ho7l1c1btM6eZ7Dop-b3lhDwjHqSod7BA_FUoqy=w1650-h1238-s-no-gm?authuser=0)

2. The High Classa Weed Club. https://www.google.com/maps/place/The+High+Class+Weed+Club/@41.3964526,2.1930222,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3c76a1da56d:0x4c450c8a65486b33!8m2!3d41.4004298!4d2.1987498!15sCgEqkgENY2FubmFiaXNfY2x1YuABAA!16s%2Fg%2F11stszx_zm?entry=ttu
![image alt](https://lh3.googleusercontent.com/pw/ABLVV85Xl8jbmfSGaHfZWgMYwcQrqwiiCm2RmUYcopvwzDGj1B-VFC0CLaCyzGzm5vbhhl8IbWJQ56kOSHQfDMLMWZYyUIxyXYtBEkZy1jZmT5dwNJk-mtiscgmYcWmotVSte58LOb-AqmxDA9jeTOBb9lvQ=w1880-h1410-s-no-gm?authuser=0)


3. Museu Can Framis: The Museu Can Framis is located right in the Superblock of Roc Boronat street. https://www.google.com/maps/place/Museu+Can+Framis/@41.3964517,2.1929792,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12ba54637b105e0f:0xdff4d9dfe310fbeb!8m2!3d41.4028922!4d2.1949848!15sCgEqWgMiASqSARFtb2Rlcm5fYXJ0X211c2V1beABAA!16s%2Fm%2F0_82y64?entry=ttu
![image alt](https://lh3.googleusercontent.com/pw/ABLVV84UMuDOMWH1GLbBEUPT396gk52U_rqsR7ppV_jA9H16KPcQIlju5sMxC4EFeMX2gSzScIxUKu__XNZIfkyHSmHm_FLUl_RLC2FMUFVV9BYG7o6ZoGKvNWG6EKSgMsRLc0dxE2jz2L5TsDe_YDdENane=w1880-h1410-s-no-gm?authuser=0) 

4. Padel 7Glories: https://www.google.com/maps/place/Padel+7+Glories/@41.3964507,2.1929363,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3878c9125c9:0x2b28bbfd1aa1e4e8!8m2!3d41.3997581!4d2.1934906!15sCgEqkgELc3BvcnRzX2NsdWLgAQA!16s%2Fg%2F11rhqmpgxg?entry=ttu
![image alt](https://lh3.googleusercontent.com/pw/ABLVV87aIqPMVPs563CihRzsTyzlhWaYW8kOZmDYyrzkBfxamNN-_Ll3kHeMZgQNnlgJKTuc-XxL5nOaPephPRi_zXRM1nnOjOSqvgKKB_86vh65xAmsoKswgvXwc0eNNozWK5qseC7WGpDVKSTa_9CgXKO1=w1880-h1410-s-no-gm?authuser=0) 

5. Razzmatazz: Night Club https://www.google.com/maps/place/Sala+Razzmatazz/@41.3964507,2.1929363,15z/data=!3m1!5s0x12a4a319059f6311:0x5b2405114fe539dc!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3190e0640b5:0x40f9d8fe93a98ca!8m2!3d41.3977323!4d2.1911108!15sCgEqWgMiASqSAQVkaXNjb-ABAA!16s%2Fg%2F1211jj9f?entry=ttu 

![image alt](https://lh3.googleusercontent.com/pw/ABLVV854kDo4qqgcTFGCYTkc9-clIP1mWklzpncQ348yZoD6_QAVefFbrZz_G8b0jE8F7RGuA1juJLGtg5hZvRNsH3k-52XHfghhC2sQVbtgcmVhz008WN5TYRtos62m-lv1QjQ7RsP4xw0igG5P89JBimTA=w1880-h1410-s-no-gm?authuser=0) 

6. CrossFit https://www.google.com/maps/place/CrossFit/@41.3964507,2.1929363,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a31c1c8c5d69:0x6a02904adaa40213!8m2!3d41.3951733!4d2.1885328!15sCgEqkgEOZml0bmVzc19jZW50ZXLgAQA!16s%2Fg%2F11b7gdl31_?entry=ttu

![image alt](https://lh3.googleusercontent.com/pw/ABLVV86yJel7V5Rjuv5y9gClfskAmNCRo-0KaAljU8n5vS3EzohcOVKM71J20I4xbKjJRkMVTdcBEC0VtQCNtD8LKFRVyaaaOylnvHUKJcr72RFjEC6AtMOegyDvtx7_WeaPbMFpahbFAJQMM9I_pjuHuXUJ=w1880-h1410-s-no-gm?authuser=0) 

7. Jardins Creu Casas: Green Space. https://www.google.com/maps/place/Jardines+de+Creu+Casas/@41.3964507,2.1929363,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3088a35b065:0xc997c40479c5856a!8m2!3d41.3938117!4d2.1940245!15sCgEqkgEGZ2FyZGVu4AEA!16s%2Fg%2F11hw8n3425?entry=ttu 

![image alt](https://lh3.googleusercontent.com/pw/ABLVV87-uSUYcr34VoVEMAYj8eQfuu9MLoO1tBI4LFmyEKHm5J0orrfFalEg8Bt0eKmX6nt2wlnS2aQybC9k5lvxuijBOwSNFDKQfUjDi1wvLfSOSMdXy7FpXZ0XEc0E2gQKU30PRu6z5OfYLVhmYjarwgr0=w1277-h719-s-no-gm?authuser=0)

8. Gabby's Brunch. https://www.google.com/maps/place/Gabby's+Brunch/@41.3964507,2.1929363,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3ab39a36091:0x7ae4a7c6c2076807!8m2!3d41.39517!4d2.196452!15sCgEqWgMiA
![image alt](https://lh3.googleusercontent.com/pw/ABLVV87dxfQUyduLxG6nbi5f23HFVND2ZoHIftYgzoW0wdXbdaX2z4jZen-1JGSpUcd2xAYXP0LODv5gPzXPKMgDZcb2Cehb_YCHQGc-73cTbXLVYc5Ev6nmlzDxBF1Rop_WudNnJo8ModR5YbCqEyeT7-0X=w1277-h957-s-no-gm?authuser=0)


9. Casal Barri Vila Olimpica. https://www.google.com/maps/place/CASAL+DE+BARRIO+DE+LA+VILLA+OL%C3%8DMPICA/@41.3964507,2.1929363,15z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a313891644db:0x7e712a72a83f7f9!8m2!3d41.3952484!4d2.2007677!15sCgEqkgEPY3VsdHVyYWxfY2VudGVy4AEA!16s%2Fg%2F11c5rpxcrn?entry=ttu
![image alt](https://lh3.googleusercontent.com/pw/ABLVV84M663h2Wkz0SAEArLnz2_ZslkoJVd3_C23wRo_iH5NISPmnjUxF06PkGn_Cxm9L8zAJF6ZSEE8jAlzwV48tlGWfozuC9pgwUUMX5YMqcG4hDslBkarphYrVxzM9Gbg1MfT9_yqq_kn4ujk0lH3894x=w1600-h1200-s-no-gm?authuser=0)

10. Iaac.
https://www.google.com/maps/place/Instituto+de+Arquitectura+Avanzada+de+Catalu%C3%B1a/@41.3995993,2.188879,15.25z/data=!4m11!1m3!11m2!2sBBqUhq-jTjatJLi8DfQ_9A!3e3!3m6!1s0x12a4a3176486d56b:0x43da322368b6ed68!8m2!3d41.3966908!4d2.1943796!15sCgEqkgETYXJjaGl0ZWN0dXJlX3NjaG9vbOABAA!16s%2Fm%2F02q7y2c?entry=ttu 

![image alt](https://lh3.googleusercontent.com/pw/ABLVV87t_kCwzGkDlgHZKaiQHFtLM2oyKr5NcrFxDNuvHjO1CgtOMCgLxpJgMKoFycJnL8TxjFfT8y0d8-JTleVVEuG_W6Ic-QufZBTroMedib03xftLJ_c8kqKzOYEHO4vmYpqsFWrcfTE2fV5PJZCr6fxx=w1280-h960-s-no-gm?authuser=0)

GIF:
![image alt](https://lh3.googleusercontent.com/pw/ABLVV86gHqcSp5tN467suSYn2ESefslzkJyUxoCAabOE40yRp0xwIPVcL7IMFYXG0wBrPRM4zd0jZWjMc1Q1uFEXTkOdHW-JbTuvtrO_1puBC-8lrPan_8C5TetJFQrYB7CdZaaVNMGS__Z9gfb7jFsxsAqD=w1650-h1238-s-no-gm?authuser=0)

#### WiFi signal measurement: 
We used the [(B)arduino](https://fablabbcn-projects.gitlab.io/electronics/barduino-docs/GettingStarted/pinout/)  to scan and measure the amount of WiFi signal in the environment, detecting how many signals are open or closed.



*welding our (B)arduino:* 

![02](https://hackmd.io/_uploads/HkxOCXzsT.png)


**Development of code for Barduino:** 

##### Data sensing and transmitting code

![Screenshot 2024-02-08 181543](https://hackmd.io/_uploads/Hy7t2FGj6.png)

![Working Barduino gif](https://lh3.googleusercontent.com/pw/ABLVV87iKa3yvonaMgJnp1H8M6F4bAQBoxY0bo-KHX--Mk7JvIlkiIgIrJOj0A-SNUmrYfGS3hnYhdYpEPTU4nzuSzaSx1iDxT6obaTuUNg_FFRU2bvcTo239YssnLDp_cP2nI2Zi3RUqpgU9aWOBp_I9g_t=w480-h270-s-no-gm)

We used Barduino to find and count the available Wifi networks, and how many are open/have no password.

The data is sent via the smart citizen MQTT Broker.

```
#include <WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_NeoPixel.h>

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN 38  // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 1  // Popular NeoPixel ring size

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

const char* ssid = "";
const char* password = "";
WiFiClient wifiClient;

const char* mqttBroker = "mqtt-staging.smartcitizen.me";
const char* mqttClientName = "futurehacker";
const char* mqttUser = "fablabbcn102"; // MQTT User Authentification
const char* mqttPass = ""; // MQTT Password Authentification
const char* topic = "lab/mdef/realg";
PubSubClient mqttClient(wifiClient);

unsigned long values[] = {0,0,0,0};
String direction[] = {"U","R","D","L"};

String dir = "";

unsigned long threshold = 40000;

void mqttConnect() {
  
  while (!mqttClient.connected()) {
  
    Serial.print("Attempting MQTT connection...");
  
    if (mqttClient.connect(mqttClientName, mqttUser, mqttPass)) {
  
      Serial.println("connected");
      mqttClient.publish(topic, mqttClientName);
      
  
    } else {
      
      Serial.print("failed, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    
    }
  }
}

/*void callback(char* topic, byte* payload, unsigned int length) {
  String incommingMessage = "";
  for (int i = 0; i < length; i++){
    incommingMessage += (char)payload[i];
  } 
  Serial.println("Message arrived[" + String(topic) + "]" + incommingMessage);
}*/

void setup() {
  
  Serial.begin(115200);
  Serial.println("Hello");
  pixels.begin();  // INITIALIZE NeoPixel strip object (REQUIRED)

  pixels.setPixelColor(0, pixels.Color(150, 0, 0));
  pixels.show();  // Send the updated pixel colors to the hardware.

  // Connect to wifi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  pixels.setPixelColor(0, pixels.Color(0, 0, 150));
  pixels.show();  // Send the updated pixel colors to the hardware.
  
  // MQTT setup
  mqttClient.setServer(mqttBroker, 1883);  
}

/*void loop() {
  // Check if we are still connected to the MQTT broker
  if (!mqttClient.connected()) {
    mqttConnect();
  }

  // Let PubSubClient library do his magic
  mqttClient.loop();

  // Add your publish code here --------------------
  unsigned long max = 0;
  int max_i;
  for (int i=0; i<4; i++){
    values[i] = touchRead(i+4);
    //Serial.print(values[i]);
    //Serial.print(",");
    if (values[i] > max){
      max = values[i];
      max_i = i;
    }
  }
  //Serial.println("");
  if (max > threshold && dir != direction[max_i]){
    dir = direction[max_i];
    Serial.println(dir);
    mqttClient.publish(draw_topic, dir.c_str());
  }
  else if (max <= threshold){
    dir="";
  }
}*/

char msg[50];
bool msgSent = false;

void loop() {
  if(!msgSent) {
    // Check if we are still connected to the MQTT broker
    if (!mqttClient.connected()) {
      mqttConnect();
    }

    // Let PubSubClient library do his magic
    mqttClient.loop();
    // scan for existing networks:
    Serial.println("Scanning available networks...");
    String numNetworks = listNetworks();

    numNetworks.toCharArray(msg, 50);
    Serial.print("sending to broker: ");
    Serial.println(numNetworks);

    mqttClient.publish(topic, msg);

    pixels.setPixelColor(0, pixels.Color(0, 150, 0));
    pixels.show();  // Turn light green when data is sent

    msgSent = true;
  }
}

String listNetworks() {
  int numFree = 0;
  // scan for nearby networks:
  Serial.println("** Scan Networks **");
  int numSsid = WiFi.scanNetworks();
  if (numSsid != -1) {
    // print the list of networks seen:
    Serial.print("number of available networks:");
    Serial.println(numSsid);

    // print the network number and name for each network found:
    for (int thisNet = 0; thisNet < numSsid; thisNet++) {
      Serial.print(thisNet);
      Serial.print(") ");
      Serial.print(WiFi.SSID(thisNet));
      Serial.print("\tSignal: ");
      Serial.print(WiFi.RSSI(thisNet));
      Serial.print(" dBm");
      Serial.print("\tEncryption: ");
      Serial.println(WiFi.encryptionType(thisNet) ? 0: "Goodpeople");
      if(WiFi.encryptionType(thisNet) == 0) {
        numFree++;
      }
    //printEncryptionType(WiFi.encryptionType(thisNet));
    }
  } 
    //while (true);
    return String(numSsid) + "," + String(numFree);
  }
```


#### Data storage:

![Screenshot 2024-02-08 181838](https://hackmd.io/_uploads/B1LGpYMjT.png)


We used python to merge the metadata of the location of the reference points with the metadata of the active WiFi points, including information about which ones are open.

##### Data receiving code
While the barduino is sensing the data, we have a running python script that is subscribed to the same smart citizen broker so that we can "catch" the data in real-time.

We then save it into a .csv file.

```
import paho.mqtt.client as mqtt
import time
import calendar
from datetime import datetime

current_GMT = time.gmtime()

mqtt_broker = "mqtt-staging.smartcitizen.me"
mqtt_user = "fablabbcn102"
mqtt_pass = ""
broker_port = 1883

def on_connect(client, userdata, flags, rc):
   print(f"Connected With Result Code: {rc}")

def on_message(client, userdata, message): 
   print(f"Message Recieved: {message.payload.decode()}")
   time_stamp = calendar.timegm(current_GMT)
   now = datetime.now() # current date and time
   date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
   print("Current timestamp:", now)
   # Do something here with the message

   if(message.payload.decode() != "futurehacker"):
      # Opening a file
      file1 = open('myfile.csv', 'a')
      file2 = open('myfile.txt', 'a')
      newdata = message.payload.decode() + "," + date_time + "\n"
 
      # Writing a string to file
      file1.write(newdata)
      file2.write(newdata)

      # Closing file
      file1.close()
      file2.close()


def on_log(client, obj, level, string):
    print (string)

def read_sensor():
	sensor_reading = "Hola hola caracola"
	return sensor_reading

client = mqtt.Client(clean_session = True)
client.on_connect = on_connect
client.on_message = on_message
client.on_log = on_log
client.username_pw_set(username = mqtt_user, password = mqtt_pass)
client.connect(mqtt_broker, broker_port)


# Subscribe to your topic here
client.subscribe("lab/mdef/realg", qos=1)


# Start looping (non-blocking)
client.loop_start()

while True:
	time.sleep(5)
```



#### Data visualization:

We developed an interface to visualize the collected data on a map. We used the Google Maps tool to create a visualization of the analyzed points.


:-1: 



:::warning
### Creating a Map: 
:::





:::success
### References: 
:::
https://youtu.be/RWgyCcnUxPY?si=pwDouL_VC_-BcM-z 
*Video Reference: How to Save Arduino Serial Data to .txt .csv*

https://hackmd.io/i46Hmb2vTcKI6_DIoaxDvQ?view
*GPS Mobile location* 

https://gpslogger.app/ 

https://www.geeksforgeeks.org/writing-to-file-in-python/
*Writing to file in Python*

https://www.programiz.com/python-programming/datetime/strftime#google_vignette
*Strftime*

https://flexiple.com/python/python-timestamp
*Python-timestamp*

https://gitlab.com/fablabbcn-projects
*FablabBCN gitlab*



![WhatsApp 图像2024-02-08于11.40.27_6883f9aa](https://hackmd.io/_uploads/SkxDzVGop.jpg)



