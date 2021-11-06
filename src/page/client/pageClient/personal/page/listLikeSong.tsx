import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListLikeSongComponent from "../component/listLikeSong"
interface ListLikeSong<T> {

}

const ListLikeSong: React.FC<ListLikeSong<any>> = ({ ...props }) => {
    const [page, setpage] = useState<string>("");

    return (
        <>
            <h4 className="title_all">Bài hát <MdNavigateNext className="icon" /></h4>
            <div className="main1" style={{ gridTemplateColumns: "100%" }}>
                <div className="box-music">
                    <ListLikeSongComponent />
                </div>
            </div>
        </>
    )
}

export default ListLikeSong
