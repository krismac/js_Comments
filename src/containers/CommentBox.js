import React, {Component} from 'react';
import CommentList from '../components/CommentList.js';

class CommentBox extends Component {
 constructor(){
    super()
      this.state = {
        comments:[
          {id: 1,
          author:'Nyalls',
          text:'can we talk about Brexit yet?'
          },
          {id: 2,
          author:'Craig',
          text:'no politics!!'
          },
        ]
    };

 }


  render() {
    return (
        <CommentList data={this.state.comments}/>
    );
  }
}

export default CommentBox;
