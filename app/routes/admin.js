import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('story');
    // return this.store.createRecord('story');
    // return [{
    //       name: "A great story",
    //       thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
    //       storyDescription: "It really is a good one",
    //       creator: "Marko Nikolovski",
    //     },
    //      {
    //       name: "A second great story",
    //       thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
    //       storyDescription: "It really is a good one",
    //       creator: "Marko Nikolovski",
    //     },
    //      {
    //       name: "Another great story",
    //       thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
    //       storyDescription: "It really is a good one",
    //       creator: "Marko Nikolovski",
    //     }];
  },
  actions: {
  //   createStory() {
  //     let story = this.modelFor(this.routeName);
  //     var self = this;
  //     story.save().catch(function(reason) {
  //     });
  //   }
  }
});
