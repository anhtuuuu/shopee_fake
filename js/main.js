var count = 1;
        setInterval(function () {
            document.getElementById('radio' + count).checked = true;
            count++;
            if (count > 12) {
                count = 1;
            }
        }, 5000)

        function next() {
            count++;
            if (count > 12) count = 1;
            document.getElementById('radio' + count).checked = true;
        }
        function prev() {
            count--;
            if (count < 1) count = 12;
            document.getElementById('radio' + count).checked = true;
        }

        var countFls = 1;
        function nextFls() {
            countFls++;
            if (countFls > 3) countFls = 1;
            document.getElementById('fls' + countFls).checked = true;
        }
        function prevFls() {
            countFls--;
            if (countFls < 1) countFls = 3;
            document.getElementById('fls' + countFls).checked = true;
        }

        var count_spm = 1;
        var spm = setInterval(function () {
            document.getElementById('slide_spm' + count_spm).checked = true;
            count_spm++;
            if (count_spm > 2) {
                count_spm = 1;
            }
        }, 5000)

        function prev_spm() {
            count_spm--;
            if (count_spm < 1) count_spm = 2;
            document.getElementById('slide_spm' + count_spm).checked = true;

        }
        function next_spm() {
            count_spm++;
            if (count_spm > 2) count_spm = 1;
            document.getElementById('slide_spm' + count_spm).checked = true;

        }

        const shopeeMallTop = document.querySelector('.shopee_mall');
        var mainItemsToday = document.querySelector('.itmes_today');
        var titleFix = document.querySelector('.title_today');
        var head = document.querySelector('header');
        window.addEventListener('scroll', scrolling);

        var heightFix;
        var heightMain;
        function scrolling(){
            heightFix = shopeeMallTop.getBoundingClientRect().top + shopeeMallTop.getBoundingClientRect().height - 50;
            heightHeader = head.getBoundingClientRect().height;
            heightMain = mainItemsToday.getBoundingClientRect().height + mainItemsToday.getBoundingClientRect().top;
            if(heightFix < 40 && heightMain > 200){
                titleFix.style.setProperty('position','fixed');
                titleFix.style.setProperty('top',heightHeader+'px');
                titleFix.style.setProperty('z-index','99');
            }
            else{
                titleFix.style.removeProperty('position','fixed');
                titleFix.style.removeProperty('top','0px');
                titleFix.style.removeProperty('z-index','99');

            }
        }


        const eventFix = document.querySelector('.event_fixed');
        function closeEvt(){
            eventFix.remove();
        }