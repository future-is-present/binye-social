import React, { Component } from 'react'
import profilePicture from '../resources/cala.png'
import {Link, BrowserRouter} from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import './ProfileList.css'
import { InfiniteLoader, List } from 'react-virtualized';

const baseUri = 'http://localhost:8080/getProfiles';




const LoadingIndicator = () => <div className="loading-indicator">Loading...</div>;

class SingleProfile extends Component {

  render(){
  return (
    <Link to="/profile">
    <button className="profile_list" onClick={this.clickProfile}>
      <Container>
      <h4> Name</h4>
      <div id="uno">
        <img id="profile-pic" src={profilePicture}  alt="logo" />
      </div>
      <div id="dos">
      <h5>Nationality</h5>
       <br/>
      <h4> Bulgaria</h4>
      <br/>
      <Button primary as={Link} to="/profile">
            .
        </Button>
          <br/>
          <p id="description">I’m originally from Nigeria and I had been living in Libya for five years when the war broke out. 
            I had a good life: I was working as a tailor and I earned enough to send money home to loved ones. 
            But after the fighting started, people like us – black people – became very vulnerable, because all the 
            youth had weapons and they knew we had money in our houses and they could rob us. If you went out for something 
            to eat, a gang would stop you and ask if you supported them. They might be rebels, they might be government, 
            you didn’t know.   </p>

      </div>
      </Container>
    </button>
    </Link>
  );
  }
}


const backend = {
  async get(symbol) {
    return await fetch(`${baseUri}`).then(r => r.json()).then(data => {
      console.log('data length', data.length); // this works
      return data;
    });
    
  },
};

const list = [];


function isRowLoaded ({ index }) {
  return !!list[index];
}

// async function loadMoreRows ({ startIndex, stopIndex }) {
//   return fetch(`${baseUri}?startIndex=${startIndex}&stopIndex=${stopIndex}`)
//     .then(response => {
//       list.push(response)
//     })
// }

async function loadMoreRows ({ startIndex, stopIndex }) {
  return await fetch(`${baseUri}`)
    .then(response => {
        list.push(response)
    })
}

function rowRenderer ({ key, index, style}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

export default class ProfileList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      result: []
    };
    this.fetchData();
    this.clickProfile = this.clickProfile.bind(this); 
  }

  clickProfile (event) {
    this.props.onSubmit(event.target.value)
  }
  
  fetchData = async () => {
    const { symbol } = this.props;

    const result = await backend.get('all');

    if (result != null) {
      this.setState({
        ...result,
        isLoaded: true,
      });
    }
    console.log(this.state.result)
  };

  render() {

    const { isLoaded, symbol, latestPrice } = this.state;
    console.log('isloaded', isLoaded)
    return isLoaded
      ? <SingleProfile symbol={symbol} price={latestPrice} />
      : 
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={this.state.result.length}
      >
      {({ onRowsRendered, registerChild }) => (
        <List
          height={20}
          onRowsRendered={onRowsRendered}
          ref={registerChild}
          rowCount={this.state.result.length}
          rowHeight={20}
          rowRenderer={rowRenderer}
          width={300}
        />
      )}
    </InfiniteLoader>
  }

    
}

