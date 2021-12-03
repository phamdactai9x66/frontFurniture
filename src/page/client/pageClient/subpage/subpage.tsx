import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import topicApi from "api/topicApi"
import categoryApi from "api/categoryApi"
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getlistAudio, playSong } from 'redux/audio/actionAudio';

interface SubCategoryIF<T> extends RouteComponentProps {

}

const SubCategory: React.FC<SubCategoryIF<any>> = ( { location, history, ...props }: any ) => {
  
  const [handle, setHandle] = useState({ data: { dataSongs: [], dataCate: [] }, display: true });
  const [allSongs, setAllSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const dataDispatch = await dispatch(getlistAudio());
      setAllSongs(dataDispatch.payload);

      if (!handle.display) return;
        const [dataCate, error] = await HandleGet<Function>(categoryApi.getAll, { id_Topic: location.state?._id });
      if (error || dataCate.status === variableCommon.statusF) return;

      setHandle({ data: { dataSongs: dataDispatch?.payload, dataCate: dataCate?.data }, display: true })
    })()
    return () => {
      return setHandle(value => ({ ...value, display: false }));
    }
  }, []);

  if(!location.state){
    console.log('aa')
    history.push('/')
  }else{
    document.title = `${location.state.name ? location.state.name : ""} - Music Game`;
  }

  return (
    <div className="container-category">
      <h1>Chủ đề {location.state ? location.state.name : ""}</h1>
      <div className="banner-category">
        <img src="https://html.nkdev.info/goodgames/assets/images/gallery-7.jpg" alt="" />
      </div>

      {handle.data.dataCate.map( (itemCate: any) => {
        return <div className="box-category" key={itemCate._id}>
        <div className="box-title-category">
          <h4 className="title_all">{itemCate.name}</h4>
        </div>
        <div className="box-grid-category">
          {handle.data.dataSongs.filter( (i: any) => i.id_Topic === location.state?._id && i.id_Categories === itemCate._id).map( (itemSong: any) => 
            // <Link to={{ }} key={itemSong._id}>
            <span key={itemSong._id} onClick={() => dispatch(playSong({ _id: itemSong._id}))} >
                {/* pathname: '/category/SubCategory',
              search: `?idTopic=${id_Topic}&id_subCate=${current?._id}` */}
              <div className="box">
                <figure>
                  <img src={itemSong.image} alt={itemSong.title} />
                </figure>
                <div className="icon-box_category">
                  <div>
                    <h6 className="icon">{itemSong.title}</h6>
                  </div>
                </div>
              </div>
            </span>
            // </Link>
          
          )}
        </div>
      </div>
      })}
    </div>


  )
}

export default SubCategory