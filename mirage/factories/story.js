import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.list.random("A great story", "A delightful story", "A shitty story", "A mediocre story", "A wondrous story")();
  },
  thumbnailImg() {
    return faker.image.cats();
  },
  storyDescription() {
    return faker.lorem.paragraph();
  },
  creator() {
    return faker.name.firstName();
  },
});
