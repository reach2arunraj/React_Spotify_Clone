import React from 'react'
import "./SongRow.css"

function SongRow({track="test"}) {
    return (
        <div className="SongRow">
            <img src={track.album.images[0].url} alt="" className="SongRow__album"/>
            <div className="SongRow__info"/>
                <h1>{track.name}</h1>   
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </p>
        </div>
    )
}

export default SongRow;