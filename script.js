const textareael=document.getElementById("textarea");

const totalcounterel=document.getElementById("total-counter");

const remainingcountel=document.getElementById("remaining-counter");
textareael.addEventListener("keyup",()=>
{
    updatecounter();
})
updatecounter();
function updatecounter()
{
   totalcounterel.innerText= textareael.value.length;

   remainingcountel.innerText= textareael.getAttribute("maxLength")- textareael.value.length;
}