
// IIFE - immediately invoked function expression
(function () {


    // pattern : revealing module patter

    var createWorker = function () {

        // private
        var workCount = 0;

        var task1 = function () {
            workCount += 1;
            console.log("task1");
        };

        var task2 = function () {
            workCount += 1;
            console.log("task2");
        };

        // public
        return {
            job1: task1,
            job2: task2
        };

    };


    // concept
    var worker = createWorker();
    worker.job1();
    worker.job2();

}());