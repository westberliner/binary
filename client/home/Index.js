Template.Index.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('current_questions');
  });
});

Template.Index.helpers({
  questions: () => {
    return Questions.find({});
  }
});
