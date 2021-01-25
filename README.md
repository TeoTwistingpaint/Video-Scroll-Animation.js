# Video-Scroll-Animation.js

Video-Scroll-Animation.js is a simple javascript library that allows video to be played while the user is scrolling.

## Installation

In order to make everything works, you have to import jquery and some other libraries in your project.

If you don't want to download and host jQuery yourself, you can include it from a CDN (Content Delivery Network):

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" integrity="sha512-RvUydNGlqYJapy0t4AH8hDv/It+zKsv4wOQGb+iOnEfa6NnF2fzjXgRy+FDjSpMfC3sjokNUzsfYZaZ8QAwIxg==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
```

Then you have to download the source code and add the file "video-scroll.js" or "video-scroll.min.js" from "dist" folder in your project.

## Usage

Call the **animationStart()** function in yor main javascript file, in the *$( document ).ready()*:

```javascript
$( document ).ready(function() {
    animationStart(8, 15);
});
```
The function can receive two parameters, the **videoDuration** that is the video's duration (in seconds) and the **frameRate** that is the video's frame rate. If not passed, the default value will be _10_ and _25_ respectively.

To make it works, just add the class **video-scroll-container** to the element that contains the video and the class **video-scroll** to the video element:

```html
<div class="intro video-scroll-container">
	<video class="video-scroll" src="video.mp4" muted></video>
</div>
```

## Example

Check out the example: open the **index.html** to see how it works.

You can also add more elements as you can see in the "video-scroll.js" in the sample root folder to make everything more likeable.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.