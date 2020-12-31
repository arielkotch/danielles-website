
export const styles = {
  segment: () => ({
    'margin-top': 0,
    'padding-top': 0,
    'padding-bottom': 0,
    'margin-bottom': 0,
    width: '100%',
    height: '40em',
    backgroundColor: 'black',
  }),
  wrapper: {
    position: 'relative',
    'padding-top': '50.25%', /* Player ratio: 100 / (1280 / 720) */
    'padding-bottom': '0'

  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  footer: { 
    padding: '3em 0em',
    position: 'relative',
    bottom: 0
  },
  websiteHeader: {
    fontWeight: 'bold',
    'font-family': 'Abel',
    'font-size': '5em',
    'z-index': '1',
    color: 'white',
    position: 'absolute', // child
    bottom: '60%', // position where you want
    left: '34%'
  },
  header: {
    fontWeight: 'bold',
    'font-family': 'Abel',
    'font-size': '2.4em',
    'z-index': '1',
    color: 'white',
    position: 'absolute', // child
    bottom: '56%', // position where you want
    left: '40%'
    
  }
};
