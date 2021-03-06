import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { Footer } from '@pmndrs/branding'
import useStore from './store'
import './styles.css'

function Overlay() {
  const loaded = useStore((state) => state.loaded)
  const clicked = useStore((state) => state.clicked)
  const api = useStore((state) => state.api)
  return (
    <>
      <div className={`fullscreen bg ${loaded ? 'loaded' : 'notready'} ${clicked && 'clicked'}`}>
        <div onClick={() => loaded && api.start()}>
          {!loaded ? (
            'loading'
          ) : (
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#606060' }}>This website will have music</span>
              <br />
              {/* <span style={{ color: '#606060' }}>Nhớ cắm tai nghe</span> */}
              <br />
              <b>
                <span style={{ color: 'black' }}>Click to continue</span>
              </b>
            </div>
          )}
        </div>
      </div>
      {/* <Footer
        date={<a href="https://twitter.com/0xca0a">@0xca0a</a>}
        year={<a href="https://github.com/johnmarinelli">git/johnmarinelli</a>}
        link1={<a href="https://github.com/pmndrs/react-three-fiber">pmndrs/react-three-fiber</a>}
        link2={<a href="https://codesandbox.io/s/sound-test-dvokj?file=/src/components/Scene.js">s/sound-test-dvokj</a>}
      /> */}
    </>
  )
}

createRoot(document.querySelector('#root')).render(
  <>
    <App />
    <Overlay />
  </>,
)
