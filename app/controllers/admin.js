import Ember from 'ember';

export default Ember.Controller.extend({
  model() {
    return this.store.createRecord('story')
  },
  actions: {
    createStory() {
      this.store.createRecord('story', {
        name: this.formName,
        thumbnailImg: this.formThumbnailImg,
        storyDescription: this.formStoryDescription,
        creator: this.formCreator});
    }
  }
});
