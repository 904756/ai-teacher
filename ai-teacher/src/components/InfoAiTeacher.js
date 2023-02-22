import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "./images/pexels-tara-winstead-8386440.jpg";


function InfoAiTeacher() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080' +
            '/InfoAi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: message }),
        })
            .then(res => res.text())
            .then(data => setResponse(data));
    };
    return (
        <div>
            <Navbar />
            <div className="flex-container">
                <aside className="sidemenu">
                    <h6>You asked...</h6>
                </aside>
                <section className="question-container">
                    <div id="aiTitle"><h1> IT AI teacher </h1></div>
                    <div><h4 id="aiQuote">"Computer science is not about computers, any more than astronomy is about telescopes."  - Edsger Dijkstra</h4></div>
                    <div className="chatbox">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="1" className="chat-input-textarea" placeholder="Type your question here and hit enter">
                            </textarea>
                                <button type="submit" className="btn btn-outline-secondary ask">Ask</button>
                                <div id="hint">Hint: you can ask for extra explanations</div>
                            </div>
                        </form>

                        <div className="chat-output-textarea">
                            {response}
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}


export default InfoAiTeacher;