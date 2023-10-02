
                    //    SWITCH CASE --------------------------------UYGA TOPSHIRIQ

// 1-misol

// let son=prompt("1 va 12 oralig'ida son kiriting");
// switch (+son) {
//     case 1:
//         console.log("Yanvar");
//         break;
//     case 2:
//         console.log("Fevral");
//         break;
//     case 3:
//         console.log("Mart");
//         break; 
//     case 4:
//         console.log("Aprel");
//         break;
//     case 5:
//         console.log("May"); 
//         break;  
//     case 6:
//         console.log("Iyun"); 
//         break;
//     case 7:
//         console.log("Iyul"); 
//         break; 
//     case 8:
//         console.log("Avgust"); 
//         break; 
//     case 9:
//         console.log("Sentabr"); 
//         break; 
//     case 10:
//         console.log("Oktabr"); 
//         break;
//     case 11:
//         console.log("Noyabr");
//         break;
//     case 12:
//         console.log("Dekabr");
//         break;       
//     default:
//         console.log("bu tartibdagi oy mavjud emas");
//         break;
// }


// 2-misol

// loop=true;
// let count=0;

// while (loop) {
//     fruits=+prompt("mahsulot narxlari:\n1. olma-------------1 so'm\n2. uzum-------------2 so'm\n3. anor--------------3 so'm\n4. shaftoli-----------4 so'm\nyuqoridagilardan birini xarid qiling");
//     switch (fruits) {
//         case 1:
//             count=1+count
//             break;
//         case 2:
//             count=count+2;
//             break;
//         case 3:
//             count=count+3;
//             break;
//         case 4:
//             count=count+4;
//             break;
//         default:
//             alert("noto'g'ri kiritdingiz.")
//             break;
//     }
//     let xarid=+prompt("sizning xaridingiz hozircha "+count+" so'm bo'ldi boshqa nimadir xarid qilmoqchimisiz: ' 1 ' ----ha \n' 2 '-----yo'q");
//     if(xarid==1){
//          loop=true;
//     }
//     else{
//         loop=false;
//         console.log("xaridingiz uchun tashakkkur")
//     }  
// }
// console.log("sizning xaridingiz "+count+" sum bo'ldi");

// 3-misol

// let weekDay=+prompt("hafta kunini kiriting ");
// switch (weekDay) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("bu kun dam olish kuni emas");  
//         break;
//     case 6:
//     case 7:
//         console.log("bu kun dam olish kuni");

//     default:
//         console.log("haftada bunday kun mavjud emas");
//         break;
// }

// 4-misol

// let number=+prompt("sonni kiriting: ")
// qoldiq=number%10;
// let t="";
// butun=(number-qoldiq)/10;

// switch (butun) {
//     case 0:
        
//         break;
//     case 1:
//         t="o'n";
//         break;
//     case 2:
//         t="yigirma";
//         break;
//     case 3:
//         t="o'ttiz";
//         break;
//     case 4:
//         t="qirq";
//         break;
//     case 5:
//         t="ellik";
//         break;
//     case 6:
//         t="oltmish";
//         break;
//     case 7:
//         t="yetmish";
//         break;
//     case 8:
//         t="sakson";
//         break;
//     case 9:
//         t="to'qson";
//         break;
//     default:
//         break;
// }
// switch (qoldiq) {
//     case 0:
//         if(t!=0){
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t)}
//         else{
//             console.log("nol");

//         };break;
//     case 1:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" bir");
//         break;
//     case 2:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" ikki");
//         break;
//     case 3:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" uch");
//         break;
//     case 4:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" to'rt");
//         break;
//     case 5:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" besh");
//         break;
//     case 6:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" olti");
//         break;
//     case 7:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" yetti");
//         break;
//     case 8:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" sakkiz");
//         break;
//     case 9:
//         console.log(number+" sonining so'zda ifodalanishi quyidagicha------------ "+t+" to'qqiz");
//         break;
//     default:
//         break;
// }

