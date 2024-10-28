import { Accordion } from "react-bootstrap";

import chessMove1 from "../assets/images/chessMove1.png";
import chessMove2 from "../assets/images/chessMove2.png";

const Knifefish = () => {
    return (
        <div className='knifefish'>
            <hr class="p-0 m-0"/>
            <div className="container-fluid pe-4 py-2 bg-body-tertiary">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Knifefish</li>
                    </ol>
                </nav>
            </div>
            <h2 class="m-4">Knifefish Chess Engine</h2>
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What was the project?</Accordion.Header>
                    <Accordion.Body>
                        This project contains two chess engines. I originally wrote it in Python for a school project, before re-writing it years later in Java in order
                        to improve its speed as well as improve the code quality and introduce new concepts for a higher playing skill. It includes a chess-playing
                        application with an AI opponent of variable difficulty.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How did it work?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="lead">
                            The engine uses a Minimax backtracking algorithm alongside Alphabeta pruning. In this way, the AI will exhaustively search through all
                            positions up to a certain number of moves away (or a terminal game state).
                        </h3>
                        <h3 className="lead">
                            This is then improved with Quiescience search, which will conditionally search the game tree more deeply based on how volatile a position
                            appears to be. This avoids the 'horizon effect', where a position is inaccurately judged by a search with fixed depth because a game
                            changing move was 'just over the horizon' and out of sight.
                        </h3>
                        <h3 className="lead">
                                Additionally, note that an exhaustive search will search the same game state several times; often the same moves may be made in a different
                                sequence, and so there are multiple ways to reach a particular position. To that end, transposition tables allow previous evaluations of
                                positions to be used to prevent redundant calculations. This is implemented with a hash table, where Zobrist hashing allows extremely fast
                                calculations of the table keys.
                        </h3>
                        <h3 className="lead">
                                Finally, the static evaluations of a given position are calculated by using a piece-square table to adapt the estimated score of a given piece
                                according to its position on the board. The values of these tables were populated by using a genetic algorithm to find the optimal scores.
                        </h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What was the outcome?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="lead">
                            The results of this project were a decent chess engine alongside a much-improved one. The newer engine showcases both a much higher code
                            quality and overall project organisation, and an AI which beats a much higher percentile of the population.
                        </h3>
                        <h3 className="lead">
                            The repositories for these engines are available in <a href="https://github.com/roryn959/Python-Knifefish">Python</a> and
                            <a href="https://github.com/roryn959/Java-Knifefish">Java</a>.
                        </h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div class="container my-4">
                <div class="w-50 mx-auto" style={{'height': '700px !important'}}>
                    <div id="sketchAppCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={chessMove1} class="d-block w-100" alt="Chess move two"/>
                            </div>
                            <div class="carousel-item">
                                <img src={chessMove2} class="d-block w-100" alt="Chess move one"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#sketchAppCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#sketchAppCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Knifefish;