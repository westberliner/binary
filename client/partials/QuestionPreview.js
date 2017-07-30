Template.QuestionPreview.events({
  'click .question': function(e, template) {
    var id = template.data._id;
    location.href = 'question/' + id;
  }
});
