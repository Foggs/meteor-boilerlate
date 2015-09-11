Session.setDefault('counter', 0);

Template.hello.helpers({
    comments: function () {
        return data.find();
    },
    
    counter: function () {
        return Session.get('counter');
    }
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
        data.insert({text:'This is comment #' + (data.find().count()+1)});
    }
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});