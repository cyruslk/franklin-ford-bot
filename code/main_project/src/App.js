import React, { Component } from 'react';
import { Tweet } from 'react-twitter-widgets';
import Iframe from 'react-iframe'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      value: "both"
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/main-data')
      .then(res => res.json())
      .then(data => this.setState({ data }));
      // format all the data here
  }

  listAllEntries = () => {
    if(!this.state.data){
      return (
        <div>loading</div>
      )
    }else{
      const data = this.state.data;
      const mapedData = data
      .map((ele, index) => {
        const pdfName = ele.masterData.randomItemFormatted.source_filenamepdf;
        const iframeLink = `https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1560226145/franklin_ford/${pdfName}`;
        return (
          <div
            className="entries_cell"key={index}>
              <Tweet tweetId={984439194184536064}/>
            <hr />
              <h1>{ele.masterData.randomItemFormatted.source_publishedin}</h1>
              <h1>{ele.masterData.randomItemFormatted.source_lieu}</h1>
              <h1>{ele.masterData.twitterData.twitter_id}</h1>
              <h1>{ele.masterData.twitterData.twitter_text}</h1>
              <h1>{ele.masterData.twitterData.twitter_created_at}</h1>

                <Iframe url={iframeLink}
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>

          </div>
        )
      })
      console.log(mapedData);
      return (
        <section className="main_data_section">
          {mapedData}
        </section>
      )
    }
  }

  listOnlyTweets = () => {
    if(!this.state.data){
      return (
        <div>loading</div>
      )
    }else{
      const data = this.state.data;
      const mapedData = data
      .map((ele, index) => {
        return (
          <div className="entries_cell"key={index}>
            <h1>{ele.masterData.twittedData.twitter_id}</h1>
            <h1>{ele.masterData.twittedData.twitter_text}</h1>
            <h1>{ele.masterData.twittedData.twitter_created_at}</h1>
          </div>
        )
      })
      return (
        <section className="main_data_section">
          {mapedData}
        </section>
      )
    }
  }


  renderCorrectView = () => {
    if(this.state.value === "both"){
      return this.listAllEntries();
    }else if(this.state.value === "reddit"){
      return;
    }else if(this.state.value === "tweets"){
      return this.listOnlyTweets();
    }
  }

  chatSection = () => {
    return (
      <section className="chat_section">
        <div>
          <h1>Dialogflow bot...</h1>
          <input />
        </div>
      </section>
    )
  }

  change = (event) => {
       this.setState({
         value: event.target.value
       });
   }

  filterSection = () => {
    return (
      <section className="filter_section">
      <select
        onChange={this.change}
        value={this.state.value}>
        <option value="both">Filter: both</option>
        <option value="tweets">Filter: Tweets</option>
        <option value="reddit">Filter: Reddit</option>
      </select>
      <select>
        <option value="both">Sort: random</option>
        <option value="both">Sort: ascending</option>
        <option value="both">Sort: descending</option>
      </select>
      <input placeholder={"AUTOCOMPLETE..."}/>
      </section>
    )
  }

  render() {
    return(
      <div>
         {this.listAllEntries()}
         {this.chatSection()}
         {this.filterSection()}
      </div>
    )
  }
}

export default App;
