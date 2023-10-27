---
title: Triggered
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQgerue-YyYcLRTJawOIUOKAdpP8VhmkDQ1P8AJZucsmuzc5au8tcNQx4a_o2y-S16UtLv_2gLkXZEA/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

??? "Current code for LED strip"
    ```
    // A basic everyday NeoPixel strip test program.

    // NEOPIXEL BEST PRACTICES for most reliable operation:
    // - Add 1000 uF CAPACITOR between NeoPixel strip's + and - connections.
    // - MINIMIZE WIRING LENGTH between microcontroller board and first pixel.
    // - NeoPixel strip's DATA-IN should pass through a 300-500 OHM RESISTOR.
    // - AVOID connecting NeoPixels on a LIVE CIRCUIT. If you must, ALWAYS
    //   connect GROUND (-) first, then +, then data.
    // - When using a 3.3V microcontroller with a 5V-powered NeoPixel strip,
    //   a LOGIC-LEVEL CONVERTER on the data line is STRONGLY RECOMMENDED.
    // (Skipping these may work OK on your workbench but can fail in the field)

    #include <Adafruit_NeoPixel.h>
    #ifdef __AVR__
    #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
    #endif

    // Which pin on the Arduino is connected to the NeoPixels?
    // On a Trinket or Gemma we suggest changing this to 1:
    #define LED_PIN    2
    // How many NeoPixels are attached to the Arduino?
    #define LED_COUNT 50
    // PIN to expect trigger
    #define TRIGGER_PIN 3

    // Declare our NeoPixel strip object:
    Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);
    // Argument 1 = Number of pixels in NeoPixel strip
    // Argument 2 = Arduino pin number (most are valid)
    // Argument 3 = Pixel type flags, add together as needed:
    //   NEO_KHZ800  800 KHz bitstream (most NeoPixel products w/WS2812 LEDs)
    //   NEO_KHZ400  400 KHz (classic 'v1' (not v2) FLORA pixels, WS2811 drivers)
    //   NEO_GRB     Pixels are wired for GRB bitstream (most NeoPixel products)
    //   NEO_RGB     Pixels are wired for RGB bitstream (v1 FLORA pixels, not v2)
    //   NEO_RGBW    Pixels are wired for RGBW bitstream (NeoPixel RGBW products)


    unsigned int state;
    int colorWipeRate;

    // setup() function -- runs once at startup --------------------------------

    void setup() {
    // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
    // Any other board, you can remove this part (but no harm leaving it):
    #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
    clock_prescale_set(clock_div_1);
    #endif
    // END of Trinket-specific code.

    strip.begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
    strip.show();            // Turn OFF all pixels ASAP
    strip.setBrightness(50); // Set BRIGHTNESS to about 1/5 (max = 255)

    pinMode(TRIGGER_PIN, INPUT);
    state = 0;
    colorWipeRate = 50;
    //attachInterrupt(digitalPinToInterrupt(TRIGGER_PIN),isr,RISING); // trigger ISR on rising edge of master voltage signal
    }


    // loop() function -- runs repeatedly as long as board is on ---------------

    void loop() {
    // Fill along the length of the strip in various colors...
        colorWipe(strip.Color(255,   0,   0), colorWipeRate); // Red
        colorWipe(strip.Color(  0, 255,   0), colorWipeRate); // Green
        colorWipe(strip.Color(  0,   0, 255), colorWipeRate); // Blue

        colorWipe(strip.Color(255,   0,   0), colorWipeRate); // Red
        colorWipe(strip.Color(  0, 255,   0), colorWipeRate); // Green
        colorWipe(strip.Color(  0,   0, 255), colorWipeRate); // Blue

        colorWipeRate = colorWipeRate - 2;
        if(colorWipeRate <= 2)
        {
        colorWipeRate = 2;
        }
    }

    void isr() {
    state = 1;
    }


    // Some functions of our own for creating animated effects -----------------

    // Fill strip pixels one after another with a color. Strip is NOT cleared
    // first; anything there will be covered pixel by pixel. Pass in color
    // (as a single 'packed' 32-bit value, which you can get by calling
    // strip.Color(red, green, blue) as shown in the loop() function above),
    // and a delay time (in milliseconds) between pixels.
    void colorWipe(uint32_t color, int wait) {
    for(int i=0; i<strip.numPixels(); i++) { // For each pixel in strip...
        //if(digitalRead(TRIGGER_PIN) == 1) // if signal is 0, lights should turn on
        //{
        strip.setPixelColor(i, color);         //  Set pixel's color (in RAM)
        strip.show();                          //  Update strip to match
        //}
        delay(wait);                           //  Pause for a moment 
    }
    }

    // Theater-marquee-style chasing lights. Pass in a color (32-bit value,
    // a la strip.Color(r,g,b) as mentioned above), and a delay time (in ms)
    // between frames.
    void theaterChase(uint32_t color, int wait) {
    for(int a=0; a<10; a++) {  // Repeat 10 times...
        for(int b=0; b<3; b++) { //  'b' counts from 0 to 2...
        strip.clear();         //   Set all pixels in RAM to 0 (off)
        // 'c' counts up from 'b' to end of strip in steps of 3...
        for(int c=b; c<strip.numPixels(); c += 3) {
            strip.setPixelColor(c, color); // Set pixel 'c' to value 'color'
        }
        strip.show(); // Update strip with new contents
        delay(wait);  // Pause for a moment
        }
    }
    }

    // Rainbow cycle along whole strip. Pass delay time (in ms) between frames.
    void rainbow(int wait) {
    // Hue of first pixel runs 5 complete loops through the color wheel.
    // Color wheel has a range of 65536 but it's OK if we roll over, so
    // just count from 0 to 5*65536. Adding 256 to firstPixelHue each time
    // means we'll make 5*65536/256 = 1280 passes through this loop:
    for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {
        // strip.rainbow() can take a single argument (first pixel hue) or
        // optionally a few extras: number of rainbow repetitions (default 1),
        // saturation and value (brightness) (both 0-255, similar to the
        // ColorHSV() function, default 255), and a true/false flag for whether
        // to apply gamma correction to provide 'truer' colors (default true).
        strip.rainbow(firstPixelHue);
        // Above line is equivalent to:
        // strip.rainbow(firstPixelHue, 1, 255, 255, true);
        strip.show(); // Update strip with new contents
        delay(wait);  // Pause for a moment
    }
    }

    // Rainbow-enhanced theater marquee. Pass delay time (in ms) between frames.
    void theaterChaseRainbow(int wait) {
    int firstPixelHue = 0;     // First pixel starts at red (hue 0)
    for(int a=0; a<30; a++) {  // Repeat 30 times...
        for(int b=0; b<3; b++) { //  'b' counts from 0 to 2...
        strip.clear();         //   Set all pixels in RAM to 0 (off)
        // 'c' counts up from 'b' to end of strip in increments of 3...
        for(int c=b; c<strip.numPixels(); c += 3) {
            // hue of pixel 'c' is offset by an amount to make one full
            // revolution of the color wheel (range 65536) along the length
            // of the strip (strip.numPixels() steps):
            int      hue   = firstPixelHue + c * 65536L / strip.numPixels();
            uint32_t color = strip.gamma32(strip.ColorHSV(hue)); // hue -> RGB
            strip.setPixelColor(c, color); // Set pixel 'c' to value 'color'
        }
        strip.show();                // Update strip with new contents
        delay(wait);                 // Pause for a moment
        firstPixelHue += 65536 / 90; // One cycle of color wheel over 90 frames
        }
    }
    }

    ```
??? "Current code for Arduino, it's messy, I know"
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
    myDFPlayer.pause();
    digitalWrite(EXT_LIGHT_PIN, HIGH);
    }
    ```