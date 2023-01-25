import React, { useState, useEffect } from "react";

function CountSection() {
    const [studentsCount, setStudentsCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/students/all")
            .then(response => response.json())
            .then(data => setStudentsCount(data));
    }, []);
    return (
<section id="counts" className="counts section-bg">
    <div className="container">

        <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
                <span className="purecounter">{studentsCount}</span>
                <p>Students</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="641" data-purecounter-duration="5"
                      className="purecounter">1 add from db</span>
                <p>Courses</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="421" data-purecounter-duration="5"
                      className="purecounter">1 add from db</span>
                <p>Events</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
                <span data-purecounter-start="0" data-purecounter-end="151" data-purecounter-duration="5"
                      className="purecounter">1 add from db</span>
                <p>Trainers</p>
            </div>

        </div>

    </div>
</section>
    );
}
export default CountSection;