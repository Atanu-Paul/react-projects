# A repository to store all my react projects

### Added the dev branch

### to redirect the port number of a node server for example 8080/3000 to the default ec2 instance port number 80 run the following command
# sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports (Give the port number here)

### react redux code to increment or decremnt a counter value on button click

#### like the one they have on ecommers websites in cart pages.

```
<script type="text/babel" data-plugins="proposal-class-properties" data-presets="env,react">
// Action Creators - You don't need to change these
const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

 const Counter = (props) => {
return (
<div>
<button onClick={props.increment} className="increment">+</button>
Current Count: <span>{props.count}</span>
<button onClick={props.decrement} className="decrement">-</button>

 </div>
);
};

 const mapStateToProps=(state)=>{
return {count:state.count}
}

 const WrappedCounter = ReactRedux.connect(mapStateToProps,{increment,decrement})(Counter);

 // Only change code _before_ me!
// -----------

 const store = Redux.createStore(Redux.combineReducers({
count: (count = 0, action) => {
if (action.type === 'increment') {
return count + 1;
} else if (action.type === 'decrement') {
return count - 1;
} else {
return count;
}
}
}));

    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <WrappedCounter />
        </ReactRedux.Provider>,
        document.querySelector('#root')
    );

</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```
