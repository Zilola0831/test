//    BUTUN SONLARGA OID MASALALAR--------------------UYGA TOPSHIRIQ
// 1-misol

// let son1, son2, son3;
// son1=prompt(son1);
// son2=prompt(son2);
// son3=prompt(son3);
// console.log("arifmetik="+(+son1+(+son2)+(+son3))/3);

// 2-misol

// let son21, son22;
// son21=prompt(son21);
// son22=prompt(son22);
// console.log(+(son22**2)+(+(son21**2)));

// 3-misol

// let uzunlik, yuza, radius, pi=3.14;
// uzunlik=prompt(uzunlik);
// radius=uzunlik/(2*pi);
// yuza=pi*radius**2;
// console.log("yuza="+yuza);
// console.log("radius="+radius);

// 4-misol

// let yuza4, D, R , pi=3.14;
// yuza4=prompt(yuza4);
// R=(yuza4/pi)**(1/2);
// D=  R*2;
// console.log("radius4="+R);
// console.log("diametr"+D);

// 5-misol

// let bayt, kilobayt;
// bayt=prompt(bayt);
// kilobayt=(bayt-(bayt%1024))/1024;
// console.log(bayt+ " bayt "+kilobayt + " kilobayt "+bayt%1024+" baytga teng");

// 6-misol

// let kesma1, kesma2;
// kesma1=prompt(kesma1);
// kesma2=prompt(kesma2);
// console.log(kesma1+"smli kesmaga "+kesma2+"smli kesmadan " + (kesma1-(kesma1%kesma2))/kesma2+" ta joylashtirish mumkin");

// 7-misol

// let son7, butun , qoldiq;
// son7=prompt(son7);
// qoldiq=(son7%10)**2;
// butun=((son7-(son7%10))/10)**2;
// console.log(son7 +"ning raqamlari kvadratlari yig'indisi "+((+qoldiq)+(+butun))) ;

// 8-misol

// let son8;
// son8=prompt("ikki xonali son kiriting: ");
// console.log(son8+" sonining raqmlari o'rnini almashtirishdan hosil bo'lgan son " +((+((son8%10)*10))+(+((son8-(son8%10))/10))));

// 9-misol

// let son9;
// son9=prompt("3 xonali son kiriting: ");
// console.log(son9+" sonining yuzlar xonasidagi raqami "+ (+((son9-(son9%100))/100)))+" ga teng";

// 10-misol

// let son10;
// son10=prompt("3 xonali son kiriting");
// console.log(son10+" ning raqmlari yig'indisi " +(+(son10%10)+((son10-(son10%100))/100)+((son10%100-(son10%10))/10)));

// 11-misol

// let son11;
// son11=prompt("3 xonali son kiriting");
//console.log(son11+" sonining raqamlari teskari yozilishdan hosil bo'lgan son " +(+((son11%10)*100)+((son11-(son11%100))/100)+((son11%100-(son11%10)))));

// 12-misol

// let son12;//324-->>>---243
// son12=prompt("3 xonali son kiriting; masala shartiga ko'ra chap tomondagi raqam o'chirilib o'ng tomonga yozilishi kerak");
// console.log("hosil bo'lgan son "+(+((son12%100)*10+((son12-(son12%100))/100))));

// 13-misol

// let son13;//457----745
// son13=prompt("3 xonali son kiriting");
// console.log(+((son13-(son13%10))/10)+((son13%10)*100));

//17-misol

// let sekund;
// sekund=prompt("kun boshidan boshlab necha sekund o'tganini kiriting");
// console.log("to'liq "+ ((sekund-(sekund%60))/60)+" minut o'tgan");

// 18-misol

// let sekund18;
// sekund18=prompt("kun boshidan boshlab hisoblanganda necha sekund o'tganini kiriting");
// console.log(((sekund18-(sekund18%3600))/3600)+":"+(((sekund18%3600)-((sekund18%3600)%60))/60)+":"+sekund18%60);

// 14-misol

// let son14;//123-----213
// son14=prompt("3 xonali son kiriting");
// console.log((+(son14%10)+((son14-(son14%100))/10)+(((son14%100)-(son14%10))*10)));

// 15-misol

// let a; //1234--------4321
// a=prompt("4 xonali son kiriting");
// console.log(+(((a%10)*1000)+(((a%100)-(a%10))*10)+(((a%1000)-(a%100))/10)+((a-(a%1000))/1000)));

