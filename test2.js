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
        var str="meteor deploy "+cmd+".meteor.com";
        var url=cmd+".meteor.com";
        Session.set('appurl',url);
        Meteor.call('exec',str);
        event.target.hello.value="";
        return false;
    },
     'click .go':function(){
           document.location.href=Session.get('appurl');
        }
 });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
