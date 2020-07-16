var score = 0;
var correct;

// inicializa el juego
game();

// enlaza el click de los circulos a la funcion guess

$('.option').on('click', guess);

game();

function game(){
    correct = Math.floor(Math.random() * 2);

    $('.option').each(function(index){
        var color = generateColor();
        $(this).css('background-color', color);
    
        if (index == correct){
            $('.question').text(color);
        }
    
    });
}

function guess(){
    var index = $('.option').index(this);
    if (index == correct){
        alert('Muy bien!!!');      
        score++;
    }else {
        alert ('No, Respuesta incorrecta');
        score = 0;
    }
    $('.score span').text(score);
    game(); 
}

function generateColor(){
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'
}

function random(){
    return Math.floor(Math.random() * 255);
}