test = [
  {
    savol: "O'zbekistonda mustaqillik bayrami qaysi sanada nishonlanadi?",
    javoblar: ["1-avgust", "31-avgust", "1-sentabr", "2-sentabr"],
    answer: "1-sentabr",
  },
  {
    savol: "'algoritm' atamasi kim tomonidan fanga kiritilgan? ",
    javoblar: ["Beruniy", "Xorazmiy", "Farobiy", "Ibn Sino"],
    answer: "Xorazmiy",
  },
  {
    savol: "'Kichkina Shahzoda' asari muallifi kim?",
    javoblar: ["Aka uka Grimmlar", "Ekzyuperi", "Paelo Kaelo", "Rey Bredberi"],
    answer: "Ekzyuperi",
  },
  {
    savol: "'Raqmli qa'la' asari muallifi kim? ",
    javoblar: ["Mitch Elbom", "Markus Zusak", "Den Braun", "Rey Bredberi"],
    answer: "Den Braun",
  },
];

loopgeneral = true;
while (loopgeneral) {
  who = prompt(
    "SIZ KIMSIZ?\n1---------ABITURIENT\n2---------O'QITUVCHI\n0------------chiqish"
  );
  t = 0;
  switch (who) {
    case "1":
      alert("TEST BOSHLANDI");
      let now = new Date();
      r1 = Math.floor(Math.random() * test.length);
      r2 = Math.floor(Math.random() * 4);
      for (let i = 0; i < test.length; i++) {
        savol1 = test.at(i - r1);
        a = savol1.javoblar.at(0 - r2);
        b = savol1.javoblar.at(1 - r2);
        c = savol1.javoblar.at(2 - r2);
        d = savol1.javoblar.at(3 - r2);
        question = prompt(`${i+1}-savol\n${savol1.savol}\na) ${a}\nb) ${b}\nc) ${c}\nd) ${d}`
        ).toLowerCase();

        variantIndex = question.charCodeAt(0);
        // console.log(savol1.javoblar.at(variantIndex - 97 - r2));
        if (savol1.javoblar.at(variantIndex - 97 - r2) == savol1.answer) {
          t = t + 1;
        }
      }
      let end =new Date();
      alert(
        `Siz ${test.length} ta savoldan ${t}tasiga javob berdingiz va ${
          test.length - t
        } tasiga javob berolmadingiz\nJami ball: ${t}\nTest davomiyligi ${(end-now)/1000} sekund`
      );
      break;
     case "2":
      parolloop = true;
      parollar_soni = 0;
      while (parolloop) {
        parol = prompt("PAROLNI KIRITING");
        if (parol == "men") {
          yangi_savol=true;
          while(yangi_savol){
          savol_kiritish = prompt(
            "Savol kiritishni istaysizmi? \n1---------ha\n0------yo'q"
          );
          if (savol_kiritish == 1) {
            new_question = {
              savol: (s = prompt("savolni kiriting")),
              javoblar: [
                (a1 = prompt("variant kiriting")),
                (b1 = prompt("variantni kiriting")),
                (c1 = prompt("variantni kiriting")),
                (d1 = prompt("variantni kiriting")),
              ],
              // answer: answer1=prompt(`SIZNINNG SAVOLINGIZ \n${s}\na) ${a1}\nb) ${b1}\nc) ${c1}\nd) ${d1}\ntog'ri javobni belgilang`)
            };
            loop2 = true;
            while (loop2) {
              answer1 = prompt(
                `SIZNINNG SAVOLINGIZ \n${s}\na) ${a1}\nb) ${b1}\nc) ${c1}\nd) ${d1}\ntog'ri javobni belgilang`
              );
              new_question.answer = answer1;
              if (answer1[0].toLowerCase() == "a") {
                new_question.answer = a1;
                loop2 = false;
              }
              if (answer1[0].toLowerCase() == "b") {
                new_question.answer = b1;
                loop2 = false;
              }
              if (answer1[0].toLowerCase() == "c") {
                new_question.answer = c1;
                loop2 = false;
              }
              if (answer1[0].toLowerCase() == "d") {
                new_question.answer = d1;
                loop2 = false;
              } else {
                alert(
                  "variant javoblari faqat 'a' , 'b' , 'c', 'd' lardan bittasi bo'lishi kerak. Iltimos variantni to'g'ri kiriting"
                );
              }
            }
            test.push(new_question);
          }
          if (savol_kiritish == 0) {
            parolloop = false;
            break;
          }
        }
        } else {
          parollar_soni = parollar_soni + 1;
          if (parollar_soni < 3) {
            alert(
              "KECHIRASIZ PAROLNI XATO KIRITDINGIZ. QAYTADAN URINIB KO'RING. URINISHLAR SONI 3 TADAN OSHIB KETSA TIZIM SIZNI BLOKLAYDI"
            );
          }
          if (parollar_soni >= 3) {
            alert(
              "PAROLNI 3 MARTA XATO KIRITGANLIGINGIZ UCHUN TIZIM SIZNI BLOKLADI"
            );
            loopgeneral = false;
            break;
          }
        }
      }
      break;

    case "0":
      loopgeneral = false;
      break;
  }
}
