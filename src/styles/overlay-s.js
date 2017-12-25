const overlay_defaults = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  zIndex: 2
}

const overlay = {
  ...overlay_defaults,
  background: '#000',
  opacity: '0.5'
}

const hidden_overlay = {
  ...overlay_defaults,
  background: 'transparent'
}

const colored_overlay = {
  ...overlay_defaults,
  background: 'rgb(238, 238, 238)'
}

module.exports = {
  overlay,
  hidden_overlay,
  colored_overlay
}
