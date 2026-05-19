# Focus-Then-Contact project page

This is a static promotional website generated from the uploaded manuscript assets and the FTC demo video repository.

## How to use

1. Put your opening/background video at:

```text
assets/video/hero_background.mp4
```

The current HTML already points to this path. If the file is missing, the hero section falls back to `assets/img/socket.jpg` as the poster image.

2. Open `index.html` in a browser, or deploy the folder to GitHub Pages / a web server.

3. The demo videos are loaded from the public repository via jsDelivr CDN:

```text
https://cdn.jsdelivr.net/gh/qiaoguanren/FTC-website@main/<video>.mp4
```

To make the site fully offline, download those mp4 files and replace the video `src` paths in `index.html` with local files under `assets/video/`.

## Referenced demo videos

- hang_keychain.mp4
- open_door.mp4
- charger_process.mp4
- toy.mp4
- USB_easy.mp4
- USB_hard.mp4
- USB_OOD1.mp4
- USB_OOD2.mp4
- USB_training.mp4
- hang_training.mp4
