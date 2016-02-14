%imports%

import React, {
  Component,
  %reactImports%
} from 'react';

class %className% extends Component {
  %constructor%

  %componentWillMount%

  %componentWillUnmount%

  %componentWillReceiveProps%

  %componentWillUpdate%

  %render%
};

%className%.propTypes = {
  %propTypes%
}

module.exports = %className%;

