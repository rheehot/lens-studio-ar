// Use in "Initialized' event in order to display or hide elements when the front/back camera is selected
// Add as script component to your object and then check the options you need

//@input SceneObject target

//@input bool activeOnFront

//@input bool activeOnBack

script.createEvent('CameraBackEvent').bind(function (eventData)

{
    script.target.enabled = script.activeOnBack;
});

script.createEvent('CameraFrontEvent').bind(function (eventData)

{
    script.target.enabled = script.activeOnFront;
});