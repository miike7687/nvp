import React from "react";
import "./styles.css";

const PastShows = () => {
  return (
    <main className="container">
      <h2 id="past-shows-title">Past Shows</h2>
      <div className="jumbotron jumbotron-fluid">
        <p className="showdate">August 2019</p>
        <div className="container-jumbo">
          <h1 className="display-4">A Time and A Place</h1>
          <p className="lead">
            An original musical about the dependencies and pitfalls of
            technology addiction.
          </p>
          <p className="lead">Book: Mike Haber</p>
          <p className="lead">Music and Lyrics: Drew Villafuerte</p>
          <img
            id="perry"
            src="https://i0.wp.com/www.njtheater.com/Content/images/PerryLogo66.gif"
            alt="NJACT Perry Award"
          ></img>
          <span id="perry-info">
            **Winner of 2019 NJACT Perry Award for Best Original Musical
          </span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/atap1.jpg" target="_blank">
                <img
                  src="/atap1.jpg"
                  className="card-img-top"
                  alt="Full Cast"
                />
              </a>
              <div className="card-body">
                <p className="captions">Full Cast</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/enough.jpg" target="_blank">
                <img
                  src="/enough.jpg"
                  className="card-img-top"
                  alt="enough"
                  width="100%"
                  height="100%"
                />
              </a>
              <div className="card-body">
                <p className="captions">Enough</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/dancing.jpg" target="_blank">
                <img
                  src="/dancing.jpg"
                  className="card-img-top"
                  alt="Dancing"
                  width="100%"
                  height="100%"
                />
              </a>
              <div className="card-body">
                <p className="captions">Dance Number</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/texting.jpg" target="_blank">
                <img
                  src="/texting.jpg"
                  className="card-img-top"
                  alt="Texting"
                  width="100%"
                  height="100%"
                />
              </a>
              <div className="card-body">
                <p className="captions">Full Cast</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/cast.JPG" target="_blank">
                <img
                  src="/cast.JPG"
                  className="card-img-top"
                  alt="cast members"
                  width="100%"
                  height="100%"
                />
              </a>
              <div className="card-body">
                <p className="captions">Some cast members</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-position atap-card">
              <a href="/directors.jpg" target="_blank">
                <img
                  src="/directors.jpg"
                  className="card-img-top"
                  alt="Directors"
                  width="100%"
                  height="100%"
                />
              </a>
              <div className="card-body">
                <p className="captions">Directors</p>
              </div>
            </div>
          </div>
        </div>
        {/* <img src="images/atap/enough.jpg" alt="cast"></img>
        <img src="images/atap/directors.jpg" alt="directors"></img>
        <img src="images/atap/dancing.jpg" alt="dancing"></img> */}

        {/* <img src="images/atap/finalscene.jpg" alt="finalscene"></img> */}
      </div>
    </main>
  );
};

export default PastShows;
