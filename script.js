document.addEventListener("DOMContentLoaded", () => {
  const cv = document.getElementById("canvas");
  const ctx = cv.getContext("2d");

  const text = document.getElementById("text");
  const font = document.getElementById("font");
  const color = document.getElementById("color");
  text.onchange = render;
  font.onchange = render;
  color.onchange = render;

  function render() {
    document.fonts.load(`10px "${font.value}"`, text.value).then(() => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = color.value;
      ctx.font = `80pt "${font.value}"`;
      ctx.textAlign = "center";
      ctx.fillText(text.value, 64, 104, 104);
    });
  }

  render();

  // document.getElementById("space").onchange = e => {
  //   const space = e.target.value;
  //   cv.style.letterSpacing = space;
  //   render();
  // };

  document.getElementById("convert").onclick = () => {
    const image = new Image();
    image.src = cv.toDataURL();
    const w = window.open("", "_blank");
    w.document.write(image.outerHTML);
  };
});