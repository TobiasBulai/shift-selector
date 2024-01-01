// eslint-disable-next-line no-unused-vars
const shiftSelect = (element = undefined) => {
  const selectedNodes = []

  const getNodeIndex = (nodeList, node) => {
    return Array.prototype.indexOf.call(nodeList, node)
  }

  const addToNodeList = (index, node) => {
    if (selectedNodes.length === 2) {
      selectedNodes.shift()
    }

    selectedNodes.push({ index, node })
  }

  const markRange = (state, nodeList) => {
    if (selectedNodes.length === 2) {
      const [firstIndex, lastIndex] = (selectedNodes[0].index > selectedNodes[1].index)
        ? [selectedNodes[1].index, selectedNodes[0].index]
        : [selectedNodes[0].index, selectedNodes[1].index]

      for (let i = 0; i < nodeList.length; i++) {
        if (i <= firstIndex || i >= lastIndex) {
          continue
        }

        nodeList[i].checked = state
      }
    }
  }

  const shiftSelectFunc = (nodeList) => {
    nodeList.forEach(checkbox => {
      checkbox.addEventListener('click', function (event) {
        addToNodeList(getNodeIndex(nodeList, this), this)

        if (event.shiftKey) {
          markRange(this.checked, nodeList)
          return () => null
        }
      })
    })
  }

  if (element === undefined) {
    // Find all the checkboxes available on the page and enable shift-selecting
    document.getElementsByTagName('body')[0].querySelectorAll('form').forEach(form => {
      const nodeList = form.querySelectorAll('input[type=checkbox]')
      shiftSelectFunc(nodeList)
    })
  } else {
    // Find closest form element with checkboxes and enable if no form was specified
    const nodeList = element.querySelectorAll('input[type=checkbox]')
    shiftSelectFunc(nodeList)
  }
}

// export default shiftSelect
