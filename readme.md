# 6. Answers to the following questions are given below:

## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
### Answer: 
1.getElementById("id")
What it does: Finds an element by its unique id attribute.
Return type: A single element (not a collection).
2. getElementsByClassName("class")
What it does: Finds all elements with a given class name.
Return type: An HTMLCollection (looks like an array but not exactly).
3. querySelector("selector")
What it does: Finds the first element that matches a CSS selector.
Return type: A single element.
4. querySelectorAll("selector")
What it does: Finds all elements that match a CSS selector.
Return type: A NodeList (can use forEach, unlike HTMLCollection).

## 2. How do you **create and insert a new element into the DOM**?
### Answer:
1. createElement() → makes a new element
2. textContent / innerHTML / setAttribute → customize it
3. appendChild / prepend / insertBefore / insertAdjacentElement → insert into DOM

## 3. What is **Event Bubbling** and how does it work?
### Answer:
Event bubbling is a mechanism in the DOM where an event starts from the target element (the one that was actually clicked or interacted with) and then bubbles up (propagates) through its ancestors (parent → grandparent → up to document).

## 4. What is **Event Delegation** in JavaScript? Why is it useful?
### Answer:
Event Delegation is a technique where instead of attaching event listeners to multiple child elements, you attach a single event listener to their parent element.
Because of event bubbling, the parent can “catch” events from its children.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
### Answer: 
preventDefault() → Don’t do what the browser normally does.
stopPropagation() → Don’t let this event bubble up (or capture down).


## END ##



-------------------------------
## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

----------------------------------

