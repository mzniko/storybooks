import DS from 'ember-data';

export default DS.Model.extend({
  
  // Relationships
  story: DS.belongsTo('story'),

  // Attributes
  video_url: DS.attr(),
  placeholder_img: DS.attr(),
  page_number: DS.attr(),
  chapter_number:DS.attr()
});
