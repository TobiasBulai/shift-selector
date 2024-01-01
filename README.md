# Shift Selector

This project aims to help and enable `shift+click` on checkboxes, like how some E-mail applications do to help us handle more than one issue at a time.

**How to use**

Simply click on the first checkbox, then on the second `shift+click`  to select the span up until that point.

If a checkbox is _**de**-selected_ and you perform the `shift+click`, you then de-select the items in that span too!

## Enable in project

The project features a module ready function that you can simply import to your project:

```javascript
import shiftSelect from 'shift-select'

// I'm now enabled on this page!
shiftSelect()

// I'm now enabled on a specific element!
shiftSelect(document.getElementById('myForm'))
```

Or if you have a simple page without Node or similar environment, just remove the `export default` from the `index.js`-file and use it on your page:

```html
<body>
  <form id="myForm">
    <input type="checkbox"> Some box
    <input type="checkbox"> Some box2
  </form>
  <script src="index.js"></script>
  <script>
    // I'm now enabled on this specific form and nothing else!
    shiftSelect()
  </script>
</body>
```
