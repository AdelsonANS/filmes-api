import React, { Component } from 'react';
import api from './api';
import './style.css';


class App extends Component {
  state = {
    filmes:[],
  }
  
  async componentDidMount(){
    const response = await api.get('avengers');
    //console.log(response.data);
    this.setState({filmes: response.data})
  }

  render(){
    const { filmes } = this.state;
    const num = "asda";
    
    return(
      <div>
        <h1>Listar os filmes</h1>
        {console.log(filmes)}
        {filmes.map(filme=>(
          <li key={filme.show.id} >
            <h2>
              <strong>Título :</strong>
              {filme.show.name}
            </h2>
            <p>{filme.show.url}</p>
            
              <img src={filme.show.image.original} alt="capa filme" className="capa"/>
            
          </li>
        ))}
      </div>

    );
  }
}

export default App;
