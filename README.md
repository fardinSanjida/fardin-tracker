
# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById, getElementsByClassName, and querySelector / querySelectorAll are the DOM Methods.
'getElementById' is used to access the id. 'getElementsByClassName' is used to access the class name that the element of the code contains. 'querySelector' is used to find the elements by their tagname. its works for only the first matching element. 'querySelectorAll' works same as 'querySelector' but it works for the all matching elements returning a nodelist.

# 2. How do you create and insert a new element into the DOM?

=> to create element 'document.createElement("tag name")
=> to insert a new element 'idName.appendChild(tag name)

# 3. What is Event Bubbling? And how does it work?

=> Event Bubbling is a chain reaction where the event is occured on a particular button click and then the parentnode gets included into the event.

# 4. What is Event Delegation in JavaScript? Why is it useful?

=> Event Delegation is the proccess where event lisenter is parent when the multiple child have go through the same implementatin. 
=> Useful because:
       1. less code are writen. because we use the parent to execute. 
       2. It exexcutes with the help of event bubbling.
       3. It handle events dynamically.

# 5. What is the difference between preventDefault() and stopPropagation() methods?

=> 'preventDefault()' stops the default action when any event happens by stoping the browser.
=> 'stopPropagation()' stops the event bubbling so that it cant spread to the parent element and other event listeners.

## License

MIT
