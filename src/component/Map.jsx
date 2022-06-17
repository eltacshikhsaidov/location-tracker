import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';


const Map = () => {


    const position = [40.3802948, 49.875192];
    const position1 = [40.3802948, 49.8760];
    const position2 = [40.3802948, 49.8770];
    const position3 = [40.3802948, 49.8780];
    const position4 = [40.3802948, 49.8790];
    const position5 = [40.3802948, 49.8800];
    const position6 = [40.3802948, 49.8810];



    return (
        <div className='container-fluid'>
            {/* card design with two values in bootstrap */}

            <div className="card shadow-sm p-2 my-3 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title text-center bg-light px-2 py-3 rounded">Current Position</h5>
                    <div className="card-text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Latitude</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={position[0]} disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Longitude</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={position[1]} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm p-2 my-3 bg-body rounded">
                <h5 className="card-title text-center bg-light px-2 py-3 rounded">Open Street Map</h5>
                <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position1}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position2}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position3}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position4}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position5}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={position6}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    )
}

export default Map;