import React, { Component } from 'react';

class Box extends Component {
  render(){
    return (
      <div style={{ border: '1px solid #03F', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  render(){
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article 
        author= 'Cristopher'
        date= {new Date().toLocaleDateString()}
        title= 'Articulo de la prop children'
        >
          <p>El contenido lo envolvemos dentro del componente Article</p>
          <strong>Y mantiene las etiquetas</strong>
        </Article>
      </div>
    );
  }
}

export default App;
