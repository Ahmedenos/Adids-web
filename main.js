

let header=document.getElementById('main-header1')
let bar=document.getElementsByClassName('icon-more')[0];
let discount=document.getElementsByClassName('discount')[0];
let glass=document.getElementsByClassName('glass')[0];
let mark=document.getElementById('mark')
let exit=document.getElementById('exit')
bar.onclick=function(){
    mark.classList.toggle('exit')
    exit.classList.toggle('togle-exit')
    discount.classList.toggle('togle-dis')
    glass.classList.toggle('togle-glas')
    bar.classList.toggle('togle-bar')
    if(screen.width < 760){
        glass.classList.toggle('all-size')
        discount.classList.toggle('all-size-discount')
    }
}
// start of layer images
let body=document.body;
let arry1=["images/altmain1.webp","images/arry1-1.jpg","images/arry1-2.jpg","images/arry1-3.webp","images/arry1-4.jpg"]
let arry2=["images/main2.jpg","images/arr2-1.webp","images/arr2-2.jpg","images/arr2-3.jpg","images/arr2-4.jpeg"]
let arry3=["images/main4.webp","images/arr3-1.jpg","images/arr3-2.jpg","images/arr3-3.webp","images/arr3-4.jpg"]
let arry4=["images/main3.webp","images/arr4-1.png","images/arr4-2.webp","images/arr4-3.jpg","images/arr4-4.webp"]
let arry5=["images/main5.jpg","images/arr5-1.jpg","images/arr5-2.jpg","images/arr5-3.jpg","images/arr5-4.jpeg"]
let arry6=["images/main6.webp","images/arr6-1.webp","images/arr6-2.webp","images/arr6-3.jpg","images/arr6-4.jpg"]
let mainImage=document.querySelectorAll('.imge-main');
let layer=document.getElementsByClassName('layer')[0]
let outLayer=document.getElementsByClassName('out-layer')[0]
let right=document.getElementsByClassName('right')[0]
let left=document.getElementsByClassName('left')[0]
let changeImage=document.getElementsByClassName('change-image')[0];
let resize=document.getElementsByClassName('resize')
let testmon=document.getElementById('our-team')
let footer=document.getElementById('contact')
let tem=0
for(let all=0;all<mainImage.length;all++){
    mainImage[all].onclick=function show(){
        layer.style.display='block';
        seconedSection.style.height='200vh';
        header.style.display='none';
        descrpParent.style.display='none';
        layer.style.position='fixed';
        layer.style.zIndex='1000';
        body.style.overflow='hidden';
        testmon.style.display='none'
        footer.style.display='none'
        iconTop.style.display='none';
        if(all==0){
            changeImage.src=arry1[0];
            
        }
        else if(all==1){
            changeImage.src=arry2[0];
            
        }
        else if(all==2){
            changeImage.src=arry3[0];
            
        }
        else if(all==3){
            changeImage.src=arry4[0];
            
        }
        
        else if(all==4){
            changeImage.src=arry5[0];
           
        }
        else if(all==5){
            changeImage.src=arry6[0];
            
        }
        tem=all;
    }
}
// out from layer  function
let i=1
outLayer.onclick=function(){
    layer.style.display='none';
    body.style.overflow='visible';
    location.reload();
}
// right arrow function

left.onclick=function(){
    
    if(i==0){
        i=1
    }
    if(tem==0){
        changeImage.src=arry1[i]
    }
    else if(tem==1){ 
        changeImage.src=arry2[i]
    }
    else if(tem==2){
        changeImage.src=arry3[i]
    }
    else if(tem==3){
        changeImage.src=arry4[i]
    }
    else if(tem==4){
        changeImage.src=arry5[i]
    }
    else if(tem==5){
        changeImage.src=arry6[i]
    }
    i++
    if(i==arry1.length){
        left.style.display='none'
    }
    else{
        left.style.display='block'
    }
    
    rDisplay()
    }

rDisplay()

