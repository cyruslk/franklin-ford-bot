import React, { Component } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
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
    fetch('/main-data')
      .then(res => res.json())
      .then(data => this.setState({ data }));
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
        console.log(ele.masterData.twitterData.twitter_id_str);
        const pdfName = ele.masterData.randomItemFormatted.source_filenamepdf;
        const iframeLink = `https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1560226145/franklin_ford/${pdfName}`;
        return (
          <div
            className="entries_cell"key={index}>
            <hr />
              <span className="span_title">1 -- Input/Source of the generated data: </span>
              <h1><span>Published in:</span> {ele.masterData.randomItemFormatted.source_publishedin}</h1>
              <h1><span>Physical address: </span> {ele.masterData.randomItemFormatted.source_lieu}</h1>
            <hr />
              <span className="span_title">2 -- File (PDF): </span>
              <Iframe url={iframeLink}
                width="450px"
                height="450px"
                display="initial"
                position="relative"
              />
              <hr />
            <span className="span_title">2 -- Generated Tweet: </span>
              <div className="centerContent">
              <div className="selfCenter">
                <TwitterTweetEmbed
                  tweetId={ele.masterData.twitterData.twitter_id_str}
                />
                </div>
              </div>
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
      </div>
    )
  }
}

export default App;
