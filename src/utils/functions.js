//Add new Element(Skill or language ) to the ancien
export const addNew = (allElement, newElement) => {
    allElement.push(newElement)
}

// Delete a specific element in array of elements
export const deleteInputs = (index, allElement) => {
    return allElement.splice(index, 1)[0];
}
