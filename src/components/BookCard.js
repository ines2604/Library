import React, { useState } from "react";
import BookModal from './BookModal';

function BooksCard({ bookItem }) {
    const [showModal, setShowModal] = useState(false);

    const { volumeInfo } = bookItem;
    const { title, authors, imageLinks, infoLink } = volumeInfo;
    const thumbnail = imageLinks ? imageLinks.smallThumbnail : "./defaultImage.png";

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="card shadow-sm h-100" onClick={handleCardClick}>
                <img src={thumbnail} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">{title}</h5>
                    <p className="card-text text-muted">
                        {authors ? authors.join(', ') : 'No author information available.'}
                    </p>
                    <a href={infoLink} className="btn btn-primary">More Info</a>
                </div>
            </div>
            {showModal && (
                <BookModal bookItem={bookItem} onClose={handleModalClose} />
            )}
        </>
    );
}

export default BooksCard;
