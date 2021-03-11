import React from 'react';

import { useHistory, withRouter } from 'react-router-dom';

import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import api from '../../services/api';

import { BoxContext, BoxForm, BoxVotation, BoxMovie, Layout } from './styles';

class SelectMovies extends React.Component {
  state = {
    error: '',
    ids: [],
    isLoading: false,
    amount: 0,
    movies: [],
    btnDisable: true,
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    try {
      const response = await api.get('');
      this.setState({ movies: response.data });
    } catch {
      this.setState({ error: 'Erro ao acessar o servidor' });
    }
  };

  handleVote = async (event) => {
    event.preventDefault();
    this.setState({ error: '' });
    const { ids } = this.state;

    if (ids.length === 8) {
      try {
        const idsToSend = { id: ids };
        const response = await api.post('votation', idsToSend);
        this.props.history.push({
          pathname: '/votation',
          state: { movies: response.data },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ error: 'Você precisa escolher 8 filmes' });
    }
  };

  renderError() {
    return <Alert variant="danger">{this.state.error}</Alert>;
  }

  onMovieChange = (event) => {
    const target = event.target;
    this.setState({ error: '' });

    let value = target.value;

    let valuesAmont = this.state.amount;
    let idMovies = this.state.ids;
    let btn = this.state.btnDisable;

    if (target.checked) {
      idMovies.push(value);
      valuesAmont += 1;
    } else {
      const index = idMovies.findIndex((movie) => movie === value);
      idMovies.splice(index, 1);
      valuesAmont -= 1;
    }

    if (valuesAmont > 8) {
      this.setState({ error: 'Você precisa escolher somente 8 filmes' });
      btn = true;
    } else if (valuesAmont <= 8) {
      this.setState({ error: '' });
      btn = true;
    }

    if (idMovies.length === 8) {
      btn = false;
    }
    this.setState({ btnDisable: btn });
    this.setState({ amount: valuesAmont });
    this.setState({ ids: idMovies });
  };

  render() {
    const { amount, movies, btnDisable } = this.state;
    return (
      <Container>
        <Layout>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <BoxContext>
                <h2>Campeonato de Filmes</h2>
                <p>Fase de Seleção</p>
                <h3>__</h3>
                <p>
                  Selecione 8 filmes que você deseja que entrem na competição e
                  depois pressione o botão Gerar Meu Campeonato para proceguir.
                </p>
              </BoxContext>

              <BoxForm>
                <Form onSubmit={this.handleVote}>
                  {this.state.error && this.renderError()}
                  <Row>
                    <Col>Selecionados {amount} de 8 filmes</Col>

                    <Col>
                      <Button type="submit" disabled={btnDisable}>
                        Gerar meu campeonato
                      </Button>
                    </Col>
                  </Row>

                  <Row className="justify-content-md-center">
                    {movies.map((movie) => (
                      <BoxVotation>
                        <Col>
                          <BoxMovie>
                            <div class="form-check" key={movie.id}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value={movie.id}
                                id={movie.id}
                                onChange={this.onMovieChange}
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                <p>{movie.titulo}</p>
                                <p>{movie.ano}</p>
                              </label>
                            </div>
                          </BoxMovie>
                        </Col>
                      </BoxVotation>
                    ))}
                  </Row>
                </Form>
              </BoxForm>
            </Col>
          </Row>
        </Layout>
      </Container>
    );
  }
}

export default withRouter(SelectMovies);
