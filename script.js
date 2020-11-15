window.onload = function () {
    var givenArray= [1,2,3,4,5,6,7,8,9];
    window.sortAndShuffle = {
        shuffleTiles: function() {
            let shuffledArray = givenArray.sort(() => Math.random() - 0.5);
            sortAndShuffle.updateDom(shuffledArray)
        },
        sortTiles: function() {
            let sortedArray = givenArray.sort();
            sortAndShuffle.updateDom(sortedArray);
        },
        updateDom: function(givenArray) {
            if(givenArray.length > 0) {
                let container = document.getElementById('tiles-container');
                container.innerHTML = '';
                var finalInnerHtml = '';
                givenArray.forEach((randomNumber) => {
                    finalInnerHtml += '<div class="tile color-'+Math.floor(Math.random() * 4)+'"> '+randomNumber+'</div>';
                });
                container.innerHTML = finalInnerHtml;
            }
        }
    }
}
