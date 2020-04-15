users = [
  {
    name: 'Maria',
    gender: 'F',
    hobby: 'music',
    avatar: 'avatar.png'
    },
    {
    name: 'Adriana',
    gender: 'F',
    hobby: 'pets',
    avatar: 'avatar.png'
    },
    {
    name: 'Juan',
    gender: 'M',
    hobby: 'movies',
    avatar: 'avatar.png'
    },
    {
    name: 'Pepe',
    gender: 'M',
    hobby: 'sports',
    avatar: 'avatar.png'
    }
];

window.addEventListener('load', function (){
    console.log ('loadinng page');
    results = document.getElementById('results');
    function search ()
    {
       //get hobby
       var hobbyElement = document.getElementById('hobby');
       var hobby = hobbyElement.value;
       console.log (hobby);
       
       //get gender
       var genderElement = document.getElementById('gender');
       var genderIndex  = genderElement.selectedIndex;
       var gender = genderElement.options[genderIndex].value;
       console.log(gender);
       
        console.log ('searching users');
        var len = users.length;
        var resultsHtml = '';
        for (var i=0; i<len; i++)
        {   // check gender filter
            if (gender=='A' || gender == users[i].gender)
            {   // check hobby filter
                if (hobby =='' || hobby == users[i].hobby)
                {
                  resultsHtml += '<div class="person-row">\
                <img src="images/'+ users[i].avatar + '">\
                <div class="person-info">\
                <div>'+ users[i].name + ' </div>\
                <div>'+ users[i].hobby +' </div></div>\
                <button>Add as friend</button></div>';    
                }
                              
            }

            //resultsHtml = resultsHtml + ' '+ users[i].name+' '
            //resultsHtml += ' ' + users[i].name + ' ';
  console.log (resultsHtml);
        }
        
       // results.innerHTML = '<div style="color:red">Results are updated:</div><div class="person-row"> NO results </div>';
       
       results.innerHTML = resultsHtml;
    }
   var searchButton = document.getElementById('searchButton');
   searchButton.addEventListener('click',search);
});