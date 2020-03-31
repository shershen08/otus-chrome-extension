chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
     
      if (request.type === "setvideotimer"){

        const video = document.querySelector('video')

        if(video) {
            video.currentTime = request.time
        }
        
        sendResponse({message: "DONE"});
      }
    });