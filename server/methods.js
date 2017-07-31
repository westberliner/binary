import { check } from 'meteor/check';

Meteor.methods({
  changeAnswerOfQuestion(id) {
    check(id, String);
    var question = Questions.findOne({_id: id});
    if(question) {
      Questions.update(id, { $set: { answer: !question.answer }});
    }
  },
  incrementPollAnswerOfQuestion(id, index) {
    check(id, String);
    check(index, Number);
    var question = Questions.findOne({_id: id}),
        answerIndex = (index == 1) ? 'no': 'yes';
    if(question) {
      question.pollAnswer[index].count++;
      var count = question.pollAnswer[index].count;
      Questions.update({_id:id, 'pollAnswer.answer': answerIndex}, { $set: { "pollAnswer.$.count": count}});
    }
  }
});
