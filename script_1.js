//  FOR----------------------------------------UYGA TOPSHIRIQ

// 1-misol

// for(let i=1; i<10; i++ ){
//     console.log(i);
// }

// 2-misol

// let i=1, s=1;
// let n=prompt("n=");
// while(i<=n){
//     s=s*i;
//     i++;
// }
// console.log(s);

// 3-misol

// let n=prompt("n="), i=2,e=[];
// e[1]=1;
// e[2]=1;
// console.log("1 - had ="+e[1]);
// console.log("2 - had ="+e[2]);
// do {
//     i=i+1;
//     e[i]=e[i-2]+e[i-1];
//     console.log(i+" - had = "+e[i]);
// } while (e[i]<n-e[i-1]);

// 4-misol

// let s=0;
// for(let i=2; i<100; i=i+2){
//     s=s+i;
// }
// console.log(s);

// 6-misol

// loop=true;
// let i=0, k=0;
// while(loop){
//     i=i+1;
//     let s=prompt( i+"- qiymatni kiriting");
//     console.log("siz kiritgan "+i+" -qiymat "+s+" ga teng ");
//     let loopFalse=prompt("qiymat kiritishni to'xtatmoqchi bo'lsangiz ' 0 ' ni kiriting: aks holda ' 1 'ni kiriting");
//     k=k+(+s);
//     if (loopFalse==0) {
//         loop=false;
//     }
//     else{
//         loop=true;
//     }
// }
// console.log( "siz kiritgan sonlarning o'rta arfimetigi "+(+k/i)+" ga teng");

// 7-misol

// for(let i=2; i<100; i++){
//     let t=0;
//     for(let j=1; j<=i; j++){
//         if(i%j==0){
//             t=t+1;
//         }
//     }
//     if(t<=2){
//         console.log(i);
//     }
// }

// ceil floor round

// 8-misol

// loop=false;
// let i=0;
// while(!loop){
//     i=i+1;
//     let komp=Math.floor(Math.random()*100);
//     console.log("siz o'ylagan son "+komp);
//     loop=confirm("siz o'ylagan son shumi?");
// }
// console.log(i+" ta urinishda topildi");

// let min=+prompt("minimal: ");
// let max=+prompt("maximal: ");

// tugatish=false;
// while(!tugatish){
//     let komp=Math.floor(Math.random()*(max-min)+min);
//     console.log("siz o'ylagan son "+komp);
//     tugatish=confirm("siz o'ylgan son shumi");
//     if(tugatish){
//         break;
//     }
//     let a=prompt("'1' men o'ylagan son bundan katta\ '2' men o'ylagan son bundan kichik");
//     if(a==1){
//         min=komp;
//     }
//     else if(a==2){
//         max=komp;
//     }

// }

// let min=prompt("minimal: ");
// let max=prompt("maximal: ");
// let komp=Math.floor(Math.random()*(max-min)+min);
// let count=0;
// let count_komp=1;
// loop=true;
// alert("kompyuter son o'ylaydi siz taxmin qilasiz  ");
// while(loop){
//     biz=+prompt("taxmin qiling : ");
//     count=count+1;
//     if(biz==komp){
//         console.log("tabriklaymiz kompyuter o'ylagan son "+biz+"ga teng edi siz " +count+" ta urinishda  topdingiz");
//         loop=false;
//     }
//     else if(biz>komp){
//         alert("siz o'ylagan son katta ");
//     }
//     else if(biz<komp){
//         alert("siz o'ylagan son kichik");
//     }
// }
// alert("siz son o'ylang uni kompyuter topadi");

