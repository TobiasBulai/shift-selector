// eslint-disable-next-line no-unused-vars
const shiftSelect = (element = undefined) => {
  let firstNode
  let lastNode

  const getNodeIndex = (nodeList, node) => {
    return Array.prototype.indexOf.call(nodeList, node)
  }

  const markRange = (firstNode, lastNode, state, nodeList) => {
    if (firstNode !== undefined && lastNode !== undefined) {
      const firstIndex = getNodeIndex(nodeList, firstNode)
      const lastIndex = getNodeIndex(nodeList, lastNode)

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
        const selectedNodeIndex = getNodeIndex(nodeList, this)

        if (firstNode !== undefined) {
          const firstNodeIndex = getNodeIndex(nodeList, firstNode)

          if (selectedNodeIndex > firstNodeIndex) {
            if (lastNode !== undefined) {
              const currentLastNodeIndex = getNodeIndex(nodeList, lastNode)
              const currentNodeIndex = getNodeIndex(nodeList, this)

              if (currentLastNodeIndex < currentNodeIndex) {
                lastNode = this
              }
            } else {
              lastNode = this
            }
          } else {
            firstNode = this
          }
        } else {
          firstNode = this
        }

        if (event.shiftKey) {
          markRange(firstNode, lastNode, this.checked, nodeList)
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

export default shiftSelect
