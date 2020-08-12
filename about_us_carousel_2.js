'use strict';
    
    window.addEventListener('load', function () {
    var carousels = document.querySelectorAll('.carousel');
                
    for (var i = 0; i < carousels.length; i++) {if (window.CP.shouldStopExecution(1)){break;}
        carousel(carousels[i]);
    }
    window.CP.exitedLoop(1);
                
    });
                
    function carousel(root) {
        var figure = root.querySelector('figure'),
            nav = root.querySelector('nav'),
            images = figure.children,
            n = images.length,
            gap = root.dataset.gap || 0,
            bfc = 'bfc' in root.dataset,
            theta = 2 * Math.PI / n,
            currImage = 0;
                
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener('resize', function () {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        });
                
        setupNavigation();
                
        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n)); 
                figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';
                
            for (var i = 0; i < n; i++) {
                if (window.CP.shouldStopExecution(2)){
                    break;
                }
                images[i].style.padding = gap + 'px';
            }
            window.CP.exitedLoop(2);
            for (i = 1; i < n; i++) {
                if (window.CP.shouldStopExecution(3)){
                    break;
                }
                images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
                images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
            }
            window.CP.exitedLoop(3);
                
            if (bfc) for (i = 0; i < n; i++) {
                if (window.CP.shouldStopExecution(4)){
                    break;
                }
                images[i].style.backfaceVisibility = 'hidden';
            }
            window.CP.exitedLoop(4);
            rotateCarousel(currImage);
        }
                
        function setupNavigation() {
            nav.addEventListener('click', onClick, true);
                
            function onClick(e) {
                e.stopPropagation();
                
                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON')
                    return;
                
                if (t.classList.contains('next')) {
                    currImage++;
                } else {
                    currImage--;
                }
                
                rotateCarousel(currImage);
            }
        }
                
        function rotateCarousel(imageIndex) {
            figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
        }
    }
