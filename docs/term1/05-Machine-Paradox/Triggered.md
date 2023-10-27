---
title: Triggered
---

``` c
#define BUTTON_COUNT 10 // number of buttons
#define COMBOBREAKER_COUNT 2 // number of buttons needed to be on to solve. THIS SHOULD BE  1 < n < BUTTON_COUNT
#define LED_PIN 13
#define LED_PIN_R 6
#define LED_PIN_G 9
#define LED_PIN_B 10
#define EXT_LIGHT_PIN 11
#include "Arduino.h"
#include "DFRobotDFPlayerMini.h"

#if (defined(ARDUINO_AVR_UNO) || defined(ESP8266))   // Using a soft serial port
#include <SoftwareSerial.h>
SoftwareSerial softSerial(/*rx =*/4, /*tx =*/5);
#define FPSerial softSerial
#else
#define FPSerial Serial1
#endif

/** Setup for buttons **/
const uint8_t buttonPins [BUTTON_COUNT] = {A0, A1, A2, A3, A4, A5, 2, 3, 7, 8}; // for 10 buttons
//const uint8_t buttonPins [BUTTON_COUNT] = {A0, A1, A2, A3}; // for 4 buttons

int buttonReadOuts [BUTTON_COUNT];
int lastButtonReadOuts [BUTTON_COUNT];
int combobreaker[BUTTON_COUNT];
int buttonStatuses [BUTTON_COUNT];

bool unlocked = false;
bool backdoor_unlock = false;

int randomizerIndex;
int randNumber1 = 0;
int temp;

int led_pulse = 0;
int pulse_rate = 15;
int pulse_direction = 1;
/** End setup for buttons **/

/** Setup for speakers **/
DFRobotDFPlayerMini myDFPlayer;
void printDetail(uint8_t type, int value);
int playIndex = 1;
int maxPlayIndex = 17;
/** End Setup for speakers **/

void setup()
{
  Serial.begin(19200);
  pinMode(LED_PIN, OUTPUT);
  pinMode(LED_PIN_R, OUTPUT);
  pinMode(LED_PIN_G, OUTPUT);
  pinMode(LED_PIN_B, OUTPUT);
  pinMode(EXT_LIGHT_PIN, OUTPUT);

  for(int i = 0; i < BUTTON_COUNT; i++)
  {
    pinMode(buttonPins[i], INPUT_PULLUP);
    buttonReadOuts[i] = 1;
    lastButtonReadOuts[i] = 1;
    buttonStatuses[i] = -1;
    if (i < COMBOBREAKER_COUNT)
    { combobreaker[i] = 1;} else 
    { combobreaker[i] = -1;}
  }

  randomSeed(analogRead(0));
  randomizerIndex = 0;
  digitalWrite(LED_PIN, HIGH);
  unlocked = false;

  // speakers
  #if (defined ESP32)
    FPSerial.begin(9600, SERIAL_8N1, /*rx =*/D3, /*tx =*/D2);
  #else
    FPSerial.begin(9600);
  #endif

  Serial.begin(115200);
  Serial.println();
  Serial.println(F("DFRobot DFPlayer Mini Demo"));
  Serial.println(F("Initializing DFPlayer ... (May take 3~5 seconds)"));
  
  if (!myDFPlayer.begin(FPSerial, /*isACK = */true, /*doReset = */true)) {  //Use serial to communicate with mp3.
    Serial.println(F("Unable to begin:"));
    Serial.println(F("1.Please recheck the connection!"));
    Serial.println(F("2.Please insert the SD card!"));
    while(true){
      delay(0); // Code to compatible with ESP8266 watch dog.
    }
  }
  Serial.println(F("DFPlayer Mini online."));
  
  myDFPlayer.volume(30);  //Set volume value. From 0 to 30
  myDFPlayer.play(1);  //Play the first mp3
}

void loop()
{
  resetCombo(); 

  for(int i = 0; i < BUTTON_COUNT; i++) 
  {
    buttonReadOuts[i] = digitalRead(buttonPins[i]);
  }

    printButtonStatuses();
    Serial.println(unlocked);

    unlocked = false;
    for(int i = 0; i < BUTTON_COUNT; i++)
    {
      if(combobreaker[i] == buttonStatuses[i])
      {
        unlocked = true;
      } else 
      {
        unlocked = false;
        break;
      }
    }

    if(unlocked)
    {
      lightsOff(); // solved! shut down the machine
    } else
    {
      // keep LED pulsing
      if(led_pulse + pulse_rate < 5 || led_pulse + pulse_rate > 250)
      {
        pulse_rate = -1*pulse_rate;
      }
      led_pulse = led_pulse + pulse_rate;
      analogWrite(LED_PIN_R, led_pulse);
      analogWrite(LED_PIN_G, led_pulse);
      analogWrite(LED_PIN_B, led_pulse);
      digitalWrite(EXT_LIGHT_PIN, LOW);

      for(int i = 0; i < BUTTON_COUNT; i++)
      {
          // when a button is pressed
          if(buttonReadOuts[i] == 1 && lastButtonReadOuts[i] == 0)
          {
            if(i == 1)
            {
              digitalWrite(EXT_LIGHT_PIN, HIGH);
            }

            blinkFast(); // red error lights
            pulse_rate = pulse_rate + 10; // increase fade rate
            buttonStatuses[i] = -1*buttonStatuses[i];
            if(playIndex == maxPlayIndex)
            {
              playIndex = 0;
            } else
            {
              playIndex = playIndex + 1;
            }
            myDFPlayer.play(playIndex);
          }
      }

    for(int i = 0; i < BUTTON_COUNT; i++) {
      lastButtonReadOuts[i] = buttonReadOuts[i];
    }
  }

  for(int i = 0; i < BUTTON_COUNT; i++)
  {
    if(buttonReadOuts[i] == 0)
    {
      backdoor_unlock = true;
    } else 
    {
      backdoor_unlock = false;
      break;
    }
  }

  if(backdoor_unlock)
  {
    for(int i = 0; i < BUTTON_COUNT; i++)
      {
        buttonReadOuts[i] = 1;
        lastButtonReadOuts[i] = 1;
        buttonStatuses[i] = -1;
      }
      randomSeed(analogRead(0));
      randomizerIndex = 0;
      digitalWrite(LED_PIN, LOW);
      delay(2000);
      digitalWrite(LED_PIN, HIGH);
      unlocked = false;
      backdoor_unlock = false;
  }
  
  delay(200);
}

void resetCombo() {
  while (randomizerIndex < BUTTON_COUNT) {                                 //10 iterations
    randNumber1 = random(0,BUTTON_COUNT);
    temp = combobreaker[randNumber1];                    //temporary integer 
    combobreaker[randNumber1] = combobreaker[randomizerIndex];    //swapping the values
    combobreaker[randomizerIndex] = temp;                    //swapping the values
    randomizerIndex++;
    if (randomizerIndex == BUTTON_COUNT) {
      printresults();
    }
  }
}

void printresults() {
  Serial.println(combobreaker[0]);
  Serial.println(combobreaker[1]);
  Serial.println(combobreaker[2]);
  Serial.println(combobreaker[3]);
}

void printButtonStatuses() {
  for(int i = 0; i < BUTTON_COUNT; i++)
  {
    Serial.print(i);
    Serial.print(": ");
    Serial.print(buttonStatuses[i]);
    Serial.print(", ");
    Serial.println(combobreaker[i]);
  }
}

void blinkFast()
{
  for(int i=0; i < 5; i++)
  {
    analogWrite(LED_PIN_R, led_pulse);
    analogWrite(LED_PIN_G, 0);
    analogWrite(LED_PIN_B, 0);

    delay(50);

    analogWrite(LED_PIN_R, 0);
    analogWrite(LED_PIN_G, 0);
    analogWrite(LED_PIN_B, 0);

    delay(50);
  }
}

void lightsOff()
{
  digitalWrite(LED_PIN, LOW);
  analogWrite(LED_PIN_R, 0);
  analogWrite(LED_PIN_G, 0);
  analogWrite(LED_PIN_B, 0);
  digitalWrite(EXT_LIGHT_PIN, HIGH);
}
```