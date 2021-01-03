import { colors } from '../../colors';
import { theme } from '../../theme';

export const styles = {
  segment: {
    minHeight: 700,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    ...theme.fontFamily
  },


  cardGroup: {
    paddingTop: '3em'
  },
  buttonGroup: {
    paddingTop: '5%',
    paddingLeft: '2%'
  },
  movie: {
    backgroundColor: '#000000',
  },
  row: {
    minHeight: 200,
  }
};
