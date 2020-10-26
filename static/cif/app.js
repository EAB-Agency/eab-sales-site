var anim; //animation object
var preloader; //animation object

var currentIndex = 0;
var lastStepIndex = 0;
var proceedMethod = "Click";
var isBackButtonClicked = false;


// height resize breakpoints
var mobileBreakpoint = 750;
var illustrationResizeStartPoint = 750;
var illustrationResizeEndPoint = 630;
var heightDifference = 475;
var visitorTypeResizeStartPoint = 900;
var visitorTypeResizeEndPoint = 750;
var visitorTypeHeightDifference = 625;

//analytics events
var ANA_NEW_REGISTRATION_STARTED = "NewRegStarted";
var ANA_PERSONA_CLICKED = "PersonaClicked";
var ANA_PAGE_VIEWED = "PageViewed";
var ANA_X_CLICKED = "XClicked";
var ANA_SUCCESS_PAGE_VIEWED = "RegCompleted";
var ANA_REGISTRATION_RESUMED = "RegResumed";
var ANA_SOCIAL_LOGIN_CLICKED = "SocialLoginClicked";
var ANA_CHECKBOX_UNCHECKED = "CheckboxUncheck";
var ANA_STUDENT_TYPE_SHOWN = "StudentTypeShown";
var ANA_EXPERIENCE_2_SECOND = "StayedFor2Seconds";
var ANA_BACK_BUTTON_CLICKED = "BackButtonClicked";
var ANA_BROWSER_CLOSED = "BrowserClosed";

//action events
var EVT_OTHER_CLICKED = "OTHER CLICKED";
var EVT_PARENT_CLICKED = "PARENT CLICKED";
var EVT_DROP_OFF = "DROP OFF";
var EVT_COMPLETED = "COMPLETE";


