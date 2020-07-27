import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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

  // static PropTypes = {
  //   author: PropTypes.string
  // }

  render(){
    const { author, children, date, title } = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
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
