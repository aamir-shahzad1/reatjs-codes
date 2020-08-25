import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter , setNewValue} from '../redux/actions/counterActions';
import store from '../redux/store';

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);

    }
    getStoreState=()=>{
        console.log('This is store state', store.getState())
    }
    setStoreState=()=>{
        console.log('seting store state')
        store.dispatch(setNewValue(5000))
    }
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <h1>{this.props.counter}</h1>
                <button onClick={this.getStoreState}>Get State</button>
                <button onClick={this.setStoreState}>Set Store state</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

