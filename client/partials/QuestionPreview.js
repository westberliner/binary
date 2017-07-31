Template.QuestionPreview.events({
  'click .question': function(e, template) {
    var id = template.data._id;
    location.href = 'question/' + id;
  }
});
Template.QuestionPreview.helpers({
  getPollAnswerYes: function() {
    return this.pollAnswer[0].count;
  },
  getPollAnswerNo: function() {
    return this.pollAnswer[1].count;
  }
});
