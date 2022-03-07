const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



        // xử lý silder 
    function next() {
        var  sliders = $$('.slide-item'), i=0, slider = $('.slide-item')
        switch (slider.className) {
            case 'slide-item slide-item__c1':
                sliders[i].classList.replace('slide-item__c1','slide-item__c4');i++
                sliders[i].classList.replace('slide-item__c2','slide-item__c1');i++
                sliders[i].classList.replace('slide-item__c3','slide-item__c2');i++
                sliders[i].classList.replace('slide-item__c4','slide-item__c3');
                break;
        case 'slide-item slide-item__c4':
                sliders[i].classList.replace('slide-item__c4','slide-item__c3');i++
                sliders[i].classList.replace('slide-item__c1','slide-item__c4');i++
                sliders[i].classList.replace('slide-item__c2','slide-item__c1');i++
                sliders[i].classList.replace('slide-item__c3','slide-item__c2');
                break;
        case 'slide-item slide-item__c3':
                sliders[i].classList.replace('slide-item__c3','slide-item__c2');i++
                sliders[i].classList.replace('slide-item__c4','slide-item__c3');i++
                sliders[i].classList.replace('slide-item__c1','slide-item__c4');i++
                sliders[i].classList.replace('slide-item__c2','slide-item__c1');
                break;
        case 'slide-item slide-item__c2':
                sliders[i].classList.replace('slide-item__c2','slide-item__c1');i++
                sliders[i].classList.replace('slide-item__c3','slide-item__c2');i++
                sliders[i].classList.replace('slide-item__c4','slide-item__c3');i++
                sliders[i].classList.replace('slide-item__c1','slide-item__c4');
                break;        
        
            default:
                
        }

 
}
function back() {
    var  sliders = $$('.slide-item'), i=0, slider = $('.slide-item')

    switch (slider.className) {
        case 'slide-item slide-item__c1':
            sliders[i].classList.replace('slide-item__c1','slide-item__c2');i++
            sliders[i].classList.replace('slide-item__c2','slide-item__c3');i++
            sliders[i].classList.replace('slide-item__c3','slide-item__c4');i++
            sliders[i].classList.replace('slide-item__c4','slide-item__c1');
            break;
    case 'slide-item slide-item__c4':
            sliders[i].classList.replace('slide-item__c4','slide-item__c1');i++
            sliders[i].classList.replace('slide-item__c1','slide-item__c2');i++
            sliders[i].classList.replace('slide-item__c2','slide-item__c3');i++
            sliders[i].classList.replace('slide-item__c3','slide-item__c4');
            break;
    case 'slide-item slide-item__c3':
            sliders[i].classList.replace('slide-item__c3','slide-item__c4');i++
            sliders[i].classList.replace('slide-item__c4','slide-item__c1');i++
            sliders[i].classList.replace('slide-item__c1','slide-item__c2');i++
            sliders[i].classList.replace('slide-item__c2','slide-item__c3');
            break;
    case 'slide-item slide-item__c2':
            sliders[i].classList.replace('slide-item__c2','slide-item__c3');i++
            sliders[i].classList.replace('slide-item__c3','slide-item__c4');i++
            sliders[i].classList.replace('slide-item__c4','slide-item__c1');i++
            sliders[i].classList.replace('slide-item__c1','slide-item__c2');
            break;        
    
        default:
            break;
    }
}


var autoSlider = setInterval(next,5000)



/// xử lý tab sidebar
function controlSideBar () {
        var menu = $('.sidebar-navbar-menu')
        var tabs = menu.querySelectorAll('.sidebar-navbar-item')
        var panes = $$('.panes')
        
        tabs.forEach((tab,index) => {
                const pane = panes[index]
                tab.onclick = function () {
                $('.sidebar-navbar-item.active').classList.remove('active')
                this.classList.add('active')
                $('.panes.actives').classList.remove('actives')
                pane.classList.add('actives')

              }
})
}
controlSideBar()
// end tab sidebar