// left arrow function
function rDisplay(){
    if(i==1){
        right.style.visibility='hidden'
    }
    else{
        right.style.visibility='visible'
    }
}
right.onclick=function(){
    if(i==5){
        i=4
    }
    rDisplay()
    if(tem==0){
        changeImage.src=arry1[--i]
    }
    else if(tem==1){
        changeImage.src=arry2[--i]
    }
    else if(tem==2){
        changeImage.src=arry3[--i]
    }
    else if(tem==3){
        changeImage.src=arry4[--i]
    }
    else if(tem==4){
        changeImage.src=arry5[--i]
    }
    else if(tem==5){
        changeImage.src=arry6[--i]
    }
    
    if(i>=1){
        left.style.display='block'
    }
}
// End of layer images 
let seconedSection=document.getElementById('seconed-section')
let one=document.getElementById('one');
let two=document.getElementById('two');
let fifth=document.getElementById('fifth');
let four=document.getElementById('four')
let three=document.getElementById('three');
let six=document.getElementById('six')
let iconTop=document.getElementById('icon-top')
window.onscroll=function(){
    if(scrollY>360){
        seconedSection.style.overflow='hidden';
        one.classList.add('one-alt');
        two.classList.add('two-alt');
        fifth.classList.add('two-alt')
        three.classList.add('three-alt');
        four.classList.add('four-alt')
        six.classList.add('three-alt')
        iconTop.style.display='block';
        iconTop.onclick=function(){
            scroll({
                top:0,
                behavior:"smooth"
             
            })
        }
    }
   
    else{
        one.classList.remove('one-alt');
        four.classList.remove('four-alt');
        two.classList.remove('two-alt');
        fifth.classList.remove('two-alt')
        three.classList.remove('three-alt')
        six.classList.remove('three-alt')
        iconTop.style.display='none';
    }
    if(scrollY>1200){//1300
        cardOne.classList.add('before-click')
        cardTwo.classList.add('before-click')
        cardFive.classList.add('before-click')
        cardFour.classList.add('before-click')
    }
    else{
        cardOne.style.transform='translateX(-200%)'
        cardTwo.style.transform='translateX(-350%)'
        cardFour.style.transform='translateX(400%)'
        cardFive.style.transform='translateX(350%)'
    }
    if(scrollY>1700){
        person3.classList.add('person3-trans')
        person4.classList.add('person4-trans')
        person5.classList.add('person5-trans')
    }
    else{
        person3.classList.remove('person3-trans')
        person4.classList.remove('person4-trans')
        person5.classList.remove('person5-trans')
    }
    
}
// window.onscroll=function(){

// }
// difination start 
let cardOne=document.getElementById("one-card")
let cardTwo=document.getElementById("two-card")
let cardThree=document.getElementById("three-card")
let cardFour=document.getElementById("four-card")
let cardFive=document.getElementById("five-card")


let iconOne=document.getElementById('icon-one')
let iconTwo=document.getElementById('icon-two')
let iconThree=document.getElementById('icon-three')
let iconFour=document.getElementById('icon-four')
let iconFive=document.getElementById('icon-five')

// let positionGreen=window.getComputedStyle(cardThree ,'::after')



