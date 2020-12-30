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
  container: {
    color: colors.primaryHeaderColor,
    fontWeight: 'normal',
    backgroundColor: '#ebebeb',
    paddingTop: '4em',
    paddingBottom: '4em',
    marginBottom: '2em',
  },

  cardGroup: {
    paddingTop: '4em',
    paddingBottom: '4em',
  },
  movie: {
    backgroundColor: '#000000',
  },
  row: {
    minHeight: 200,
  },
};
