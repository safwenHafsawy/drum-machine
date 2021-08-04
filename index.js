$(document).ready(function(){
    let active = false;
    //activate button on click
    $('.drum-pad').click((event)=>{
        let id= event.target.id[0];
        const audio = $(`#${id}`)[0];
            if(audio.paused && active){
                audio.play();
                $("#display-data").html(`${id} sound`);
            }else{
                audio.pause();
                audio.currentTime =0;
        }
    })
    //activate button with keyboard
    $(document).keypress((e) => {
        const id = e.key;
        console.log(active)
        const audio = $(`#${id}`)[0];
        if(audio.paused && active){
            $(`#${id}-play`).css({"background-color": "#272727","color":"#FED766"})
            audio.play();
            $("#display-data").html(`${id} sound`);
            setTimeout(function(){ $(`#${id}-play`).css({"background-color": "#FED766","color":"#272727"}); },100)
        }else{
            $(`#${id}-play`).css({"background-color": "#272727","color":"#FED766"})
            audio.currentTime = 0;
            audio.pause();
            setTimeout(function(){ $(`#${id}-play`).css({"background-color": "#FED766","color":"#272727"}); },100)
    }
    })

    //power button
    $('#powerOn').on("click",()=>{
        if(active){
            active = false;
            $('#power-status').text("Power off");
            $("#powerOn").css({"background-color": "#272727", "color":"#EFF1F3"});
            $("#powerOn").html('<i class="fas fa-toggle-off"></i>');
            $("#display-data").html("");
        }else{
            active = true;
            $('#power-status').text("Power on");
            $("#powerOn").css({"background-color": "#FED766", "color":"#272727"});
            $("#powerOn").html('<i class="fas fa-toggle-on"></i>');
        }

    });
})
