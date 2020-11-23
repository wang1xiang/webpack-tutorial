import createHeadering from './heading'
import './main.css'
import icon from './icon.png'

const header = createHeading()
document.body.append(header)

const img = new Image()
img.src = icon
document.body.append(img)
