let availableKeyword = [
    'Noida,India',
    'Patna,India',
    'Tamil Nadu,India',
    'Kolkata,India',
    'Delhi,India',
    'Salem,India',
    'Assam,India',
    'Goa,India',
    'Punjab,India',
    'Bihar,India',
    'Tripura,India',
    'Orissa,India',
    'Jharkand,India',
    'Gujrat,India',
];

const resultsbox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeyword.filter((keyword)=>{
         return   keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsbox.innerHTML = '';
    }



}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this) >" + list + "</li>";
    });

    resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsbox.innerHTML = '';
}