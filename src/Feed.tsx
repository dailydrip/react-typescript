import * as React from 'react';
import './App.css';

interface FollowActivity {
    kind: 'follow';
    followedBy: string;
    description: string;
}

interface PostActivity {
    kind: 'post';
    name: string;
    description: string;
}

type Activity = FollowActivity | PostActivity;

type Props = {
  activity: Activity
};

const Feed = (props: Props) => {
  const {activity} = props;
  return (
    <div className="App">
      {renderActivity(activity)}
    </div>
  );
};

const Post = (props: {post: PostActivity}) => {
  const {post} = props;
  return <div><h5>Post</h5> {post.name} - {post.description}</div>;
};

const Follow = (props: {follow: FollowActivity}) => {
  const {follow} = props;
  return <div><h5>Follow</h5>Followed by: {follow.followedBy} - {follow.description}</div>;
};

function renderActivity(a: Activity) {
  switch (a.kind) {
    case 'follow': return <Follow follow={a} />;
    case 'post': return <Post post={a} />;
  }
}

export default Feed;
