const title = getParameterByName('title');
const img = getParameterByName('img');

const songName = $('#songname');
const albumImage = $('#cover');

if (title) {
    songName.text(title);
} else {
    songName.hide();
}

if (img) {
    albumImage.attr('src', img);
}

setTimeout(function() {
    onItemClick(1);
    $('.btn-flat').on('click', onItemClick);
    $('.album-play').on('click', function() {
        if ($(this).find('i').text() === 'pause') {
            reset();
        } else {
            onItemClick(0);
        }
    });
}, 1000);

function onItemClick(index) {
    var allBtns = $('.btn-flat');
    var $this = Number.isInteger(index) ? $(allBtns[index]) : $(this);
    var wasActive = $this.hasClass('active');
    
    // reset all buttons
    reset();
    
    // activate if needed
    if (!wasActive) {
        $('.vinyl-container').addClass('play');
        $this.addClass('active');
        $this.find('i').text('pause_circle_filled');
        $this.closest(".card").find('.album-play i').text('pause');  
        $this.append([].join(''));
    }

}

function reset() {
    var allBtns = $('.btn-flat');
    
    // reset all buttons
    $('.vinyl-container').removeClass('play');
    allBtns.removeClass('active');
    allBtns.find('i').text('play_circle_outline');
    $('.album-play i').text('play_arrow'); 
    $('.card.music .play-bars').remove();
}

function getParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