let descrpParent=document.getElementById('main-description')
iconThree.classList.add('active')
iconOne.onclick=function(){
    cardOne.style.zIndex='100';
    cardTwo.style.zIndex='11';
    cardThree.style.zIndex='10';
    cardFour.style.zIndex='9'
    cardFive.style.zIndex='8'
    iconOne.classList.add('active');
    iconThree.classList.remove('active')
    iconTwo.classList.remove('active')
    iconFour.classList.remove('active')
    iconFive.classList.remove('active')
    cardOne.style.transform='translateX(48%)'
    cardTwo.style.transform='translateX(6%)'
    cardThree.style.transform='translateX(-38%)'
    cardFour.style.transform='translateX(15%)';
    cardFive.style.transform='translateX(15%)'
    cardOne.classList.add('after-red')
    cardFive.classList.remove('after-ccc')
    cardFour.classList.remove('after-yellow')
    cardTwo.classList.remove('after-blue')
    cardOne.classList.remove('before-click')
    cardTwo.classList.add('before-click')
    cardFive.classList.add('before-click')
    cardFour.classList.add('before-click')
    cardThree.style.zIndex='0';
    cardThree.style.setProperty('--left3','6%');
    cardOne.style.setProperty('--position-red','35%')
    cardTwo.style.setProperty('--position-blue','-10%')
    cardFour.style.setProperty('--position-yellow','-39px')
    cardFive.style.setProperty('--position-ccc',"85%");
    descrpParent.style.setProperty('--photo','url(images/background1.png)')
    descrpParent.style.background='#6f2424'
    if(screen.width<770){
        cardOne.classList.add('card-one-small');
        cardTwo.classList.remove('card-two-small')
        cardThree.classList.add('card-three-small')
        cardFour.classList.remove('card-four-small')
        cardFive.classList.remove('card-five-small')
    }
}
iconTwo.onclick=function(){
    iconTwo.classList.add('active');
    iconOne.classList.remove('active');
    iconThree.classList.remove('active')
    iconFour.classList.remove('active')
    iconFive.classList.remove('active')
    cardOne.style.zIndex='9'
    cardTwo.style.zIndex='11';
    cardThree.style.zIndex='10';
    cardFour.style.zIndex='9'
    cardFive.style.zIndex='8'
    cardOne.style.transform='translateX(0%)';
    cardTwo.style.transform='translateX(20%)';
    cardThree.style.transform='translateX(-15%)'
    cardFive.style.transform='translateX(15%)'
    cardFour.style.transform='translateX(15%)';
    cardTwo.classList.add('after-blue')
    cardFive.classList.remove('after-ccc')
    cardFour.classList.remove('after-yellow')
    cardOne.classList.remove('after-red')
    cardOne.classList.add('before-click')
    cardTwo.classList.remove('before-click')
    cardFive.classList.add('before-click')
    cardFour.classList.add('before-click')
    cardTwo.style.setProperty('--position-blue','35%')
    cardOne.style.setProperty('--position-red','-10%')
    cardThree.style.setProperty('--left3','6%');
    cardFour.style.setProperty('--position-yellow','-39px')
    cardFive.style.setProperty('--position-ccc',"85%")
    descrpParent.style.setProperty('--photo','url(images/back-blue-alt.png)')
    descrpParent.style.background='#ababff'
    if(screen.width<770){
        cardTwo.classList.add('card-two-small')
        cardOne.classList.remove('card-one-small')
        cardThree.classList.add('card-three-small')
        cardFour.classList.remove('card-four-small')
        cardFive.classList.remove('card-five-small')
    }
}
iconThree.onclick=function(){
    iconThree.classList.add('active');
    iconOne.classList.remove('active')
    iconTwo.classList.remove('active')
    iconFour.classList.remove('active')
    iconFive.classList.remove('active')
    cardOne.style.transform='translateX(-0%)';
    cardTwo.style.transform='translateX(-2%)'
    cardThree.style.transform='translateX(1%)'
    cardFour.style.transform='translateX(5%)';
    cardFive.style.transform='translateX(5%)'
    cardFive.classList.remove('after-ccc')
    cardFour.classList.remove('after-yellow')
    cardTwo.classList.remove('after-blue')
    cardOne.classList.remove('after-red')
    cardOne.classList.add('before-click')
    cardTwo.classList.add('before-click')
    cardFive.classList.add('before-click')
    cardFour.classList.add('before-click')
    cardOne.style.setProperty('--position-red','-10%')
    cardTwo.style.setProperty('--position-blue','-10%')
    cardThree.style.setProperty('--left3',"50%")
    cardFour.style.setProperty('--position-yellow','-39px')
    cardFive.style.setProperty('--position-ccc',"85%")
    cardOne.style.zIndex='10'
    cardTwo.style.zIndex='11';
    cardThree.style.zIndex='12';
    cardFour.style.zIndex='11'
    cardFive.style.zIndex='10'
    descrpParent.style.background='green'
    descrpParent.style.setProperty('--photo','url(images/back-green-alt.png)')
    descrpParent.style.background='#8cbf8c'
    if(screen.width<770){
        cardThree.classList.add('card-three')
        cardThree.classList.remove('card-three-small')
        cardOne.classList.remove('card-one-small')
        cardTwo.classList.remove('card-two-small')
        cardFour.classList.remove('card-four-small')
        cardFive.classList.remove('card-five-small')
    }
}
iconFour.onclick=function(){
    iconFour.classList.add('active');
    iconOne.classList.remove('active')
    iconTwo.classList.remove('active')
    iconThree.classList.remove('active')
    iconFive.classList.remove('active')
    cardFour.style.zIndex='100'
    cardTwo.style.zIndex='10'
    cardOne.style.zIndex='9'
    cardThree.style.zIndex='20'
    cardFive.style.zIndex='10'
    cardOne.style.transform='translateX(-0%)';
    cardTwo.style.transform='translateX(-2%)'
    cardThree.style.transform='translateX(13.5%)';
    cardFour.style.transform='translateX(-14.5%)';
    cardFive.style.transform='translateX(0%)'
    cardFour.classList.add('after-yellow')
    cardTwo.classList.remove('after-blue')
    cardFive.classList.remove('after-ccc')
    cardOne.classList.remove('after-red')
    cardOne.classList.remove('before-click')
    cardTwo.classList.add('before-click')
    cardFive.classList.add('before-click')
    cardFour.classList.remove('before-click')
    cardOne.style.setProperty('--position-red','-10%')
    cardTwo.style.setProperty('--position-blue','-10%')
    cardFour.style.setProperty('--position-yellow','39%')
    cardThree.style.setProperty('--left3',"100%")
    cardFive.style.setProperty('--position-ccc',"85%")
    descrpParent.style.background='yellow'
    descrpParent.style.setProperty('--photo','url(images/back-yellow-alt.png)')
    descrpParent.style.background='#dfdf63'
    if(screen.width<770){
        cardFour.classList.add('card-four-small')
        cardThree.classList.add('card-three-small')
        cardOne.classList.remove('card-one-small')
        cardTwo.classList.remove('card-two-small')
        cardFive.classList.remove('card-five-small')
    }
}
iconFive.onclick=function(){
    iconFive.classList.add('active');
    iconOne.classList.remove('active')
    iconTwo.classList.remove('active')
    iconThree.classList.remove('active')
    iconFour.classList.remove('active')
    cardFive.style.zIndex='100'
    cardFour.style.zIndex='11'
    cardThree.style.zIndex='10'
    cardTwo.style.zIndex='9'
    cardOne.style.zIndex='8'
    cardOne.style.transform='translateX(-0%)';
    cardTwo.style.transform='translateX(-2%)'
    cardThree.style.transform='translateX(42%)';
    cardFive.style.transform='translateX(-38%)'
    cardFive.classList.add('after-ccc')
    cardFour.classList.remove('after-yellow')
    cardTwo.classList.remove('after-blue')
    cardOne.classList.remove('after-red')
    cardOne.classList.add('before-click')
    cardTwo.classList.add('before-click')
    cardFive.classList.remove('before-click')
    cardFour.classList.add('before-click')
    cardFour.style.transform='translateX(5%)';
    cardOne.style.setProperty('--position-red','-10%')
    cardTwo.style.setProperty('--position-blue','-10%')
    cardThree.style.setProperty('--left3',"100%")
    cardFour.style.setProperty('--position-yellow','-39px')
    cardFive.style.setProperty('--position-ccc',"37%")
    descrpParent.style.background='#ccc'
    descrpParent.style.setProperty('--photo','url(images/newgray.png)')
    descrpParent.style.background='rgb(187, 187, 187)'
    if(screen.width<770){
        cardFive.classList.add('card-five-small')
        cardThree.classList.add('card-three-small')
        cardOne.classList.remove('card-one-small')
        cardTwo.classList.remove('card-two-small')
        cardFour.classList.remove('card-four-small')
    }
}
// definaation end











