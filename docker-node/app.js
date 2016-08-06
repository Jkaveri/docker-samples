var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Nodejs development with docker';
});

app.listen(3000);
console.log('listen app on port '+ 3000);