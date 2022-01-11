import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveTestes, deleteTeste } from "../../../conection/testes/actions";

class ListTeste extends Component {

  componentDidMount() {

    this.props.retrieveTestes();

  }

  removeTeste = (id) => {

    this.props.deleteTeste(id).then(() => {

      this.props.retrieveTestes();

    });

  };

  render() {

    const { testes } = this.props;


    return (

      <div className="list row">

        <div className="col-md-6">

          <h4>Teste List</h4>

          <div>

            <Link to="/add-teste">

              <button className="button-primary">Add teste</button>

            </Link>

          </div>

          <table className="u-full-width">

            <thead>

              <tr>

                <th>Name</th>

                <th>Email</th>

                <th>Telefone</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {testes &&

                testes.map(

                  ({ id, Name, email, tel }, i) => (

                    <tr key={i}>
                      <td>{id}</td>
                      
                      <td>{Name}</td>

                      <td>{email}</td>

                      <td>{tel}</td>


                      <td>

                        <button onClick={() => this.removeTeste(id)}>

                          Delete

                        </button>

                        <Link to={`/edit-teste/${id}`}>

                          <button>Edit</button>

                        </Link>

                      </td>

                    </tr>

                  )

                )}

            </tbody>

          </table>

        </div>

      </div>

    );

  }

}

const mapStateToProps = (state) => {

  return {

    testes: state.testes,

  };

};

export default connect(mapStateToProps, { retrieveTestes, deleteTeste })(ListTeste);