process-queue
=============

simple javascript queue that deal with sequential processing

Usage
=============

1. create an instance of Queue.

        var queue = new Queue();

2. add processes to the instance.

        queue.add(function(next){
            appendResult("first process");
            next();
        }).add(function(next){
            setTimeout(function(){
                appendResult("second process");
                next();
            },1000)
        });
   or pass your processes directly to the construtor:
		var queue = new Queue([
			function(){...},
			function(){...},
		]);

3. run the processes.
		
        queue.execute(function(){
            alert("all done!")
        })
