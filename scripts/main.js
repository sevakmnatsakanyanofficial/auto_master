document.addEventListener('DOMContentLoaded', function(event) {
    let collapseMenu = function (event) {
        let collapsedElem = document.getElementsByClassName("collapse show");
        let elem = document.getElementsByClassName("collapse")[0];
        if (collapsedElem.length > 0) {
            elem.classList.remove("show");
            event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="12" viewBox="0 0 46 12" fill="none">\n' +
                '<line y1="-0.5" x2="37" y2="-0.5" transform="matrix(-1 8.50915e-08 8.50915e-08 1 46 12)" stroke="white"/>\n' +
                '<line y1="-1" x2="46" y2="-1" transform="matrix(-1 8.50915e-08 8.50915e-08 1 46 2)" stroke="white" stroke-width="2"/>\n' +
                '</svg>';

        } else {
            elem.classList.add("show");
            event.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="12" viewBox="0 0 46 12" fill="none">\n' +
                '<line x1="46" y1="0.5" x2="9" y2="0.499997" stroke="white"/>\n' +
                '<line x1="46" y1="11" x2="-8.50915e-08" y2="11" stroke="white" stroke-width="2"/>\n' +
                '</svg>';
        }
    }

    document.getElementById("navbarToggler").addEventListener("click", collapseMenu);
});