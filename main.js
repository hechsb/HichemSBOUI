                //Describe how you web site would look like
const apiKey="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"

//api Url
const API_URL= "https://api.openai.com/v1/chat/completions"
const promp_Input = $("#html")
const btn =$("#btn")

const generate =async()=>{
    try {
        const response=await fetch(API_URL,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                Authorization :`Bearer ${apiKey}` 
            },
            body:JSON.stringify({
                model : "gpt-3.5-turbo",
                messages:[{role:"user" ,content:$("#html").val()+`write only the body of html with css injected contain a navBar , content, endbar  on it write just the code and i want it with 5images which their source is image1 : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkJ_Ga4pV7FRW3lp4BF3kpN15xmj4E5hw0HgE3nY&s ,image2:https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$ image3:https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1670326183 ,image4:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunHM3bDn5Slps5B2p1qY8L5kk5QcQtGAadSTOMNjF&s, image5 is for the imag that describe the site :https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5pIhV9Uf3I4W-2HyJo-StyxvgRWrbkYbeBCMyb4axA&s  and make it beautiful  "`}]
        })
    })
    const data=await response.json()
    console.log(data.choices[0].message.content)
    var webCode = data.choices[0].message.content
    var array =[]
    var str=""
    for(var i=0 ; i<webCode.length ; i++){
        str=str+webCode[i]
        if(webCode[i]===" "){
            
            array.push(str)
            str=""
        }
    }
    var i=0 ; var j=0 ; var w

    console.log(array)
    while(i<array.length){
        if(array[i]==="<body>\n "){
            j=i
        }
        if(array[i]==="</body>"){
            w=i
        }
        i++
    }
    var code =""
    for(var i=j ; i<w ;i++ ){
        code=code +array[i]+" "
    }
    console.log(i,j,w)
    console.log(code)
    $(".secondPageInjection").append(data.choices[0].message.content)
    // console.log(code)
    $(".sidebar").hide()
}catch(error){
    console.log(error)}
}
$("#btn").on('click' , generate)
    


//when a click on navBar it will show up on user web page

$(".navBarExemple1").on('click', function () {
    var clonedNavBar = $(".navBarExemple1").clone();
    clonedNavBar.css({'width': '100%','display': 'block'})
    $(".userWebPage").append(clonedNavBar);
});

$(".navBarExemple2").on('click', function () {
    var clonedNavBar = $(".navBarExemple2").clone();
    clonedNavBar.css({'width': '100%','display': 'block'})
    $(".userWebPage").append(clonedNavBar);
});
// when clicking on an image
$("#img1").on('click',function(){
    var cloneImage=$("#img1").clone()
    cloneImage.css({'width': '100%','height':'40%','display': 'block'})
    $(".userWebPage").append($(cloneImage))
})
$("#img2").on('click',function(){
    var cloneImage=$("#img2").clone()
    cloneImage.css({'width': '100%','height':'40%','display': 'block'})
    $(".userWebPage").append($(cloneImage))
})
$("#img3").on('click',function(){
    var cloneImage=$("#img3").clone()
    cloneImage.css({'width': '100%','height':'40%','display': 'block'})
    $(".userWebPage").append($(cloneImage))
})

$("#img4").on('click',function(){
    var cloneImage=$("#img4").clone()
    cloneImage.css({'width': '100%','height':'40%','display': 'block'})
    $(".userWebPage").append($(cloneImage))
})

                                 // get the src of an image

$("#imageSrc").on('click',function(){
    var imageSrc=$("#imgSrc").val()
    
    $(".userWebPage").append(`<img id="imgAdded" src="${imageSrc}">`)
})

//change background color 

$("#background_color").on("click", function() {
    // Get the selected background color value
    var selectedBackgroundColor = $(this).val();
    
    // Change the background color of the target element
    $(".userWebPage").css("background-color", selectedBackgroundColor);
  });

  //add text 
// Show/hide the text options form
$("#forText").on("click", function() {
    $(".textOptionsForm").toggle();
  });
  
// Apply text options
$("#applyTextOptions").on("click", function() {
    var newText = $("#textInput").val();
    var bgColor = $("#backgroundColor").val();
    var textColor = $("#textColor").val();
    var fontSize = $("#fontSize").val() + "px";
    var fontFamily = $("#fontFamily").val();
  
    // Apply the selected options to the text
    $(".userWebPage").append(`<div class="text" style="background-color:${bgColor}; color:${textColor}; font-size:${fontSize}; font-family:${fontFamily}">${newText}</div>`);
    
    // Hide the text options form
    $(".textOptionsForm").hide();
  });
  
  $("#toTheNextPage").on("click",function(){
    $(".sidebar").hide()

    $(".secondPageInjection").append ($(".userWebPage").html())
  })
  

  $(".text-center").on('click', function () {
    var footBar = $(".text-center").clone();
    footBar.css({'width': '100%','display': 'block',"margin-top":"80%"})
    $(".userWebPage").append(footBar);
});

$(".text-center").on('click', function () {
    var footBar = $(".text-center").clone();
    footBar.css({'width': '100%','display': 'block',"margin-top":"80%"})
    $(".userWebPage").append(footBar);
});

$(".footer2").on('click', function () {
    var footBar = $(".footer2").clone();
    footBar.css({'width': '105%',"height": "60px",'display': 'block',"margin-top":"80%","margin-left":"-19px"})
    $(".userWebPage").append(footBar);
});

