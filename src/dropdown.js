/**
 * Sets up a dropdown element using two tags
 * @param {*} dropdownButtonRef The button that toggles the dropdown content visibility
 * @param {*} dropdownContentRef The content
 */
function dropdownCreator(dropdownButtonRef, dropdownContentRef) {
  console.log("Test");
  console.log(dropdownButtonRef);
  console.log(dropdownContentRef);
  dropdownButtonRef.addEventListener("click", () => {
    const dropdownContent = dropdownContentRef;
    console.log(dropdownContentRef);
    console.log("Registering event");
    console.log(dropdownContent.style.display);
    if (
      dropdownContent.style.display == "block" ||
      dropdownContent.style.display == ""
    ) {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

export { dropdownCreator };
