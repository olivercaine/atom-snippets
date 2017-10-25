// 'arf'
let filtered = waves.filter((something) => {
    // return element.active;
})

// arfin
arfin

// 'arfi'
for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        // body...
    }
}

// 'arfe'
myArray.forEach(function(elem) {
    // body...
});

// 'arm'
let animal_names = animals.map((animal, index, animals) => {
    return animal.name
})

// 'desc'
describe('description', function() {
    // body...
});

// 'ita'
it('description', function(done) {
    // body...
});

// 'itp'
it('description');

// 'its'
it('description', function() {
    // body...
});

// 'clan'
'use strict'

module.exports = class {
    constructor (prop) {
        this._prop = prop
    }
}

// 'cla'
export default class {
    constructor () {

    }
}

// 'cl'
console.log(obj);

// 'apply'
methodName.apply(context, [arguments])

// 'call'
methodName.call(context, arguments)

// 'iife'
(function(window, document) {
    // body...
})(window, document);

// 'fn'
function methodName (arguments) {
    // body...
}

// 'fno'
functionName: function(arguments) {
    // body...
}

// 'call'
methodName.call(context, arguments)

// 'pr'
ClassName.prototype.methodName = function(arguments) {
    // body...
}

// 'jp'
JSON.parse(obj);

// 'js'
JSON.stringify(obj);

// 'de'
debugger;

// 'us'
'use strict';

// 'asd'
assert.deepEqual(actual, expected);

// 'ase'
assert.equal(actual, expected);

// 'asn'
assert.notEqual(actual, expected);

// 'me'
module.exports = name;

// 're'
require('module');

// 'rcf'
import React from 'react'

export default class extends React.Component {
    constructor (props) {
        super(props)
        // this.setState({property: props.property);
    }

    componentWillMount () {
        // Invoked immediately before mounting occurs.
    }

    render () {
        return (
          <div>Component content</div>
        )
    }

    componentDidMount () {
        // Invoked immediately after a component is mounted.
        // This is a good place to retrieve data from a remote endpoint.
        // Setting state in this method will trigger a re-rendering.
    }

    componentWillReceiveProps (nextProps) {
        // Invoked before a mounted component receives new props.
        // Doesn't get called during mounting.
    }

    shouldComponentUpdate (nextProps, nextState) {
        // Lets React know if a component's output is not affected by the current change in state or props.
        // If false is returned here then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked.
    }

    componentWillUpdate (nextProps, nextState) {
        // Invoked immediately before rendering when new props or state are being received.
    }

    componentDidUpdate (prevProps, prevState) {
        // Invoked immediately after updating occurs.Not called for the initial render.
    }

    componentWillUnmount () {
        // Invoked immediately before a component is unmounted and destroyed.
        // Perform any necessary cleanup in this method: invalidating timers, cancelling network requests,
        // cleaning up any DOM elements etc.
    }
}

// 'rcp'
import React from 'react'

export default () => (
  <div>Pure component!!</div>
)

// 'rcs'
import React from 'react'

export default class extends React.Component {
    render () {
        return (
          <div>Component content</div>
        )
    }
}

// 'tmj'
describe('UnitOfWork', () => {
    describe('StateUnderTest', () => {
        it('ExpectedBehaviour', () => {
            // arrange

            // act

            // assert
        })
    })
})

// 'tmt'
test('UnitOfWork_StateUnderTest_ExpectedBehaviour', t => {
    // arrange

    // act

    // assert
    t.end()
})

// 'si'
setInterval(function() {
    // body...
}, delay);

// 'st'
setTimeout(function() {
    // body...
}, delay);
