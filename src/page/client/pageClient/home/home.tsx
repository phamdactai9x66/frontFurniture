import React, { useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    var settings = {
        dots: true,
        infinite: true,
        vertical: true,
        fade: true,
        beforeChange: function (currentSlide: any, nextSlide: any) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide: any) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className="home">
            <div className="slider-banner">
                <div>
                    <Slider {...settings}>
                        <div>
                            <img height={362} src="https://png.pngtree.com/background/20210714/original/pngtree-purple-background-music-with-bokeh-effect-picture-image_1203473.jpg" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                        </div>
                        <div>
                            <img height={362} src="https://2.bp.blogspot.com/-tziLAVIos1c/XNjwlXhYSRI/AAAAAAAAPww/ZmfO9Wa3jiEU004Hx1x3Qq39FXVENPwggCLcBGAs/s1600/11.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="category">
                <h2>Thể loại <MdNavigateNext className="icon" /></h2>
                <div>
                    <Slider>
                        <div className="box">
                            <div className="img">
                                <img width={250} height={230} src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/O8_tb1pDU8g/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/X1QfihWHfBo/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/x2xblVxi_c4/maxresdefault.jpg" alt="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <img width={250} height={230} src="https://i.ytimg.com/vi/swztQOTZbpU/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/jKLTbxHe9k8/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/naQWLyxs76I/maxresdefault.jpg" alt="" />
                                <img width={250} height={230} src="https://i.ytimg.com/vi/DxOB2t7X84A/maxresdefault.jpg" alt="" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="list-music">
                <h3>Danh sách bài hát <MdNavigateNext className="icon" /></h3>
                <div className="main1">
                    <div className="box-music">
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                      </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                      </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className='limit-items'>

                        <input type='checkbox' id='show-all' />
                        <label htmlFor='show-all' className='text-show'>Show</label>
                        <label htmlFor='show-all' className='text-hide'>Hide</label>
                        <div className='items'>

                            <h2>List of items</h2>
                            <ul>
                                <li>First</li>
                                <li>Second</li>
                                <li>Third</li>
                                <li>Fourth</li>
                                <li>Fifth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
