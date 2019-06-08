import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/main-data')
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
        console.log(ele.masterData);
        return (
          <div
            className="entries_cell"
            key={index}>
            <h1>bgf:{ele.masterData.initialData.source_publishedin}</h1>
            <h1>bfb:{ele.masterData.initialData.source_lieu}</h1>
            <h1>{ele.masterData.initialData.source_filenamepdf}</h1>
            <h1>{ele.masterData.twittedData.twitter_id}</h1>
            <h1>{ele.masterData.twittedData.twitter_text}</h1>
            <h1>{ele.masterData.twittedData.twitter_created_at}</h1>
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

  filterSection = () => {
    return (
      <section className="filter_section">
      <select>
        <option value="both">Filter: both</option>
        <option value="both">Filter: Tweets</option>
        <option value="both">Filter: Reddit</option>
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
