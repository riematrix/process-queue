/**
 * User: Administrator
 * Date: 14-7-13
 * Time: 上午11:17
 */
function Queue(fns){
    this.processes = [];
    if(fns) this.addAll(fns);
}
Queue.prototype = {
    add: function(fn){
        this.processes.push(fn);
        return this;
    },
    addAll: function(fns){
        var processes = this.processes;
        this.processes = Array.prototype.concat.call(processes,fns);
        return this;
    },
    execute: function(callback){
        var processes = this.processes.slice();
        var chain = function(){
            if(processes.length === 0){
                if(typeof callback === "function") callback();
                return;
            }
            var process = processes.shift();
            if(typeof process === "function"){
                process(chain);
            }
        };
        chain();
    }
};
