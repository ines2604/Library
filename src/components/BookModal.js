import React from "react";

function BookModal({ bookItem, onClose }) {
    const { volumeInfo } = bookItem;
    const { title, authors, imageLinks, description } = volumeInfo;
    const thumbnail = imageLinks ? imageLinks.smallThumbnail : "./defaultImage.png";

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-4">
                            <img src={thumbnail} alt={title} className="img-fluid" />
                        </div>
                        <div className="col-8">
                            <p className="text-muted">{authors ? authors.join(", ") : "No author information"}</p>
                            <p>{description || "No description available."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookModal;
