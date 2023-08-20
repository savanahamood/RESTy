// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
    <div className="formdiv">
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
          placeholder="please enter the URL"
            name='url'
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit' className="custom-btn btn-5">GO!</button>
        </label>
      
      </form>  
      <section className='selectMethod'>
          <label className='methods'>
          <span onClick={()=>setMethod('GET')} id='get' className="custom-btn btn-5">GET</span>
          <span onClick={()=>setMethod('POET')} id='post' className="custom-btn btn-5">POST</span>
          <span onClick={()=>setMethod('PUT')} id='put' className="custom-btn btn-5">PUT</span>
          <span onClick={()=>setMethod('DELET')} id='delete' className="custom-btn btn-5">DELETE</span>
        </label>
        </section>
    
    </div>
   
     
    </>
  );
}

export default Form;