// 5-misol

// let shakl=prompt("SHAKLNING NOMINI KIRITING");

// switch (shakl) { 
//     case "uchburchak":
//         console.log("uchburchakni yuzini hisoblash formulasi quyidagicha----[ S = 1|2 * ( a * b ) ]");
//         break;
//     case "aylana":
//         console.log("aylananing yuzasini hisoblash quyidagicha-----------[ S = pi * r * r ]");

//     default:
//         break;
// }

// 8-misol

// son1=+prompt("birinchi sonni kiriting");
// son2=+prompt("ikkinchi sonni kiriting");

// let t=prompt(" yig'indi----------' + ' \n ayirma-----------' - '\n ko'paytma-------' * '\n bo'linma---------' / '\nyuqorilardan birini tanlang:")

// switch (t) {
//     case "+":
//         console.log(`${son1} + ${son2} = ${son1+son2}`);
//         break;
//     case "-":
//         console.log(`${son1} - ${son2} = ${son1-son2}`);
//         break;
//     case "*":
//         console.log(`${son1} * ${son2} = ${son1*son2}`);
//         break;
//     case "/":
//         console.log(`${son1} / ${son2} = ${son1/son2}`);
//         break;
//     default:
//         break;
// }

// 9-misol

// let month=+prompt("oy raqamini kiriting");
// let year=+prompt("yilni kiriting");
// if(month>=1 && month<=12)
// {
//     if((year%4==0) && month==2){
//         if (year%100==0) {
//             if (year%400==0) {
//                 console.log("fevralda shu yili 29 kun bo'ladi");
//             }
//             else{
//                 console.log(year+" -yili fevralb oyi 28kun davom etadi");
//             }           
//         }
//         else{
//             console.log("fevralda shu yili 29 kun bo'ladi");
//         }   
//     }
//     else{
//         switch (month) {
//             case 1:
//                 console.log(year+" -yili Yanvar oyi 31 kun davom etadi ");
//                 break;
//             case 2:
//                 console.log(year+" -yili Fevral oyi 28 kun davom etadi ");
//                 break;
//             case 3:
//                 console.log(year+" -yili Mart oyi 31 kun davom etadi ");
//                 break;
//             case 4:
//                 console.log(year+" -yili Aprel oyi 30 kun davom etadi ");
//                 break;
//             case 5:
//                 console.log(year+" -yili May oyi 31 kun davom etadi ");
//                 break;
//             case 6:
//                 console.log(year+" -yili Iyun oyi 30 kun davom etadi ");
//                 break;
//             case 7:
//                 console.log(year+" -yili Iyul oyi 31 kun davom etadi ");
//                 break;
//             case 8:
//                 console.log(year+" -yili Avgust oyi 31 kun davom etadi ");
//                 break;
//             case 9:
//                 console.log(year+" -yili Sentabr oyi 30 kun davom etadi ");
//                 break;
//             case 10:
//                 console.log(year+" -yili Oktabr oyi 31 kun davom etadi ");
//                 break;
//             case 11:
//                 console.log(year+" -yili Noyabr oyi 30 kun davom etadi ");
//                 break;
//             case 12:
//                 console.log(year+" -yili Dekabr oyi 31 kun davom etadi ");
//                 break;

       
//             default:
//                 break;
//         }
//     }
// }
// else{
//     console.log("iltimos oy raqamini to'g'ri kiritib tekshirib ko'ring");
// }

// 10-misol

// let month=+prompt("oyni kiriting");
// let k=0;
// let day=+prompt("kunni kiriting");
// alert("Eslatib o'tamiz bu dastur faqat kabisa bo'lmagan yil uchun keyingi sanani aniqlab beradi");
// if((month<=12 && month>=1) && (day<=31 && day>=1) ){
//     switch (month) {
//         case 1:
//             if(day!=31){
//                 console.log(day+"-yanvardan  dan keyingi sana"+`${day+1} -yanvar`);
//             }
//             else{
//                 console.log(day+"-yanvardan dan keyingi sana 1-fevral");
//             }           
//             break;
//         case 2:
//             if (day>28) {
//                 console.log("fevralda bunday kun yo'q");
                
