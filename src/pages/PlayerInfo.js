import React, { Component, Fragment } from "react";
import { Container, Spinner, Table } from "reactstrap";
import axios from "axios";
//import "./styles/styleSearch.css";
import "./styles/styleAuthentication.css";
import Navbar from "../components/Navbar";

class PlayerInfo extends Component {
  state = {
    loading: true,
    person: "null",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://api-kel3.herokuapp.com/infoPlayer/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ person: res.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
      <div className="search-container">
        <Container className="p-4">
          <div>
            {this.state.loading || !this.state.person ? (
              <Spinner color="dark" className="mx-auto d-block">
                {" "}
                Loading...{" "}
              </Spinner>
            ) : (
              <div>
                <h1 className="text-center">Profile {this.state.person.username}</h1>
                <Table borderless responsive striped size="sm">
                  <tbody>
                    <tr>
                      <th className="th-lg">Username</th>
                      <td>: {this.state.person.username}</td>
                    </tr>
                    <tr>
                      <th>Nama</th>
                      <td>: {this.state.person.nama}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>: {this.state.person.email}</td>
                    </tr>
                    <tr>
                      <th>Umur</th>
                      <td>: {this.state.person.umur}</td>
                    </tr>
                    <tr>
                      <th>Score</th>
                      <td>: {this.state.person.score}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        
        </Container>
        </div>
      </Fragment>
    );
  }
}

export default PlayerInfo;
