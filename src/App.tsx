import Router from "./Router";
import Theme from "./theme/Theme";

import "./i18n/config";

function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default App;
