import { check } from 'meteor/check';

Meteor.publish('question', function(id) {
  check(id, String);
  return Questions.find({
    _id: id
  })
});

Meteor.publish('current_questions', function() {
  return Questions.find({}, {sort: {createdAt: -1}, limit: 20});
});

