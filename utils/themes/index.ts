// ANCHOR Geist
import { LAYOUT } from './layout';
import { PALETTE } from './palette';

export const THEME = {
  layout: LAYOUT,
  palette: PALETTE,
};

/** *
 *  Usage::
 *
 *  export const App = () => {
 *    return (
 *      <GeistProvider theme={myTheme}>
 *        <CssBaseline />
 *        <YourComponent />
 *      </GeistProvider>
 *    )
 *  }
 * */
