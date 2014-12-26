angular.module('starter.services', [])
.factory('myService', function($q, $rootScope) {

    Ceres = null;
    Tasks = null;
    tasksRQ = null;
    var count = 0;

    function getName() {
        return "hi there!";
    }

    function getHistory() {
    	if (tasksRQ) {
	        console.log("getHistory: ", tasksRQ.result.length);
    	    return tasksRQ.result;
        }
    }

    function on(callback) {
    	if (tasksRQ) {
	        tasksRQ.on("change", function () {
	            $rootScope.$apply(function () {
	                callback();
	            });
	        });
        }
    }

    function connect() {
        Ceres = new Asteroid("ptracker.meteor.com");
        Tasks = Ceres.getCollection("history");
        Ceres.subscribe("allHistory");
        tasksRQ = Tasks.reactiveQuery({});
    }

    return {
        connect : connect,
    	getName: getName,
        on: on,
        getHistory: getHistory
    };
})