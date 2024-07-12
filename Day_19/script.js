window.onload=function() {

    let strNewspaper='___최근_2시즌_동안_조재호는_PBA_대상을_휩쓸었다._특히_2022-2023시즌은_투어의_시작과_끝을_화려하게_장식했다._조재호는_정규_투어_개막전과_최종전에_왕중왕전까지_석권하며_처음_제정된_PBA_대상_시상식에서_남자부_대상을_받았다.'
    let idx=strNewspaper.indexOf('다',0);
    let idx2=strNewspaper.indexOf('다',idx+1);
    let idx3=strNewspaper.indexOf('다',idx2+1);
    let idx4=strNewspaper.indexOf('다',idx3+1);

    console.log("------");
    console.log(idx);
    console.log(idx2);
    console.log(idx3);
    console.log(idx4);
    
    

    let tempStr=strNewspaper.slice(idx-2,idx+3);
    console.log(tempStr);
    console.log(strNewspaper);
}