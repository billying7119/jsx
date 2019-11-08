//import React
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

//create component
const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author='Sam' 
            timeAgo="Today at 4:45PM" 
            content="I am fine" 
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        <CommentDetail 
          author='Jane' 
          timeAgo="Today at 2:00PM" 
          content="Good Job"
          avatar={faker.image.avatar()} />
        <CommentDetail 
          author='Bill' 
          timeAgo="Yesterday at 5:00PM" 
          content="How have you been?"
          avatar={faker.image.avatar()} />
      </div>
    );
};

//take the component and show it on screen
ReactDOM.render(
  <App />, document.querySelector('#root')  
);