var aws = require('aws-sdk');
var Consumer = require('sqs-consumer');

var app = Consumer.create({
	queueUrl:'https://sqs.us-east-1.amazonaws.com/441268/ke',
	handleMessage:function(message,done){
		var data = JSON.parse(message.Body);
		console.log(data.order.id);
		done();
	}
});

app.on('error',function(err){
	console.err(err);
});

app.start();
