import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Container, Row, Col, Alert } from 'react-bootstrap';

import {
  BoxContext,
  BoxMovie,
  BoxVotation,
  Layout,
  BoxMovieResult,
} from './styles';

class VotationMovie extends React.Component {
  state = {
    second: [],
    error: '',
    winner: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    try {
      const movies = this.props.location.state.movies;

      this.setState({ winner: movies[0] });
      this.setState({ second: movies[1] });
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          'Erro com os resultados dos filmes por favor voltepágina de votação e tente novamente',
      });
    }
  };

  handleVote = async (event) => {
    event.preventDefault();
  };

  renderError() {
    return <Alert variant="danger">{this.state.error}</Alert>;
  }

  render() {
    const { winner, second } = this.state;
    return (
      <Container>
        <Layout>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <BoxContext>
                <h3>Campeonato de Filmes</h3>
                <p>Resultado Final</p>
                <h3>__</h3>
                <p>
                  Veja o resultado final do Campeontato de filmes de forma
                  simples e rápida
                </p>
              </BoxContext>
              <BoxVotation>
                {this.state.error && this.renderError()}
                <div className="row">
                  <div className="p-2 flex-shrink-1 bd-highlight">
                    <BoxMovie>1º</BoxMovie>
                  </div>
                  <div className="p-2 flex-grow-1 bd-highlight">
                    <BoxMovieResult>{winner.titulo}</BoxMovieResult>
                  </div>
                </div>
              </BoxVotation>
              <BoxVotation>
                <div className="row">
                  <div className="p-2 bd-highlight">
                    <BoxMovie>2º</BoxMovie>
                  </div>
                  <div className="p-2 flex-grow-1 bd-highlight">
                    <BoxMovieResult>{second.titulo}</BoxMovieResult>
                  </div>
                </div>
              </BoxVotation>
            </Col>
          </Row>
          <Col>
            <Row>
              <Link className="button" to="/">
                Voltar para votação
              </Link>
            </Row>
          </Col>
        </Layout>
      </Container>
    );
  }
}

export default withRouter(VotationMovie);
