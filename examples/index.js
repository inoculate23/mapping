      import * as THREE from 'three'
      import WebGLApp from './lib/WebGLApp.js'
      import ProjectedMaterial from '..'
      import { random } from './lib/math-utils.js'
     
      let background;
      // grab our canvas
      const canvas = document.querySelector('#app')

      // WebGLApp is a really basic wrapper around the three.js setup,
      // it hides all unnecessary stuff not related to this example
      const webgl = new WebGLApp({
        canvas,
        // set the scene background color
       // background: '#E6E6E6',



        // show the fps counter from stats.js
        showFps: true,
        // enable orbit-controls
        orbitControls: true,
      })

      // attach it to the window to inspect in the console
      window.webgl = webgl
      const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
    // create a video element and play it
    const video = document.createElement('video')
    video.src = './public/iamges/squares.mp4'
    video.muted = true
    video.loop = true
    video.play()

   // create the VideoTexture and enable gamma correction for it
   const texture = new THREE.VideoTexture(video)
          // load the example texture
       //   const texture = new THREE.TextureLoader().load('./baron.jpg')
// create a bunch of meshes
const elements = new THREE.Group()
const NUM_ELEMENTS = 123
for (let i = 0; i < NUM_ELEMENTS; i++) {
  const geometry = new THREE.BoxGeometry(random(0.6, 0.5), random(0.51, 0.5), random(0.21, 0.5))
  // create a different material for different objects
  // since each one will have a different position
  const AMOUNT = 10;
  const ASPECT_RATIO = window.innerWidth / window.innerHeight;

				const WIDTH = ( window.innerWidth / AMOUNT ) * window.devicePixelRatio;
				const HEIGHT = ( window.innerHeight / AMOUNT ) * window.devicePixelRatio;
let camera;

  const cameras = [];

				for ( let y = 0; y < AMOUNT; y ++ ) {

					for ( let x = 0; x < AMOUNT; x ++ ) {

						const subcamera = new  THREE.PerspectiveCamera( WIDTH * 4 / HEIGHT *  4 );
						subcamera.viewport = new THREE.Vector4( Math.floor( x * WIDTH ), Math.floor( y * HEIGHT ), Math.ceil( WIDTH ), Math.ceil( HEIGHT ) );
						subcamera.position.x = 2 - ( x / AMOUNT );
						subcamera.position.y = 0  / ( y / AMOUNT );
						subcamera.position.z = -0.5 + ( y / AMOUNT );
						subcamera.position.multiplyScalar( -40 );
						subcamera.lookAt( 9, 1, 0 );
						subcamera.updateMatrixWorld();
						cameras.push( subcamera );

					}

				}

        camera =  webgl.camera;
				camera.position.z = 6;
        
  const material = new ProjectedMaterial({
    // use the orthographic camera
    camera: webgl.camera,
   // orthographic: false,
    texture,
    color: '#1c1c1c',
    textureScale: 0.7,
    cover: true,
  })
  const element = new THREE.Mesh(geometry, material)

  // move the meshes any way you want!
  element.position.x = random(-2, 2)
  element.position.y = random(-1, 1)
  element.position.z = random(-1, 1)

  // and when you're ready project the texture!
  material.project(element)

  elements.add(element)
}

				
        
let camera2;
camera2 =  webgl.camera;
        const video2 = document.createElement('video')
    video2.src = './Cube.mp4';
    video2.muted = true
    video2.loop = true
    video2.play()


   // create the VideoTexture and enable gamma correction for it
   const texture2 = new THREE.VideoTexture(video2)

   const elements2 = new THREE.Group()
const NUM_ELEMENTS2 = 123
for (let i = 0; i < NUM_ELEMENTS2; i++) {
  const geometry2 = new THREE.BoxGeometry(random(0.6, 0.5), random(0.51, 0.5), random(0.21, 0.5))
  // create a different material for different objects
  // since each one will have a different position
  const AMOUNT2 = 10;
  const ASPECT_RATIO2 = window.innerWidth / window.innerHeight;

				const WIDTH2 = ( window.innerWidth / AMOUNT2 ) * window.devicePixelRatio;
				const HEIGHT2 = ( window.innerHeight / AMOUNT2 ) * window.devicePixelRatio;

        let camera2 = webgl.camera;

camera2.position.z = 86;

  const material2 = new ProjectedMaterial({
    // use the orthographic camera
    camera2: webgl.camera,
   // orthographic: false,
    texture2,
    //color: '#1c1c1c',
    textureScale: 1.0,
    cover: true,
  })
  const element2 = new THREE.Mesh(geometry2, material2)

  const elements2 = new THREE.Group()


  // move the meshes any way you want!
  element2.position.x = random(-2, 2.7)
  element2.position.y = random(-1.1, 1)
  element2.position.z = random(-1.9, 1.5)

camera2.position.set(36, 1,-42)
camera2.lookAt(30, 3,0)
  // and when you're ready project the texture!
  material2.project(element2)
 
  elements2.add(element2)

}
let camera3;
camera3 =  webgl.camera;
 // create a video element and play it
 const video3 = document.createElement('video')
    video3.src = './Cube.mp4'
    video3.muted = true
    video3.loop = true
    video3.play()

    // create the VideoTexture and enable gamma correction for it
    const texture3 = new THREE.VideoTexture(video3)
webgl.scene.add(elements)
const TextureLoader = new THREE.TextureLoader();
webgl.scene.background = texture3;
webgl.scene.background.receiveShadow = true;

// move the camera so it's not facing the
// texture straight on at the start
camera3.position.set(6, 1, -2)
camera3.lookAt(30, 0,2)
// webgl.camera.lookAt(20, 4, -20)
 //webgl.camera.lookAt(0, 94, -20)

// add lights
const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8)
directionalLight.position.set(80, 5, 90)
webgl.scene.add(directionalLight)

const ambientLight = new THREE.AmbientLight('#fff', 0.79)
webgl.scene.add(ambientLight)
// const composer = new EffectComposer( renderer );
// function animate() {

// requestAnimationFrame( animate );

// composer.render();

  // }

      elements.rotation.y = Math.PI / 2
      webgl.onUpdate(() => {
        elements.rotation.y -= .0053;
        elements.rotation.x -= .0053;

      })



      // start animation loop
      webgl.start()
