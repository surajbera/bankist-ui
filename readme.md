## Topics
- DOM is basically the interface between our JS code and browser.
- DOM tree is generated from an HTML document, which we can then interact with.
- We can write JS for the following things:
  - Create, modify, delete HTML elements.
  - Set styles, classes and attributes.
  - Listen and respond to events.

## Methods
- document.querySelectorAll()
- document.querySelector()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.createElement()
- myParentElement.prepend(myChildElement) - Adds the element at the very beginning.
- myParentElement.append(myChildElement) - Adds the element at the very end.
- myParentElement.before(myChildElement) - Adds the element as a sibling.
- myParentElement.after(myChildElement) - Adds the element as a sibling.
- element.getAttribute()
- element.setAttribute()
- element.classList.add('custom-class');
- element.classList.remove('custom-class');
- element.classList.toggle('custom-class');
- element.classList.contains('custom-class);
- element.src returns the absolute url
- element.getAttribute('src') returns the relative url
- element.dataset.versionNumber()
- getBoundingClientRect(): Relative to the viewport
- window.pageYOffset - Relative to the document
- window.pageXOffset - Relative to the document
- Getting the Viewport width and height: document.documentElement.clientWidth and document.documentElement.clientHeight
- MDN events: https://developer.mozilla.org/en-US/docs/Web/Events

## Features Implemented
- Modal Window
- Cookie Policy Popup

## Notes
- One advantage of using addEventListener() is that you can add removeEventListener(). 
- e.currentTarget returns the element which has the 'Event Listener' attached to. **e.currentTarget** also equals to the **this** keyword.
- Bydefault, 'Event Capture' is set to false and 'Event Bubbling' is set to true. This can be changed by passing a boolean value as a 3rd argument to the addEventListener().
- Why should we use 'Event Delegation'?
  - When we are working with element(s) that is/are not yet on the page(by the time the page loads), at that time 'Event Delegation' is used.