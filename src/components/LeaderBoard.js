import React, { Component, Fragment } from 'react';
import { Container, Table, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";

import boardStyle from './LeaderBoard.module.css'


class LeaderBoard extends Component {
  state = {
    loading: true,
    person: []
  }
  async componentDidMount() {
    const url = "https://api-kel3.herokuapp.com/infoPlayer/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.sort((a, b) => b.score - a.score) , loading: false
    })
  }

  render() {
    return (
      <Fragment>
        <Container className='p-4'>
          
            {this.state.loading || !this.state.person ? (
              <Spinner color="dark" className="mx-auto d-block"> Loading... </Spinner>
            ) :
              (
                <div>
                <h1 className="text-center">LeaderBoard</h1>
                <Table dark responsive hover striped>
                  <thead>
                    <tr>
                      <th> Rank </th>
                      <th> Username </th>
                      <th> Score </th>
                    </tr>
                  </thead>
                  <tbody>

                    {this.state.person.map( (person, index) => (
                    <tr key={person.user_id}>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>
                        <Link to={`/playerInfo/${person.user_id}`} className={boardStyle.link}>{person.username}</Link>
                      </td>
                      <td>{person.score}</td>
                    </tr>
                  )
                  )}
                    
                  </tbody>
                </Table>

                </div>
              )
            }
          
        </Container>
      </Fragment>
     );
  }
}


export default LeaderBoard;