// loop1=false;
// while(!loop1){
//     let komp1=Math.floor(Math.random()*(max-min)+min);
//     console.log("komp o'ylagan son"+komp1);
//     loop1=confirm("siz o'ylagan son shumi?")
//     if(loop1){
//         break;
//     }
//     let a=prompt("'1' men o'ylagan son bundan katta\n '2' men o'ylagan son bundan kichik");
//     if(a==1){
//         min=komp1+1;
//     }
//     else if(a==2){
//         max=komp1-1;
//     }
//     count_komp=count_komp+1;
// }
// if(count>count_komp){
//     console.log("siz yutqazdingiz  siz " +count+" ta urinishda topdingiz.  kompyuter esa "+count_komp+" ta urinishda topdi");
// }
// else if(count_komp>count){
//     console.log("siz yutdingiz!!! siz " +count+" ta urinishda topdingiz.  kompyuter esa "+count_komp+" ta urinishda topdi" );
// }
// else if(count==count_komp){
//     console.log("natija durrang");
// }
// let start=new Date();
// for(let i=0; i<=100000; i++){
//     let doSomething=i*i*i*i*i*i;
// }
// let end=new Date()
// console.log(end-start);

//  uyga vazifa . test tizimi.
// k=0;
// test=[
//       savol1= prompt("savol1: O'zbekistonda mustaqillik bayrami qaysi sanada nishonlanadi?  \na) 1-avgust\nb)31-avgust\nc)1-sentabr\nd)2-sentabr").toLowerCase(),
//       savol2=prompt("savol2: 'algoritm' atamasi kim tomonidan fanga kiritilgan?  \na)Beruniy\nb)Xorazmiy\nc)Ibn Sino \nd)Navoiy" ).toLowerCase(),
//       savol3=prompt("savol3: 'Kichkina Shahzoda' asari muallifi kim? \na)Aka-uka Grimmlar\nb)Antuan de Sent Ekzuperi\nc)Den Broun\nd)Xalq og'zaki ijodi").toLowerCase(),
//       savol4=prompt("savol4: 'Raqmli qa'la' asari muallifi kim? \na)Den Broun \nb)Markus Zusak\nc) \nd)").toLowerCase()
// ];
// t=["c", "b", "b", "a"];
// for(let i=0; i<=3; i++){
//     a=test[i];
//     b=a[0];
//     if(b==t[i]){
//         k=k+1
//     }
// }
// console.log(`Siz 4ta savoldan ${k} ta savolga to'g'ri javob berdingiz`);
// console.log(`Siz 4ta savoldan ${4-k} ta savolga noto'g'ri javob berdingiz`);
// new1=prompt("Hurmatli Abiturient siz ham boshqa test savollari kiritmoqchimisiz?  \n1---------ha\n0---------yo'q")
// if(new1){
//     loop=true;
//     i=5;
//     while(loop){
//         zavol=prompt("savolni kiriting va variantlarni ham kiriting. masalan quyidagicha----->\nmen qachon tug'ilganman?\a)2-yilda\nb)3-yil\c)0-yil\nd)bilmayman");
//         i++;
//         k=prompt("Yana savol kiritmoqchimisiz? \nha-------1\nyo'q-------0");
//         if(k==0){
//             loop=false
//         }

//     }
// }
// savollar=prompt("Hurmatli abiturient siz ham savol bermoqchimisiz? \n1--------ha \n0------yo'q");
// if(savollar==1){
//     alert("savolni kiriting. Esingizda bo'lsin har bitta variantni kiritish majburiy");
//     i=5;
//     loop=true;
//     while(loop){
//        savol=prompt("savolni kiriting") ;

//        i=""

//     }

// }

// boshqacha usuli


// javob = ["c", "b", "b", "c"];
// test = [
//   {
//     savol: "O'zbekistonda mustaqillik bayrami qaysi sanada nishonlanadi?",
//     varianta: "1-avgust",
//     variantb: "31-avgust",
//     variantc: "1-sentabr",
//     variantd: "2-sentabr",
//   },
//   {
//     savol: "'algoritm' atamasi kim tomonidan fanga kiritilgan? ",
//     varianta: "Beruniy",
//     variantb: "Xorazmiy",
//     variantc: "Farobiy",
//     variantd: "Ibn Sino",
//   },
//   {
//     savol: "'Kichkina Shahzoda' asari muallifi kim?",
//     varianta: "Aka uka Grimmlar",
//     variantb: "Ekzyuperi",
//     variantc: "Paelo Kaelo",
//     variantc: "Rey Bredberi",
//   },
//   {
//     savol: "'Raqmli qa'la' asari muallifi kim? ",
//     varianta: "Mitch Elbom",
//     variantb: "Markus Zusak",
//     variantc: "Den Braun",
//     variantd: "Rey Bredberi",
//   },
// ];
// loopgeneral=true;
// while (loopgeneral) {
//   who = prompt(
//     "siz kimsiz? \n1-------abiturient\n2-------o'qituvchi\n0--------chiqish"
//   );
//   summa = 0;

