Exec.allowClientCalls = true;
if (Meteor.isClient) {
  Template.hello.helpers({
        'console' : function() {
          //return "done!";
          return Exec.Console.find();
          } 
    });
 Template.hello.events({
    'submit .hello':function(event)
    {
       var cmd = event.target.hello.value;
        Meteor.call('exec',cmd);
        event.target.hello.value="";
        return false;
    }
 });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
