import React from 'react'
import './Gallery.css'
export default class Gallery extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
          <div style={{display:'flex'}} className="mdb-lightbox no-margin">
            {this.props.img.map((v,i)=>{
                return <a key={i} style={{background:'white'}} href={v.name} data-size="1600x1067">
                <img src={v.name} id='img' className="img-fluid" />
              </a>
            })}


          </div>
          </div>
            </div>
        )
    }
}