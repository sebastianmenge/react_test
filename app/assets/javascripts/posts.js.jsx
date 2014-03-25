/** @jsx React.DOM */

function timeAgo(UTCdate) {
  var date = new Date(UTCdate);
  return date.getFullYear();
}

PostView = React.createBackboneClass({
    onClickStuff: function() {
        this.getModel().save();
    },
    render: function () {
        var post = this.getModel();
        return <div>
            <h2 onClick={this.onClickStuff}>SAVE!!</h2>
            <p>{timeAgo(post.get('created_at'))}</p>
            <a href={post.get('url')}>{post.get('title')}</a>
            <div>{post.get('body')}</div>
        </div>;
    }
});

PostsView = React.createBackboneClass({
    render: function () {
        return <div className="posts">
            {this.getModel().map(function (post) {
                return <PostView model={post}/>
            })}
        </div>;
    }
});

var posts = new PostsCollection(gon.posts);
var postsView = PostsView({model: posts});

var App = {};
App.start = function() {
  React.renderComponent(postsView, document.getElementById('app'));
};
