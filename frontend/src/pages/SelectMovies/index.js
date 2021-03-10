import React from 'react';

import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import { BoxContext, BoxForm, BoxVotation, BoxMovie, Layout } from './styles';

class SelectMovies extends React.Component {
  handleVote = async (event) => {
    event.preventDefault();
  };

  render() {
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
                  <Row>
                    <Col>Selecionados 0 de 8 filmes</Col>

                    <Col>
                      <Button type="submit">Gerar meu campeonato</Button>
                    </Col>
                  </Row>

                  <Row className="justify-content-md-center">
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme</p>
                              <p>2008</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="2"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 1</p>
                              <p>2018</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="3"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 3</p>
                              <p>2048</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="4"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 4</p>
                              <p>2048</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                  </Row>
                  <Row className="justify-content-md-center">
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="1"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme</p>
                              <p>2008</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="2"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 1</p>
                              <p>2018</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="3"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 3</p>
                              <p>2048</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
                    <BoxVotation>
                      <Col>
                        <BoxMovie>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="4"
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              <p>Titulo do Filme 4</p>
                              <p>2048</p>
                            </label>
                          </div>
                        </BoxMovie>
                      </Col>
                    </BoxVotation>
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

export default SelectMovies;