//   if (who == 1) {
//     let now = new Date();

//     for (let i = 0; i <test.length; i++) {
//       t = `${JSON.stringify(test[i].savol)}\na) ${JSON.stringify(
//         test[i].varianta
//       )}\nb) ${JSON.stringify(test[i].variantb)}\nc) ${JSON.stringify(
//         test[i].variantc
//       )}\nd) ${JSON.stringify(test[i].variantd)}`;
//       d = prompt(t);
//       if (d == "quit") {
//         i = test.length-1;
//       }
//       if (javob[i] == d[0].toLowerCase()) {
//         summa = summa + 1;
//       }
//     }
//     if (summa != 0 && summa != test.length) {
//       console.log(
//         `Sizga berilgan ${test.length} savolning ${summa}tasiga javob berdingiz `
//       );
//       console.log(
//         `Sizga berilgan ${test.length} ta savoldan ${
//           test.length - summa
//         } savolga javob topa olmadingiz `
//       );
//     }
//     if (summa == test.length) {
//       console.log("Tabriklaymiz siz barcha savolga to'g'ri javob berdingiz!!!");
//     }
//     if (summa == 0) {
//       console.log(
//         "Afsuski siz hech qaysi savolga javob topa olmadingiz. Tushkunlikka tushmang hali hayot oldinda"
//       );
//     }
//     let now1 = new Date();

//     alert(`test davomiyligi  ${(now1-now)/1000} sekund` );
//   }
//   if (who == 2) {
//     loop1=1;
//     loop12=true;
//     while(loop12){
//         parol = prompt("parolni kiriting");
//         if(loop1==3){
//             loopgeneral=false;
//             break
//         }
//         if (parol == "men") {
//         s = 0;
//         loop = true;
//         while (loop) {
//             savol1 = prompt("savolni kiriting");
//             var1 = prompt("1-variant kiriting");
//             var2 = prompt("2-variantni kiriring");
//             var3 = prompt("3-variantni kiriting");
//             var4 = prompt("4-variantni kiriting");
//             question = prompt(
//             `Siz tuzgan savol ${savol1}\na)${var1}\nb)${var2}\nc)${var3}\nd)${var4}\nendi to'gri javobni belgilang`
//             );
//             test.push({
//             savol: savol1,
//             varianta: var1,
//             variantb: var2,
//             variantc: var3,
//             variantd: var4,
//             });
//             javob.push(question[0]);
//             you = prompt(
//             "yana savol kiritmoqchimisiz?\n1--------ha\n0-------yo'q"
//             );
//             if (you == 0) {
//             loop = false;
           
//             }
//         }
//         tahrir=true;
//         while(tahrir){
//             edit=prompt(`Siz birorta savolga o'zgartirish kiritmoqchimisiz?\nha--------1\nyo'q------0`);
//             if(edit==0){
//                 tahrir=false;
//             }
//             tahrir1="";
//             if(edit==1){
//                 for(let k=0; k<test.length; k++){
//                    tahrir1=`${JSON.stringify(tahrir1)}\n+${JSON.stringify(test[k])}`;
//                 }
//                 console.log(tahrir1);
//             }
//         }
//         loop12=false;
//         } 
//         if(parol!="men" && loop1!=3){
//             alert(`Parolni xato kiritdingiz Bu sizning ${loop1}-urinishingiz. ogohlantiramiz parolni 3 marta xato kiritsangiz dasturdan chiqib ketasiz`)
//         }  
//         loop1=loop1+1;   
//     }
//   }
//   if(who==0){
//     break;
//   }
// }

function edit(a){
    a=[
        {kalit: "value"},
        {aql: "idrok"}
    ]
    for(let i=0; i<=1; i++){
        prompt(a[i]);
    }
}
edit()