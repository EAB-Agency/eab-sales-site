const addScript = (url) => {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

// export const onRouteUpdate = () => {
//   window.onload = () => {
//     addScript('https://www.youvisit.com/tour/Embed/js3')
//   }
// }

exports.onClientEntry = () => {
  console.log('onClientEntry')
}

exports.onInitialClientRender = () => {
  console.log('onInitialClientRender')
}

exports.onPostPrefetchPathname = () => {
  console.log('onPostPrefetchPathname')
}

exports.onPreRouteUpdate = () => {
  console.log('onPreRouteUpdate')
}

exports.onPrefetchPathname = () => {
  console.log('onPrefetchPathname')
}

exports.onRouteUpdate = () => {
  console.log('onRouteUpdate')
}

exports.onRouteUpdateDelayed = () => {
  console.log('onRouteUpdateDelayed')
}