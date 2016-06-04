%imports%

import React, {
  Component
} from 'react';

export default class %className% extends Component {
  static propTypes = {
    %propTypes%
  };

  %constructor%
  %componentWillMount%
  %componentWillUnmount%
  %componentWillReceiveProps%
  %componentWillUpdate%
  %render%
};

