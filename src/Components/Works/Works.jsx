import './works.css'
// import {data} from "./data"
import data from './data';
import { useState } from 'react';
const Works= () => {
    const[item, setItem] = useState(data);

    const filterItem = (categoryItem) =>{
        const updateItem = data.filter((currentItem) =>{
                return currentItem.category === categoryItem;
        })
        setItem(updateItem);
    } 
    return (
        <div className="portfolio" >
            
                <div className='p-header hidden'>
                    <div className='p-title hidden'>
                        <span>02. </span>
                        <span>Some Things I’ve Built</span>
                        <span className='move sub-heading'>(UPDATE) See Github Repositories</span>
                    </div>
                    <div className="underline-border"></div>
                </div>  
                <div className="section">
                <div className='links'>
                    <ul className='flexSB'>
                        <li className='active' onClick={()=>setItem(data)}>All</li>
                        <li  onClick={()=>filterItem("Javascript")}>Javascript Apps</li>
                        <li  onClick={()=>filterItem("RReact")}>React Apps</li>
                        <li  onClick={()=>filterItem("Laning page")}>landing page</li>                        
                        <li  onClick={()=>filterItem("CMS")}>CMS</li>
                        <li  onClick={()=>filterItem("RestApi")}>Rest Api</li>
                    </ul>
                </div> 
                <div className="porfolio-grid">
                        {item.map(item =>
                        {
                            const {cover, title} = item;
                            return (
                                <div className="box" key={title}>
                                    <div className="image" >
                                        <img src={cover}></img>
                                    </div>
                                    <div className="over-lay" >
                                        <span>{title}</span>
                                    </div>
                                </div>)
                       })}                        
                </div> 
                </div>
                <div className="works-item" style={{display:"none"}}>
                    <span>Comming Soon</span>
                </div>  
                <div className='works-item' style={{display:"none"}}>
                    <p>Connect..</p> 
                    <span>Twitter</span>
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                    <span>Email</span>                                
                </div>
        </div>
    )
}

export default Works;