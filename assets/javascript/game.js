var wins = 0;
        var losses = 0;
        var totalLives = 9;
        var lives = 9;
        var guesses =[];
        var html = '';
        // Sets the choices 
        var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  
        // When the user presses the key it records the keypress and then sets it to userguess
        document.onkeypress = function(event) 
        {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            //alert(userGuess);
            var indexFound = computerChoices.indexOf(userGuess);
            if(indexFound >= 0)
            {
                // This sets the computer guess equal to the random.
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                // alert(computerGuess);                
                if( userGuess == computerGuess )
                {
                    wins++;
                    lives = totalLives;
                    guesses = [];
                    html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                        losses + "</p>" + "<p>Guesses Left : " + 
                        lives + "</p>" + "<p>Your Guesses so far : " + 
                        guesses + "</p>";
                }
                else
                {
                    if(lives > 1)
                    {
                        lives--;
                        guesses.push(userGuess);
                        // Taking the tallies and displaying them in HTML
                        html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                            losses + "</p>" + "<p>Guesses Left : " + 
                            lives + "</p>" + "<p>Your Guesses so far : " + 
                            guesses + "</p>";
                    }
                    else
                    {
                        lives = totalLives;
                        losses++;
                        guesses = [];
                        // Taking the tallies and displaying them in HTML
                        html = "<p>wins : " +  wins + "</p>" + "<p>losses : " + 
                            losses + "</p>" + "<p>Guesses Left : " + 
                            lives + "</p>" + "<p>Your Guesses so far : " + 
                            guesses + "</p>";
                    }
                }
                // Placing the html into the game ID
                document.querySelector('#game').innerHTML = html;
            }
        }
        function GetLives()
        {
            return "<p>Guesses Left : " + String(lives) + "</p>";
        }