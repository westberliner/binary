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

// Schema
Schema = new SimpleSchema({
  question: {
    type: String,
    label: "Questions"
  },
  answer: {
    type: Boolean,
    label: "Answer",
    optional: true,
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
