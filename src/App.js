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
const Links = ({ hit }) => (
  <div className="links">
    <strong>Relevant Links:</strong>
    {hit.relevantLinks.map(link => (
      <a
        target="_blank"
        href={link}
        className="tag"
        key={hit.objectID + hit.relevantLinks.indexOf(link)}
      >
        {link.slice(0, 30)}
      </a>
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
const CurrentVersion = ({ hit }) => (
  <p>
    <strong>Current Version:</strong> v{hit.currentVersion}
  </p>
);
// eslint-disable-next-line react/prop-types
const ManagedBy = ({ hit }) => (
  <p>
    <strong>Managed By:</strong> {hit.managedBy}
  </p>
);

// eslint-disable-next-line react/prop-types
const Information = props => (
  <div className={props.open}>
    <div className="contentHeader">
      <h1 className="modalTerm" onClick={props.onClick}>
        {props.hit.term}
      </h1>
      <div>
        <Tags hit={props.hit} />
      </div>
      <p>
        <strong>Created:</strong> {props.hit.created}
      </p>
      <CurrentVersion hit={props.hit} />
      <ManagedBy hit={props.hit} />
      <Links hit={props.hit} />
    </div>
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
