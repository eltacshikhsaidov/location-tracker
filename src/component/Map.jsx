import React from 'react'

const Map = () => {

    const [position, setPosition] = React.useState({
        lat: 0,
        lng: 0
    });

    const getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getPosition();

    

    return (
        <div>
            {/* card design with two values in bootstrap */}

            <div className="card shadow-sm p-3 my-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title text-center">Map</h5>
                    <div className="card-text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Latitude</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={position.lat} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Longitude</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={position.lng} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;