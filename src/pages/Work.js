import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import WebTemp from '../components/Work/WebTemp';
import WebTemp2 from '../components/Work/WebTemp2';
import AppTemp from '../components/Work/AppTemp';
import Footer from "../components/Footer";

// TYPE SELECTION FUNC
import {findType} from "../components/Works/Data";

// ASSETS
import loadingring from "../assets/loading-ring.gif";

function Work() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [id, setId] = useState("");

    // SETUP PROJECT TYPE FOR CONDITIONAL RENDERING
    useEffect(() => {
        window.scrollTo(0, 0);

        const docid = location.pathname.split("/")[2];
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setLoading(true);
        setId(docid);
        findType(docid, setType);
    }, [location.pathname]);

    return (
        <>
        <Navbar />
        <div className="indcaseStudy">
            {
                !loading 
                ? type === 'web'
                    ? <WebTemp2 id={id} />
                    : type === 'app'
                        ? <AppTemp id={id} />
                        : type === 'game'
                            ? <WebTemp id={id} />
                            : type === 'harware'
                                ? <WebTemp id={id} />
                                : type === 'marketing'
                                    ? <WebTemp id={id} />
                                    : null
                : <div className="loading">
                    <img src={loadingring} alt="" />
                    <h3>LOADING</h3>
                </div>
            }
        </div>
        <Footer />
        </>
    )
}

export default Work
