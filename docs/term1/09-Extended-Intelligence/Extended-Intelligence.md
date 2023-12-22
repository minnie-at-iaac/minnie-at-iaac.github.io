## Reflection 
AI progress for me has been crazy fast yet not completely surprising. This seminar has reminded me of when I took a class on machine learning, maybe ten years ago, when there were just a few libraries and we had to code the algorithms. We made a simple classifier then, a face classifier I think, which we had to train for hours in our own machines with datasets that we made ourselves. Comparing the past experience with what we have done in just a few days, I'm amazed on how accessible it has gotten and how new creative ideas emerge from it.

Despite this amusement, I still have mixed feelings about AI. What I find the most problematic is that the big AI's now, like OpenAI and Midjourney, have been trained on stolen data or data without (our) consent. Visual artists have already been affected by the generation of "content"/"art" that has been based on their previous work. It is unfair. 

I don't entirely approve of and agree with the big AI's, but I admit that I use ChatGPT and some image generation AI's sometimes. I'm hesitant every time. The cognitive dissonance has has caused me quite a number of sleepless nights.

Power is still in the hands of a few. It is crucial that we demand for transparency, accountability and democratization of tools and technology, especially AI. 



### How to Embed your Teachable Model in gh-pages
Teachable Machine is a web tool to make machinee learning models. Super cool. https://teachablemachine.withgoogle.com/  

1. Download the model zip file and extract the files (model.json, metadata.json and weights.bin) to a folder in your repository, e.g. in files folder
2. Copy and paste the embed javascript code to your page
3. Replace the URL variable with the path of the extracted files
4. If it is not loading, try adding this line of code before the embed code:
``` html
<meta http-equiv="Permissions-Policy" content="interest-cohort=(), user-id=()" />
```

<meta http-equiv="Permissions-Policy" content="interest-cohort=(), user-id=()" />

## Sample: Detecting if Minnie has glasses on
<button type="button" onclick="init()">Click to start (opens your webcam)</button>
<div id="webcam-container"></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
<script type="text/javascript">
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "/../../files/EI-teachable-machine-01-model/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
</script>



!!! note "It looks something like this"
    ![](../../images/Extended-Intelligence/teaching-machine-output-sample.gif){data-gallery="ei"}