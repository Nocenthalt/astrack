import React, {useEffect, useState, useCallback} from 'react';
import '../Styles/starmap.css'

function Starmap(){
    let [isFetching, setIsFetching] = useState(false);
    let [params, setParams] = useState({});
    let [view, setView] = useState({width: 0, height: 0});

    //Request user's geological location
    useEffect(() => {   
        const fetchData = async () => {    
            const {longitude, latitude, altitude} = await new Promise ((resolve, rejection) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        //resolve data if got position
                        setIsFetching(true);
                        resolve(position.coords);
                    },
                    failure => {
                        if(failure.message.startsWith("Only secure origins are allowed")){
                            console.log(failure.message)
                        }
                        setIsFetching(false)}
                )
            })
            setParams({longitude,latitude,altitude})
            setView({width: window.innerWidth, height: window.innerHeight - 60});
        }
    fetchData();
    }, [])
    
    //Handle window resizing
    const resizeHandle = useCallback(() => {
        setView({width: window.innerWidth, height: window.innerHeight - 60});
      }, []);
    
    useEffect(() => {
        window.addEventListener('resize', resizeHandle);
        return () => window.removeEventListener('resize', resizeHandle);
      }, [resizeHandle]);
    
    
    return isFetching ?
        (
        <div id="starmap">
            <iframe title="starmap"
                width={view.width}
                height={view.height}
                frameBorder="0"
                allowtransparency="true"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://virtualsky.lco.global/embed/index.html?longitude=${params.longitude}&latitude=${params.latitude}&live=true&gradient=false&scalestars=1.1&showstarlabels=true&showstarlabels=true&showplanetlabels=true&showdate=false&projection=stereo&constellations=true&constellationlabels=true&az=0`}
            ></iframe>
        </div>
        )
        :(<h1 className="warning">Please enable location for this to work</h1>)
}

export default Starmap