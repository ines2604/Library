import React from "react";

function BooksCard({ bookItem }) {
    const { volumeInfo } = bookItem;
    const { title, authors, imageLinks, infoLink } = volumeInfo;
    const thumbnail = imageLinks ? imageLinks.smallThumbnail : "./defaultImage.png";

    return (
        <div className="card shadow-sm h-100">
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{title}</h5>
                <p className="card-text text-muted">
                    {authors ? authors.join(', ') : 'No author information available.'}
                </p>
                <a href={infoLink} className="btn btn-primary">More Info</a>
            </div>
        </div>
    );
}

export default BooksCard;
