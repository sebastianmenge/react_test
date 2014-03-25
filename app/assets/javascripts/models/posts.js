var PostModel = Backbone.Model.extend({
  default: {
    id: null,
    title: null,
    body: null,
    created_at: null,
  }
});

var PostsCollection = Backbone.Collection.extend({
  url: "posts.json"
});
