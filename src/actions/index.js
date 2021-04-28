const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payloaded: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  }
}

const menuError = () => {
  return {
    type: 'MENU_ERROR'
  }
}

export {
  menuLoaded,
  menuRequested,
  menuError
}