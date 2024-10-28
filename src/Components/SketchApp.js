import mainWindow from "../assets/images/mainwindow_app.png";
import goodLatentSpace from "../assets/images/good_latent_space.png";
import genWindowApp from "../assets/images/genwindow_app.png";
import graphSR from "../assets/images/graph_sr.png";
import sketchAppFlowchart from "../assets/images/Sketch Application FlowChart.png";

import { Accordion } from "react-bootstrap";

const SketchApp = () => {
    return ( 
        <div className='sketch-app'>
            <hr class="p-0 m-0"/>
            <div className="container-fluid pe-4 py-2 bg-body-tertiary">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sketch Completion with Machine Learning</li>
                    </ol>
                </nav>
            </div>

            <h2 className="m-4">Sketch Completion with Machine Learning</h2>

            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What was the project?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="lead">
                            There are many examples of recent research in the field of image generation using machine learning. However, the vast majority of
                            these projects are focused around pixel-based image formats. To that end, this project aimed to build upon vector-based image generation
                            research with the idea that this image format follows human intuition more closely. This may then allow the creation of tools which may work
                            more closely with people to provide assistance and inspiration in the sketching process.
                        </h3>
                        <h3 className="lead">
                            Specifically, this may assist those learning to draw or who may otherwise find sketching difficult; in particular, those who have a physical or
                            mental disability which may make it difficult to put onto paper exactly the picture they had in mind (this project was made as a dissertation
                            project with the assistance of the UCL Global Disability Innovation Hub).
                        </h3>
                        <h3 className="lead">
                            The project was made by adapting the <a href="https://arxiv.org/abs/1704.03477">Sketch-RNN</a> framework.
                        </h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How did it work?</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="lead">
                            The model used in this project was a bi-directional variational autoencoder (VAE) using long-short term memory (LSTM) recurrent neural networks
                            (RNNs). The input to the network was a series of five-dimensional vectors to represent strokes. After encoding, Gaussian noise and
                            normalisation is applied to the latent vector to provide a well-formed and regularised latent space. The output of the model was a series of
                            six-dimensional vectors representing a Gaussian mixture model (GMM) to provide a probability function of the stroke to be made at each point
                            of the output sequence.
                        </h3>
                        <h3 className="lead">
                            The idea behind this tool is that a user may input some strokes into the sketching window. They then may request that their sketch is either
                            re-interpreted or completed by a pre-trained model (in this case the model is trained on owls). The user is then shown a grid of the resulting
                            sketches, each sampled around a focal point in the model's latent space.
                        </h3>
                        <h3 className="lead">
                            The user may then select their favourite sketch, according to which the focal point is moved such that newly generated sketches resemble their
                            favourite more closely. This process may be repeated until the user finds a satisfactory sketch, at which point the sketch may be saved as an
                            SVG file.
                        </h3>
                        <h3 className="lead">
                            In addition, this project explored the viability of transfer learning within the Sketch-RNN framework by comparing training results on
                            pre-trained models to results on fresh models.
                        </h3>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        What was the outcome?
                    </Accordion.Header>
                    <Accordion.Body>
                        <h3 className="lead">
                            The final application had the ability to generate quality images while adapting the features according to the user preferences. However, one
                            caveat is that user selections could lead the latent space into extreme values, meaning low quality images would occasionally be generated.
                            In hindsight, this flaw could be fixed by normalising the latent space values in order to deter focal points with extreme values.
                        </h3>
                        <h3 className="lead">
                            As for the transfer learning module of the project, this was found to be successful and potentially useful for certain applications. Transfer
                            learning was found to give a large head-start to models, however fresh models would catch up after around three hours of training. This means
                            it could be useful to facilitate rapid development of different models to fit certain styles and subjects, however would not be necessary for
                            regular use.
                        </h3>
                        <h3 className="lead">
                            Overall this project was marked as a first-class dissertation.
                            The paper written for this project may be found <a href="assets/diss.pdf" target="_blank">here</a>, and the github repository for the
                            application and transfer learning module may be found <a href="https://github.com/roryn959/Sketch-Generation-Tool">here</a>.
                        </h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="container my-4">
                <div className="w-50 mx-auto" style={{'height': '700px !important'}}>
                    <div id="sketchAppCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={mainWindow} className="d-block w-100" alt="Main window"/>
                            </div>
                            <div className="carousel-item">
                                <img src={goodLatentSpace} className="d-block w-100" alt="Good latent space"/>
                            </div>
                            <div className="carousel-item">
                                <img src={genWindowApp} className="d-block w-100" alt="Generation window"/>
                            </div>
                            <div className="carousel-item">
                                <img src={graphSR} className="d-block w-100" alt="Transfer learning loss graph"/>
                            </div>
                            <div className="carousel-item">
                                <img src={sketchAppFlowchart} className="d-block w-100" alt="App flow chart"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#sketchAppCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#sketchAppCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SketchApp;