import React , { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Carousel from 'react-elastic-carousel';
import './App.css';
import fire from './fire';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id_value:"",
      def_value : "",
      isFlipped: false,
      text:'success',
      word1: 'Word 1',
      def1: 'Definition 1',
      word2: 'Word 2',
      def2: 'Definition 2',
      word3: 'Word 3',
      def3: 'Definition 3',
      word4: 'Word 4',
      def4: 'Definition 4',
      word5: 'Word 5',
      def5: 'Definition 5',
      word6: 'Word 6',
      def6: 'Definition 6',
      word7: 'Word 7',
      def7: 'Definition 7',
      word8: 'Word 8',
      def8: 'Definition 8',
      word9: 'Word 9',
      def9: 'Definition 9',
      word10: 'Word 10',
      def10: 'Definition 10',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange_def = this.handleChange_def.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
    this.handleSubmit5 = this.handleSubmit5.bind(this);
    this.handleSubmit6 = this.handleSubmit6.bind(this);
    this.handleSubmit7 = this.handleSubmit7.bind(this);
    this.handleSubmit8 = this.handleSubmit8.bind(this);
    this.handleSubmit9 = this.handleSubmit9.bind(this);
    this.handleSubmit10 = this.handleSubmit10.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleChange_def(event) {
    this.setState({def_value: event.target.value});
  }
  handleChange_id(event) {
    this.setState({id_value: event.target.value});
  }
  handleSubmit1(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word1);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }

  handleSubmit2(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word2);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }

  handleSubmit3(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word3);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({

      def_value: "",
    })
    event.preventDefault();
  }

  handleSubmit4(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word4);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit5(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word5);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit6(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word6);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit7(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word7);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit8(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word8);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit9(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word9);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit10(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.word10);
    fire.database().ref('messages').push(this.state.def_value);
    this.setState({
      def_value: "",
    })
    event.preventDefault();
  }
  handleSubmit(event) {
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.id);
    event.preventDefault();
  }


  render(){
    return (
      <div>
      <Carousel itemsToScroll={1} itemsToShow={1}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word1}</h1>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit1}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word2}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit2}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word3}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">

            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit3}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word4}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit4}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word5}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">

            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit5}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word6}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit6}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word7}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">

            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                    <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit7}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word8}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">

            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                    <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit8}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word9}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">

            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit9}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word10}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h1><b>Definition</b></h1>
            <input type ="text" onChange={this.handleChange_def} id="inputText" class="resizedTextbox"/>
              <br/>
                      <p><b>Please DO NOT edit again once you click "Save"</b></p>
                      <button onClick={this.handleSubmit10}> Save </button>
                      <p></p>
            <button onClick={this.handleClick}>Click to flip</button>
            <p><b>Please submit your ID and click "Finish all" if all definitions are filled</b></p>
            <h4><b>Your ID</b></h4>
            <input type ="text" onChange={this.handleChange_id} id="inputText"/>
            <button onClick={this.handleSubmit}>Finish all</button>
          </div>
        </div>
      </ReactCardFlip>

</Carousel>

      </div>
    )
  }
}

export default App;
