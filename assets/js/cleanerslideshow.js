// In-Progress (Attempting to Add More than Two Slideshows in the File)

(function () {
    init(); // Execute on page load - show first slide, hide the rest.

    function init()
    {
        parents = document.getElementsByClassName('slideshow-container');

        for (j = 0 ; j < parents.length ; j++)
        {
            var slides = parents[j].getElementsByClassName("slide");
            var dots = parents[j].getElementsByClassName("dotMarker");

            slides[0].classList.add('active-slide');
            dots[0].classList.add('active');
        }
    }

    dots = document.getElementsByClassName('dotMarker'); // Dots functionality - for future functionality - currently NOT IN USE

    for (i = 0 ; i < dots.length ; i++)
    {
        dots[i].onclick = function() {
            
            slides = this.parentNode.parentNode.getElementsByClassName("slide");

            for (j = 0 ; j < this.parentNode.children.length ; j++)
            {
                this.parentNode.children[j].classList.remove('active');
                slides[j].classList.remove('active-slide');
                if (this.parentNode.children[j] == this)
                {
                    index = j;
                }
            }
            this.classList.add('active');
            slides[index].classList.add('active-slide');
        }
    }

    /* Main Previous and Next Functionality */
    links = document.querySelectorAll('.slideshow-container a');

    for (i = 0 ; i < links.length ; i++)
    {
        links[i].onclick = function() {
            current = this.parentNode;
            
            var slides = current.getElementsByClassName("slide");
            var dots = current.getElementsByClassName("dot");

            curr_slide = current.getElementsByClassName('active-slide')[0];
            curr_dot = current.getsElementsByClassName('active')[0];
            
            curr_slide.classList.remove('active-slide');
            curr_dot.classList.remove('active');

            if (this.className == 'next')
            {
                if (curr_slide.nextElementSibling.classList.contains('slide'))
                {
                    curr_slide.nextElementSibling.classList.add('active-slide');
                    curr_dot.nextElementSibling.classList.add('active');
                }
                else
                {
                    slides[0].classList.add('active-slide');
                    dots[0].classList.add('active');
                }
            }

            if (this.className == 'prev')
            {
                if (curr_slide.previousElementSibling)
                {
                    curr_slide.previousElementSibling.classList.add('active-slide');
                    curr_dot.previousElementSibling.classList.add('active');
                }
                else
                {
                    slides[slides.length - 1].classList.add('active-slide');
                    dots[slides.length - 1].classList.add('active');
                }
            }
        }
    }
})();