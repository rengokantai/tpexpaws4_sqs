var aws = require('aws-sdk');

var queue = new aws.SQS({
	region:'us-east-1',
	params:{
		QueueUrl:'https://sqs.us-east-1.amazonaws.com/441268/ke'
	}
});

var order = {
	id:Math.floor(Math.random()*100)+50,
	name:'Ke',
	items:[
		{id:1,price:10},
		{id:2,price:25}
	],
	total:100
};

queue.sendMessage({
	MessageBody:JSON.stringify({order:order})
},function(err,data){
	if(err)console.log(err);
	else console.log(data);
});
