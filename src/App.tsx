import * as React from 'react';
import './App.css';
import Feed from './Feed';

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

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    let post: PostActivity = { name: 'Title', description: 'ssss', kind: 'post' };
    let follow: FollowActivity = { followedBy: 'Josh', kind: 'follow', description: 'My Description' };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h2>Feed</h2>
          <Feed activity={post} />
          <Feed activity={follow} />
        </p>
      </div>
    );
  }
}

export default App;
