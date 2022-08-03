export const imageShader = {
  uniforms: {
    uTexture: {
      type: 't',
      value: '',
    },
    uOffset: {
      type: 'f',
      value: 1.0,
    },
    uAlpha: {
      type: 'f',
      value: 1.0,
    },
  },
  vertexShader: `
    uniform vec2 uOffset;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 newPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uAlpha;
    varying vec2 vUv;

    void main() {
      vec3 color = texture2D(uTexture,vUv).rgb;
      gl_FragColor = vec4(color,uAlpha);
    }
  `,
  transparent: true,
}
