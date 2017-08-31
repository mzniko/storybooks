export default function() {
  this.namespace = '/api';

  this.get('stories', (schema) => {
    return schema.stories.all();
  });

  this.post('/stories', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).stories;

    return schema.stories.create(attrs);
  });

  // this.get('/story', function() {
  //   return {
  //     data: [{
  //       type: 'story',
  //       id: '1',
  //       attributes: {
  //         name: "A great story",
  //         thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
  //         storyDescription: "It really is a good one",
  //         creator: "Marko Nikolovski",
  //       }
  //     }, {
  //       type: 'story',
  //       id: '2',
  //       attributes: {
  //         name: "A second great story",
  //         thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
  //         storyDescription: "It really is a good one",
  //         creator: "Marko Nikolovski",
  //       }
  //     }, {
  //       type: 'story',
  //       id: '3',
  //       attributes: {
  //         name: "Another great story",
  //         thumbnailImg: "http://i.imgur.com/J8GGRGi.jpg",
  //         storyDescription: "It really is a good one",
  //         creator: "Marko Nikolovski",
  //       }
  //     }]
  //   };
  // });
}
