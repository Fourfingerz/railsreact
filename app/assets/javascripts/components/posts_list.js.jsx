/** @jsx React.DOM **/

var PostsList = React.createClass({
  getInitialState: function() {
	return { posts: this.props.initialPosts };
  },

  render: function() {
	var posts = this.state.posts.map(function(post) {
		return <Post key={post.id} post={post} />;
	});

	return (
	  <div className="posts">
	    {posts}
	  </div>
	);
  }
});

window.PostsList = PostsList;

// Without this `if` I'll get an error from server renderer
if (typeof module !== 'undefined' && module.exports) {
  module.exports = React.createFactory(HelloWorld);
}