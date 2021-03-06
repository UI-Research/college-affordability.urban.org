const React = require('react'),
      Classnames = require('classnames'),
      ReactContainerQuery = require('react-container-query');

const query = {
  middle: {
    minWidth: 450,
    maxWidth: 799
  },
  wide: {
    minWidth: 800
  }
};

class Item extends React.Component {
  render() {
    return (
      <div className={Classnames('item', 'clearfix', this.props.containerQuery)}>
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
}

const ResponsiveItem = ReactContainerQuery.applyContainerQuery(Item, query);

class ContainerQueryTest extends React.Component {
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
}

module.exports = ContainerQueryTest;
