import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrieveAmilcars, deleteAmilcar } from "../../../conection/amilcars/actions";

class AmilcarList extends Component {

 componentDidMount() {

   this.props.retrieveAmilcars();

 }

 removeAmilcar = (id) => {

   this.props.deleteAmilcar(id).then(() => {

     this.props.retrieveAmilcars();

   });

 };

 render() {

   const { amilcars } = this.props;
   console.log(amilcars.data);
   return (

     <div className="list row">

       <div className="col-md-6">

         <h4>Amilcar List</h4>

         <div>

           <Link to="/add-amilcar">

             <button className="button-primary">Add amilcar</button>

           </Link>

         </div>

         <table className="u-full-width">

           <thead>

             <tr>
                 <th>ID</th>

               <th>Nome</th>

               <th>Email</th>

               <th>Data</th>

               <th>Actions</th>

             </tr>

           </thead>

           <tbody>

             {/* {amilcars &&

               amilcars.map(

                 ({ id, nome, email, data,}, i) => (

                   <tr key={i}>

                    <td>{id}</td>

                     <td>{nome}</td>

                     <td>{email}</td>

                     <td>{data}</td>

                     

                     <td>

                       <button onClick={() => this.removeAmilcar(id)}>

                         Delete

                       </button>

                       <Link to={`/edit-amilcar/${id}`}>

                         <button>Edit</button>

                       </Link>

                     </td>

                   </tr>

                 )

               )}
 */}
           </tbody>

         </table>

       </div>

     </div>

   );

 }

}

const mapStateToProps = (state) => {

 return {

   amilcars: state.amilcars,

 };

};

export default connect(mapStateToProps, { retrieveAmilcars, deleteAmilcar })(AmilcarList);