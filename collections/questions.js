// Init Collection
Questions = new Mongo.Collection('questions');

// todo modify access
Questions.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  }
});

pollAnswerSchema = new SimpleSchema({
  answer: {
    type: String,
    label: 'Answer',
    optional: true
  },
  count: {
    type: Number,
    label: 'Count',
    optional: true
  }
});


// Schema
Schema = new SimpleSchema({
  question: {
    type: String,
    label: "Questions"
  },
  isPoll: {
    type: Boolean,
    label: "Poll",
    optional: true
  },
  answer: {
    type: Boolean,
    label: "Answer",
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  pollAnswer: {
    type: [pollAnswerSchema],
    label: 'Poll Answer',
    optional: true,
    autoValue: function() {
      if(this.isInsert) {
        return [{answer: 'yes', count: 0}, {answer:'no', count: 0}];
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  author: {
    type: String,
    label: "Author",
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Questions.attachSchema(Schema);
