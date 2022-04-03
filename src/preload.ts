// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { Titlebar, Color } = require("custom-electron-titlebar");

let titlebar;

window.addEventListener("DOMContentLoaded", () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#121212"),
    itemBackgroundColor: Color.fromHex("#121212"),
    svgColor: Color.WHITE,
    // icon: path.join(__dirname, "/assets/images", "/icon.svg"),
    //menu: null // = do not automatically use Menu.applicationMenu
  });
});
