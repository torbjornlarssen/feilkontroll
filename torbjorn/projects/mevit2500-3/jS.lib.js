
function positionTexts(){

    $("#tbox_1-1").append($('#t0')
        .css("bottom","3%")
        .css("right","3%")
        .css('height','5%')
        .css('width','20%')
        .addClass('fade'));

    $("#tbox_2-2").append($('#t1')
        .css("top","3%")
        .css("left","3%")
        .css('height','30%')
        .css('width','35%'));

    $("#tbox_2-2").append($('#t2')
        .css("top","50%")
        .css("left","20%")
        .css('height','5%')
        .css('width','25%'));

    $("#tbox_2-2").append($('#t3')
        .css("top","70%")
        .css("left","-20%")
        .css('height','20%')
        .css('width','35%'));

  

      //togfisk03
     $("#tbox_1-3").append($('#t16')
        .css("top","-30%")
        .css("left","10%")
        .css('width','55%'));

     //togfisk02 
     $("#tbox_2-3").append($('#t15')
        .css("top","5%")
        .css("left","-27%")
        .css('width','40%'));
        
         //togfisk01
     $("#tbox_2-3").append($('#t14')
        .css("top","5%")
        .css("left","20%")
        .css('width','60%'));

        //som man kan se
    $("#tbox_3-3").append($('#t4')
        .css("top","80%")
        .css("left","-10%")
        .css('height','20%')
        .css('width','40%'));

     $("#tbox_3-4").append($('#t5')
        .css("top","10%")
        .css("left","20%")
        .css('height','40%')
        .css('width','20%'));

//På tross
     $("#tbox_3-4").append($('#t6')
        .css("top","75%")
        .css("left","-30%")
        .css('height','20%')
        .css('width','40%'));

     //LYD
     $("#tbox_2-4").append($('#t17')
        .css("top","80%")
        .css("left","50%")
        .css('height','5%')
        .css('width','5%'));

    //om wherearewegoing
   $("#tbox_2-4").append($('#t7')
        .css("top","40%")
        .css("left","10%")
        .css('height','30%')
        .css('width','25%'));

    //audio
   $("#tbox_2-4").append($('#wherearewegoing')
        .css("top","80%")
        .css("left","10%")
        .css('height','15%')
        .css('width','25%'));

        //////////////////////////

     //VIDEO
     $("#tbox_2-5").append($('#t18')
        .css("top","20%")
        .css("left","85%")
        .css('height','5%')
        .css('width','5%'));

     //VIDEO
     $("#tbox_2-5").append($('#t21')
        .css("display","none")
        .css("top","5%")
        .css("left","70%")
        .css('height','5%')
        .css('width','40%'));

     //VIDEO
     $("#tbox_2-5").append($('#t8')
        .css("top","40%")
        .css("left","67%")
        .css('height','22%')
        .css('width','35%'));

     //totoro
     $("#tbox_2-5").append($('#t22')
        .css("top","40%")
        .css("right","40%"));



        //////////////////////////

   //INSTALLASJON
     $("#tbox_3-5").append($('#t19')
        .css("top","10%")
        .css("left","25%")
        .css('height','5%')
        .css('width','10%'));

       $("#tbox_3-5").append($('#t20')
        .css("top","21%")
        .css("left","43%"));

         $("#tbox_3-5").append($('#t9')
        .css("top","-10%")
        .css("left","43%")
        .css('height','20%')
        .css('width','32%'));

   //audio
   $("#tbox_2-4").append($('#wherearewegoing')
        .css("top","80%")
        .css("left","10%")
        .css('height','15%')
        .css('width','25%'));

//Jeg er fullstendig
   $("#tbox_2-8").append($('#t10')
        .css("top","50%")
        .css("left","60%")
        .css('height','26%')
        .css('width','40%'));
    //tarkovsky quote
  $("#tbox_2-8").append($('#t11')
        .css("top","86%")
        .css("left","60%")
        .css('height','15%')
        .css('width','40%'));
   $("#tbox_2-9").append($('#t12')
        .css("top","10%")
        .css("left","60%")
        .css('height','10%')
        .css('width','40%'));

    $("#tbox_3-9").append($('#t13')
        .css("top","20%")
        .css("left","15%")
        .css('height','30%')
        .css('width','30%'));

         $("#tbox_3-9").append($('#t23')
        .css("top","50%")
        .css("left","55%")
        .css('height','5%')
        .css('width','15%'));

        
}

