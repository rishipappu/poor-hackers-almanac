/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, Panel } from 'react-instantsearch-dom';
// import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  '2MFEVOS5ZR',
  'd47a9bf01a0fbedd42ce794d5c924c72'
);

// eslint-disable-next-line react/prop-types
const Tags = ({ hit }) => (
  <div className="tags">
    <strong>Tags:</strong>
    {hit.tags.map(tag => (
      <p className="tag" key={hit.objectID + hit.tags.indexOf(tag)}>
        {tag}
      </p>
    ))}
  </div>
);

// eslint-disable-next-line react/prop-types
const Definitions = ({ hit }) => (
  <div className="definitions">
    <p>
      <strong>Formal:</strong> {hit.formalDefinition}
    </p>
    <p>
      <strong>Simple:</strong> {hit.simpleDefinition}
    </p>
  </div>
);

// eslint-disable-next-line react/prop-types
const currentVersion = ({ hit }) => (
  <p>Current Version: v{hit.currentVersion}</p>
);
// eslint-disable-next-line react/prop-types
const managedBy = ({ hit }) => <p>Managed By: {hit.managedBy}</p>;

const currentVersionChecked = ({ hit }) => {
  if (hit.currentVersion !== null) {
    return <currentVersion hit={hit} />;
  }
};
const managedByChecked = ({ hit }) => {
  if (hit.managedBy !== null) {
    return <managedBy hit={hit} />;
  }
};

// eslint-disable-next-line react/prop-types
const Information = props => (
  <div className={props.open}>
    <div className="contentHeader">
      <h1 className="modalTerm" onClick={props.onClick}>
        {props.hit.term}
      </h1>
      <p>
        <strong>Created:</strong> {props.hit.created}
      </p>
      <div>
        <Tags hit={props.hit} />
      </div>
    </div>
    <currentVersionChecked hit={props.hit} />
    <managedByChecked hit={props.hit} />
    <Definitions hit={props.hit} />
  </div>
);

// eslint-disable-next-line react/prop-types
class DefinitionModal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.props = { hit: props.hit };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Information hit={this.props.hit} />
        </Modal>
        <button className="openbutton" type="button" onClick={this.showModal}>
          Show More
        </button>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? 'open' : 'closed'}>
      <section className="modal-main">
        {children}
        <button className="closebutton" onClick={handleClose}>
          Show Less
        </button>
      </section>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Hit = ({ hit }) => (
  <div className="hitItem">
    <h1 className="term">{hit.term}</h1>
    <DefinitionModal hit={hit} />
  </div>
);

class App extends Component {
  render() {
    return (
      <InstantSearch indexName="terms" searchClient={searchClient}>
        <Panel>
          <SearchBox autoFocus searchAsYouType showLoadingIndicator />
        </Panel>
        <Panel>
          <Hits hitComponent={Hit} />
        </Panel>
      </InstantSearch>
    );
  }
}

export default App;
