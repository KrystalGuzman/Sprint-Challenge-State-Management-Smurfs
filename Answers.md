1. What problem does the context API help solve?

The context API allows us to avoid props drilling down through components. We can call the props into the necessary components by using the context component and after wrapping our components at a higher level (ex: App) in the context provider.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object that holds properties related to an action that a user would carry out on the browser. For example: a click, a form, updating information, etc.

A reducer is a function that takes an action and the previous state and returns an object. The reducer does not mutate the state; it returns a new object with the updated state according to the instruction on the action.

The store holds the state for our whole application. We never directly change or write on the store. The actions and reducer create new state objects and those get put on the store when a slice of state gets updated.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

 Application state is where state can be passed to any component without having to prop drill (example: context API or Redux). Component state is when a component holds the state locally. Component state would be good for small projects or a branch of an application tree where the state for that component or components would not make sense outside of that branch. Application state would be beneficial for a larger app that has many components that need the same state.
 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that happens between an action fire and before the store receives the action-creator instructions. It also changes the object from the action-creator into a function and uses the dispatch to communicate with the store.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Even though it's really hard having to change my current view of state, I like Redux because I can access it from any component as long as the component is hooked up to the store.