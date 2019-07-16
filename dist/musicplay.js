const ap = new APlayer({
    container: document.getElementById('/aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'Sugar',
            artist: 'Maroon5',
            url: 'http://music.163.com/song/media/outer/url?id=29019227.mp3',
            cover: 'http://p2.music.126.net/RkbAVgGxk1Nr5fjuaR9dww==/19175482788569403.jpg?param=130y130',
            lrc: '',
            theme: '#46718b'
        },
        {
            name: 'Counting Stars',
            artist: 'OneRepublic',
            url: 'http://music.163.com/song/media/outer/url?id=26060065.mp3',
            cover: 'http://p1.music.126.net/b2nl6jsVbqj23IV8dVvJcg==/7766950139663735.jpg?param=130y130',
            theme: '#46718b'
        },
		{
            name: 'Just Like This',
            artist: 'Deepmaniak',
            url: 'http://music.163.com/song/media/outer/url?id=1301027901.mp3',
            cover: 'http://p2.music.126.net/lIH4I7d7879op3sOfSUMrw==/109951163854904814.jpg?param=130y130',
            theme: '#46718b'
        },
		{
            name: 'Monsters',
            artist: 'Timeflies / Katie Sky',
            url: 'http://music.163.com/song/media/outer/url?id=28461933.mp3',
            cover: 'http://p2.music.126.net/nuHFpI63eN1tYolLNqghJA==/6008831045999045.jpg?param=130y130',
            lrc: '',
	        theme: '#46718b'
        },
		{
            name: 'Love Me Like You Do（ 电影《五十度灰》主题曲 ）',
            artist: 'Ellie Goulding',
            url: 'http://music.163.com/song/media/outer/url?id=29966565.mp3',
            cover: 'http://p1.music.126.net/f4HkWKq-NrCTlnrZWP4cpQ==/6647647303036966.jpg',
            lrc: '',
	    theme: '#46718b'
        },
		{
            name: 'Stronger',
            artist: 'Kelly Clarkson',
            url: 'http://music.163.com/song/media/outer/url?id=26569168.mp3',
            cover: 'http://p1.music.126.net/NyN6he8m4t4F_yjOR_Tlww==/2495891395114271.jpg',
	    lrc: '',
            theme: '#46718b'
        }
    ]
});