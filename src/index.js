import React from 'react'
import ReactDOM from 'react-dom'

import useModel from './useModel'
import ObjectDetectionVideo from './object-detection-video/ObjectDetectionVideo'

import './index.css'

const handlePrediction = (predictions) => {
  console.timeEnd('detect')
  console.time('detect')
  console.log(predictions)
}

const render = (ctx, predictions) => {
  predictions.forEach((prediction) => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const width = prediction.bbox[2]
    const height = prediction.bbox[3]

    ctx.setStrokeStyle('#0062ff')
    ctx.setLineWidth(4)
    ctx.strokeRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height)
    )
  })
}

const App = () => {
  const model = useModel(process.env.PUBLIC_URL + '/model_web')

  return (
    <div className="fillPage">
      <ObjectDetectionVideo
        model={model}
        fit="aspectFill"
        mirrored
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
