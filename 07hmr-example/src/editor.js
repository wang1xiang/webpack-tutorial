import './editor.css'

export default () => {
  const element = document.createElement('div')

  element.contentEditable = true
  element.className = 'editor'


  console.log('editor init completed')
  return element
}