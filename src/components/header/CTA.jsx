import React from "react";
import CV from "../../assets/LeThienNganCV.pdf";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useState } from "react";
import Popup from "../popUpModal/Popup";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

const CTA = () => {
    const [showPopupPDF, setShowPopupPDF] = useState(false);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const closeModal = () => setShowPopupPDF(false);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    return (
        <div className="cta">
            <a className="btn" onClick={() => setShowPopupPDF(true)}>
                Preview my CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's talk{" "}
            </a>
            {showPopupPDF && (
                <Popup closeModal={closeModal}>
                    <Document className="pdfViewer" file="/LeThienNganCV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page scale={1.5} key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                    <div>
                        <a href={CV} download>
                            <button style={{ margin: "1rem" }} className="btn btn-primary">
                                Download CV
                            </button>
                        </a>
                        <button
                            onClick={() => setShowPopupPDF(false)}
                            style={{ margin: "1rem" }}
                            className="btn btn-primary"
                        >
                            Close
                        </button>
                    </div>
                </Popup>
            )}
        </div>
    );
};

export default CTA;
