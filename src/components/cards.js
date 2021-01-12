import React from 'react';

function Food(){


return(
<div className="container" id="cards">
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" alt="imgs" className="img-fluid" />
                        <a href="#!">
                            <div className="mask"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the
                            card's content.
                        </p>
                        <a href="#!" className="btn btn-outline-primary">Button</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            </div>
            <div className="col-md-3">
            </div>
        </div>
    </div>

</div>
);

}

export default Food;