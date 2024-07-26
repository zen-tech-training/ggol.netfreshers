function removeListItem() {
    const list = document.getElementById('myList');
    const lastItem = list.lastChild;
    if (lastItem) {
      list.removeChild(lastItem);
    }
  }