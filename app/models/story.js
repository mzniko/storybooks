import DS from 'ember-data';

// import Inflector from 'ember-inflector';

// const inflector = Inflector.inflector;

// inflector.irregular('story', 'stories');

export default DS.Model.extend({
  
  // Relationships
  pages: DS.hasMany('page'),

  // Attributes
  name: DS.attr(),
  thumbnailImg: DS.attr(),
  storyDescription: DS.attr(),
  creator: DS.attr(),
});
