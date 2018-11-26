import React from 'react';

// Shows artists Album list. 

const AlbumList = (props) => {

    const showList = ({albumList}) =>{
       if(albumList){
            return albumList.map((item, index)=>{
                return (
                    <img key={index} alt="" src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
       }
    }

    return (
         <div className="albums_list">
            {showList(props)}
        </div>
    )


}

export default AlbumList;