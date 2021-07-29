import React from 'react'
import ArtworkPlay from '../components-chid/artwork-play/ArtworkPlay'
import SongCardMobileEvent from './SongCardMobileEvent'

export default function SongCard() {
    return (
        <div className="song-card">
            <div className="song-card__inner">
                <div className="song-card__artwork">
                    <ArtworkPlay />
                </div>
                <div className="song-card__body row">
                    <div className="song-card__avatar">

                    </div>
                    <div className="song-card__details">
                        <a className="song-card__title" href="/#"></a>
                    </div>
                </div>
                <SongCardMobileEvent />
            </div>
        </div>
    )
}
