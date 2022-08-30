function confirmDeletion() {
    if (confirm('Are you sure you want to delete this project?')) {
        // user wants to delete, so continue (page will POST)
        return true;
    }
    else {
        // tell the page to stop what it's doing (page will not POST)
        event.stopPropagation();
        event.preventDefault();
    }
}