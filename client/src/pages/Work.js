import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

// COMPONENTS
import Navbar from "../components/Navigation/Navbar";
import WebTemp from '../components/Work/WebTemp';
import Footer from "../components/Footer";

// TYPE SELECTION FUNC
import {findType} from "../components/Works/Data";

function Work() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("");
    const [id, setId] = useState("");

    // SETUP PROJECT TYPE FOR CONDITIONAL RENDERING
    useEffect(() => {
        const docid = location.pathname.split("/")[2];
        setTimeout(() => {
            setLoading(false);
        }, 2000);
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
                    ? <WebTemp id={id} />
                    : type === 'app'
                        ? <WebTemp id={id} />
                        : type === 'game'
                            ? <WebTemp id={id} />
                            : type === 'harware'
                                ? <WebTemp id={id} />
                                : type === 'marketing'
                                    ? <WebTemp id={id} />
                                    : null
                : "Loading"
            }
        </div>
        <Footer />
        </>
    )
}

export default Work
