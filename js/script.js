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
const playerSongImg = $('.player-song-img')
const playerSongName = $('.player-song-name')
const playerSongSinger = $('.player-song-singer-name')
const audio = $('#audio')
const play = $('.icon-player-play')
const proGress = $('#progress')
const nextSong = $('.next-song')
const prevSong = $('.prev-song')
const ramdomSong = $('.ramdom-song')

//song 
        const playList = {
                currentIndex:0,
                isPlaying: false,
                isRamdom: false,
            songs :   [{
                    name: 'Chạy Về Nơi Phía Anh',
                    singer: 'Khắc Việt',
                    path: './img/playlist/music/Chay Ve Noi Phia Anh - Khac Viet.m4a',
                    imgage: './img/playlist/img/chayvenoiphiaanh.jpg'    
                },
                {
                    name: 'Chìm Sâu',
                    singer: 'MCK ft. Trung Trần',
                    path: './img/playlist/music/Chim Sau - MCK ft_ Trung Tran.mp3',
                    imgage: './img/playlist/img/chim sau.jpg'    
                },
                {
                    name: 'Đau Nhất Là Lặng Im',
                    singer: 'Erik',
                    path: './img/playlist/music/Dau Nhat La Lang Im - Erik.m4a',
                    imgage: './img/playlist/img/daunhatlaimlang.jpg'    
                },
                {
                    name: 'Ngày Đầu Tiên',
                    singer: 'Đức Phúc',
                    path: './img/playlist/music/Ngay Dau Tien - Duc Phuc.m4a',
                    imgage: './img/playlist/img/ngaydautien.jpg'    
                },
                {
                    name: 'Người Yêu Tôi Lạnh Lùng Sắt Đá',
                    singer: 'Mr Siro',
                    path: './img/playlist/music/Nguoi Yeu Toi Lanh Lung Sat Da - Mr Siro.m4a',
                    imgage: './img/playlist/img/ngtoiyeulanhlungsatda.jpg'    
                },
                {
                    name: 'See Tình',
                    singer: 'Hoàng Thùy Linh',
                    path: './img/playlist/music/See Tinh - Hoang Thuy Linh.m4a',
                    imgage: './img/playlist/img/seetinh.jpg'    
                },
                {
                    name: 'Thay Mọi Cô Gái Yêu Anh',
                    singer: 'AMee',
                    path: './img/playlist/music/Thay Moi Co Gai Yeu Anh - AMee.m4a',
                    imgage: './img/playlist/img/thaymoicogaiemyeuanh.jpg'    
                },
                {
                    name: 'Vui Lắm Nha',
                    singer: 'Hương Ly; Jombie',
                    path: './img/playlist/music/Vui Lam Nha - Huong Ly_ Jombie.m4a',
                    imgage: './img/playlist/img/vuilamanha.jpg'    
                },
                {
                    name: 'Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh',
                    singer: 'Erik',
                    path: './img/playlist/music/Yeu Duong Kho Qua Thi Chay Ve Khoc Voi A.m4a',
                    imgage: './img/playlist/img/yeukhoquathivevoianh.jpg'    
                },
        ],
        render: function () {
            const htmls = this.songs.map(function(song,index){
                    return `
                        <div class="song-playlist__item">
                                <div class="song-left">
                                        <img src="${song.imgage}" alt="" class="song-img" />
                                        <div class="song-info">
                                        <span class="song-name">${song.name}</span>
                                        <p class="song-singer-name">${song.singer} <ion-icon name="star"></ion-icon></p>
                                        </div>
                                </div>
                                <div class="song-right">
                                        <a href="" class="song-link">${song.name}</a>
                                        <ion-icon name="heart" class="song-like-icon"></ion-icon>
                                        <div class="song-time">04:50</div>
                                </div>
                        </div>

                    `
            })
            $('.song-playlist').innerHTML =htmls.join('')
        },
        defineProperties: function() {
                Object.defineProperty(this,'currentSong' ,{
                        get: function (){
                                return this.songs[this.currentIndex]
                        }
                })
        },
        handelEvents: function (){
                const _this = this
                play.onclick = function () {
                        if(_this.isPlaying){
                                audio.pause()
                        }else {
                                audio.play()
                        }
                       
                }
                audio.onplay = function () {
                        _this.isPlaying = true
                        play.setAttribute("name","pause-circle-outline");
                }
                audio.onpause = function () {
                        _this.isPlaying = false
                        play.setAttribute("name","play-circle-outline");
                }
                audio.ontimeupdate =function () {
                        if(audio.duration){
                                const progress = Math.floor(audio.currentTime /audio.duration *100)
                                proGress.value = progress
                        }

                }
                

                // xử lý khi tua bài hát
                proGress.onchange = function (e) {
                        const seekTime = e.target.value*audio.duration/100
                        audio.currentTime = seekTime
                }
                //khi next bài hát
                nextSong.onclick = function () {
                        if(_this.isRamdom) {
                        _this.ramdomSong()

                        }else {
                                _this.nextSong()
                        }
                        audio.play()
                }
                //khi prev về bài trc
                prevSong.onclick = function () {
                        if(_this.isRamdom) {
                                _this.ramdomSong()
        
                                }else {
                                        _this.prevSong()
                                }
                        
                        audio.play()
                }
                //ramdom
                ramdomSong.onclick = function (e) {
                        _this.isRamdom = !_this.isRamdom
                        ramdomSong.classList.toggle('active',_this.isRamdom)
                        }
                //xử lý khi audio end
                audio.onended =function () {
                        nextSong.click()
                }
                
        },

        loadCurrentSong: function(){
                

                playerSongImg.src = this.currentSong.imgage
                playerSongName.textContent = this.currentSong.name
                playerSongSinger.textContent = this.currentSong.singer
                audio.src = this.currentSong.path
        },
        nextSong: function () {
                this.currentIndex++
                if(this.currentIndex >= this.songs.length)  {
                        this.currentIndex = 0
                } 
                this.loadCurrentSong()   
        },
        prevSong: function () {
                this.currentIndex--
                if(this.currentIndex < 0)  {
                        this.currentIndex = this.songs.length-1
                } 
                this.loadCurrentSong()   
        },
        ramdomSong: function (){
                let newIndex
                do {
                newIndex = Math.floor(Math.random() * this.songs.length);

                }while(newIndex == this.currentIndex)
                this.currentIndex = newIndex
                this.loadCurrentSong()
        },
        start : function() {
                this.defineProperties()
                this.handelEvents()
                this.loadCurrentSong()
                this.render()
        }

}
playList.start()