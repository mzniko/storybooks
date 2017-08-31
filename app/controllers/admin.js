import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createStory() {
      this.get('store').createRecord('story', {
        name: this.model.name,
        thumbnailImg: this.model.thumbnailImg,
        storyDescription: this.model.storyDescription,
        creator: this.model.creator});
    }
  }
});
