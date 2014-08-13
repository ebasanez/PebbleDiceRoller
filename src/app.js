var total = 0;
var options = ['d 4','d 6','d 8','d10','d12','d20'];
var selected = 5;
var repeticiones = [0,0,0,0,0,0];
var valores = [4,6,8,10,12,20];
var ultimo = '';

function draw(){
  var body = '';
  for(var index in options){
    body+=repeticiones[index]>9?'':' ';
    body+=repeticiones[index]+' x ';
    body+=options[index];
    body+=selected==index?' <== ':'   ';
    body+='\n';
  }
  body+='Last roll = ' + ultimo;
  simply.setText({
  title: 'Total: '+total, body: body}, true);
}

simply.fullscreen(true);

simply.on('singleClick', function(e) {
  if(e.button == 'select'){
    ultimo = Math.floor(Math.random() * valores[selected]) + 1;
    repeticiones[selected]++;
    total = total + ultimo;
    simply.setText({title: 'Total: ' + total });
  }
  if(e.button == 'up'){
    selected = Math.max(0,selected - 1);
  }
  if(e.button == 'down'){
    selected = Math.min(options.length-1,selected + 1);
  }
  draw();
});

simply.on('longClick', function(e) {
  repeticiones = [0,0,0,0,0,0];
  total = 0;
  draw();
  simply.vibe();
});

draw();
