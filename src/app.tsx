import * as React from 'react';
import * as ReactDOM from 'react-dom';

import HelloWidget from './components/hello-widget/hello-widget.component';

function render() {
  ReactDOM.render(<HelloWidget />, document.getElementById('root'));
}

render();
