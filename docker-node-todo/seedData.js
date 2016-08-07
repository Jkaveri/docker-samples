var Todo = require('./app/models/todo');
var loremIpsum = require('lorem-ipsum');
var total = 10;

var title;
var todo;

console.log('inserting todos...');
for (var i = 0; i < total; i++) {
    title = loremIpsum({
        count: (Math.random() * 10) + 1
    });
    todo = Todo.create({
        text: title,
        done: false
    });
}
console.log('todo inserted!');