function sizeDivs(){
    $('.textbox').textfill({
        maxFontPixels: 70
    });
    var windowHeight = getHeight();
    $(".textbox").css('padding', windowHeight/30);
}
function addTexts(){


    var texts = new Array();
    texts[0] = "Her tar vi ett musesteg av gangen, takk.";
    texts[1] = "Med denne siden mener jeg å spørre om man kan utvide begrepet \
                   'sammensatte tekster', utover det Gisle Hannemyr og co gjør i sin \
                    beskrivelse. Det er jo allerede svært så vidt begrep, men av og til \
                    opplever jeg at tilsynelatende enkeltstående tekster er så potent \
                    utført at de, uten eksplisite referanser, utløser strømmer av \
                    assosiasjoner til andre tekster, og gir en svært sammensatt \
                    tekstopplevelse.";
    texts[2] = "La meg tegne og fortelle et eksempel.";
    texts[3] = "Nylig (faktisk akkurat da denne oppgaven skulle vært levert)\
                    var jeg i Dashanzi Art District, eller '798' som det ofte\
                    kalles, i Beijing. Som alle steder var det et stykke mellom\
                    perlene, men de fantes (i motsetning til i M50 distriktet i\
                    Shanghai). Det jeg vil trekke frem er installasjonen\
                    'Leviathanation' av Huang Yongping.";
    texts[4] = "Som man kan se av bildene består installasjonen av en togvogn med et\
                    enormt fiskehode i front, og ut av fiskehodet, og også inne i vogna,\
                    trenger andre dyr igjennom, tilsynelatende uhemmet av materialenes\
                    ugjennomtrengelighet. Heretter kaller jeg 'togfisken'. Jeg burde jo\
                    hatt en video, men jeg nøyer meg med å si at installasjonen står helt\
                    stille. Og den lager ikke lyd.";
    texts[5] = "Så hvordan mener jeg dette er en sammensatt tekst? Per definisjon er\
            det ikke en sammensatt tekst. Vel, hvis man absolutt vil kan man si\
            noe om hvordan installasjonen møter rommet, eller sosiale\
            finurligheter som av og til oppstår mellom gallerigåere i møtet med\
            såppass uvanlige objekter. Men for meg er ikke det poenget denne\
            gangen.";
    texts[6] = "På tross av at togfisken var helt stillestående og stille hadde jeg en\
            tydelig og definitiv opplevelse av et bestemt lydspor, og en litt mer\
            vag og assosierende opplevelse av beveglige bilder hentet fra\
            tidligere sanseinntrykk. Her presenterer jeg de som jeg enkelt klarte\
            å identifisere.";
    texts[7] = "Den repetative lyden som gikk på repeat i mens jeg var i galleriet\
            kommer fra låta Providence fra F#A#(infinity) albumet til Godspeed\
            you! Black Emperor. Spørsmålet som gjentas 'Where are we going?', er\
            den mest konsentrerte skrevene essensen av slik jeg opplevde\
            togfisken.";
    texts[8] = "Hayao Miyazaki ble hovedleverandør av videoopplevelser. At jeg\
            allerede var i Asia kan være litt av grunnen til at assosiasjonen lå\
            så nær, men viktigere var nok liketen i hvordan Miyazaki lar\
            naturkrefter bli besjelet i dyr og skapninger, og hvordan disse skapningene og\
            menneskene forholder seg til hverandre.";
    texts[9] = "For meg hadde togfisken en apokalyptisk undertone, til og med uten å\
            trekke Noahs ark for mye inn i bildet. Dét, sammen med mekanikiske\
            og organiske sammenflettinger fikk meg til å delvis gjennoppleve\
            Verdensteatrets fortellerorkester som jeg så på Kunstnernes Hus i\
            2007.";
    texts[10] = "Jeg er fullstendig klar over at det å assosiere i andre tekstformer\
            ikke er noe nytt. Poenget mitt er at det er så naturlig for de fleste\
            mennesker å gjøre det, at det vitner om et bevisst valg fra kunstneren\
            når han eller hun ikke påtvinger publikumet føringer for alle sanser.\
            Spesielt i nyere tid, hvor lyd og videoprojisering nesten er\
            allmenkunnskap. Men det kan hende at det av og til er viktig å holde\
            på denne unnlatelsen. I forhold til filmskapning formulerte \
            Andrei Tarkovsky seg slik:";
    texts[11] = "'When less than everything has been said about a subject, you can\
            still think on further. The alternative is for the audience to be\
            presented with a final deduction (...) no effort on their part. What\
            can it mean to them when they have not shared with the author the\
            misery and joy of bringing an image into being?'";
    texts[12] = "'Det betyr ikke at man skal unngå å bruke flere medier samtidig, men\
             at man bør vite at man har et valg, hvor utelatelsen fort kan være\
             multiplikasjon istedenfor subtraksjon'";
    texts[13] = "Sammensatte tekster er ikke et dårlig begrep - det er lett å definere\
             og eksempler er lette å identifisere. Men jeg har en fornemmelse av\
             at hvis man blir for opphengt i begrepet kan det utelukke andre andre\
             tekster fra en fruktbar analyse som 'sammensatt tekst', fordi de på\
             overflaten tilsynelatende ikke faller innenfor definisjonen";

    texts[14] = "<img src='"+path+"togfisk01.jpg' style='width:100%;'></img> \
                 <div class='label'>Foto: Kaia Linnea Dahle Nyhus</div>";
    texts[15] = "<img src='"+path+"togfisk02.jpg' style='width:100%;'></img> \
                 <div class='label'>Foto: Bård Sandemose</div>";
    texts[16] = "<img src='"+path+"togfisk03.jpg' style='width:100%;'></img> \
                 <div class='label'>Foto: Bård Sandemose</div>";
    texts[17] = "<div class='cat'>LYD</div>";
    texts[18] = "<div class='cat'>VIDEO</div>";
    texts[19] = "<div class='cat'>INSTALLASJON</div>";

    texts[20] = '<video src="'+path+'fortellerorkesteret.ogg" controls="controls"></video>\
                <div class="label"><a href="http://vimeo.com/18420966">"The Telling Orchestra"</a> from <a href="http://vimeo.com/user5602266">Verdensteatret</a> on <a href="http://vimeo.com">Vimeo</a>.</div>';

   

    texts[21] = "<div class='conclude'>KONKLUSJON</div>";

    texts[22] = '<video src="'+path+'totoro.ogg" controls="controls"></video>\
                <div class="label">Fra "Min nabo Totoro" (Tonari no Totoro), Hayao Miyazaki/Studio Ghibli</div>';


  texts[23] = '<div><a href="http://torbjorn.feilkontroll.com/mevit2500-3--prossessrapport">Prossessrapport</div>';

    var id = 0;
    for (var i in texts){
        $box = $(document.createElement("div")).addClass('textbox').attr('id',"t"+id)
        $span =  $(document.createElement("span")).html(texts[i]);
        //  $focuselement =  $(document.createElement("div")).addClass("focuselement");
        $box.append($span);
        //      $box.append($focuselement);
        $("html").append($box);
        id++;
    }
}

function getWidth()    {
    var x = 0;
    if (self.innerHeight){
        x = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
        x = document.documentElement.clientWidth;
    }
    else if (document.body){
        x = document.body.clientWidth;
    }
    return x;
}


function getHeight(){
    var y = 0;
    if (self.innerHeight)        {
        y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)        {
        y = document.documentElement.clientHeight;
    }
    else if (document.body)        {
        y = document.body.clientHeight;
    }
    return y;
}