//             }
//             else if(day!=28){
//                 console.log(day+"-fevraldan  dan keyingi sana"+`${day+1} -fevral`);
//             }
//             else{
//                 console.log(day+"-fevraldan dan keyingi sana 1-mart");
//             }           
//             break;
//         case 3:
//             if(day!=31){
//                 console.log(day+"-martdan  dan keyingi sana"+`${day+1} -mart`);
//             }
//             else{
//                 console.log(day+"-martdan dan keyingi sana 1-aprel");
//             }           
//             break;
//         case 4:
//             if(day==31){
//                 console.log("aprel oyida bunday kun yo'q");
//             }
//             else if(day!=30){
//                 console.log(day+"-apreldan  dan keyingi sana"+`${day+1} -aprel`);
//             }
//             else{
//                 console.log(day+"-apreldan dan keyingi sana 1-may");
//             }           
//             break;
//         case 5:
//             if(day!=31){
//                 console.log(day+"-maydan  dan keyingi sana"+`${day+1} -may`);
//             }
//             else{
//                 console.log(day+"-maydan dan keyingi sana 1-iyun");
//             }           
//             break;
    
//         case 6:
//             if (day==31) {
//                 console.log("iyun oyida bunday kun yo'q");
//             }
//             else if(day!=30){
//                 console.log(day+"-maydan  dan keyingi sana "+`${day+1} -may`);
//             }
//             else{
//                 console.log(day+"-maydan dan keyingi sana 1-iyun");
//             }           
//             break;
//         case 7:
//             if(day!=31){
//                 console.log(day+"-iyuldan  dan keyingi sana"+`${day+1} -iyul`);
//             }
//             else{
//                 console.log(day+"-iyul dan keyingi sana 1-avgust");
//             }           
//             break; 
//         case 8:
//             if(day!=31){
//                 console.log(day+"-avgustdan  dan keyingi sana"+`${day+1} -avgust`);
//             }
//             else{
//                 console.log(day+"-avgustdan dan keyingi sana 1-sentabr");
//             }           
//             break;
//         case 9:
//             if(day!=31){
//                 console.log(day+"-sentabrdan  dan keyingi sana"+`${day+1} -sentabr`);
//             }
//             else{
//                 console.log(day+"-sentabrdan dan keyingi sana 1-oktabr");
//             }           
//             break;
//         case 10:
//             if(day!=31){
//                 console.log(day+"-oktabrdan  dan keyingi sana"+`${day+1} -oktabr`);
//             }
//             else{
//                 console.log(day+"-oktabrdan dan keyingi sana 1-noyabr");
//             }           
//             break;
//         case 11:
//             if (day==31) {
//                     console.log("noyabr oyida bunday kun yo'q");
//                 }
//             if(day!=30){
//                 console.log(day+"-noyabrdan  dan keyingi sana"+`${day+1} -dekabr`);
//             }
//             else{
//                 console.log(day+"-noyabrdan dan keyingi sana 1-dekabr");
//             }           
//             break;
//          case 12:
//                 if(day!=31){
//                     console.log(day+"-dekabrdan  dan keyingi sana"+`${day+1} -dekabr`);
//                 }
//                 else{
//                     console.log(day+"-dekabrdan dan keyingi sana 1-yanvar");
//                 }           
//                 break;
            
//         default:
//             break;
//     }

// }
// else{
//     console.log("sanani to'g'ri kiriting");
// }

////////////////////////////////////////////////////////////////-----------BELGILAR-----------------///////////////////////////////------------ISHLANADI
k="aSDFGHJK";
let t=k.charCodeAt(0);
console.log(t);

