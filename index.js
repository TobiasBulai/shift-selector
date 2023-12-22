const shiftSelect = (element = undefined) => {
  if (element === undefined) {
    // TODO: lets find all the checkboxes available on the page and enable shift-selecting
  } else {
    // TODO: find closest form element with checkboxes and enable if no form was specified
    const closestCheckbox = element.querySelector("input['checkbox']")
    console.log(closestCheckbox)
  }
}
