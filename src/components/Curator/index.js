import React from "react";
import './styles.scss'
import curatorPhoto from '../../images/elaine.jpeg'

function CuratorItem(){
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Elaine Matos"/>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Elaine Matos</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Graduana em Análise e desenvolvimento de sistemas, estudante de programação, tecnologia.</p>
                
            </div>
        </div>
    )
}
export default CuratorItem