$(document).ready( () => {

  // Selector
  const $app = $('#app');

  // Create element
  var $form = $('<form method="POST" action="/convert"></form>');
  var $file = $('<div><textarea name="jsonFile" rows="35" cols="55" required></textarea></div>');
  var $submit = $('<div><input type="submit" value="Submit" /></div>');

  // Append
  $file.appendTo($form);
  $submit.appendTo($form);
  $form.appendTo($app);
});