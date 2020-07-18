$(function() {
    $("#js-shopping-list-form").submit( event => {
      // this stops the default form submission behavior
      event.preventDefault();
      // takes the user input and creates a variable 
      const newListValue = $(this).find(
        'input[name="shopping-list-entry"]').val();
      //inserts li item into HTML with variable value
      const newListItemHTML = '<li> <span class="shopping-item">' + newListValue + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
    // inserts list item
      $(".shopping-list").append(newListItemHTML)
    });
});

//enables check button to check list item off
$( ".shopping-list" ).on( "click", ".shopping-item-toggle", function(){
    event.preventDefault()
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });

//enalbes delete button to delete list items
$( ".shopping-list" ).on( "click", ".shopping-item-delete", function(){
    $(this).closest('li').remove();
  });
