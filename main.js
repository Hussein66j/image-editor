let img = document.getElementById('img');
let upload = document.getElementById('upload');
let imgBox = document.getElementById('imgBox');
let satBtn = document.getElementById('satBtn');
let conBtn = document.getElementById('conBtn');
let briBtn = document.getElementById('briBtn');
let sepBtn = document.getElementById('sepBtn');
let graBtn = document.getElementById('graBtn');
let bluBtn = document.getElementById('bluBtn');
let hueBtn = document.getElementById('hueBtn');
let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');
let tag = document.getElementById('tag');
let val = document.getElementById('val');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');




function resetValue(){
  ctx.filter = 'none';
  ctx.drawImage(img,0,0,canvas.height,canvas.width);
  saturate.value = '100';
  contrast.value = '100';
  brightness.value = '100';
  sepia.value = '0';
  grayscale.value = '0';
  blur.value = '0';
  hueRotate.value = '0';
}

window.onload = function(){
  imgBox.style.display = 'none';
};
upload.onchange = function(){
  resetValue();
  imgBox.style.display = 'block';
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function(){
      img.src = file.result;
  };
  img.onload = function(){
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img,0,0,canvas.height,canvas.width);
    img.style.display = 'none';
  };
};

satBtn.addEventListener('click',()=>{
  saturate.style.display = 'block';
  contrast.style.display = 'none';
  brightness.style.display = 'none';
  sepia.style.display = 'none';
  grayscale.style.display = 'none';
  blur.style.display = 'none';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Saturate: ';
});
conBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'block';
  brightness.style.display = 'none';
  sepia.style.display = 'none';
  grayscale.style.display = 'none';
  blur.style.display = 'none';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Contrast: ';
});
briBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'none';
  brightness.style.display = 'block';
  sepia.style.display = 'none';
  grayscale.style.display = 'none';
  blur.style.display = 'none';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Brightness: ';
});
sepBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'none';
  brightness.style.display = 'none';
  sepia.style.display = 'block';
  grayscale.style.display = 'none';
  blur.style.display = 'none';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Sepia: ';
});
graBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'none';
  brightness.style.display = 'none';
  sepia.style.display = 'none';
  grayscale.style.display = 'block';
  blur.style.display = 'none';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Grayscale';
});
bluBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'none';
  brightness.style.display = 'none';
  sepia.style.display = 'none';
  grayscale.style.display = 'none';
  blur.style.display = 'block';
  hueRotate.style.display = 'none';
  tag.innerHTML = 'Blur';
});
hueBtn.addEventListener('click', () => {
  saturate.style.display = 'none';
  contrast.style.display = 'none';
  brightness.style.display = 'none';
  sepia.style.display = 'none';
  grayscale.style.display = 'none';
  blur.style.display = 'none';
  hueRotate.style.display = 'block';
  tag.innerHTML = 'Hue rotate';
});

let filters = document.querySelectorAll('input');
filters.forEach(filter => {
  filter.addEventListener('input', function(){
    //img.style.filter = ``//
    ctx.filter = `
        
      saturate(${saturate.value}%)
      contrast(${contrast.value}%)
      brightness(${brightness.value}%)
      sepia(${sepia.value}%)
      grayscale(${grayscale.value})
      blur(${blur.value}px)
      hue-rotate(${hueRotate.value}deg)
      `
    ctx.drawImage(img,0,0,canvas.height,canvas.width);
  });
});

download = document.getElementById('download');
download.onclick = function(){
  download.href = canvas.toDataURL('image/jpeg');
}
