
export default function ProcessKeyRelease(event, key) {


  if (key.preventDefault) 
    event.preventDefault();

  if (!key._enabled)
    return;
  
  // set key properties
  key.status = false;
  key.press = false;
  key.release = true;

  // set press time duration
  key.releaseTime = event.timeStamp;
  key.pressDuration = key.releaseTime - key.pressTime;
  key.releaseDuration = 0;

}