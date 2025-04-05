import sketch_window from '../assets/images/mainwindow_app.png';
import ixn from '../assets/images/ixn.jpeg';
import chess from '../assets/images/chessMove1.png';
import wwyna from '../assets/images/wwyna_list.png';

const ProjectCards = () => {
    return ( 
        <div className="row row-cols-1 row-cols-md-4 g-4 m-4">
            <div className="col">
                <div className="card p-2">
                    <img src={sketch_window} alt="Sketch Application"/>
                    <div className="card-body">
                        <h5 className="card-title">Sketch Completion with Machine Learning</h5>
                        <p className="card-text">Investigation into the use of vector-based image generation models to autocomplete or
                            reinterpret sketches based on user preference. Leverages a bidirectional sequence-to-sequence variational
                            autoencoder and transfer learning.
                        </p>
                        <a href="#/sketchApp" className="btn btn-outline-primary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card p-2">
                    <img src={ixn} alt="UCL IXN Programme"/>
                    <div className="card-body">
                        <h5 className="card-title">Modern Workplace Automation (UCL/Microsoft)</h5>
                        <p className="card-text">Made on behalf of the UCL engineering department in conjunction with Microsoft as
                            part of the IXN programme. Automates and streamlines the process of matching final-year students
                            to academics and industry partners for final-year projects based on stakeholder preferences and niches.
                        </p>
                        <a href="https://james-parky.github.io/workplace-automation-website.github.io/" className="btn btn-outline-primary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card p-2">
                    <img src={wwyna} alt="What Was Your Name Again?"/>
                    <div className="card-body">
                        <h5 className="card-title">What Was Your Name Again?</h5>
                        <p className="card-text">
                            This project aimed to solve issues faced by those with social anxiety. In people who get nervous during
                            socialising the anxious response may inhibit memory, causing countless forgotten names and misremembered
                            careers. This webapp allows people to make notes on the information they learned so that they can avoid
                            such awkward moments.
                        </p>
                        <a href="https://what-was-your-name-again.onrender.com" className="btn btn-outline-primary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card p-2">
                    <img src={chess} alt="Knifefish chess engine"/>
                    <div className="card-body">
                        <h5 className="card-title">Knifefish</h5>
                        <p className="card-text">A chess engine originally written using Python, and later re-written into Java. Achieves a
                            rating of ~1400 and ~1600 in the respective languages using techniques including Minimax with Alphabeta
                            pruning, Quiescience search, dynamic evalutaion, transposition tables, and Zobrist hashing.
                        </p>
                        <a href="#/knifefish" className="btn btn-outline-primary">See more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectCards;