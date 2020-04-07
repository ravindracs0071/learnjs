"use strict";
var obj1 = {
    prop1: "Property of obj1",
    prop2: 12345,
    func1: function(param1) { 
       console.log(this);
       console.log('prop1 value : '+ this.prop1 + " : Parameter 1: "+param1);
    } 
};

obj1.func1();