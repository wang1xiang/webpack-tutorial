// 只加载一个页面时 需要加载两个资源
// import posts from './posts/posts'
// import album from './album/album'
const update = () => {
  const hash = window.location.hash || '#posts'
  const mainElement = document.querySelector('.main')
  mainElement.innerHTML = ''
  if (hash === '#posts') {
    // mainElement.appendChild(posts())
    // 魔法注释 如果同名的话 会被打包到一起
    import(/* webpackChunkName: 'components' */'./posts/posts').then(({default: posts}) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === '#album') {
    // mainElement.appendChild(album())
    import(/* webpackChunkName: 'components' */'./album/album').then(({default: album}) => {
      mainElement.appendChild(album())
    })
  }
}
window.addEventListener('hashchange', update)
update()