$( document ).ready(function() {

    illustration = $("#illustration");
    fields = $("#fields");
    options = $("#options");
    insight = $("#insight");
    confetti = $("#confetti");
    progressBar = $("#progress-bar");
    
    students = $("#students");
    parents = $("#parents");
    data = "";
    
    isVisitorTypeAnimating = false;

    
    
    //progressBar.fadeTo(0,0);
    $("#visitor-type").hide();
    $("#container").hide();
    
    $.getJSON( "steps.json", function( jsonData ) {

        data = jsonData;
        lastStepIndex = data.length - 1;
        
        //update institution name
            $("#welcome h2").text("Welcome to our virtual tour!");
            
            $("#initial-loader").fadeOut(300);
            
            
            initializePage(-1);
            storeStep(-1);
        
        //set prototype version for Mixpanel
        //YouVisit.Analytics.setVersion('0.0.4');
        /*
        YouVisit.API.getDataForUser({onSuccess:function(response){

            //on success
            var userData = JSON.parse(response);
            var instName = YouVisit.API.instName == null? "our virtual tour!":YouVisit.API.instName;
            //console.log("isNewUser=" + userData.data.isNewUser);
            
            //update institution name
            $(".step1 h1").text("Welcome to " + instName);
            
            $("#initial-loader").fadeOut(300);
            
            
            if(userData.data.currentStep == -1){
                
                initializePage(-1);
                storeStep(-1);
            
                if(userData.data.isNewUser == false){
                    
                    YouVisit.Analytics.track(ANA_REGISTRATION_RESUMED, {step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
                    
                    //fire an event after the user spends at least 2 seconds on the screen
                    window.setTimeout(function(){
                        YouVisit.Analytics.track(ANA_EXPERIENCE_2_SECOND, { step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
                    }, 2000);
                    
                }else{
                    
                   // YouVisit.Analytics.track(ANA_NEW_REGISTRATION_STARTED, { step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
                    
                    //fire an event after the user spends at least 2 seconds on the screen
                    window.setTimeout(function(){
                        YouVisit.Analytics.track(ANA_EXPERIENCE_2_SECOND, { step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
                    }, 2000);
                    
                    
                }
                
                
            }else if(userData.data.currentStep > -1 && userData.data.currentStep <= lastStepIndex){
                
                //pick up flow from saved step #
                initializePage(userData.data.currentStep);
                
            }else if(userData.data.currentStep > lastStepIndex){
                
                // if user already completed the flow before
                $("#container").show();
                $("#welcome").hide();
                $("#social-login").hide();
                $("#fields").hide();
                loadCompletionScreen();
                
            }
            
            
            if(currentIndex == lastStepIndex){
                illustration.hide();
            }
            
        }, onError:function(error){
            
            //on error, treat as new user
            console.log("no user data found, error=" + error);
            
            //update institution name
            $("#welcome h2").text("Welcome to our virtual tour!");
            
            $("#initial-loader").fadeOut(300);
            
            
            initializePage(-1);
            storeStep(-1);
            
            //YouVisit.Analytics.track(ANA_NEW_REGISTRATION_STARTED, { step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
            
            
        }});*/
        
        
    });
    
    //$("#fields input:first-of-type").focus();
    
    $( "body" ).keyup(function( event ) {
  
        //Enter key handler
        if (event.which == 13 && fields.html()!="" && data[currentIndex].autocomplete == undefined){
            
            proceedMethod = "Keyboard";
            proceed();
        }
        
        if (event.which >48 && event.which <53 && options.html()!=""){
            
            selectedIndex = event.which - 48;
            //console.log(selectedIndex);
            selectedElement = $('.radial-button:nth-of-type('+ selectedIndex +')');
            $('.radial-button:nth-of-type('+ selectedIndex +')').addClass("selected");
            
            chosenLabel = selectedElement.text();
            chosenLabel = chosenLabel.split(" ")[0];

            //analytics event
            storeDataForField(selectedElement.attr("data-field-id"), 0, chosenLabel);
            proceedMethod = "Keyboard";
            
            window.setTimeout(function(){
                proceed();
            }, 800);
        }
      
    });
    
    
    $(".proceed-button").click(function(e){
        e.preventDefault();
        proceedMethod = "Click";
        proceed();
    });
    
    //update social login options for Mobile
    if(window.innerWidth <= mobileBreakpoint){
        $("#social-login img").attr("src", "img/social-logins-mobile.png");
    }
    
    //confetti animation
    anim = bodymovin.loadAnimation({
      container: document.getElementById('confetti'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'js/confetti.json' // the path to the animation json
    });
    
    //loading animation
    preloader = bodymovin.loadAnimation({
      container: document.getElementById('preloader'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'js/preloader.json' // the path to the animation json
    });
    
    //loading animation
    initialLoader = bodymovin.loadAnimation({
      container: document.getElementById('initial-loader'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'js/preloader.json' // the path to the animation json
    });
    

    
    //start registration flow
    $(".step2 a").click(function(event){
        event.preventDefault();
        
        //analytics event
        YouVisit.Analytics.track(ANA_PERSONA_CLICKED, {persona:$(this).text(), instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        
        
        storeDataForField($(this).attr("data-field-id"), 0, $(this).text());
        window.setTimeout(function(){
                storeStep();
        }, 2000);
        
        
        $("#container").show();
        anim.hide();
        
        
        $("#visitor-type").transition({opacity:0, scale:1.2}, 500, function(){
            $("#visitor-type").hide();
            progressBar.show();
            //auto focus field
            if(window.innerWidth > mobileBreakpoint){
                
                console.log($("#fields input:first-of-type").attr("placeholder"));
                $("#fields input:first-of-type").focus();
            }
            
        });
    });
    
    $("#prospective-student-button").click(function(event){
        event.preventDefault();
        
        //YouVisit.Analytics.track(ANA_PERSONA_CLICKED, {persona:"Prospective Students", instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        
        $(this).addClass("selected");
        
        /*
        $("#visitor-type .step1").fadeOut(100, function(){
            $("#visitor-type .step2").fadeIn(100);
        });
        */
        
            $("#visitor-type .step1").fadeOut(200);
            $("#visitor-type .step2").delay(200).fadeIn(100);
        
    });
    
    $("#parent-button").click(function(event){
        event.preventDefault();
        
        storeDataForField($(this).attr("data-field-id"), 0, $(this).text());
        
       // YouVisit.Analytics.track(ANA_PERSONA_CLICKED, {persona:"Parents", instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        triggerEvent(EVT_PARENT_CLICKED);
        
    });
    
    $("#other-button").click(function(){
        
        storeDataForField($(this).attr("data-field-id"), 0, $(this).text());
        
       // YouVisit.Analytics.track(ANA_PERSONA_CLICKED, {persona:"Other", instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        triggerEvent(EVT_OTHER_CLICKED);
    });
    
    $("#close-button").click(function(){
    
        if($("#visitor-type").is(":visible")){
           // YouVisit.Analytics.track(ANA_X_CLICKED, {step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        }else{
          //  YouVisit.Analytics.track(ANA_X_CLICKED, {step:currentIndex, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        }
        
        triggerEvent(EVT_DROP_OFF);
    });
    
    $("#social-login .platform").click(function(){
       // YouVisit.Analytics.track(ANA_SOCIAL_LOGIN_CLICKED, {platform:$(this).attr("data-platform"), instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        $("#dialog").transition({opacity:1}, 200, function(){
            $("#dialog").delay(4000).transition({opacity:0}, 100);
        })
    });
    
    //capture browser tab close
    /*window.beforeunload(function() {
        if($("#visitor-type").is(":visible")){
            YouVisit.Analytics.track(ANA_BROWSER_CLOSED, {step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        }else{
            YouVisit.Analytics.track(ANA_BROWSER_CLOSED, {step:currentIndex, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
        }
      
    });*/
    
    if(window.innerWidth <= mobileBreakpoint){
        $(".buttons-container").hide();
        
        //bind tap handler
        students.click(function(){
            parents.addClass("shrinked");
            students.removeClass("shrinked");
            $("#students .buttons-container").fadeTo(200,1);
            $("#others").hide();
            $("#parents .title-container").fadeTo(200,0);
            $("#students .title-container").fadeTo(200, 1);
            $("#login").fadeTo(200,1);
            $("#parents .buttons-container").fadeTo(200,0);
            
            
        })
        parents.click(function(){
            parents.removeClass("shrinked");
            students.addClass("shrinked");
            $("#login").hide();
            $("#parents .title-container").fadeTo(200,1);
            $("#students .buttons-container").hide();
            $("#parents .buttons-container").fadeTo(200,1);
            $("#students .title-container").fadeTo(200, 0);
            $("#others").fadeTo(200,1);
        })
        
    }
    
    
    
    window.onresize = function(){
        
        if($("#visitor-type").is(":visible")){
            updateVisitorTypeLayout();
        }else{
            updateMainLayout();
        }
    }
    
    //disable browser back button
    history.pushState(null, null, location.href);
    window.onpopstate = function (evt) {
        
        //analytics event
        if($("#visitor-type").is(":visible") && isBackButtonClicked == false){
           // YouVisit.Analytics.track(ANA_BACK_BUTTON_CLICKED, {step:-1, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
            
            isBackButtonClicked = true;
        }
        
        
        console.log("back button clicked");
        history.go(1);
    };
    
    //initialize layout based on browser height at lauch
    updateVisitorTypeLayout();
    updateMainLayout();
    
    
    
});//end document ready


function initializePage(pageIndex){
    
    if(pageIndex < 0){
        $("#visitor-type").show();
        $("#visitor-type").css({display:"flex"});
        $("#container").hide();
        
        
        
    }else if(pageIndex == 0){
        $("#visitor-type").hide();
        $("#container").show();

        currentIndex = pageIndex;
        
       // YouVisit.Analytics.track(ANA_REGISTRATION_RESUMED, {step:pageIndex, instID:YouVisit.API.instID, locID:YouVisit.API.locID});

        
    }else{
        $("#visitor-type").hide();
        $("#social-login").hide();
        $("#container").fadeTo(0,0);
        
        
        currentIndex = pageIndex;
        
        updateProgressBar();
        


        //Transition IN
        
        $("#illustration img").removeClass("welcome-illustration");
        $("#welcome").hide();
        
        if(window.innerWidth > mobileBreakpoint){

            updateIllustration();
            illustration.fadeTo(300,1);
        }

        fields.fadeTo(300,1);
        options.fadeTo(300, 1);

        //load fields
        if (data[currentIndex].fields != undefined && data[currentIndex].autocomplete == undefined){
            if(data[currentIndex].custom_fields != undefined ){
                loadCustomFields();
                //console.log("calling custom fields");

            }else{
                loadFields();
            }

        }else{
            //clear fields section
            fields.html("");
        }

        if(data[currentIndex].autocomplete != undefined){
            loadAutocompleteField();
        }

        if (data[currentIndex].options != undefined){
            loadOptions();
        }else{
            options.html("");
        }
        
        $("#container").delay(200).fadeTo(400, 1);
        
        //YouVisit.Analytics.track(ANA_REGISTRATION_RESUMED, {step:pageIndex, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
    }
    
    
}


function proceed(){
    
    
    //console.log("proceeding");
    if(currentIndex == 0){
        $("#container").show();
        
        //only proceed if checkbox is checked
        if($(".checkbox-container input").is(":checked")){
            
            storeData();
            proceedToNextStep();
            storeStep();
            
        }else{
            
            //display tooltip 
            //console.log("not checked");
          //  YouVisit.Analytics.track(ANA_CHECKBOX_UNCHECKED, {instID:YouVisit.API.instID, locID:YouVisit.API.locID});
            
            $(".checkmark").transition({scale:1.3, borderColor:'#3867FA'}, 100, function(){
                $(".checkmark").transition({scale:1, borderColor:'#B7C1E1'}, 600);
            });
        }
        
    }else if (currentIndex > 0 && currentIndex < lastStepIndex){
        //console.log("current:" + currentIndex + "  lastStep:" + lastStepIndex);
        
        storeData();
        proceedToNextStep();
        storeStep();
        
    }else{
        //console.log("loading completion screen");
        
        storeData();
        loadCompletionScreen();
        storeStep(lastStepIndex + 1);
    }  
}

function proceedToNextStep(){
    
    currentIndex = currentIndex + 1;
           
    updateProgressBar();
    
    if(currentIndex == 1){
        $("#social-login").fadeTo(200, 0);
        $("#welcome").hide();
        //loadAutocompleteField();
        //$("#illustration img").removeClass("welcome-illustration");
    }
    
    insight.fadeTo(200, 0, function(){
        
        if(insight.html() != ""){
            insight.css({y:-5});
        }
        
        
        if(data[currentIndex].insight != undefined){
            insight.html(data[currentIndex].insight);
            insight.transition({y:5, opacity:1}, 600);
        }
    })


    //Transition OUT
    if(window.innerWidth > mobileBreakpoint){
        illustration.fadeTo(200, 0, function(){
            if(currentIndex == 1){
                $("#illustration img").removeClass("welcome-illustration");
            }
            updateIllustration();
        });
        
         illustration.delay(300).fadeTo(300,1);
    }
    fields.fadeTo(200,0);
    options.fadeTo(200,0);
    
    
    //Transition IN
    fields.delay(450).fadeTo(300,1);
    options.delay(450).fadeTo(300, 1);
    
    
    window.setTimeout(function(){
        if (data[currentIndex].fields != undefined && data[currentIndex].autocomplete == undefined){
            if(data[currentIndex].custom_fields != undefined ){
                loadCustomFields();
                //console.log("calling custom fields");

            }else{
                loadFields();
            }

        }else{
            //clear fields section
            fields.html("");
        }
        
        if(data[currentIndex].autocomplete != undefined){
            loadAutocompleteField();
        }

        if (data[currentIndex].options != undefined){
            loadOptions();
        }else{
            options.html("");
        }
    }, 200);
    
    
    
}


function updateIllustration(){
    
    if(data[currentIndex].illustration != undefined){
        
        
        if(window.innerWidth <= mobileBreakpoint){
            illustration.hide();
        }else{
            illustration.show();
            $("#illustration img").attr("src", "img/" + data[currentIndex].illustration);
        }
        
        
    }else{
        illustration.hide();
    }
    
    
}
function updateProgressBar(){
    
    if(currentIndex >= 1){
        progressBar.fadeTo(100, 1);
        anim.show();
    }
    
    
    targetWidth = (data[currentIndex].progress / 100) * $("#progress-bar-bg").width();
    $("#progress-bar-fill").animate({ width: targetWidth+"px"}, 400);

    //animate confetti
    anim.goToAndPlay(0, false);
    
    //update confetti position
    confetti.transition({ left:(targetWidth - confetti.width()/2) + "px"}, 400);
    
}

function finishProgressBar(){
    
    
    targetWidth = $("#progress-bar-bg").width();
    $("#progress-bar-fill").animate({ width: targetWidth+"px"}, 400);
    
    //animate confetti
    anim.goToAndPlay(0, false);
    
    //update confetti position
    confetti.transition({ left:(targetWidth - confetti.width()/2) + "px", scale:2.5}, 400);
    
    progressBar.delay(500).fadeOut(800);
}

function loadFields(){
    
    //console.log("loading fields");
    fieldsHTML = "";
    
    //render fields
    fieldsHTML += '<div class="message">' + data[currentIndex].message + "</div>";

    autofocusFieldIndex = 0;
    
    for(i=0; i<data[currentIndex].fields.length; i++){
        
        f = data[currentIndex].fields[i];
        
        
        widthClass ="";
        autofocus = "";
        defaultValue = "";
        fieldType = "";
        fieldName = "";
        
        if (f.width == "50%"){
            widthClass = "one-col";
        }else if (f.width == "100%"){
            widthClass = "all-col";
        }
        
        if(f.autofocus != undefined){
            autofocusFieldIndex = i;
        }
        
        if(f.value != undefined){
            defaultValue = f.value;
        }
        
        if(f.type != undefined){
            fieldType = f.type;
        }else{
            fieldType = "text";
        }
        
        if(f.fieldName != undefined){
            fieldName = f.fieldName;
        }
        
        fieldsHTML += '<input type="'+ fieldType + '" value="' + defaultValue + '" autocomplete="' + fieldName + '" class="' + widthClass + '" placeholder="' + f.placeholder + '" data-field-id="' + f.fieldId + '">';
        
        
    }
    
    //render proceed button and hint
    fieldsHTML += '<div id="proceed"><a href="#" class="proceed-button">NEXT</a><p class="proceed-hint">press ENTER</p>';
    
    fields.html(fieldsHTML);
    
    //auto focus field
    if(window.innerWidth > mobileBreakpoint){
        $('#fields input:nth-of-type(' + (autofocusFieldIndex+1) +')').focus();
    }
    
    //$("#fields input:first-of-type").val("").focus();
    
    //bind proceed button click event
    $(".proceed-button").click(function(){
        proceedMethod = "Click";
        proceed();
    });
    
    $(".proceed-button").html(data[currentIndex].proceed_label);
    
}

function loadOptions(){
    
    optionsHTML = "";
    
    //render options
    optionsHTML += '<div class="message">' + data[currentIndex].message + "</div>";
    
    
    for (i=0; i<data[currentIndex].options.length; i++){
        
        o = data[currentIndex].options[i];
        
        optionsHTML += '<a href="#" class="radial-button" data-field-id="' + o.fieldId + '"><div></div>' + o.label + ' <p>Press <span>' + (i+1) + '</span></p></a>';
    }
    
    options.html(optionsHTML);
    
    $(".radial-button").click(function(event){
        event.preventDefault();

        $(this).addClass("selected");
        
        
        chosenLabel = $(this).text();
        chosenLabel = chosenLabel.split(" ")[0];
        
        //analytics event
        storeDataForField($(this).attr("data-field-id"), 0, chosenLabel);
        
        //proceed to next step after timeout
        window.setTimeout(function(){
                proceed();
            }, 400);
    });
    
}

function loadCustomFields(){
    
    customFieldsHTML = "";
    
    autofocusFieldIndex = 0;
    
    //render fields
    for (i=0; i<data[currentIndex].fields.length; i++){
        
        f = data[currentIndex].fields[i];
        
        widthClass ="";
        autofocus = "";
        defaultValue = "";
        dropdownClass = "";
        fieldType = "";
        fieldName = "";
        
        if (f.width == "50%"){
            widthClass = "one-col";
        }else if (f.width == "100%"){
            widthClass = "all-col";
        }
        
        if(f.autofocus != undefined){
            autofocusFieldIndex = i;
        }
        
        if(f.value != undefined){
            defaultValue = f.value;
        }
        
        if(f.type != undefined){
            if(f.type == "select"){
                dropdownClass = "select";
                fieldType = "select";
            }else{
                fieldType = f.type;
            }
            
        }else{
            fieldType = "text";
        }
        
        if(f.fieldName != undefined){
            fieldName = f.fieldName;
        }
        
        //display label as placeholder on mobile
        if(window.innerWidth <= mobileBreakpoint){
            f.placeholder = f.label;
        }
        
        customFieldsHTML += '<div class="custom-field '+ widthClass +'"><label>' + f.label + '</label>';
        if(fieldType == "text"){
            customFieldsHTML += '<input type="' + fieldType + '" value="' + defaultValue + '" autocomplete="' + fieldName + '" class="all-col  '+ dropdownClass + '" placeholder="' + f.placeholder + '" data-field-id="' + f.fieldId + '"></div>';
            
        }else if(fieldType == "select"){
            customFieldsHTML += '<select autocomplete="' + fieldName + '" class="all-col  '+ dropdownClass + '" placeholder="' + f.placeholder + '" data-field-id="' + f.fieldId + '">';
            
            //console.log(f.options.length);
            
            for(j=0; j<f.options.length; j++){
                customFieldsHTML += '<option value="' + f.options[j] + '">' + f.options[j] + '</option>';
            }
            customFieldsHTML += '</select></div>';
            
            
        }
        
        
        
    }
    
    //render proceed button and hint
    customFieldsHTML += '<div id="proceed"><a href="#" class="proceed-button">NEXT</a><p class="proceed-hint">press ENTER</p>';
    
    fields.html(customFieldsHTML);
    
    //$("select").selectmenu();
    
    if(window.innerWidth > mobileBreakpoint){
        $('.custom-field:first-of-type input').focus();
    }
    
    //bind proceed button click event
    $(".proceed-button").click(function(){
        proceedMethod = "Click";
        proceed();
    });
    
    //bind label show/hide on field input for Mobile
    if(window.innerWidth <= mobileBreakpoint){
        $('.custom-field input').keyup(function(){

            if($(this).val() != ""){
                $(this).prev("label").fadeTo(200,1);
            }else{
                $(this).prev("label").hide();
            }
        });
    }
    
    $(".proceed-button").html(data[currentIndex].proceed_label);
    
}
function loadAutocompleteField(){
    
    fieldHTML = "";
    
    fieldHTML += '<div class="message">' + data[currentIndex].message + "</div>";
    
    fieldHTML += '<div class="ui-widget all-col"><input id="tags" class="all-col" placeholder="' + data[currentIndex].fields[0].placeholder + '" data-field-id="' + data[currentIndex].fields[0].fieldId + '"></div>';
    
    fieldHTML += '<div id="proceed"><a href="#" class="proceed-button">NEXT</a><p class="proceed-hint">press ENTER</p>';
    
    fields.html(fieldHTML);
    
    
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#tags" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            collegeMajors, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
    
    //auto focus field
    if(window.innerWidth > mobileBreakpoint){
        $('#fields input').focus();
    }
    
    
    //$("#fields input:first-of-type").val("").focus();
    
    //bind proceed button click event
    $(".proceed-button").click(function(){
        //console.log("binded proceed clicked");
        proceedMethod = "Click";
        proceed();
    });
    
    $(".proceed-button").html(data[currentIndex].proceed_label);
    
   
}
function loadCompletionScreen(){
    
    //fade out form
    fields.fadeOut(1000, 0);
    options.fadeOut(1000, 0);
    illustration.fadeOut(1000, 0);
    
    finishProgressBar();
    
    insight.fadeOut(1000,0);
    $("#close-button").fadeOut(1000,0);
    
    $("#completion-screen").show();
    $("#completion-screen").delay(1700).transition({opacity:1}, 600);
    $("#completion-screen img").delay(1400).transition({scale:1.1}, 1500);
    
    
    $("#loading").delay(3000).fadeTo(500, 1);
    preloader.goToAndPlay(0, false);
    
   // YouVisit.Analytics.track(ANA_SUCCESS_PAGE_VIEWED, {totalSteps:lastStepIndex, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
    
    //trigger dumping data into client leads
   // YouVisit.API.persistUserResponses();
    
    window.setTimeout(function(){
        
        triggerEvent(EVT_COMPLETED);
    }, 6000);
    
}

var focusTransitionYDistance = "30px";
var defaultMargin = "120px auto 85px auto";
var hoveredMargin = "80px auto 60px auto";

function focusStudents(){
    students.transition({width:"60%"},400); 
    

    //show secondary options for students
    $("#students .image").transition({margin:hoveredMargin}, 600);
    //$("#students .image").transition({y:"-" + focusTransitionYDistance, scale:0.9}, 600);
    //$("#students .title-container").transition({y:"-" + focusTransitionYDistance}, 600);
    //$("#students .buttons-container").transition({y:"-" + focusTransitionYDistance}, 600);
    $("#students .buttons-container").delay(200).transition({opacity:1}, 600);
}

function blurStudents(){
    students.transition({width:"40%"},400); 
    

    //show secondary options for students
    $("#students .image").transition({margin:defaultMargin}, 600);
    //$("#students .title-container").transition({y:"+" + focusTransitionYDistance}, 600);
    $("#students .buttons-container").transition({ opacity:0}, 600);
}

function focusParents(){
    parents.transition({width:"60%"},400);
    
    //show secondary options for students
    $("#parents .image").transition({margin:hoveredMargin}, 600);
    //$("#parents .title-container").transition({y:"-" + focusTransitionYDistance}, 600);
    //$("#parents .buttons-container").transition({y:"-" + focusTransitionYDistance}, 600);
    $("#parents .buttons-container").delay(200).transition({opacity:1}, 600);
    
}

function blurParents(){
    parents.transition({width:"40%"},400);
    
    //show secondary options for students
    $("#parents .image").transition({margin:defaultMargin}, 600);
    //$("#parents .title-container").transition({y:"+" + focusTransitionYDistance}, 600);
    $("#parents .buttons-container").transition({opacity:0}, 600);
}

function updateMainLayout(){
    h = window.innerHeight;
        
    if ( h < illustrationResizeStartPoint &&  h >= illustrationResizeEndPoint){
        illustration.height( h - heightDifference);
        if(progressBar.is(":visible")){
            progressBar.css("margin-top", "64px");
        }
        

    }else if ( h < illustrationResizeEndPoint){
        if(progressBar.is(":visible")){
            progressBar.css("margin-top", "48px");
        }

    }else if( h >= illustrationResizeStartPoint){
        illustration.height(270);
        if(progressBar.is(":visible")){
            progressBar.css("margin-top", "64px");
        }
    }
}

function updateVisitorTypeLayout(){
    h = window.innerHeight;
    
    
    if(h >= visitorTypeResizeStartPoint){
        $("#visitor-type .image").show();
        $("#visitor-type .image").height(260);
        $(".title-container").removeClass("extra-margin");

    }else if( h < visitorTypeResizeStartPoint && h >= visitorTypeResizeEndPoint){
        $("#visitor-type .image").show();
        $("#visitor-type .image").height( h - visitorTypeHeightDifference);
        $(".title-container").removeClass("extra-margin");

    }else if( h < visitorTypeResizeEndPoint){
        $("#visitor-type .image").hide();
        $(".title-container").addClass("extra-margin");
    }
}

function storeDataForField(fieldId, userId, fieldValue){
    
    console.log("field id=" + fieldId + " userId=" + userId + " value=" + fieldValue);
    
    /*YouVisit.API.insertUserResponse({fieldID:fieldId, response:fieldValue, onError:function(){
        console.log("cannot save field value");
    }});*/
}

function storeStep(s){
    
    stepCount = currentIndex;
    
    if (s!= null){
        stepCount = s;
    }else{
       // YouVisit.Analytics.track(ANA_PAGE_VIEWED, {step:stepCount, preceedWith:proceedMethod, instID:YouVisit.API.instID, locID:YouVisit.API.locID});
    }
    
    
    
   /*YouVisit.API.setDataForUser({currentStep:stepCount, onSuccess:function(){
        //console.log("current step saved");
        
    }, onError:function(error){
        console.log("cannot save current step, error=" + error);
        
    }});*/
}
function storeData(){
    
    fieldArray = [];
    $("input").not(':input[type=checkbox]').each(function(i){
       
        fieldArray.push({fieldID:$(this).attr("data-field-id"), response:$(this).val()});
        console.log("Field id=" + $(this).attr("data-field-id") + " response=" + $(this).val());
        
    });
    
    $("option:selected").each(function(i){
        fieldArray.push({fieldID:$(this).parent().attr("data-field-id"), response:$(this).text()});
        console.log("Field id=" + $(this).parent().attr("data-field-id") + " response=" + $(this).text());
        
    });
    
    if(fieldArray.length > 0){
      /*  YouVisit.API.insertUserResponses({responses:fieldArray, onError:function(){
            console.log("cannot save field value");
        }});*/
    }
    
                              
}

function triggerEvent(eventName){
    console.log("event: " + eventName);
    
    if(eventName == EVT_DROP_OFF){
     //   YouVisit.App.close();
        
    }else{
      //  YouVisit.App.sendMessage(eventName);
    }
    
}

function recordEvent(eventName){
    console.log("event: " + eventName);
}



var collegeMajors = [
'Accounting',
'Actuarial Science',
'Advertising',
'Agriculture',
'Agricultural and Biological Engineering',
'Agricultural Business Management',
'Agriculture Economics',
'Animal Bioscience',
'Animal Sciences',
'Anthropology',
'Applied Mathematics',
'Archaeology',
'Architectural Engineering',
'Architecture',
'Art History',
'Studio Art',
'Art Education',
'Biobehavioral Health',
'Biochemistry',
'Bioengineering',
'Biology',
'Biophysics',
'Biotechnology',
'Business Administration and Management',
'Business Logistics',
'Chemical Engineering',
'Chemistry',
'Children',
'Civil Engineering',
'Computer Engineering',
'Computer Science',
'Crime, Law, and Justice',
'Dance',
'Earth Sciences',
'Economics',
'Electrical Engineering',
'Elementary and Kindergarten Education',
'Engineering Science',
'English',
'Environmental Systems Engineering',
'Environmental Sciences',
'Environmental Resource Management',
'Film and Video',
'Finance',
'Food Science',
'Forest Science',
'Forest Technology',
'General Science',
'Geography',
'Geosciences',
'Graphic Design and Photography',
'Health and Physical Education',
'Health Policy and Administration',
'History',
'Horticulture',
'Hotel, Restaurant, and Institutional Management',
'Human Development and Family Studies',
'Individual and Family Studies',
'Industrial Engineering',
'Information Sciences and Technology',
'Journalism',
'Kinesiology',
'Landscape Architecture',
'Law Enforcement and Correction',
'Marine Biology',
'Marketing',
'Mathematics',
'Mechanical Engineering',
'Media Studies',
'Meteorology',
'Microbiology',
'Mineral Economics',
'Modern Languages',
'Music Education',
'Nuclear Engineering',
'Nursing',
'Nutrition',
'Philosophy',
'Physics',
'Physiology',
'Political Science',
'Pre-medicine',
'Psychology',
'Public Relations',
'Real Estate',
'Recreation and Parks',
'Rehabilitation Services',
'Religious Studies',
'Secondary Education',
'Sociology',
'Social Work',
'Special Education',
'Speech Communication',
'Statistics',
'Telecommunications',
'Theater',
'Wildlife and Fishery Science',
'Wildlife Technology',
'Womens Studies',
];





