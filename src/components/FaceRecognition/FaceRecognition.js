import React from 'react'
import './FaceRecognition.css'
// import mandm from './MandM.jpg'

const FaceRecognition = ({ imageUrl, box }) => {
    console.log('check', imageUrl)
    // console.log(box.topRow, box.rightCol, box.bottomRow, box.leftCol)
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto"/>
                <div className="bounding-box" style={{top: box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition