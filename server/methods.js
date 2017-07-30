import { check } from 'meteor/check';

Meteor.methods({
  changeAnswerOfQuestion(id) {
    console.log(id);
    check(id, String);
    var question = Questions.findOne({_id: id});
    if(question) {
      Questions.update(id, { $set: { answer: !question.answer }});
    }
  }
});
