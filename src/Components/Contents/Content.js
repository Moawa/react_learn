import React from 'react';

import Docs from './Docs';
import Tutorial from './Tutorial';
import Blog from './Blog';
import Community from './Community';

function Content() {
  return (
    <div class="tab-content" id="myTabContent">
      <Docs />
      <Tutorial />
      <Blog />
      <Community />
    </div>

  );
}

export default Content;
