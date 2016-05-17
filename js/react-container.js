import React, { Component } from 'react';
import { render } from 'react-dom';
import classnames from 'classnames';
import { applyContainerQuery } from 'react-container-query';

const query = {
  middle: {
    minWidth: 450,
    maxWidth: 799
  },
  wide: {
    minWidth: 800
  },
};

class Item extends Component {
  render() {
    return (
      <div className={classnames('item', 'clearfix', this.props.containerQuery)}>
        <div className='image'></div>
        <div className='name'></div>
        <div className='text'>
          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
        </div>
      </div>
    );
  }
};

const ResponsiveItem = applyContainerQuery(Item, query);

class MyContainer extends Component {
  render() {
    let items = [];
    for (let i = 0; i < 10; i++) {
      items.push(<ResponsiveItem key={ i } />);
    }

    return (
    <div className="item-container">
      { items }
    </div>
    );
  }
};
      
render(<MyContainer/>, document.getElementById('app'));
