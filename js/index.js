 var siteName=  document.getElementById('siteName')
 var siteUrl= document.getElementById('siteUrl')


 var sites = [] ;

 if(localStorage.getItem("siteList") !==null){

    sites= JSON.parse(localStorage.getItem("siteList"));


    displayData();

    
 }

 function addSite ()
 {
  if(validationName () == true  && validationUrl () == true ){
    var site={
        name:siteName.value,
        url:siteUrl.value
    }
    sites.push(site) ;


    localStorage.setItem('siteList', JSON.stringify(sites));

    displayData();

    clearform();
  }
    
    
 }

 function clearform (){
    siteName.value=null;
    siteUrl.value=null;
 }

 function displayData(){
    var container="";
    for (var i = 0; i < sites.length; i++) {
        container +=`
        <tr>
                <td> ${i+1}</td>
                <td>${sites[i].name}</td>
                <td>
                    <a  href="${siteUrl.value}" target="_blank" class="btn btn-sm btn-success my-btn px-3 py-2"><i class="fa-solid fa-eye"></i> Viste</a>
                </td>
                <td>
                    <button onclick=" deletItem (${i})" class="btn btn-sm btn-danger p-2"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            </tr>
        
        
        
        ` ;

        
    }
    document.getElementById('tableData').innerHTML=container;
 }


 function deletItem(indexItem){

    sites.splice(indexItem,1 );
    localStorage.setItem('siteList', JSON.stringify(sites));
    displayData();
 }


 function validationName (){

    var text=siteName.value;
    var regex =/^\w{3,}$/;
    if(regex.test(text)==true){
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        return true;

    }
    else{
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        return false;
    }

    
    

 }

 function validationUrl (){

    var text=siteUrl.value;
    var regex =/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    if(regex.test(text)==true){
        siteUrl.classList.add('is-valid');
        siteUrl.classList.remove('is-invalid');
        return true;

    }
    else{
        siteUrl.classList.add('is-invalid');
        siteUrl.classList.remove('is-valid');
        return false;
    }

    
    

 }