import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import Modal from "../component/modal";
import ListPLaylist from "../component/listPLaylist"
interface PlaylistSong<T> {

}
const PlaylistSong: React.FC<PlaylistSong<any>> = ({ ...props }) => {
    const [render, setRender] = useState(0);
    const renderComponent = () => {
        // const increaseValue = render + 1
        setRender(value => value + 1);
    }
    return (
        <>
            <div className="main2">
                <h4 className="title_all">Playlist <MdNavigateNext className="icon" /></h4>
                <div className="main2_add">
                    <Modal renderComponent={renderComponent} />

                    <ListPLaylist render={render} />
                </div>
            </div>
        </>
    )
}

export default PlaylistSong