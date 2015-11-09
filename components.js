var React = require('react');

// Toplevel methods: https://facebook.github.io/react/docs/top-level-api.html
var ClassForNotes = React.createClass({
  // -----  Methods we can define  -----
  // https://facebook.github.io/react/docs/component-specs.html
  //
  // Configuration
  // -------------
  // getDefaultProps  - Invoked once and cached when the class is created
  // propTypes        - allows you to validate props being passed to your components https://facebook.github.io/react/docs/reusable-components.html
  // mixins           - an array that you can use to share behaviour across components
  // statics          - an object with methods that can be called on the class
  // displayName      - used for debugging
  //
  // Lifecycle
  // ---------
  // getInitialState           - Invoked once before the component is mounted
  // componentWillMount        - invoked once before initial rendering
  // componentDidMount         - invoked once after initial rendering
  // componentWillReceiveProps - uhm, idk
  // shouldComponentUpdate     - return false when you're certain that the transition to the new props and state will not require a component update
  // componentWillUpdate       - Invoked immediately before rendering when new props or state are being received
  // componentDidUpdate        - Invoked immediately after the component's updates are flushed to the DOM (not called on initial render)
  // componentWillUnmount      - Invoked immediately before a component is unmounted from the DOM. (do cleanup)

  // Required
  // Needs to return a component, eg drop html in here. You can use these tags / attributes
  // https://facebook.github.io/react/docs/tags-and-attributes.html
  render:          function() {
    // -----  Methods made available from React  -----
    // https://facebook.github.io/react/docs/component-api.html
    //
    // setState / replaceState
    // setPropts / replaceProps
    // forceUpdate
    // getDOMNode
    // isMounted  (returns true if the component is rendered into the DOM)
  },
});


var App = React.createClass({
  render: function() {
    // A list of tags / attributes you can use:
    // https://facebook.github.io/react/docs/tags-and-attributes.html
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>Hello, two!</h2>
      </div>
    )
  }
});

module.exports = {
  App: App,
};
