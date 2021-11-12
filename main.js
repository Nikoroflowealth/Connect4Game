

$(document).ready(function() {
  const connect4 = new Connect4('#connect4')

  connect4.onPlayerMove = function() {
      $('#player').text(connect4.player);
    }
  $('#restart').click(function() {
    connect4.restart();
  })
});








   /* for (statement 1; statement 2; statement 3) {
        // code block to be executed
      }
      Statement 1 is executed (one time) before the execution of the code block.
      
      Statement 2 defines the condition for executing the code block.
      
      Statement 3 is executed (every time) after the code block has been executed.
    for () */
 