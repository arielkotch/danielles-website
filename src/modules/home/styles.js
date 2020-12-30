import { colors } from '../../colors';
import { theme } from '../../theme';

export const styles = {
  segment: ({
    backgroundImage = 'https://www.prlog.org/12696813-danielle-kotch-as-jennifer.jpg',
  }) => ({
    minHeight: 700,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: colors.backgroundColor,
  }),
  header: {
    fontSize: '4em',
    color: 'black',
    fontWeight: 'normal',
    marginBottom: 0,
    paddingTop: '4em',
    ...theme.fontFamily,
  },
  typist: {
    color: 'black',
    fontSize: '28px',
    ...theme.fontFamily,
  },
};
